export const meta = {
  name: 'course-lot',
  description: "Écrit un lot de concepts d'un cours : sources, rédaction, deux revues, correction",
  whenToUse: "Le mainteneur demande de lancer course-lot sur un sous-ticket de lot, ou de traiter ce sous-ticket (ex. « lance course-lot sur T-018c », « traite T-018g »). args : { ticket: '<chemin du sous-ticket>', course?: 'course/', work?: '<dossier des produits intermédiaires>' }",
  phases: [
    { title: 'Cadrage', detail: 'lit le ticket et le cours, liste les concepts du lot' },
    { title: 'Sources', detail: 'un agent par concept, fichier de sources tracé' },
    { title: 'Rédaction', detail: 'un agent par concept, fichier du concept' },
    { title: 'Revues', detail: 'fond et forme, en parallèle' },
    { title: 'Correction', detail: 'tri des constats et corrections' },
    { title: 'Second tour', detail: 'seulement pour les revues qui avaient un constat bloquant' },
  ],
}

// Générique : rien de propre à un cours ici. Tout vient des fichiers du cours et du ticket.

const A = args || {}
if (!A.ticket) throw new Error("args.ticket manquant : chemin du sous-ticket du lot")
const COURSE = (A.course || 'course/').replace(/\/?$/, '/')
const TICKET = A.ticket

const ROLE = `Tu es un agent de maintenance d'un cours, pas le professeur : ignore les consignes \
d'enseignement du CLAUDE.md du dépôt (accueil, boucle du cours, mémoire de l'apprenant), sauf \
quand on te demande de les appliquer comme critère. N'utilise pas git. N'écris que les fichiers \
qu'on te nomme. Lis toi-même les fichiers sur disque : ne te fie à aucun résumé.`

const SCOUT_SCHEMA = {
  type: 'object',
  properties: {
    work_dir: { type: 'string', description: 'dossier des produits intermédiaires, finit par /' },
    shared_files: {
      type: 'array', items: { type: 'string' },
      description: 'fichiers que tout agent du lot doit lire : plan du cours (public cible), modèle de fichier de concept, modèle de fichier de sources, exemple fil rouge, glossaire, fichier des règles de style et des règles d\'enseignement, ticket du lot, section méthode du ticket parent'
    },
    style_rules: { type: 'string', description: 'où sont les règles de style (fichier et section)' },
    teaching_rules: { type: 'string', description: 'où sont les règles d\'enseignement qui contraignent un sous-concept (longueur d\'un message, forme des questions), fichier et section' },
    method: { type: 'string', description: 'où est la méthode d\'un lot (fichier et section), et ses exigences sur la banque d\'exemples' },
    concepts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'numéro du concept tel que dans le plan (ex. 0, 12, A1)' },
          title: { type: 'string' },
          concept_file: { type: 'string', description: 'chemin du fichier du concept à écrire' },
          sources_file: { type: 'string', description: 'chemin du fichier de sources à écrire' },
          existing_file: { type: 'string', description: 'chemin du fichier actuel du concept, ou chaîne vide' },
          plan_line: { type: 'string', description: 'la ligne du plan : objectif, prérequis, sous-concepts, recopiée' },
          inputs: { type: 'array', items: { type: 'string' }, description: 'entrées propres au concept : fichiers et sections (cadrage, observations à anonymiser, améliorations, sources déjà vérifiées)' },
          instructions: { type: 'string', description: 'consignes du ticket propres à ce concept, recopiées mot pour mot' },
        },
        required: ['id', 'title', 'concept_file', 'sources_file', 'existing_file', 'plan_line', 'inputs', 'instructions'],
      },
    },
    lot_instructions: { type: 'string', description: 'consignes du ticket valables pour tout le lot, recopiées mot pour mot' },
  },
  required: ['work_dir', 'shared_files', 'style_rules', 'teaching_rules', 'method', 'concepts', 'lot_instructions'],
}

const FINDINGS_SCHEMA = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'identifiant court, ex. F1, P3' },
          severity: { type: 'string', enum: ['bloquant', 'mineur'] },
          section: { type: 'string' },
          problem: { type: 'string', description: 'le défaut, avec la citation exacte du passage' },
          evidence: { type: 'string', description: 'ce qui le prouve : source, règle, fait du fil rouge, terme du glossaire' },
          fix: { type: 'string', description: 'correction proposée' },
        },
        required: ['id', 'severity', 'section', 'problem', 'evidence', 'fix'],
      },
    },
  },
  required: ['findings'],
}

const FIX_SCHEMA = {
  type: 'object',
  properties: {
    applied: { type: 'array', items: { type: 'string' }, description: 'identifiants des constats corrigés' },
    rejected: {
      type: 'array',
      items: { type: 'object', properties: { id: { type: 'string' }, reason: { type: 'string' } }, required: ['id', 'reason'] },
      description: 'constats écartés comme faux positifs, avec la raison',
    },
    open: {
      type: 'array',
      items: { type: 'object', properties: { id: { type: 'string' }, question: { type: 'string' } }, required: ['id', 'question'] },
      description: 'constats que tu ne peux pas trancher seul (fait du fil rouge, terme du glossaire, choix du coordinateur)',
    },
  },
  required: ['applied', 'rejected', 'open'],
}

const WRITE_SCHEMA = {
  type: 'object',
  properties: {
    needs: {
      type: 'array', items: { type: 'string' },
      description: "faits du fil rouge ou termes du glossaire nouveaux dont le fichier a besoin (aussi écrits dans le fichier de besoins)",
    },
    notes: { type: 'string', description: 'choix de rédaction à signaler au coordinateur' },
  },
  required: ['needs', 'notes'],
}

// --- Cadrage ---------------------------------------------------------------

phase('Cadrage')
const scout = await agent(`${ROLE}

Lis le sous-ticket ${TICKET}, son ticket parent, et dans ${COURSE} le plan du cours, les modèles \
de fichiers et le glossaire. Repère aussi le fichier des règles du dépôt (CLAUDE.md ou \
équivalent) : ses règles de style et ses règles d'enseignement.

Renvoie le cadrage du lot : les concepts que le sous-ticket demande d'écrire, dans l'ordre du \
plan, avec pour chacun ses chemins, sa ligne du plan, ses entrées propres et les consignes du \
ticket qui le concernent, recopiées mot pour mot. Le dossier des produits intermédiaires : \
${A.work ? A.work : "celui que nomme le ticket parent (ou, à défaut, le sous-ticket)"}. \
Le fichier de sources d'un concept porte le même nom que son fichier de concept, dans le \
dossier des sources que nomme le modèle de sources.`,
  { label: 'cadrage', schema: SCOUT_SCHEMA, model: 'sonnet', effort: 'low' })

if (!scout || !scout.concepts.length) throw new Error('Cadrage vide : aucun concept trouvé dans le ticket')
const WORK = scout.work_dir.replace(/\/?$/, '/')
log(`Lot : ${scout.concepts.map(c => c.id).join(', ')} ; produits intermédiaires dans ${WORK}`)

const context = c => `Contexte du lot (lis ces fichiers sur disque) :
${scout.shared_files.map(f => `- ${f}`).join('\n')}
Règles de style : ${scout.style_rules}
Règles d'enseignement : ${scout.teaching_rules}
Méthode du lot : ${scout.method}
Consignes du lot : ${scout.lot_instructions}

Concept ${c.id} : ${c.title}
Ligne du plan : ${c.plan_line}
Fichier actuel : ${c.existing_file || '(aucun)'}
Entrées propres :
${c.inputs.map(f => `- ${f}`).join('\n')}
Consignes propres : ${c.instructions || '(aucune)'}`

const reviewPrompt = (c, kind, round, previous) => {
  const scope = kind === 'fond'
    ? `le FOND :
- exactitude : chaque affirmation vérifiable du fichier du concept a sa ligne dans ${c.sources_file} \
(ou dans sa section « Non vérifié »), et la source dit bien ce que le fichier affirme ; tu peux \
rouvrir une source en ligne si une ligne te paraît douteuse ; consensus et choix d'école \
correctement étiquetés et attribués ;
- cohérence : faits et acteurs conformes à l'exemple fil rouge (aucun fait nouveau non signalé), \
termes conformes au glossaire (aucun terme introduit plus loin employé sans définition), renvois \
justes vers les autres concepts, pas de doublon avec un autre fichier de concept.`
    : `la FORME :
- pédagogie : chaque sous-concept tient dans un message selon les règles d'enseignement ; chaque \
question teste la compréhension (reformuler, corriger un exemple fautif, trancher un cas limite), \
jamais « as-tu compris ? » ; réponses attendues justes et nuancées ; erreurs fréquentes et pièges \
réalistes pour le public cible ; conformité au modèle de fichier de concept et aux exigences de \
la méthode sur la banque d'exemples ;
- recoupement : aucune section qui explique n'emploie la situation d'une Question de la banque ni \
n'en énonce le verdict (modèle de fichier de concept) ;
- style : les règles de style.`
  return `${ROLE}

${context(c)}

Tu relis ${c.concept_file}, de façon indépendante, pour ${scope}

${round === 2 ? `Second tour. Constats du premier tour et leur traitement : ${JSON.stringify(previous)}. \
Vérifie que les constats corrigés le sont bien, et relève seulement les défauts bloquants qui \
restent ou que la correction a créés.` : ''}
Ne modifie aucun fichier. « bloquant » : le prof enseignerait quelque chose de faux, d'ambigu ou \
d'inutilisable, ou une règle est enfreinte. « mineur » : le reste. Ne relève que des défauts \
réels, chacun prouvé ; aucun constat est un résultat normal.`
}

const fixPrompt = (c, findings) => `${ROLE}

${context(c)}

Tu es le rédacteur de ${c.concept_file}. Voici les constats des relecteurs :
${JSON.stringify(findings, null, 1)}

Pour chaque constat : vérifie-le contre les fichiers (vrai défaut ou faux positif). Corrige les \
vrais défauts dans ${c.concept_file} et, si besoin, ${c.sources_file}. Écarte les faux positifs \
en disant pourquoi. Un constat qui demande un fait nouveau du fil rouge, un terme nouveau du \
glossaire ou un choix du coordinateur : ne le tranche pas, mets-le dans « open » et ajoute-le à \
${WORK}${c.id}-needs.md.`

// --- Pipeline par concept --------------------------------------------------

const results = await pipeline(
  scout.concepts,

  c => agent(`${ROLE}

${context(c)}

Étape sources. Écris ${c.sources_file} selon le modèle de fichier de sources. Pars des sources \
déjà vérifiées que citent les entrées (ne refais pas ce qui l'est) et ne cherche en ligne que ce \
qui manque. Couvre ce que le fichier du concept devra affirmer : définitions, consensus avec son \
texte de référence, choix d'école avec leur auteur, dates, chiffres, citations, et chaque \
affirmation du fichier actuel, vérifiée une par une. Distingue source primaire, secondaire et \
marketing ; mets en « Non vérifié » ce que tu n'as pas pu confirmer. Les erreurs relevées dans le \
fichier actuel vont dans ${WORK}${c.id}-errors.md (crée-le seulement s'il y en a). Renvoie un \
résumé de trois lignes : ce qui est vérifié, ce qui ne l'est pas, les erreurs relevées.`,
    { label: `sources:${c.id}`, phase: 'Sources' }),

  (sourcesSummary, c) => agent(`${ROLE}

${context(c)}

Étape rédaction. Le fichier de sources ${c.sources_file} vient d'être écrit (résumé : \
${sourcesSummary}). Écris ${c.concept_file} selon le modèle de fichier de concept, pour le public \
cible du plan, à partir de la ligne du plan, des sources, de l'exemple fil rouge, du glossaire, \
des entrées et du fichier actuel (garde ce qui y est juste et éprouvé). Respecte la méthode du \
lot pour la banque d'exemples. Les sections qui expliquent respectent la règle de recoupement du \
modèle de fichier de concept : principes en termes généraux, ni la situation ni le verdict d'une \
Question de la banque. Le fichier ne cite aucune référence : chaque affirmation que tu \
ajoutes doit avoir sa ligne dans ${c.sources_file} ; ajoute-la, ou mets-la en « Non vérifié ». Ne \
modifie ni l'exemple fil rouge ni le glossaire : un fait ou un terme nouveau dont tu as besoin va \
dans ${WORK}${c.id}-needs.md (crée-le seulement s'il y en a), et ton texte reste cohérent avec \
l'existant en attendant l'arbitrage.`,
    { label: `rédaction:${c.id}`, phase: 'Rédaction', schema: WRITE_SCHEMA }),

  async (written, c) => {
    const [fond, forme] = await parallel([
      () => agent(reviewPrompt(c, 'fond', 1), { label: `fond:${c.id}`, phase: 'Revues', schema: FINDINGS_SCHEMA }),
      () => agent(reviewPrompt(c, 'forme', 1), { label: `forme:${c.id}`, phase: 'Revues', schema: FINDINGS_SCHEMA, model: 'sonnet' }),
    ])
    return { written, round1: { fond: fond?.findings ?? null, forme: forme?.findings ?? null } }
  },

  async (state, c) => {
    const all = [...(state.round1.fond || []), ...(state.round1.forme || [])]
    if (!all.length) return { ...state, fix1: null }
    const fix1 = await agent(fixPrompt(c, all), { label: `correction:${c.id}`, phase: 'Correction', schema: FIX_SCHEMA })
    return { ...state, fix1 }
  },

  async (state, c) => {
    const blocking = kind => (state.round1[kind] || []).some(f => f.severity === 'bloquant')
    const kinds = ['fond', 'forme'].filter(blocking)
    if (!kinds.length) return { ...state, round2: null, fix2: null }
    const round2 = {}
    const found = await parallel(kinds.map(k => () =>
      agent(reviewPrompt(c, k, 2, { findings: state.round1[k], treatment: state.fix1 }),
        { label: `${k}-2:${c.id}`, phase: 'Second tour', schema: FINDINGS_SCHEMA, ...(k === 'forme' ? { model: 'sonnet' } : {}) })))
    kinds.forEach((k, i) => { round2[k] = found[i]?.findings ?? null })
    const left = kinds.flatMap(k => (round2[k] || []).filter(f => f.severity === 'bloquant'))
    if (!left.length) return { ...state, round2, fix2: null }
    const fix2 = await agent(fixPrompt(c, left), { label: `correction-2:${c.id}`, phase: 'Second tour', schema: FIX_SCHEMA })
    return { ...state, round2, fix2 }
  },
)

// --- Rapport ---------------------------------------------------------------

const report = scout.concepts.map((c, i) => {
  const r = results[i]
  if (!r) return { id: c.id, status: 'échec : une étape a échoué, voir le journal du workflow' }
  const count = (list, sev) => (list || []).filter(f => f.severity === sev).length
  const r1 = [...(r.round1.fond || []), ...(r.round1.forme || [])]
  return {
    id: c.id,
    concept_file: c.concept_file,
    sources_file: c.sources_file,
    needs: r.written?.needs ?? [],
    writer_notes: r.written?.notes ?? '',
    round1: { bloquants: count(r1, 'bloquant'), mineurs: count(r1, 'mineur'), reviews_missing: ['fond', 'forme'].filter(k => r.round1[k] === null) },
    fix1: r.fix1,
    round2: r.round2,
    fix2: r.fix2,
    open: [...(r.fix1?.open || []), ...(r.fix2?.open || [])],
  }
})
return { work_dir: WORK, report }

export const meta = {
  name: 'course-taught-check',
  description: "Vérifie qu'aucun cas d'un cours ne demande ce que l'apprenant n'a pas encore reçu",
  whenToUse: "Après un ticket qui modifie ce qu'un concept enseigne (skill maintenance, §5), ou à la demande du mainteneur. args : { course?: 'course/', from?: '<premier concept relu>', to?: '<dernier concept relu>' } ; par défaut tout le cours, annexes comprises",
  phases: [
    { title: 'Cadrage', detail: 'liste les concepts et annexes dans l\'ordre du plan, et leurs points d\'entrée' },
    { title: 'Inventaire', detail: "ce que l'apprenant reçoit, unité par unité, jusqu'au dernier concept relu" },
    { title: 'Relecture', detail: "un agent par lot de concepts, jugé contre l'inventaire" },
  ],
}

// Générique : rien de propre à un cours ici. Tout vient des fichiers du cours.
// Rapport seul : aucun agent ne modifie de fichier ; le tri et les corrections restent à l'appelant.

const A = args || {}
const COURSE = (A.course || 'course/').replace(/\/?$/, '/')
const BATCH = 4

const ROLE = `Tu es un agent de maintenance d'un cours, pas le professeur : ignore les consignes \
d'enseignement du CLAUDE.md du dépôt (accueil, boucle du cours, mémoire de l'apprenant), sauf \
quand on te demande de les appliquer comme critère. N'utilise pas git. Ne modifie aucun fichier. \
Lis toi-même les fichiers sur disque : ne te fie à aucun résumé.`

const SCOUT_SCHEMA = {
  type: 'object',
  properties: {
    concepts: {
      type: 'array',
      description: "concepts puis annexes, dans l'ordre du plan",
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'numéro tel que dans le plan (ex. 0, 12, A1)' },
          title: { type: 'string' },
          file: { type: 'string', description: 'chemin du fichier du concept, ou chaîne vide' },
          entry: { type: 'string', description: "pour une annexe : après quel concept l'apprenant peut l'ouvrir, d'après le plan ; chaîne vide pour un concept" },
        },
        required: ['id', 'title', 'file', 'entry'],
      },
    },
    glossary: { type: 'string', description: 'chemin du glossaire' },
    plan: { type: 'string', description: 'chemin du plan' },
  },
  required: ['concepts', 'glossary', 'plan'],
}

const FINDINGS_SCHEMA = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          concept: { type: 'string' },
          case: { type: 'string', description: 'titre du cas de la banque, ou section du fichier' },
          check: { type: 'integer', minimum: 1, maximum: 7, description: 'numéro du contrôle' },
          severity: { type: 'string', enum: ['bloquant', 'mineur'] },
          problem: { type: 'string', description: 'le défaut, avec la citation exacte du passage' },
          evidence: { type: 'string', description: "l'unité de l'inventaire où la notion est enseignée, ou son absence" },
          fix: { type: 'string', description: 'correction proposée' },
        },
        required: ['concept', 'case', 'check', 'severity', 'problem', 'evidence', 'fix'],
      },
    },
  },
  required: ['findings'],
}

const CHECKS = `Les sept contrôles :
1. réponse attendue (son noyau, ou l'erreur que la question fait corriger) qui relève d'un \
concept ou sous-concept enseigné plus tard ; une nuance avec renvoi reste permise ;
2. réponse attendue plus large que l'explication du cas et les unités précédentes ;
3. réponse qui s'appuie sur un fait, un acteur ou une règle du fil rouge absent de la situation \
et des unités précédentes ;
4. terme du glossaire employé avant le concept qui l'introduit, sans définition en passant ;
5. relance ou correction des erreurs fréquentes qui s'appuie sur une notion pas encore vue ;
6. renvoi faux (« vu en X », « rappel de X », liste de ce qui est déjà enseigné) vers un X qui \
vient après, ou qui ne contient pas ce qu'on lui prête ;
7. les mêmes contrôles pour les cas de rechange, de creusage et les annexes, depuis leur point \
d'entrée.

Ce que l'apprenant a reçu à un point du cours : les unités de l'inventaire qui précèdent, \
l'explication et la situation du cas. Il ne lit ni le fil rouge, ni le glossaire, ni le reste du \
fichier. Hors périmètre : les prérequis qu'un apprenant a sautés à sa demande.`

// --- Cadrage ---------------------------------------------------------------

phase('Cadrage')
const scout = await agent(`${ROLE}

Lis le plan du cours dans ${COURSE} et liste ses concepts puis ses annexes, dans l'ordre du \
plan, avec le chemin de leur fichier dans le dossier des concepts, et pour chaque annexe son \
point d'entrée d'après le plan.`,
  { label: 'cadrage', schema: SCOUT_SCHEMA, model: 'sonnet', effort: 'low' })

if (!scout || !scout.concepts.length) throw new Error('Cadrage vide : aucun concept trouvé dans le plan')
const all = scout.concepts
const index = id => {
  if (id === undefined) return -1
  const i = all.findIndex(c => c.id === String(id))
  if (i < 0) throw new Error(`Concept ${id} absent du plan`)
  return i
}
const main = all.filter(c => !c.entry)
const fromI = A.from === undefined ? 0 : index(A.from)
const toI = A.to === undefined ? all.length - 1 : index(A.to)
const target = all.slice(fromI, toI + 1).filter(c => c.file)
const lastMain = [...main].reverse().find(c => all.indexOf(c) <= toI) || main[main.length - 1]
const missing = all.slice(fromI, toI + 1).filter(c => !c.file).map(c => c.id)
if (missing.length) log(`Sans fichier, non relus : ${missing.join(', ')}`)
log(`Relus : ${target.map(c => c.id).join(', ')} ; inventaire jusqu'au concept ${lastMain.id}`)

// --- Inventaire ------------------------------------------------------------

phase('Inventaire')
const inventory = await agent(`${ROLE}

Dresse l'inventaire cumulatif de ce que l'apprenant reçoit en suivant le cours, du concept \
${main[0].id} au concept ${lastMain.id}, dans l'ordre du plan (${scout.plan}). Fichiers : \
${main.slice(0, main.indexOf(lastMain) + 1).map(c => c.file).filter(Boolean).join(', ')}.

Une unité par message que le prof envoie au fil principal, dans l'ordre où il les envoie, selon \
la section qui décrit les sous-concepts et les cas qu'elle désigne : sous-concept, et pour \
chacun le cas de la banque qui sert d'exemple. Pour chaque unité, liste ce que l'apprenant y \
reçoit, tiré de l'explication et de la situation du cas (pas de la réponse attendue, qu'il ne \
lit pas) : notions, règles, termes définis, acteurs du fil rouge avec ce qu'on en dit, faits du \
fil rouge. Signale aussi la réponse que la correction lui apporte, en une ligne. Les cas de \
rechange et de creusage n'entrent pas dans l'inventaire.

Renvoie l'inventaire en texte, une unité par bloc, titrée « <concept><sous-concept> : <titre du \
cas> ». Pas d'autre commentaire.`,
  { label: 'inventaire' })

if (!inventory) throw new Error("Inventaire vide")

// --- Relecture -------------------------------------------------------------

const batches = []
for (let i = 0; i < target.length; i += BATCH) batches.push(target.slice(i, i + BATCH))

phase('Relecture')
const reviews = await parallel(batches.map((b, i) => () => agent(`${ROLE}

Tu relis ${b.map(c => `${c.file} (concept ${c.id}${c.entry ? `, annexe ouverte ${c.entry}` : ''})`).join(', ')}. \
Pour chaque cas de leur banque d'exemples (fil principal, rechange, creusage), et pour la section \
qui décrit les sous-concepts, juge si l'apprenant peut répondre avec ce qu'il a reçu à ce point. \
Le glossaire (${scout.glossary}) dit quel concept introduit chaque terme.

${CHECKS}

Inventaire de ce que l'apprenant reçoit, au fil principal :
${inventory}

« bloquant » : l'apprenant ne peut pas donner le noyau de la réponse attendue, ou le prof \
corrigerait sur une notion qu'il n'a pas reçue. « mineur » : le reste (renvoi faux, terme non \
défini qu'on devine). Ne relève que des défauts réels, chacun prouvé par l'inventaire ; aucun \
constat est un résultat normal.`,
  { label: `relecture:${b.map(c => c.id).join('-')}`, phase: 'Relecture', schema: FINDINGS_SCHEMA })))

const failed = batches.filter((b, i) => !reviews[i]).map(b => b.map(c => c.id).join('-'))
if (failed.length) log(`Relectures en échec : ${failed.join(', ')}`)
const findings = reviews.filter(Boolean).flatMap(r => r.findings)
return {
  reviewed: target.map(c => c.id),
  failed,
  bloquants: findings.filter(f => f.severity === 'bloquant').length,
  findings,
}

# ADR-009 : Le fil rouge a un produit, une équipe et une distribution fixes, et l'apprenant en est le PO

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-016

## Contexte
Le fil rouge vélos s'est construit fait par fait, au gré des concepts. En session 7, un énoncé
s'appuyait sur « l'équipe vélos » et « la DSI », jamais présentées, et des acteurs se
recouvraient (régulateur et responsable d'exploitation). L'apprenant ne voyait pas quel produit
il faisait évoluer.

## Décision
`course/fil-rouge-velos.md` décrit l'entreprise, le produit (la plateforme de données de
l'opérateur), l'équipe, les acteurs et les sources ; les faits fixés viennent ensuite.
L'apprenant est le PO de la plateforme. Les besoins des abonnés passent par l'équipe appli, qui
consomme les données de la plateforme. `CLAUDE.md` : le prof part des acteurs et sources du
fichier avant d'en créer.

## Options écartées
- Un PO personnage (que l'apprenant observe) : les questions placent déjà l'apprenant dans le
  rôle de PO (« que proposes-tu au planning ? »).
- Une plateforme qui livre elle-même l'information aux abonnés (SMS) : elle sortirait du produit
  data, et on perdrait une dépendance naturelle avec l'équipe appli.
- Un cadre utilisé sans être présenté à l'apprenant : il n'en profiterait pas.

## Conséquences
Le fil rouge doit rester plus léger que le projet factice du TP (pas de coulisses). Les traces
et fiches des concepts 6 à 10 ne nomment pas encore les acteurs par leur prénom (sauf Julie) :
pas de réécriture prévue.

# AGENTS.md — Site CreatrixDev

## Contexte
CreatrixDev est une entreprise de développement logiciel basée à Douala (Cameroun). Cible : entreprises et institutions d'Afrique centrale. Positionnement : systèmes métier sur mesure et solutions d'IA et d'automatisation. Preuve principale : SIGFOT, outil de gestion de flotte et de carburant pour une société de transport. Langue principale : français (anglais prévu plus tard). Contact principal : WhatsApp.

## Règle n°1 : ne jamais inventer
- Aucun chiffre, client, témoignage, logo, prix, délai ou certification inventé.
- Si une information manque, écris `TODO_A_FOURNIR` à l'endroit concerné et liste-la dans ton résumé final.
- Un projet sans client réel et validé a `statut: concept` et n'apparaît jamais dans les listes publiques.
- N'attribue pas d'IA à une fonctionnalité qui n'en utilise pas (les alertes carburant de SIGFOT sont des règles automatiques, pas de l'IA).

## Stack
Next.js + TypeScript + Tailwind. Vérifie les versions dans package.json et respecte-les. Hébergement : Railway. Ne change pas de framework. N'ajoute une dépendance que si elle est indispensable, et justifie-la dans le résumé.

## Architecture orientée contenu
Le contenu vit dans /content, jamais en dur dans le JSX :

content/
  site.ts            (nom, contacts, réseaux, domaine, numéro WhatsApp)
  services.ts
  pricing.ts
  testimonials.ts
  stats.ts           (chiffres affichés, chacun avec une source)
  projects/*.mdx
  posts/*.mdx
  pages/*.mdx        (pages éditoriales : ia-automatisation, transport-logistique)

Ajouter un projet, un article, un témoignage ou un prix = ajouter ou modifier un fichier dans /content. Les composants lisent /content. Choisis la solution MDX la plus simple compatible avec la version de Next.js du repo.

Frontmatter d'un projet : slug, titre, client, secteur, statut (reel | concept), date, resume, probleme, solution, resultats [{label, valeur, preuve}], stack [], images [], temoignage (optionnel).

Frontmatter d'un article : titre, description, date, tags, auteur, cover, statut (brouillon | publie).

## Design
- Mobile first : la majorité des visiteurs sont sur téléphone, avec un réseau variable.
- Réutilise les couleurs, la typographie et les composants existants. Pas de refonte graphique sans demande.
- Pas de photos de stock pour représenter des clients ou des projets.
- Une action principale par page (WhatsApp ou réservation d'appel), répétée en bas de page.

## SEO et partage
- generateMetadata sur chaque page : title de 60 caractères maximum, description de 155 maximum, canonical, image og:image propre à la page.
- app/sitemap.ts et app/robots.ts.
- JSON-LD : Organization et ProfessionalService (Douala).
- Un seul h1 par page, hiérarchie de titres propre.

## Performance et accessibilité
- next/image avec des `sizes` corrects, formats webp ou avif, pas d'image de plus de 200 Ko sans raison.
- Cible Lighthouse mobile : au moins 90 en performance, accessibilité, bonnes pratiques et SEO.
- Contraste AA, attribut alt sur toutes les images, navigation clavier.

## Commandes
- npm run lint, npm run typecheck, npm run build
- npm run check:content : exécute scripts/check-content.mjs. Le script vérifie le frontmatter, l'existence des images, signale les TODO_A_FOURNIR, et refuse qu'un projet `concept` apparaisse dans une liste publique.
- Avant de dire "terminé" : lint, typecheck, build et check:content doivent passer.

## Façon de travailler
- Lis le code existant avant de modifier et respecte les conventions du repo.
- Petits changements, un commit par sujet, messages en français à l'impératif.
- Pour les gros changements, propose d'abord un plan court.
- Fin de tâche : résumé de ce qui a changé, de ce qui reste (TODO_A_FOURNIR) et comment tester.
- Textes du site en français, ton professionnel et direct, vouvoiement.
- Ne touche pas aux secrets ni aux variables d'environnement : liste simplement celles à créer.

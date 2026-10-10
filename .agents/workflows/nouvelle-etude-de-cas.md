# Nouvelle étude de cas

Ajouter une réalisation réelle au portfolio à partir des informations que je fournis.

1. Demande-moi : nom du projet, client (et son accord pour être cité), secteur, problème, solution, résultats chiffrés avec leur preuve, technologies, chemin des captures d'écran, témoignage.
2. Crée `content/projects/<slug>.mdx` selon le frontmatter défini dans AGENTS.md. Si l'accord du client manque, mets `statut: concept`.
3. Optimise les images (webp, largeur maximale 1600 px) dans `public/projects/<slug>/`.
4. Vérifie que le projet apparaît dans /portfolio et que la page /portfolio/<slug> s'affiche correctement sur mobile.
5. Mets à jour le sitemap.
6. Lance lint, typecheck, build et check:content.
7. Résume : fichiers créés, éléments `TODO_A_FOURNIR` restants.

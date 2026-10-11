# 📋 Éléments Restants à Fournir — CreatrixDev

> **Dernière mise à jour :** 11 Octobre 2026  
> **Statut du projet :** ✅ Lint 0 erreurs, TypeCheck 0 erreurs, build validé.

---

## 🟢 1. Ce qui est Déjà Intégré et Validé

| Élément | Statut | Emplacement / Preuve |
| :--- | :---: | :--- |
| **Projet 1 : SIGFOT** | ✅ Validé | [sigfot.mdx](../content/projects/sigfot.mdx) — Client réel SST Sarl |
| **Capture d'écran SIGFOT** | ✅ Validé | `public/projects/sigfot/dashboard.jpg` |
| **Projet 2 : ISETAG Chatbot V2** | ✅ Reclassé Prototype | [isetag-chatbot.mdx](../content/projects/isetag-chatbot.mdx) — `statut: concept`, badge "Prototype", exclu des listes publiques |
| **Captures Chatbot ISETAG** | ✅ Validé | `public/projects/isetag/` (dashboard-analytics.png & dashboard-conversations.png) |
| **Page /portfolio/isetag-chatbot** | ✅ Corrigé | Badge "Prototype" ambre, bouton "Voir la démo", "La solution conçue", "Production active" supprimé |
| **Page /ia-automatisation** | ✅ Corrigé | ISETAG retiré du bloc "Preuve sur le terrain", bloc "Prototype en cours" ajouté, affirmations sécurité non confirmées reformulées |
| **Tarifs (pricing.ts)** | ✅ Rempli | "À partir de 200 000 FCFA" / "Sur devis après diagnostic gratuit" — check:content passe ✅ |
| **Coordonnées entreprise** | ✅ Validé | [site.ts](../content/site.ts) — Douala, WhatsApp +237 692 280 248 |
| **Landing Transport & Logistique** | ✅ Validé | `/solutions/transport-logistique` |
| **Section Formules & Tarifs** | ✅ Validé | `src/components/PricingSection.tsx` |
| **Module Analytics & Traçage** | ✅ Validé | `src/lib/analytics.ts` |
| **Internationalisation FR / EN** | ✅ Validé | `content/i18n/` & `src/components/LanguageSwitcher.tsx` |
| **3 Brouillons Blog** | ✅ Validé | `content/posts/` : Fraude carburant, Chatbot audio, Excel vs App |
| **Dates blog 2025 → 2026** | ✅ Corrigé | `src/data/blog.ts` + redirections 301 dans `next.config.ts` |
| **LinkedIn Nathan Sengoua** | ✅ Ajouté | `src/data/team.ts` — `https://www.linkedin.com/in/nathan-sengoua-b000262a2` |

---

## 🟡 2. Ce qu'il Reste à Fournir

Conformément à la **Règle n°1 d'AGENTS.md** (*"Ne jamais rien inventer"*), les éléments suivants restent à compléter avant publication finale.

### A. Données chiffrées & Témoignage — SIGFOT (SST Sarl)
Fichier : [content/projects/sigfot.mdx](../content/projects/sigfot.mdx)

1. **Volume ou montant économisé** — litres carburant ou FCFA/mois chez SST Sarl (avec source).
2. **Gain de temps opérationnel** — heures économisées/semaine sur le reporting ou la saisie.
3. **Témoignage client** — citation directe, nom, titre, accord écrit formel.

---

### B. LinkedIn — ATSAMA OWONA Jules Deric
Fichier : [src/data/team.ts](../src/data/team.ts)

- ⏳ Lien de profil LinkedIn à transmettre dès réception.

---

### C. Validation des 3 Brouillons de Blog
Dossier : [content/posts/](../content/posts/)

1. **Fraude carburant** (`detecter-fraude-carburant-afrique-centrale.mdx`) :
   - ⏳ Valider/chiffrer les économies avant passage en `statut: publie`.
2. **Chatbot WhatsApp bilingue** (`chatbot-whatsapp-bilingue-audio-douala.mdx`) :
   - ⚠️ Vérifier que le contenu est formulé comme "prototype en cours" et non comme "client en production".
3. **Excel vs App métier** (`fichiers-excel-vs-application-metier-bascule.mdx`) :
   - ⏳ Valider l'estimation des heures gagnées par semaine.

---

### D. Témoignage ISETAG (conditionnel)
Fichier : [content/projects/isetag-chatbot.mdx](../content/projects/isetag-chatbot.mdx)

> ⚠️ ISETAG est en `statut: concept`. Le témoignage ne sera affiché que si le projet passe officiellement en `statut: reel` avec accord écrit de l'ISETAG et données de production confirmées.

---

### E. Configuration Google Analytics (Optionnel)
Variable d'environnement : `.env.local`
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
Si absente, le site fonctionne sans erreur ; les événements s'affichent en console de développement.

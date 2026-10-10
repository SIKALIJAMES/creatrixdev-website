# 📋 Éléments Restants à Fournir — CreatrixDev

> **Dernière mise à jour :** 10 Octobre 2026  
> **Statut du projet :** ✅ Build de production Next.js validé, 0 erreur de typage, 0 avertissement sur les images.

---

## 🟢 1. Ce qui est Déjà Intégré et Validé

| Élément | Statut | Emplacement / Preuve |
| :--- | :---: | :--- |
| **Projet 1 : SIGFOT** | ✅ Validé | [sigfot.mdx](file:///c:/Users/intern.Jtenefo/Desktop/Creatrixdev-Website/content/projects/sigfot.mdx) — Client réel SST Sarl |
| **Capture d'écran SIGFOT** | ✅ Validé | `public/projects/sigfot/dashboard.jpg` (Tableau de bord de flotte & rentabilité) |
| **Projet 2 : ISETAG Chatbot V2** | ✅ Validé | [isetag-chatbot.mdx](file:///c:/Users/intern.Jtenefo/Desktop/Creatrixdev-Website/content/projects/isetag-chatbot.mdx) — Client réel Institut ISETAG |
| **Captures Chatbot ISETAG** | ✅ Validé | `public/projects/isetag/dashboard-analytics.png` (Analytics) & `public/projects/isetag/dashboard-conversations.png` (Live chat WhatsApp) |
| **Coordonnées de l'entreprise** | ✅ Validé | [site.ts](file:///c:/Users/intern.Jtenefo/Desktop/Creatrixdev-Website/content/site.ts) — Douala, WhatsApp `+237 692 280 248`, emails et réseaux sociaux |
| **Page IA & Automatisation** | ✅ Validé | `/ia-automatisation` (modèle complet, FAQ accordéon, JSON-LD FAQPage, CTA WhatsApp) |
| **Landing Transport & Logistique** | ✅ Validé | `/solutions/transport-logistique` (Mobile First, preuve SIGFOT, FAQ JSON-LD) |
| **Section Formules & Tarifs** | ✅ Validé | `src/components/PricingSection.tsx` (affiché sur Services & pages sectorielles, masqué en prod si TODO) |
| **Module Analytics & Traçage** | ✅ Validé | `src/lib/analytics.ts` (clic WhatsApp, clic appel 20 min, soumission formulaire, GA4) |
| **Internationalisation FR / EN** | ✅ Validé | [content/i18n/](file:///c:/Users/intern.Jtenefo/Desktop/Creatrixdev-Website/content/i18n/) & `src/components/LanguageSwitcher.tsx` (sélecteur dans le Header desktop et mobile) |
| **3 Brouillons Blog Métier** | ✅ Validé | `content/posts/` : Fraude carburant, Chatbot audio WhatsApp, Excel vs App métier |
| **Validation automatisée** | ✅ 100% OK | `npm run check:content`, `npm run lint`, `npm run typecheck`, `npm run build` (20/20 pages SSG) |

---

## 🟡 2. Ce qu'il Reste à Fournir (TODO_A_FOURNIR)

Conformément à la **Règle n°1 d'AGENTS.md** (*"Ne jamais rien inventer"*), les éléments suivants sont actuellement balisés `TODO_A_FOURNIR` dans le code.

### A. Données chiffrées & Témoignage client — SIGFOT (SST Sarl)
Fichier source : [content/projects/sigfot.mdx](file:///c:/Users/intern.Jtenefo/Desktop/Creatrixdev-Website/content/projects/sigfot.mdx)

1. **Volume ou montant économisé :**
   - Donnée attendue : Litres de carburant ou montant FCFA économisé par mois/trimestre.
   - Justificatif attendu : Source / période de mesure chez SST Sarl.
2. **Gain de temps opérationnel :**
   - Donnée attendue : Nombre d'heures économisées par semaine (ex: reporting, saisie).
3. **Témoignage client validé :**
   - Citation directe (2 à 3 phrases).
   - Nom complet, titre et fonction de la personne chez SST Sarl (ex: Directeur d'Exploitation ou Gérant).
   - Accord formel pour affichage public.

---

### B. Témoignage client — ISETAG Chatbot V2
Fichier source : [content/projects/isetag-chatbot.mdx](file:///c:/Users/intern.Jtenefo/Desktop/Creatrixdev-Website/content/projects/isetag-chatbot.mdx)

1. **Témoignage de l'administration ISETAG :**
   - Citation directe (ex: impact sur la gestion des admissions ou la réactivité 24h/24).
   - Nom complet et fonction du signataire (ex: Secrétaire Général, Directeur des Admissions ou Responsable Communication).
   - Accord formel pour affichage public.

---

### C. Tarifs et Délais indicatifs (Optionnel pour l'affichage public)
Fichier source : [content/pricing.ts](file:///c:/Users/intern.Jtenefo/Desktop/Creatrixdev-Website/content/pricing.ts)

> *Note : Tant que ces tarifs contiennent `TODO_A_FOURNIR`, le validateur de build protège le site pour éviter d'afficher des données incomplètes ou fausses.*

1. **Offre 1 : Site Web & Présence Digitale**
   - Prix de départ (ex: `X00 000 FCFA`)
   - Délai indicatif moyen (ex: `2 à 3 semaines`)
2. **Offre 2 : Système Métier sur Mesure (Type SIGFOT)**
   - Prix de départ (ex: `X 000 000 FCFA` ou `Sur devis après cadrage`)
   - Délai indicatif moyen (ex: `6 à 10 semaines`)
3. **Offre 3 : Chatbot WhatsApp & Agent IA (Type ISETAG)**
   - Prix de départ (ex: `X00 000 FCFA` ou `Sur devis`)
   - Délai indicatif moyen (ex: `3 à 5 semaines`)

---

### D. Membres de l'Équipe (Page `/equipe`)
Fichier source : `src/data/team.ts` (ou futur `content/team.ts`)

Pour les fondateurs et collaborateurs à afficher sur le site :
1. **Nom & Prénom**
2. **Rôle précis** (ex: Fondateur & Lead Développeur Fullstack, Spécialiste IA / DevOps...)
3. **Courte bio** (1 à 2 phrases)
4. **Photo réelle** (format carré ou portrait haute résolution)
5. **Lien LinkedIn / GitHub** (optionnel)

---

### E. Validation des 3 Brouillons d'Articles de Blog
Dossier source : [content/posts/](file:///c:/Users/intern.Jtenefo/Desktop/Creatrixdev-Website/content/posts/)

Les 3 articles métier ont été rédigés en `statut: brouillon` conformément au workflow :
1. **Fraude carburant en Afrique centrale (cas réel SIGFOT) :**
   - Fichier : `content/posts/detecter-fraude-carburant-afrique-centrale.mdx`
   - Élément à valider : Estimation des litres/montants FCFA moyens économisés avant passage en `statut: publie`.
2. **Chatbot WhatsApp bilingue & note vocale à Douala (cas réel ISETAG) :**
   - Fichier : `content/posts/chatbot-whatsapp-bilingue-audio-douala.mdx`
   - Statut : Rédigé et prêt pour relecture finale.
3. **Fichiers Excel vs application métier sur mesure :**
   - Fichier : `content/posts/fichiers-excel-vs-application-metier-bascule.mdx`
   - Élément à valider : Estimation du nombre d'heures gagnées par semaine sur la saisie comptable.

---

### F. Configuration de la Clé Google Analytics (Optionnel)
Variable d'environnement : `.env.local`
- Clé à renseigner : `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- Si la variable n'est pas renseignée, le site fonctionne normalement sans charger de script externe, et les événements s'affichent en console de développement pour vérification.

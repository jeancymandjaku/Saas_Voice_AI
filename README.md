# Launch SaaS

## Description

Launch SaaS est une application web moderne construite avec Next.js, utilisant Clerk pour l'authentification et Supabase pour la gestion des données. Cette plateforme SaaS permet aux utilisateurs de créer et gérer des "compagnons" personnalisés, de suivre leur parcours personnel et de gérer des abonnements.

## Captures d'écran

### Page d'accueil
![Page d'accueil](public/readme/homepage.png)

### Gestion des compagnons
![Gestion des compagnons](public/readme/companions.png)

### Interface d'authentification
![Authentification](public/readme/auth.png)

- **Authentification sécurisée** : Intégration de Clerk pour la gestion des utilisateurs, des connexions et des profils.
- **Gestion des compagnons** : Création, modification et visualisation de compagnons personnalisés.
- **Parcours utilisateur** : Suivi et gestion du parcours personnel des utilisateurs.
- **Abonnements** : Gestion des plans d'abonnement et des paiements.
- **Interface responsive** : Design adaptatif pour tous les appareils.
- **API intégrée** : Utilisation de VAPI pour des fonctionnalités avancées.

## Technologies utilisées

- **Frontend** : Next.js 14 avec App Router
- **Authentification** : Clerk
- **Base de données** : Supabase
- **Styling** : Tailwind CSS avec PostCSS
- **UI Components** : Composants personnalisés avec shadcn/ui
- **TypeScript** : Pour un développement typé
- **ESLint** : Pour la qualité du code

## Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Un compte Clerk
- Un compte Supabase

### Étapes d'installation

1. **Cloner le repository**

   ```bash
   git clone <url-du-repository>
   cd launch_saas
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configuration de l'environnement**

   Créer un fichier `.env.local` à la racine du projet avec les variables suivantes :

   ```env
   # Clerk - Obtenez ces clés depuis votre dashboard Clerk (https://dashboard.clerk.com)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=votre_clé_publique_clerk
   CLERK_SECRET_KEY=votre_clé_secrète_clerk

   # Supabase - Obtenez ces clés depuis votre projet Supabase (https://supabase.com/dashboard)
   NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon_supabase
   SUPABASE_SERVICE_ROLE_KEY=votre_clé_service_role_supabase

   # Autres variables si nécessaire
   ```

4. **Configuration de Clerk**

   - Créer un fichier `proxy.ts` à la racine avec :

     ```typescript
     import { clerkMiddleware } from '@clerk/nextjs/server'

     export default clerkMiddleware()

     export const config = {
       matcher: [
         '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
         '/(api|trpc)(.*)',
       ],
     }
     ```

   - Modifier `app/layout.tsx` pour inclure ClerkProvider :

     ```typescript
     import { ClerkProvider } from "@clerk/nextjs";
     import "./globals.css";

     export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
         <html lang="fr">
           <body>
             <ClerkProvider>
               {children}
             </ClerkProvider>
           </body>
         </html>
       );
     }
     ```

5. **Lancer l'application en mode développement**

   ```bash
   npm run dev
   ```

   L'application sera accessible sur `http://localhost:3000`.

## Utilisation

### Authentification

- Les utilisateurs peuvent s'inscrire et se connecter via Clerk.
- L'interface s'adapte automatiquement selon l'état de connexion.

### Gestion des compagnons

- Accéder à la section `/companions` pour voir la liste des compagnons.
- Créer un nouveau compagnon via `/companions/new`.
- Modifier un compagnon existant via `/companions/[id]`.

### Parcours utilisateur

- Consulter son parcours personnel dans `/my-journey`.

### Abonnements

- Gérer les abonnements dans `/subscription`.

## Structure du projet

```
├── app/                    # Pages Next.js App Router
│   ├── companions/         # Pages liées aux compagnons
│   ├── my-journey/         # Page du parcours utilisateur
│   ├── sign-in/            # Pages d'authentification
│   └── subscription/       # Page des abonnements
├── components/             # Composants React
│   ├── ui/                 # Composants UI réutilisables
│   └── ...                 # Autres composants
├── constants/              # Constantes et données statiques
├── lib/                    # Utilitaires et configurations
├── public/                 # Assets statiques
└── types/                  # Définitions TypeScript
```

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run start` : Lance l'application en mode production
- `npm run lint` : Vérifie la qualité du code avec ESLint

## Contribution

1. Forker le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commiter vos changements (`git commit -am 'Ajout de nouvelle fonctionnalité'`)
4. Pousser vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Support

Pour toute question ou problème, veuillez ouvrir une issue sur GitHub ou contacter l'équipe de développement.

---

*Développé avec ❤️ en utilisant Next.js et Clerk*
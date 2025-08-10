


client/
├── public/
│   └── index.html
├── src/
│   ├── assets/              # Images, icons, fonts
│   ├── components/          # Reusable UI components
│   │   └── ChatBox/
│   │       ├── ChatBox.tsx
│   │       └── ChatBox.module.css
│   ├── features/            # Feature-based folders (Redux or Context logic)
│   │   └── chat/
│   │       ├── ChatPage.tsx
│   │       ├── chatSlice.ts
│   │       └── chatAPI.ts
│   ├── hooks/               # Custom hooks (useSocket, useAuth etc.)
│   ├── layouts/             # Layouts like MainLayout, AuthLayout
│   ├── pages/               # Route-based pages (Home, Login, Chat etc.)
│   ├── routes/              # React Router configs
│   ├── services/            # API services (axios instances)
│   ├── socket/              # Socket.io client setup
│   ├── store/               # Redux/Context setup
│   ├── utils/               # Helper functions
│   ├── App.tsx
│   ├── index.tsx
│   └── types/               # TypeScript types/interfaces
├── .env
├── .gitignore
├── package.json
└── tsconfig.json

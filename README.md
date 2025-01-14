This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Final Project Structure

After integrating user account management with PostgreSQL, your project structure should resemble the following:
my-nextjs-app/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth].ts
│   │   ├── events/
│   │   │   ├── route.ts
│   │   ├── posts/
│   │   │   ├── route.ts
│   │   ├── user/
│   │   │   ├── [id]/
│   │   │   │   ├── route.ts
│   ├── dashboard/
│   │   ├── page.tsx
│   ├── events/
│   │   ├── new/
│   │   │   ├── page.tsx
│   │   ├── page.tsx
│   ├── post/
│   │   ├── new/
│   │   │   ├── page.tsx
│   │   ├── page.tsx
│   ├── profile/
│   │   ├── page.tsx
│   ├── ... other directories ...
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProtectedRoute.tsx
│   └── __tests__/
│       ├── Footer.test.tsx
│       ├── Header.test.tsx
│       ├── AuthFlow.test.tsx
├── context/
│   └── UserContext.tsx
├── lib/
│   └── prisma.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
│   └── frontend/
│       └── css/
│           └── images/
│               └── Webinar_2_final.png
├── tests/
│   └── events/
│       └── page.test.tsx
│   └── profile/
│       └── page.test.tsx
├── types/
│   └── next-auth.d.ts
├── jest.config.js
├── jest.setup.ts
├── tsconfig.json
├── package.json
├── .env.local
└── ... other files ...


Starting from Scratch:
Table of Contents

Project Structure Overview:
my-nextjs-app/
├── app/
│   ├── about/
│   │   ├── AboutPage.tsx
│   │   └── page.tsx
│   ├── ai-chatbot/
│   │   ├── AIChatbotPage.tsx
│   │   └── page.tsx
│   ├── donate/
│   │   ├── DonatePage.tsx
│   │   └── page.tsx
│   ├── dashboard/
│   │   ├── DashboardPage.tsx
│   │   └── page.tsx
│   ├── events/
│   │   ├── EventsPage.tsx
│   │   └── page.tsx
│   ├── home/
│   │   ├── HomePage.tsx
│   │   └── page.tsx
│   ├── post/
│   │   ├── PostPage.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Header.tsx
├── context/
│   └── UserContext.tsx
├── public/
│   └── frontend/
│       └── css/
│           └── images/
│               └── Webinar_2_final.png
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── ...

Creating Uniquely Named Page Components
About Page
Home Page
AI Chatbot Page
Donate Page
Dashboard Page
Events Page
Post Page
Updating page.tsx Files
Ensuring Images Are in Place
Final Project Structure
Running and Testing the Application
Conclusion


Table of Contents

Prerequisites
Header Component
Footer Component
Integrating Header and Footer into the Application
User Context (UserContext.tsx)
Final Project Structure
Running and Testing the Application
Conclusion

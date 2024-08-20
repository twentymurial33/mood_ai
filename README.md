This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Clerk
Clerk is the third-party authentication provider for the application

`npm i @clerk/nextjs`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Prisma ORM
- Install Prisma Client: npm i @prisma/client
- Install Prisma as dev dependency: npm i prisma --save-dev
- Initialize Prisma: npx prisma init
  
## OpenAI API Account Setup
- Create an openai.com account
- Select the API App.
- Create an API Key
- Copy/Paste the key into your into .env.local using the variable OPENAI_API_KEY


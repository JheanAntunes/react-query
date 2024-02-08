# Introdução :innocent:
Site que mostra as postangens de uma [api externa](https://jsonplaceholder.typicode.com/) com pesquisa pelo título e paginação :astonished:
## Tecnologias :sunglasses:
- Next
- Tailwind
- nextUI [Site](https://nextui.org/)
- tanstack/query [Docs](https://tanstack.com/query/latest/docs/framework/react/overview)
### O que praticou da lib tanstack/Query :nerd_face: ?
O fluxo da biblioteca tanstack/Query, aqui um [Diagrama Figma](https://www.figma.com/file/tKy6eBYXDvDKqZj2lS0c8r/Diagram-Basics-(Community)?type=whiteboard&node-id=0%3A1&t=VwjCQgIHdFtCAmcl-1) 💅, [video](https://www.youtube.com/watch?v=q8S7YHHaF-0) que explica com mais detalhes
- Solicitações de dados com hook useQuery
- configurações
  - staleTime
  - refetchOnWindowFocus
- Mutações
- Invalidar cache
- Custom hooks 
> Tem muitas coisas para aprender, mas não vou me aprofundar porque não tenho um projeto que necessita.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

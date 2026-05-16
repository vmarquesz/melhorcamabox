# Melhor Cama Box - Blog de Afiliados (Astro)

Projeto de blog de afiliados focado em reviews de camas box.
Stack principal: Astro + MDX + Tailwind CSS.

## Resumo do estado atual

- Site: `https://melhorcamabox.com.br`
- Conteúdo principal em `src/content/posts`
- Imagens de conteúdo em `src/assets/images`
- Rotas de tags foram removidas do front-end
- `tags` continuam no schema e no frontmatter como metadados

## Stack técnica

- Astro `^5.16.11`
- Tailwind CSS `^4.1.18`
- `@astrojs/mdx`
- `@astrojs/sitemap`
- `@astrojs/rss`
- `astro-icon`
- `fuse.js` (busca client-side)

## Setup local

Requisitos: Node.js 18+, npm 9+

```bash
npm install
npm run dev
```

Servidor local: `http://localhost:4321`

## Scripts

```bash
npm run dev      # inicia ambiente local
npm run build    # build de produção
npm run preview  # preview local do build
```

## Licença

MIT - veja `LICENSE`.
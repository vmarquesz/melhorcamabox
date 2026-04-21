# Guia Perfume - Blog de Afiliados (Astro)

Projeto de blog de afiliados focado em reviews de perfumes.
Stack principal: Astro + MDX + Tailwind CSS.

## Resumo do estado atual

- Site ativo em: `https://guiaroboaspirador.com.br`
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

## Rotas existentes

Rotas principais em `src/pages`:

- `/` (home)
- `/blog/`
- `/blog/page/[page]/`
- `/categorias/`
- `/categorias/[category]/`
- `/categorias/[category]/page/[page]/`
- `/authors/`
- `/authors/[author]/`
- `/authors/[author]/page/[page]/`
- `/contato/`
- `/sobre-nos/`
- `/search/`
- `/search.json`
- `/rss.xml`
- `/:slug/` (páginas institucionais em `src/content/pages`)
- `/:slug/` (posts via `src/pages/[...slug].astro`)

Importante:
- Não existem rotas `/tags/...`.

## Modelo de conteúdo (Content Collections)

Arquivo: `src/content/config.ts`

Coleções:
- `posts`
- `authors`
- `pages`
- `about`

Campos relevantes de `posts`:

- `title`
- `meta_title?`
- `description?`
- `date?`
- `image` (obrigatório, tipo `image()` do Astro)
- `authors` (array, default `['admin']`)
- `categories` (array, default `['others']`)
- `tags` (array, default `['others']`)
- `series?` (tupla `[nome, posição]`)
- `canonical?`
- `draft?`

## Regra de Tags (importante)

As tags são metadados invisíveis:

- DEVEM ser mantidas no frontmatter dos posts
- NÃO são exibidas como chips/links na UI
- NÃO possuem páginas navegáveis
- São usadas por busca e SEO

Uso atual de tags no projeto:
- Indexação para busca em `/search.json`
- Metatags SEO (`article:tag` / `keywords`)
- Campo custom no RSS (`<tags>...</tags>`)
- Lógica da home para destacar reviews (`categoria=reviews` OU `tag=reviews`)

## Convenções de slug e canonical

Posts são gerados por `src/pages/[...slug].astro`.

Regra de slug:
- Se `canonical` existir no frontmatter, o slug usa o último segmento da URL canônica.
- Se não existir `canonical`, usa o slug do arquivo (`post.slug`).

Exemplo:
- `canonical: https://guiaroboaspirador.com.br/melhor-impressora-laser/`
- rota final: `/melhor-lava-e-seca/`

## Imagens

Padrão atual:
- Armazenar imagens locais em `src/assets/images`
- Referenciar no frontmatter com caminho relativo (exemplo: `../../assets/images/minha-imagem.webp`)

## SEO, sitemap e indexação

- Componente central: `src/layouts/components/common/SEO.astro`
- `canonical` sempre emitido
- JSON-LD para `WebSite`, `Article`, `CollectionPage`, etc.
- `noindex` aplicado automaticamente para:
  - `/search`
  - qualquer rota com `/page/`
  - categorias/autores se configurado em `siteConfig.noindex`

Sitemap:
- Configurado em `astro.config.mjs`
- Filtra páginas contendo `/page/` e `/search`

## Configuração

Arquivos principais:

- `astro.config.mjs`
  - `site`, integrações (`mdx`, `icon`, `sitemap`), prefetch
- `src/config/site.ts`
  - título, descrição, OG image, paginação, flags de noindex
- `src/config/menu.json`
  - navegação de header e footer
- `src/config/categories.ts`
  - categorias em destaque da home
- `src/config/social.json`
  - links sociais
- `src/config/config.json`
  - dados de contato e parâmetros adicionais

## Scripts

`package.json`:

```bash
npm run dev      # inicia ambiente local
npm run build    # build de produção
npm run preview  # preview local do build
```

## Setup local

Requisitos:
- Node.js 18+
- npm 9+

Instalação:

```bash
npm install
npm run dev
```

Servidor local padrão: `http://localhost:4321`

## Validação rápida antes de publicar

```bash
npm run build
```

Checklist útil:
- confirmar imagens de capa/conteúdo carregando
- confirmar slug final dos posts (especialmente com `canonical`)
- confirmar que não existem links `/tags/...`

## Licença

MIT - veja `LICENSE`.

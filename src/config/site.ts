export const siteConfig = {
  // Language setting
  lang: "pt-BR",

  // Site details from config.json:site
  title: "Guia de Colchão", // from config.json:site.title
  // description is used from existing site.ts, will be updated by config.json:metadata.meta_description
  // url is removed, Astro.site will be used

  // from config.json:site (logo related)
  logo: "/logo.svg",
  logoWidth: "200",
  logoHeight: "40",
  logoText: "Guia de Colchão",

  // SEO metadata from config.json:metadata
  author: "Leonardo Correia Pinto", // from config.json:metadata.meta_author
  description: "Reviews e guias detalhados para você escolher o melhor colchão para o seu descanso.", // from config.json:metadata.meta_description
  ogImage: "/images/og-image.png", // from config.json:metadata.meta_image (replaces defaultImage)

  // Pagination settings from config.json:settings
  postsPerPage: 12, // from config.json:settings.pagination
  summaryLength: 100, // from config.json:settings.summary_length

  // SEO settings (existing in site.ts)
  noindex: {
    categories: false, // Set to true to add noindex meta tag to category pages
    authors: false, // Set to true to add noindex meta tag to author pages
  },

  // Params from config.json:params
  copyright: `Copyright © ${new Date().getFullYear()}`, // from config.json:params.copyright
};

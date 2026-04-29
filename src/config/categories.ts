export type FeaturedCategory = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export const featuredCategories: FeaturedCategory[] = [
  {
    slug: "melhores-marcas",
    name: "Melhores Marcas",
    description: "Conheça as principais fabricantes e suas linhas de colchões.",
    icon: "ph:buildings",
  },
  {
    slug: "dicas-e-manutencao",
    name: "Dicas e Manutenção",
    description: "Como cuidar e prolongar a vida útil do seu colchão.",
    icon: "ph:wrench",
  },
  {
    slug: "guias-por-tamanho",
    name: "Guias por Tamanho",
    description: "Encontre o colchão ideal para cada tamanho de cama e espaço.",
    icon: "ph:ruler",
  },
  {
    slug: "colchoes-de-espuma",
    name: "Colchões de Espuma",
    description: "Os melhores colchões de espuma para conforto e suporte.",
    icon: "ph:cube",
  },
  {
    slug: "molas-ensacadas",
    name: "Molas Ensacadas",
    description: "Colchões com tecnologia de molas ensacadas para suporte individual.",
    icon: "ph:circle-dashed",
  },
  {
    slug: "saude-e-ortopedicos",
    name: "Saúde e Ortopédicos",
    description: "Colchões projetados para aliviar dores e promover postura saudável.",
    icon: "ph:heartbeat",
  },
  {
    slug: "colchoes-na-caixa",
    name: 'Colchões "Na Caixa"',
    description: "Comodidade e qualidade: colchões compactados que chegam na sua porta.",
    icon: "ph:package",
  },
  {
    slug: "inflaveis-e-pneumaticos",
    name: "Infláveis e Pneumáticos",
    description: "Colchões infláveis para visitantes, camping e solução temporária.",
    icon: "ph:wind",
  },
  {
    slug: "acessorios",
    name: "Acessórios",
    description: "Capas, protetores, travesseiros e tudo para melhorar seu sono.",
    icon: "ph:bed",
  },
];

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};


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
    description: "Conheça as principais fabricantes e suas linhas de robôs aspiradores.",
    icon: "ph:buildings",
  },
  {
    slug: "dicas-e-manutencao",
    name: "Dicas e Manutenção",
    description: "Como cuidar e otimizar a vida útil do seu robô aspirador.",
    icon: "ph:wrench",
  },
  {
    slug: "custo-beneficio",
    name: "Custo-Benefício",
    description: "Encontre as melhores opções para cada faixa de preço.",
    icon: "ph:currency-circle-dollar",
  },
  {
    slug: "modelos-3-em-1",
    name: "Modelos 3 em 1",
    description: "Robôs que varrem, aspiram e passam pano em uma única passada.",
    icon: "ph:stack",
  },
  {
    slug: "com-funcao-mop",
    name: "Com Função Mop",
    description: "Modelos eficientes para quem precisa de limpeza úmida constante.",
    icon: "ph:drop",
  },
  {
    slug: "com-mapeamento",
    name: "Com Mapeamento",
    description: "Robôs inteligentes que criam mapas da casa para limpeza precisa.",
    icon: "ph:map-trifold",
  },
  {
    slug: "para-pets",
    name: "Para Pets",
    description: "Aspiradores potentes focados em remover pelos de animais.",
    icon: "ph:paw-print",
  },
  {
    slug: "bases-autolimpantes",
    name: "Bases Autolimpantes",
    description: "O máximo da conveniência com bases que esvaziam o robô sozinhas.",
    icon: "ph:recycle",
  },
  {
    slug: "para-piscinas",
    name: "Para Piscinas",
    description: "Tecnologia autônoma para manter sua piscina sempre limpa.",
    icon: "ph:swimming-pool",
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


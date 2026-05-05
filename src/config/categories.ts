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
    description: "Conheça as principais fabricantes e suas linhas de air fryers.",
    icon: "ph:buildings",
  },
  {
    slug: "guias-e-comparativos",
    name: "Guias e Comparativos",
    description: "Comparativos detalhados para ajudar você a escolher o melhor air fryer.",
    icon: "ph:scales",
  },
  {
    slug: "dicas-e-manutencao",
    name: "Dicas e Manutenção",
    description: "Como cuidar e prolongar a vida útil do seu air fryer.",
    icon: "ph:wrench",
  },
  {
    slug: "modelos-oven",
    name: "Modelos Oven",
    description: "Air fryers no formato oven: mais capacidade e versatilidade na cozinha.",
    icon: "ph:oven",
  },
  {
    slug: "acessorios",
    name: "Acessórios",
    description: "Cestos, grelhas, tapetes de silicone e tudo para turbinar seu air fryer.",
    icon: "ph:star-four",
  },
  {
    slug: "receitas-de-carnes",
    name: "Receitas de Carnes",
    description: "Frango, boi, porco e peixe: receitas suculentas feitas no air fryer.",
    icon: "mdi:food-drumstick",
  },
  {
    slug: "receitas-de-lanches",
    name: "Receitas de Lanches",
    description: "Petiscos, salgados e lanches práticos e crocantes na air fryer.",
    icon: "ph:hamburger",
  },
  {
    slug: "receitas-de-doces",
    name: "Receitas de Doces",
    description: "Bolos, sobremesas e doces irresistíveis feitos no air fryer.",
    icon: "ph:cake",
  },
  {
    slug: "receitas-do-dia-a-dia",
    name: "Receitas do Dia a Dia",
    description: "Refeições rápidas e práticas para o dia a dia usando a air fryer.",
    icon: "ph:cooking-pot",
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
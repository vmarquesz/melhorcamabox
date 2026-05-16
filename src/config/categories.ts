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
    description: "Conheça as principais fabricantes e suas linhas de camas box.",
    icon: "ph:buildings",
  },
  {
    slug: "guias-e-comparativos",
    name: "Guias e Comparativos",
    description: "Comparativos detalhados para ajudar você a escolher a melhor cama box.",
    icon: "ph:scales",
  },
  {
    slug: "dicas-e-manutencao",
    name: "Dicas e Manutenção",
    description: "Como cuidar e prolongar a vida útil da sua cama box.",
    icon: "ph:wrench",
  },
  {
    slug: "roupas-de-cama",
    name: "Roupas de Cama",
    description: "Lençóis, fronhas, cobertores e tudo para deixar sua cama confortável.",
    icon: "ph:t-shirt",
  },
  {
    slug: "decoracao-e-acessorios",
    name: "Decoração e Acessórios",
    description: "Cabeceiras, nichos, luminárias e tudo para decorar seu quarto com estilo.",
    icon: "ph:star-four",
  },
  {
    slug: "tipos-de-cama",
    name: "Tipos de Cama",
    description: "Cama casal, solteiro, beliche e mais: encontre o tipo ideal para seu espaço.",
    icon: "ph:bed",
  },
  {
    slug: "cama-box",
    name: "Cama Box",
    description: "Modelos, tamanhos e marcas de cama box para o melhor custo-benefício.",
    icon: "ph:archive",
  },
  {
    slug: "cama-bau",
    name: "Cama Baú",
    description: "Cama baú com função de armazenamento: conforto e organização em um só móvel.",
    icon: "ph:package",
  },
  {
    slug: "sofa-cama",
    name: "Sofá Cama",
    description: "Sofás cama versáteis para receber visitas sem abrir mão do conforto.",
    icon: "ph:couch",
  },
  {
    slug: "cama-infantil",
    name: "Cama Infantil",
    description: "Camas box e baú infantis com segurança e diversão para os pequenos.",
    icon: "ph:baby",
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
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts');

  const postsComLinks = posts.map((post) => {
    const frontmatter = post.data || {};
    const conteudo = post.body || '';
    
    const slug = post.slug;
    
    // CORREÇÃO 1: Negative Lookbehind (?<!\!). Só pega link se NÃO tiver um '!' antes.
    const linkRegex = /(?<!\!)\[.*?\]\((.*?)\)/g;
    let match;
    let linksDeSaida: string[] = [];

    while ((match = linkRegex.exec(conteudo)) !== null) {
      let urlLink = match[1];
      
      // Ignora links externos, emails e âncoras
      if (!urlLink.startsWith('http') && !urlLink.startsWith('mailto:') && !urlLink.startsWith('#')) {
        
        // CORREÇÃO 2: Ignora arquivos de mídia (imagens, pdfs, etc)
        if (urlLink.match(/\.(webp|jpg|jpeg|png|gif|svg|pdf)$/i)) {
          continue; // Pula para o próximo loop, não é um post!
        }

        let slugAlvo = urlLink.split('#')[0].split('?')[0].split('/').filter(Boolean).pop();
        
        // CORREÇÃO 3: Garante que o slug é um nome válido de post (sem ponto final solto)
        if (slugAlvo && !slugAlvo.includes('.')) {
          linksDeSaida.push(slugAlvo);
        }
      }
    }

    return {
      slug: slug,
      title: frontmatter.title || 'Sem Título',
      tags: frontmatter.tags || [],
      categories: frontmatter.categories || [],
      alvosDeSaida: linksDeSaida
    };
  });

  const contabilidadeSEO = postsComLinks.map(post => {
    const linksOut = post.alvosDeSaida.length;
    
    const linksIn = postsComLinks.filter(outroPost => 
      outroPost.alvosDeSaida.includes(post.slug as string)
    ).length;

    return {
      slug: post.slug,
      title: post.title,
      tags: post.tags,
      categories: post.categories,
      links_out: linksOut,
      links_in: linksIn
    };
  });

  return new Response(JSON.stringify(contabilidadeSEO), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

import { getCollection } from 'astro:content';
import { formatDate } from '@utils/date';

export async function GET() {
  // Get all posts
  const posts = await getCollection('posts');

  // Format posts for search
  const searchData = posts.map(post => {
    return {
      slug: post.slug,
      title: post.data.title || 'Sem título',
      description: post.data.description || '',
      date: post.data.date ? formatDate(post.data.date) : '',
      categories: post.data.categories || [],
      tags: post.data.tags || [],
      image: post.data.image?.src || null
    };
  });

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/blog/',
      disallow: [],
    },
    sitemap: 'https://marimbashome.com/blog/sitemap.xml',
  };
}

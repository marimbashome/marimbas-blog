import { MetadataRoute } from 'next';
import { allGuides } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marimbashome.com/blog';
  const locales = ['es', 'en'];
  const now = new Date().toISOString();

  const entries: MetadataRoute.Sitemap = [];

  // Blog listing pages
  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  }

  // Individual guide pages
  for (const guide of allGuides) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${guide.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: guide.category === 'pillar' ? 0.8 : 0.6,
      });
    }
  }

  return entries;
}

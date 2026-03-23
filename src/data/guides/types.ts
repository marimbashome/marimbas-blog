export interface GuideSection {
  id: string;
  title: { es: string; en: string };
  content: { es: string; en: string };
  /** Optional subsections for nested ToC */
  subsections?: {
    id: string;
    title: { es: string; en: string };
    content: { es: string; en: string };
  }[];
}

export interface GuideItinerary {
  days: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface GuideCTA {
  title: { es: string; en: string };
  description: { es: string; en: string };
  properties?: {
    name: string;
    zone: string;
    link: string;
  }[];
  buttonText?: { es: string; en: string };
  buttonLink?: string;
}

export interface Guide {
  slug: string;
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  metaTitle: { es: string; en: string };
  metaDescription: { es: string; en: string };
  heroImage: string;
  category: 'pillar' | 'city' | 'neighborhood' | 'attraction' | 'practical';
  region: 'chiapas' | 'cdmx' | 'all';
  tags: { es: string[]; en: string[] };
  readTime: number; // minutes
  sections: GuideSection[];
  itineraries?: GuideItinerary[];
  cta: GuideCTA;
  relatedSlugs: string[];
}

export type Locale = 'es' | 'en';

export function t(obj: { es: string; en: string }, locale: Locale): string {
  return obj[locale] || obj.es;
}

export function tArr(obj: { es: string[]; en: string[] }, locale: Locale): string[] {
  return obj[locale] || obj.es;
}

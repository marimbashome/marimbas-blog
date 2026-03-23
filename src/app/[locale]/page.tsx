import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import BlogNavbar from '@/components/BlogNavbar';
import BlogFooter from '@/components/BlogFooter';
import { GuideCard } from '@/components/guides';
import { allGuides, t, tArr } from '@/data/guides';
import type { Guide, Locale } from '@/data/guides';
import { Compass, Instagram, ArrowRight } from 'lucide-react';

interface Props {
  params: { locale: string };
}

/** Category group labels for each region */
const categoryGroupLabels: Record<string, Record<string, { es: string; en: string }>> = {
  chiapas: {
    pillar: { es: 'Guías Principales', en: 'Main Guides' },
    city: { es: 'Ciudades y Pueblos', en: 'Cities & Towns' },
    attraction: { es: 'Atracciones y Naturaleza', en: 'Attractions & Nature' },
    practical: { es: 'Gastronomía y Cultura', en: 'Gastronomy & Culture' },
  },
  cdmx: {
    pillar: { es: 'Guías Principales', en: 'Main Guides' },
    neighborhood: { es: 'Barrios', en: 'Neighborhoods' },
    attraction: { es: 'Atracciones', en: 'Attractions' },
    practical: { es: 'Vida Nocturna, Comida y Más', en: 'Nightlife, Food & More' },
  },
  all: {
    pillar: { es: 'Destinos Imperdibles', en: 'Must-Visit Destinations' },
    city: { es: 'Ciudades', en: 'Cities' },
    attraction: { es: 'Experiencias', en: 'Experiences' },
    practical: { es: 'Guías Prácticas', en: 'Practical Guides' },
  },
};

function getCategoryKey(category: string, region: string): string {
  const labels = categoryGroupLabels[region];
  if (labels && labels[category]) return category;
  return category;
}

const categoryOrder: Record<string, number> = {
  pillar: 0,
  city: 1,
  neighborhood: 2,
  attraction: 3,
  practical: 4,
};

function sortGuides(guides: Guide[]): Guide[] {
  return [...guides].sort((a, b) => {
    const catDiff = (categoryOrder[a.category] ?? 9) - (categoryOrder[b.category] ?? 9);
    if (catDiff !== 0) return catDiff;
    return a.title.es.localeCompare(b.title.es);
  });
}

function groupGuidesByCategory(guides: Guide[]): Record<string, Guide[]> {
  const grouped: Record<string, Guide[]> = {};
  for (const guide of guides) {
    if (!grouped[guide.category]) {
      grouped[guide.category] = [];
    }
    grouped[guide.category].push(guide);
  }
  return grouped;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tr = await getTranslations({ locale: params.locale, namespace: 'guides' });
  const locale = params.locale as Locale;
  const ogLocale = locale === 'es' ? 'es_MX' : 'en_US';

  return {
    title: tr('meta_title'),
    description: tr('meta_description'),
    openGraph: {
      title: tr('meta_title'),
      description: tr('meta_description'),
      type: 'website',
      siteName: 'Marimbas Home',
      locale: ogLocale,
      url: `https://marimbashome.com/blog/${locale}`,
    },
    twitter: {
      card: 'summary',
      title: tr('meta_title'),
      description: tr('meta_description'),
    },
    alternates: {
      canonical: `https://marimbashome.com/blog/${locale}`,
      languages: {
        es: 'https://marimbashome.com/blog/es',
        en: 'https://marimbashome.com/blog/en',
      },
    },
  };
}

export default async function BlogListingPage({ params }: Props) {
  const tr = await getTranslations({ locale: params.locale, namespace: 'guides' });
  const locale = params.locale as Locale;

  const chiapasGuides = sortGuides(allGuides.filter((g) => g.region === 'chiapas'));
  const cdmxGuides = sortGuides(allGuides.filter((g) => g.region === 'cdmx'));
  const allRegionGuides = sortGuides(allGuides.filter((g) => g.region === 'all'));

  return (
    <>
      <BlogNavbar locale={locale} />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-deep-forest text-white py-20">
          <div className="container-marimbas text-center">
            <div className="w-14 h-14 bg-terracotta/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Compass className="w-7 h-7 text-terracotta" />
            </div>
            <h1 className="text-display font-serif font-bold mb-4">{tr('title')}</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{tr('subtitle')}</p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/70">
              <Compass className="w-4 h-4" />
              {allGuides.length} {locale === 'es' ? 'guías disponibles' : 'guides available'}
            </div>
          </div>
        </section>

        {/* Destination Hero Cards */}
        <section className="container-marimbas py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#chiapas"
              className="group relative overflow-hidden rounded-2xl p-8 md:p-10 text-white transition-all hover:shadow-2xl hover:scale-105"
              style={{ background: `linear-gradient(135deg, rgba(34, 139, 82, 0.9), rgba(34, 139, 82, 0.7))` }}
            >
              <div className="relative z-10">
                <h2 className="text-h1 font-serif font-bold mb-3">Chiapas</h2>
                <p className="text-white/90 mb-6 text-base leading-relaxed">
                  {locale === 'es'
                    ? 'Naturaleza exuberante, waterfalls cristalinas y la riqueza de la cultura maya.'
                    : 'Lush nature, crystal waterfalls and the richness of Mayan culture.'}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    {chiapasGuides.length} {locale === 'es' ? 'guías' : 'guides'}
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold text-white group-hover:gap-3 transition-all">
                    {locale === 'es' ? 'Ver guías' : 'View guides'} <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </a>
            <a
              href="#cdmx"
              className="group relative overflow-hidden rounded-2xl p-8 md:p-10 text-white transition-all hover:shadow-2xl hover:scale-105"
              style={{ background: `linear-gradient(135deg, rgba(194, 116, 50, 0.9), rgba(217, 119, 6, 0.7))` }}
            >
              <div className="relative z-10">
                <h2 className="text-h1 font-serif font-bold mb-3">Ciudad de México</h2>
                <p className="text-white/90 mb-6 text-base leading-relaxed">
                  {locale === 'es'
                    ? 'La capital cultural de Latinoamérica, barrio por barrio, con historia y modernidad.'
                    : 'The cultural capital of Latin America, neighborhood by neighborhood, blending history and modernity.'}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    {cdmxGuides.length} {locale === 'es' ? 'guías' : 'guides'}
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold text-white group-hover:gap-3 transition-all">
                    {locale === 'es' ? 'Ver guías' : 'View guides'} <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </a>
          </div>
        </section>

        {/* Chiapas Section */}
        <section id="chiapas" className="container-marimbas section-padding scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-h2 font-serif font-bold text-deep-forest mb-2">Chiapas</h2>
            <p className="text-charcoal/70 text-lg">
              {locale === 'es'
                ? 'Explora las guías de Chiapas, organizadas por tipo de experiencia.'
                : 'Explore our Chiapas guides, organized by type of experience.'}
            </p>
          </div>
          {Object.entries(groupGuidesByCategory(chiapasGuides)).map(([category, guides]) => {
            const categoryKey = getCategoryKey(category, 'chiapas');
            const labels = categoryGroupLabels.chiapas[categoryKey];
            if (!labels) return null;
            return (
              <div key={category} className="mb-14">
                <div className="mb-6">
                  <span className="inline-block text-xs font-semibold text-terracotta uppercase tracking-wider bg-terracotta/10 rounded-full px-3 py-1 mb-3">
                    {labels[locale]}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guides.map((guide, idx) => (
                    <GuideCard
                      key={guide.slug}
                      slug={guide.slug}
                      title={t(guide.title, locale)}
                      subtitle={t(guide.subtitle, locale)}
                      tags={tArr(guide.tags, locale)}
                      readTime={guide.readTime}
                      category={guide.category}
                      locale={locale}
                      heroImage={guide.heroImage}
                      featured={idx === 0 && category === 'pillar'}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Instagram CTA */}
        <section className="container-marimbas py-10">
          <a
            href="https://www.instagram.com/marimbashome"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-deep-forest to-deep-forest/80 rounded-2xl p-6 hover:from-deep-forest/90 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold text-lg">
                  {locale === 'es' ? '¿Planeando tu viaje?' : 'Planning your trip?'}
                </p>
                <p className="text-white/70 text-sm">
                  {locale === 'es'
                    ? 'Inspírate con fotos exclusivas de nuestras propiedades y destinos.'
                    : 'Get inspired with exclusive photos of our properties and destinations.'}
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-white text-deep-forest font-semibold px-5 py-2.5 rounded-full text-sm group-hover:bg-amber-50 transition-colors">
              <Instagram className="w-4 h-4" />
              @marimbashome
            </div>
          </a>
        </section>

        {/* CDMX Section */}
        <section id="cdmx" className="container-marimbas section-padding scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-h2 font-serif font-bold text-deep-forest mb-2">Ciudad de México</h2>
            <p className="text-charcoal/70 text-lg">
              {locale === 'es'
                ? 'Descubre la capital, barrio por barrio, atracción por atracción.'
                : 'Discover the capital, neighborhood by neighborhood, attraction by attraction.'}
            </p>
          </div>
          {Object.entries(groupGuidesByCategory(cdmxGuides)).map(([category, guides]) => {
            const categoryKey = getCategoryKey(category, 'cdmx');
            const labels = categoryGroupLabels.cdmx[categoryKey];
            if (!labels) return null;
            return (
              <div key={category} className="mb-14">
                <div className="mb-6">
                  <span className="inline-block text-xs font-semibold text-terracotta uppercase tracking-wider bg-terracotta/10 rounded-full px-3 py-1 mb-3">
                    {labels[locale]}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guides.map((guide, idx) => (
                    <GuideCard
                      key={guide.slug}
                      slug={guide.slug}
                      title={t(guide.title, locale)}
                      subtitle={t(guide.subtitle, locale)}
                      tags={tArr(guide.tags, locale)}
                      readTime={guide.readTime}
                      category={guide.category}
                      locale={locale}
                      heroImage={guide.heroImage}
                      featured={idx === 0 && category === 'pillar'}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* All Mexico Section */}
        <section id="mexico" className="container-marimbas section-padding scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-h2 font-serif font-bold text-deep-forest mb-2">
              {locale === 'es' ? 'Explora Todo México' : 'Explore All Mexico'}
            </h2>
            <p className="text-charcoal/70 text-lg">
              {locale === 'es'
                ? 'Destinos, experiencias y guías prácticas de todo el país.'
                : 'Destinations, experiences and practical guides from across the country.'}
            </p>
          </div>
          {Object.entries(groupGuidesByCategory(allRegionGuides)).map(([category, guides]) => {
            const categoryKey = getCategoryKey(category, 'all');
            const labels = categoryGroupLabels.all[categoryKey];
            if (!labels) return null;
            return (
              <div key={category} className="mb-14">
                <div className="mb-6">
                  <span className="inline-block text-xs font-semibold text-terracotta uppercase tracking-wider bg-terracotta/10 rounded-full px-3 py-1 mb-3">
                    {labels[locale]}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guides.map((guide, idx) => (
                    <GuideCard
                      key={guide.slug}
                      slug={guide.slug}
                      title={t(guide.title, locale)}
                      subtitle={t(guide.subtitle, locale)}
                      tags={tArr(guide.tags, locale)}
                      readTime={guide.readTime}
                      category={guide.category}
                      locale={locale}
                      heroImage={guide.heroImage}
                      featured={idx === 0 && category === 'pillar'}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <BlogFooter locale={locale} />
    </>
  );
}

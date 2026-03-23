'use client';

import { AffiliateLink } from '@/lib/affiliates';

interface AffiliateLinksProps {
  links: AffiliateLink[];
  locale: string;
  guideSlug: string;
}

export function AffiliateLinks({ links, locale, guideSlug }: AffiliateLinksProps) {
  if (!links || links.length === 0) return null;

  const lang = locale === 'es' ? 'es' : 'en';

  const handleClick = (link: AffiliateLink) => {
    // GA4 event tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        affiliate_provider: link.provider,
        affiliate_category: link.category,
        guide_slug: guideSlug,
        link_url: link.url,
      });
    }
  };

  const categoryLabels: Record<string, { es: string; en: string }> = {
    tours: { es: '🎯 Tours y Experiencias', en: '🎯 Tours & Experiences' },
    accommodation: { es: '🏨 Hospedaje', en: '🏨 Accommodation' },
    esim: { es: '📱 Conectividad', en: '📱 Connectivity' },
    transport: { es: '🚗 Transporte', en: '🚗 Transport' },
  };

  // Group by category
  const grouped = links.reduce((acc, link) => {
    if (!acc[link.category]) acc[link.category] = [];
    acc[link.category].push(link);
    return acc;
  }, {} as Record<string, AffiliateLink[]>);

  return (
    <section className="my-8 rounded-xl border border-warm-200/60 bg-gradient-to-br from-warm-50 to-white p-6 shadow-sm dark:border-warm-800/40 dark:from-warm-950 dark:to-warm-900">
      <h3 className="mb-4 text-lg font-semibold text-warm-900 dark:text-warm-100">
        {lang === 'es' ? '✨ Reserva y Ahorra' : '✨ Book & Save'}
      </h3>
      <p className="mb-5 text-sm text-warm-600 dark:text-warm-400">
        {lang === 'es'
          ? 'Enlaces recomendados para complementar tu viaje. Al reservar a través de estos enlaces apoyas a Marimbas Home sin costo adicional.'
          : 'Recommended links to complement your trip. Booking through these links supports Marimbas Home at no extra cost.'}
      </p>

      <div className="space-y-4">
        {Object.entries(grouped).map(([category, categoryLinks]) => (
          <div key={category}>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-warm-500 dark:text-warm-500">
              {categoryLabels[category]?.[lang] || category}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {categoryLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() => handleClick(link)}
                  className="group flex items-start gap-3 rounded-lg border border-warm-200/50 bg-white p-3 transition-all hover:border-brand-gold/50 hover:shadow-md dark:border-warm-800/50 dark:bg-warm-900 dark:hover:border-brand-gold/40"
                >
                  <span className="mt-0.5 text-xl">{link.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-warm-900 group-hover:text-brand-gold dark:text-warm-100">
                      {link.title[lang]}
                    </p>
                    <p className="mt-0.5 text-xs text-warm-500 dark:text-warm-400">
                      {link.description[lang]}
                    </p>
                    <span className="mt-1 inline-flex items-center text-xs font-medium text-brand-gold">
                      {lang === 'es' ? 'Ver opciones →' : 'View options →'}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { GuideCard } from './GuideCard';
import type { Guide, Locale } from '@/data/guides/types';
import { t, tArr } from '@/data/guides/types';

interface RelatedGuidesProps {
  guides: Guide[];
  locale: Locale;
  title: string;
}

export function RelatedGuides({ guides, locale, title }: RelatedGuidesProps) {
  if (guides.length === 0) return null;

  return (
    <section className="border-t border-sand pt-12 mt-12">
      <h2 className="text-h2 font-serif font-bold text-deep-forest mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guides.slice(0, 3).map((guide) => (
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
          />
        ))}
      </div>
    </section>
  );
}

import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogNavbar from '@/components/BlogNavbar';
import BlogFooter from '@/components/BlogFooter';
import { GuideHero, TableOfContents, CTABanner, ItineraryCards, RelatedGuides, ReadingProgress, ShareButtons, AdBanner, AffiliateLinks } from '@/components/guides';
import { getGuideBySlug, getRelatedGuides, allGuides, t, tArr } from '@/data/guides';
import { getAffiliateLinksForGuide, getGenericAffiliateLinks } from '@/lib/affiliates';
import type { Locale } from '@/data/guides';
import { ArrowLeft } from 'lucide-react';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateStaticParams() {
  const locales = ['es', 'en'];
  return allGuides.flatMap((guide) =>
    locales.map((locale) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return { title: 'Guide not found' };
  const locale = params.locale as Locale;
  const ogLocale = locale === 'es' ? 'es_MX' : 'en_US';
  const guideUrl = `https://marimbashome.com/blog/${locale}/blog/${params.slug}`;

  return {
    title: t(guide.metaTitle, locale),
    description: t(guide.metaDescription, locale),
    openGraph: {
      title: t(guide.metaTitle, locale),
      description: t(guide.metaDescription, locale),
      type: 'article',
      siteName: 'Marimbas Home',
      locale: ogLocale,
      url: guideUrl,
      images: guide.heroImage
        ? [{ url: guide.heroImage, width: 1200, height: 630, alt: t(guide.title, locale) }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: t(guide.metaTitle, locale),
      description: t(guide.metaDescription, locale),
      images: guide.heroImage ? [guide.heroImage] : undefined,
    },
    alternates: {
      canonical: guideUrl,
      languages: {
        es: `https://marimbashome.com/blog/es/blog/${params.slug}`,
        en: `https://marimbashome.com/blog/en/blog/${params.slug}`,
      },
    },
  };
}

export default async function BlogGuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const locale = params.locale as Locale;
  const tr = await getTranslations({ locale: params.locale, namespace: 'guides' });
  const relatedGuides = getRelatedGuides(guide);

  const affiliateLinks = getAffiliateLinksForGuide(guide.slug);
  const fallbackLinks = getGenericAffiliateLinks(guide.region);
  const finalAffiliateLinks = affiliateLinks.length > 0 ? affiliateLinks : fallbackLinks;

  const tocItems = guide.sections.map((s) => ({
    id: s.id,
    title: t(s.title, locale),
  }));

  // Build breadcrumbs
  const breadcrumbs: { label: string; href?: string }[] = [
    { label: locale === 'es' ? 'Inicio' : 'Home', href: 'https://marimbashome.com' },
    { label: 'Blog', href: `/${locale}/blog` },
  ];

  if ((guide.category === 'city' || guide.category === 'neighborhood') && guide.region) {
    const pillarGuide = allGuides.find(
      (g) => g.category === 'pillar' && g.region === guide.region
    );
    if (pillarGuide) {
      breadcrumbs.push({
        label: t(pillarGuide.title, locale),
        href: `/${locale}/blog/${pillarGuide.slug}`,
      });
    }
  }

  breadcrumbs.push({ label: t(guide.title, locale) });

  return (
    <>
      <ReadingProgress />
      <BlogNavbar locale={locale} />
      <main className="pb-16">
        <GuideHero
          title={t(guide.title, locale)}
          subtitle={t(guide.subtitle, locale)}
          heroImage={guide.heroImage}
          readTime={guide.readTime}
          tags={tArr(guide.tags, locale)}
          category={guide.category}
          locale={locale}
          breadcrumbs={breadcrumbs}
        />

        <ShareButtons title={t(guide.title, locale)} locale={locale} variant="floating" />

        <div className="container-marimbas section-padding">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 shrink-0 order-1 lg:order-none">
              <TableOfContents items={tocItems} title={tr('toc_title')} />
            </aside>

            <article className="flex-1 min-w-0 order-2 lg:order-none">
              <a
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-1.5 text-sm text-adobe hover:text-charcoal transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                {tr('back_to_guides')}
              </a>

              {guide.sections.map((section, index) => (
                <div key={section.id}>
                  <section id={section.id} className="mb-12 scroll-mt-24">
                    <h2 className="text-h2 font-serif font-bold text-deep-forest mb-4">
                      {t(section.title, locale)}
                    </h2>
                    <div
                      className="prose prose-charcoal max-w-none
                        [&_p]:text-charcoal/80 [&_p]:leading-relaxed [&_p]:mb-4
                        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2
                        [&_li]:text-charcoal/80
                        [&_strong]:text-deep-forest [&_strong]:font-semibold
                        [&_em]:text-chiapas-green
                        [&_h3]:text-h3 [&_h3]:font-serif [&_h3]:font-bold [&_h3]:text-deep-forest [&_h3]:mt-8 [&_h3]:mb-3"
                      dangerouslySetInnerHTML={{ __html: t(section.content, locale) }}
                    />
                  </section>

                  {guide.region === 'all' && (index === 0 || index === 2) && (
                    <AdBanner slot="6350348246" inArticle format="auto" />
                  )}
                  {(guide.region === 'cdmx' || guide.region === 'chiapas') && index === 0 && guide.sections.length > 2 && (
                    <AdBanner slot="6350348246" inArticle />
                  )}
                </div>
              ))}

              {guide.itineraries && guide.itineraries.length > 0 && (
                <ItineraryCards
                  sectionTitle={tr('itineraries_title')}
                  itineraries={guide.itineraries.map((it) => ({
                    days: it.days,
                    title: t(it.title, locale),
                    description: t(it.description, locale),
                  }))}
                />
              )}

              <AffiliateLinks links={finalAffiliateLinks} locale={locale} guideSlug={guide.slug} />

              {guide.region === 'all' && (
                <AdBanner slot="9979569660" format="horizontal" />
              )}

              <CTABanner
                title={t(guide.cta.title, locale)}
                description={t(guide.cta.description, locale)}
                properties={guide.cta.properties ?? []}
                locale={locale}
                buttonLabel={tr('cta_button')}
              />

              <RelatedGuides
                guides={relatedGuides}
                locale={locale}
                title={tr('related_title')}
              />
            </article>
          </div>
        </div>
      </main>
      <BlogFooter locale={locale} />
    </>
  );
}

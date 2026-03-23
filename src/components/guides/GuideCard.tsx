'use client';

import { useState } from 'react';
import { Clock, ArrowRight, Map, Building, Home, Landmark, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { hasValidHeroImage } from '@/data/guides/valid-images';

interface GuideCardProps {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  readTime: number;
  category: string;
  locale: string;
  heroImage?: string;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  pillar: 'bg-terracotta/10 text-terracotta',
  city: 'bg-chiapas-green/10 text-chiapas-green',
  neighborhood: 'bg-slate/10 text-slate',
  attraction: 'bg-amber-warm/20 text-adobe',
  practical: 'bg-sand text-charcoal',
};

const categoryLabels: Record<string, { es: string; en: string }> = {
  pillar: { es: 'Guía completa', en: 'Complete guide' },
  city: { es: 'Ciudad', en: 'City' },
  neighborhood: { es: 'Barrio', en: 'Neighborhood' },
  attraction: { es: 'Atracción', en: 'Attraction' },
  practical: { es: 'Práctico', en: 'Practical' },
};

/** Category-specific gradients + icons for when hero images are missing */
const categoryGradients: Record<string, string> = {
  pillar: 'from-deep-forest via-chiapas-green/40 to-deep-forest/90',
  city: 'from-slate-800 via-slate-600/60 to-slate-900',
  neighborhood: 'from-amber-900 via-amber-700/40 to-amber-950',
  attraction: 'from-emerald-900 via-teal-700/40 to-emerald-950',
  practical: 'from-stone-800 via-stone-600/40 to-stone-900',
};

const categoryIcons: Record<string, typeof Map> = {
  pillar: Map,
  city: Building,
  neighborhood: Home,
  attraction: Landmark,
  practical: BookOpen,
};

export function GuideCard({ slug, title, subtitle, tags, readTime, category, locale, heroImage, featured }: GuideCardProps) {
  const [imgError, setImgError] = useState(false);
  const catLabel = categoryLabels[category]?.[locale as 'es' | 'en'] || category;
  const catColor = categoryColors[category] || categoryColors.practical;
  const showFallback = !hasValidHeroImage(heroImage) || imgError;
  const FallbackIcon = categoryIcons[category] || Map;
  const gradientClass = categoryGradients[category] || categoryGradients.pillar;

  return (
    <a
      href={`/${locale}/blog/${slug}`}
      className={cn(
        'group block bg-linen border border-sand rounded-xl overflow-hidden hover:shadow-card-hover transition-all duration-300',
        featured && 'sm:col-span-2 md:flex'
      )}
    >
      {/* Hero image with themed gradient fallback */}
      <div className={cn(
        'relative overflow-hidden',
        `bg-gradient-to-br ${gradientClass}`,
        featured ? 'md:w-2/5 h-48 md:h-auto' : 'h-44'
      )}>
        {!showFallback && (
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        {/* Decorative pattern for missing images */}
        {showFallback && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <FallbackIcon className="w-16 h-16 text-white/10" strokeWidth={1} />
              <div className="absolute inset-0 flex items-center justify-center">
                <FallbackIcon className="w-8 h-8 text-white/20" strokeWidth={1.5} />
              </div>
            </div>
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Category badge */}
        <div className="absolute bottom-3 left-3">
          <span className={cn('px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm', catColor)}>
            {catLabel}
          </span>
        </div>
      </div>

      <div className={cn('p-5', featured && 'md:flex-1 md:p-8')}>
        <h3 className={cn(
          'font-serif font-bold text-deep-forest mb-2 group-hover:text-terracotta transition-colors line-clamp-2',
          featured ? 'text-h3' : 'text-lg'
        )}>
          {title}
        </h3>
        <p className="text-sm text-charcoal/70 mb-4 line-clamp-2">
          {subtitle}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-adobe">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime} min
            </span>
            <span className="hidden sm:inline">{tags.slice(0, 2).join(' · ')}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-terracotta opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </a>
  );
}

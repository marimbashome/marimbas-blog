'use client';

import { useState } from 'react';
import { Clock, Tag, MapPin, Building, Home, Landmark, BookOpen } from 'lucide-react';
import { hasValidHeroImage } from '@/data/guides/valid-images';
import { ShareButtons } from './ShareButtons';

interface GuideHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
  readTime: number;
  tags: string[];
  category: string;
  locale: string;
  breadcrumbs: { label: string; href?: string }[];
}

/** Category-specific fallback gradients matching GuideCard */
const categoryGradients: Record<string, string> = {
  pillar: 'from-deep-forest via-chiapas-green/30 to-deep-forest/90',
  city: 'from-slate-800 via-slate-600/40 to-slate-900',
  neighborhood: 'from-amber-900 via-amber-700/30 to-amber-950',
  attraction: 'from-emerald-900 via-teal-700/30 to-emerald-950',
  practical: 'from-stone-800 via-stone-600/30 to-stone-900',
};

const categoryIcons: Record<string, typeof MapPin> = {
  pillar: MapPin,
  city: Building,
  neighborhood: Home,
  attraction: Landmark,
  practical: BookOpen,
};

export function GuideHero({ title, subtitle, heroImage, readTime, tags, category, locale, breadcrumbs }: GuideHeroProps) {
  const [imageError, setImageError] = useState(false);
  const showFallback = !hasValidHeroImage(heroImage) || imageError;
  const FallbackIcon = categoryIcons[category] || MapPin;
  const gradient = categoryGradients[category] || categoryGradients.pillar;

  return (
    <section className={`relative text-white overflow-hidden ${showFallback ? `bg-gradient-to-br ${gradient}` : 'bg-deep-forest'}`}>
      {/* Background image */}
      {!showFallback && (
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          onError={() => setImageError(true)}
          loading="eager"
        />
      )}

      {/* Fallback decorative pattern */}
      {showFallback && (
        <div className="absolute inset-0 overflow-hidden">
          <FallbackIcon className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.03]" strokeWidth={0.5} />
          <FallbackIcon className="absolute -left-5 top-10 w-32 h-32 text-white/[0.02] rotate-12" strokeWidth={0.5} />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/80 via-deep-forest/50 to-deep-forest/70" />

      <div className="relative container-marimbas pt-28 pb-16 md:pt-36 md:pb-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/30">/</span>}
              {crumb.href ? (
                <a href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </a>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-display font-serif font-bold mb-4 max-w-3xl">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
          {subtitle}
        </p>

        {/* Meta info row — TimeOut/LP style */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {/* Author + date */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-terracotta/30 flex items-center justify-center text-xs font-bold text-white">
              M
            </div>
            <div className="text-sm">
              <span className="text-white/90 font-medium">Marimbas Home</span>
              <span className="text-white/40 mx-1.5">·</span>
              <span className="text-white/60">{new Date().getFullYear()}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-white/20" />

          {/* Reading time + tags */}
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readTime} min {locale === 'es' ? 'de lectura' : 'read'}
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              {tags.slice(0, 3).join(' · ')}
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-white/20" />

          {/* Share buttons */}
          <ShareButtons title={title} locale={locale} variant="inline" />
        </div>
      </div>
    </section>
  );
}

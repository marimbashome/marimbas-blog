'use client';

import { useState } from 'react';
import { Menu, X, Globe, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface BlogNavbarProps {
  locale?: string;
}

export default function BlogNavbar({ locale = 'es' }: BlogNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Build alternate locale URL
  const altLocale = locale === 'es' ? 'en' : 'es';
  const altPath = pathname.replace(`/${locale}/`, `/${altLocale}/`);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand/50">
      <div className="container-marimbas flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <a href="https://marimbashome.com" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-chiapas-green rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-serif font-bold text-deep-forest leading-none">
              Marimbas Home
            </span>
            <span className="text-[10px] text-adobe tracking-wider uppercase">Blog</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={`/blog/${locale}/blog`}
            className="text-sm font-medium text-charcoal hover:text-chiapas-green transition-colors"
          >
            {locale === 'es' ? 'Todas las guías' : 'All guides'}
          </a>
          <a
            href="https://book.marimbashome.com"
            className="text-sm font-medium text-charcoal hover:text-chiapas-green transition-colors"
          >
            {locale === 'es' ? 'Reservar' : 'Book now'}
          </a>
          <a
            href="https://marimbashome.com"
            className="text-sm font-medium text-charcoal hover:text-chiapas-green transition-colors"
          >
            {locale === 'es' ? 'Inicio' : 'Home'}
          </a>

          {/* Language toggle */}
          <a
            href={`/blog${altPath}`}
            className="flex items-center gap-1.5 text-sm text-adobe hover:text-charcoal transition-colors border border-sand rounded-full px-3 py-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            {altLocale.toUpperCase()}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-sand/50 py-4">
          <div className="container-marimbas flex flex-col gap-3">
            <a href={`/blog/${locale}/blog`} className="text-sm font-medium text-charcoal py-2">
              {locale === 'es' ? 'Todas las guías' : 'All guides'}
            </a>
            <a href="https://book.marimbashome.com" className="text-sm font-medium text-charcoal py-2">
              {locale === 'es' ? 'Reservar' : 'Book now'}
            </a>
            <a href="https://marimbashome.com" className="text-sm font-medium text-charcoal py-2">
              {locale === 'es' ? 'Inicio' : 'Home'}
            </a>
            <a
              href={`/blog${altPath}`}
              className="flex items-center gap-1.5 text-sm text-adobe py-2"
            >
              <Globe className="w-3.5 h-3.5" />
              {altLocale === 'es' ? 'Español' : 'English'}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

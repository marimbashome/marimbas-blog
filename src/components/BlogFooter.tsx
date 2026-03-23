import { BookOpen, Instagram, Mail } from 'lucide-react';

interface BlogFooterProps {
  locale?: string;
}

export default function BlogFooter({ locale = 'es' }: BlogFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-forest text-white/80 py-12">
      <div className="container-marimbas">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-chiapas-green rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-serif font-bold text-white">Marimbas Home</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {locale === 'es'
                ? 'Guías de viaje auténticas para descubrir lo mejor de México.'
                : 'Authentic travel guides to discover the best of Mexico.'}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {locale === 'es' ? 'Explora' : 'Explore'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`/blog/${locale}/blog`} className="hover:text-white transition-colors">
                  {locale === 'es' ? 'Todas las guías' : 'All guides'}
                </a>
              </li>
              <li>
                <a href="https://book.marimbashome.com" className="hover:text-white transition-colors">
                  {locale === 'es' ? 'Reservar hospedaje' : 'Book accommodation'}
                </a>
              </li>
              <li>
                <a href="https://marimbashome.com" className="hover:text-white transition-colors">
                  {locale === 'es' ? 'Sobre nosotros' : 'About us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {locale === 'es' ? 'Síguenos' : 'Follow us'}
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/marimbashome"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:enrique@marimbashome.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {currentYear} Marimbas Home. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  );
}

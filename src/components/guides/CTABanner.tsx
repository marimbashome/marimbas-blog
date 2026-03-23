import { ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui';

interface CTABannerProps {
  title: string;
  description: string;
  properties: { name: string; zone: string; link: string }[];
  locale: string;
  buttonLabel: string;
}

export function CTABanner({ title, description, properties, locale, buttonLabel }: CTABannerProps) {
  return (
    <section className="bg-deep-forest text-white rounded-2xl p-8 md:p-12 my-12">
      <div className="max-w-3xl">
        <h2 className="text-h2 font-serif font-bold mb-3">{title}</h2>
        <p className="text-white/80 mb-8 text-lg">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {properties.map((prop) => (
            <a
              key={prop.name}
              href={`/${locale}${prop.link}`}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl px-4 py-3 transition-colors group"
            >
              <div className="w-10 h-10 bg-terracotta/20 rounded-lg flex items-center justify-center shrink-0">
                <Home className="w-5 h-5 text-terracotta" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">{prop.name}</p>
                <p className="text-xs text-white/60">{prop.zone}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 ml-auto group-hover:text-white/70 transition-colors" />
            </a>
          ))}
        </div>

        <a href={`/${locale}/properties`}>
          <Button variant="primary" size="lg">
            {buttonLabel}
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </Button>
        </a>
      </div>
    </section>
  );
}

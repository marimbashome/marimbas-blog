'use client';

import { useState } from 'react';
import { Share2, Link2, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  locale: string;
  variant?: 'inline' | 'floating';
}

export function ShareButtons({ title, locale, variant = 'inline' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      handleCopyLink();
    }
  };

  const shareLabel = locale === 'es' ? 'Compartir' : 'Share';
  const copiedLabel = locale === 'es' ? 'Copiado' : 'Copied';

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        <button
          onClick={handleShare}
          className="w-12 h-12 bg-deep-forest text-white rounded-full shadow-lg hover:bg-deep-forest/90 transition-all hover:scale-105 flex items-center justify-center"
          aria-label={shareLabel}
        >
          <Share2 className="w-5 h-5" />
        </button>
        <button
          onClick={handleCopyLink}
          className="w-12 h-12 bg-white text-deep-forest border border-sand rounded-full shadow-lg hover:bg-linen transition-all hover:scale-105 flex items-center justify-center"
          aria-label={copiedLabel}
        >
          {copied ? <Check className="w-5 h-5 text-chiapas-green" /> : <Link2 className="w-5 h-5" />}
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/80 hover:text-white transition-colors"
      >
        <Share2 className="w-3.5 h-3.5" />
        {shareLabel}
      </button>
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/80 hover:text-white transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5" />
            {copiedLabel}
          </>
        ) : (
          <>
            <Link2 className="w-3.5 h-3.5" />
            Link
          </>
        )}
      </button>
    </div>
  );
}

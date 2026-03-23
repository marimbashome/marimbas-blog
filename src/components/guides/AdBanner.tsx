'use client';

import { useEffect, useRef } from 'react';

interface AdBannerProps {
  /** Ad slot ID from AdSense */
  slot: string;
  /** Ad format: 'auto' for responsive, 'horizontal' for leaderboard, 'article' for in-article */
  format?: 'auto' | 'horizontal' | 'article';
  /** Whether this is an in-article ad */
  inArticle?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * AdSense banner component for guide pages.
 * Only renders on guide pages — NOT on landing, booking funnel, or property pages.
 * Publisher ID: ca-pub-5779958677522085 (same as MetroGuia)
 */
export function AdBanner({ slot, format = 'auto', inArticle = false, className = '' }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;

    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
      isLoaded.current = true;
    } catch {
      // AdSense not loaded or ad blocker active — fail silently
    }
  }, []);

  if (inArticle) {
    return (
      <div ref={adRef} className={`ad-container my-8 ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-5779958677522085"
          data-ad-slot={slot}
        />
      </div>
    );
  }

  return (
    <div ref={adRef} className={`ad-container my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5779958677522085"
        data-ad-slot={slot}
        data-ad-format={format === 'horizontal' ? 'horizontal' : 'auto'}
        data-full-width-responsive="true"
      />
    </div>
  );
}

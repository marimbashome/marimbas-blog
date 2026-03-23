'use client';

import { useState, useEffect } from 'react';
import { List } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  title: string;
}

export function TableOfContents({ items, title }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center gap-2 text-sm font-medium text-chiapas-green mb-4"
      >
        <List className="w-4 h-4" />
        {title}
      </button>

      <nav className={cn(
        'lg:block',
        isOpen ? 'block' : 'hidden'
      )}>
        <div className="lg:sticky lg:top-24">
          <h3 className="hidden lg:block text-xs font-semibold text-adobe uppercase tracking-wider mb-3">
            {title}
          </h3>
          <ul className="space-y-1 border-l-2 border-sand">
            {items.map(({ id, title: itemTitle }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block pl-4 py-1.5 text-sm transition-colors border-l-2 -ml-[2px]',
                    activeId === id
                      ? 'border-terracotta text-terracotta font-medium'
                      : 'border-transparent text-charcoal/60 hover:text-charcoal hover:border-sand'
                  )}
                >
                  {itemTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

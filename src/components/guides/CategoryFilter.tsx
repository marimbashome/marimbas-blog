'use client';

import { useState } from 'react';
import { Map, Building, Home, Landmark, BookOpen, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  locale: string;
  onFilter: (category: string | null) => void;
  counts: Record<string, number>;
}

const categories = [
  { key: null, icon: LayoutGrid, label: { es: 'Todas', en: 'All' } },
  { key: 'pillar', icon: Map, label: { es: 'Guías completas', en: 'Complete guides' } },
  { key: 'city', icon: Building, label: { es: 'Ciudades', en: 'Cities' } },
  { key: 'neighborhood', icon: Home, label: { es: 'Barrios', en: 'Neighborhoods' } },
  { key: 'attraction', icon: Landmark, label: { es: 'Atracciones', en: 'Attractions' } },
  { key: 'practical', icon: BookOpen, label: { es: 'Práctico', en: 'Practical' } },
];

export function CategoryFilter({ locale, onFilter, counts }: CategoryFilterProps) {
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (key: string | null) => {
    setActive(key);
    onFilter(key);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = active === cat.key;
        const count = cat.key ? (counts[cat.key] || 0) : Object.values(counts).reduce((a, b) => a + b, 0);

        return (
          <button
            key={cat.key ?? 'all'}
            onClick={() => handleClick(cat.key)}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all',
              isActive
                ? 'bg-deep-forest text-white shadow-sm'
                : 'bg-linen text-charcoal/70 hover:bg-sand/50 border border-sand'
            )}
          >
            <Icon className="w-3.5 h-3.5" />
            {cat.label[locale as 'es' | 'en']}
            <span className={cn(
              'text-xs',
              isActive ? 'text-white/60' : 'text-adobe'
            )}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

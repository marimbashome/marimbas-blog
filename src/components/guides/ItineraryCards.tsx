import { Calendar } from 'lucide-react';

interface Itinerary {
  days: string;
  title: string;
  description: string;
}

interface ItineraryCardsProps {
  itineraries: Itinerary[];
  sectionTitle: string;
}

export function ItineraryCards({ itineraries, sectionTitle }: ItineraryCardsProps) {
  return (
    <div className="my-10">
      <h3 className="text-h3 font-serif font-bold text-deep-forest mb-6">{sectionTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {itineraries.map((it, i) => (
          <div
            key={i}
            className="bg-linen border border-sand rounded-xl p-6 hover:shadow-card transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-terracotta/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-terracotta" />
              </div>
              <span className="text-sm font-semibold text-terracotta">{it.days}</span>
            </div>
            <h4 className="font-semibold text-deep-forest mb-2">{it.title}</h4>
            <p className="text-sm text-charcoal/70 leading-relaxed">{it.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Marimbas Home Blog',
    default: 'Blog de Viajes México | Marimbas Home',
  },
  description: 'Guías de viaje completas para México: CDMX, Chiapas, playas, cultura, gastronomía y más.',
  metadataBase: new URL('https://marimbashome.com/blog'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

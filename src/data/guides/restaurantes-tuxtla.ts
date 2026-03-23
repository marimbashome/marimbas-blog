import { Guide } from './types';

export const restaurantesTuxtlaGuide: Guide = {
  slug: 'restaurantes-tuxtla',
  title: { es: 'Restaurantes en Tuxtla Gutiérrez', en: 'Restaurants in Tuxtla Gutiérrez' },
  subtitle: {
    es: 'Los mejores restaurantes de Tuxtla Gutiérrez: desde cocina chiapaneca auténtica hasta.',
    en: 'Best restaurants in Tuxtla Gutiérrez: from authentic Chiapan cuisine to options for all.',
  },
  heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop&q=80',
  category: 'practical',
  region: 'chiapas',
  readTime: 10,
  tags: {
    es: ['restaurantes', 'gastronomía', 'tuxtla', 'chiapas', 'cocina chiapaneca'],
    en: ['restaurants', 'gastronomy', 'tuxtla', 'chiapas', 'chiapan cuisine']
  },
  metaTitle: { es: 'Restaurantes Tuxtla Gutiérrez | Guía Gastronómica Completa', en: 'Restaurants Tuxtla Gutiérrez | Complete Gastronomy Guide' },
  metaDescription: {
    es: 'Los mejores restaurantes de Tuxtla Gutiérrez: desde cocina chiapaneca auténtica hasta opciones para todos los presupuestos. Guía actualizada 2026.',
    en: 'Best restaurants in Tuxtla Gutiérrez: from authentic Chiapan cuisine to options for all budgets. Updated 2026 guide.'
  },
  sections: [
    {
      id: 'escena-gastronomica',
      title: { es: 'La Escena Gastronómica que Nadie Conoce', en: "The Gastronomic Scene Nobody Knows" },
      content: {
        es: `<p>Tuxtla Gutiérrez no tiene reputación gastronómica fuera de Chiapas. La mayoría de los viajeros llegan pensando que la comida interesante está en San Cristóbal o Palenque — y se sorprenden.</p><p>Tuxtla tiene algo que pocas ciudades de México ofrecen: <strong>cocina chiapaneca auténtica</strong> con ingredientes locales, a precios razonables, sin la inflación turística de San Cristóbal. Los tuxtlecos comen muy bien y el mercado gastronómico local lo refleja.</p>`,
        en: `<p>Tuxtla doesn't have a gastronomic reputation outside of Chiapas. Most travelers arrive thinking interesting food is in San Cristóbal or Palenque — and they're surprised.</p><p>Tuxtla has something few Mexican cities offer: <strong>authentic Chiapan cuisine</strong> with local ingredients, at reasonable prices, without San Cristóbal's tourist inflation. Tuxtlecos eat very well and the local gastronomic market reflects it.</p>`
      }
    },
    {
      id: 'cocina-chiapaneca',
      title: { es: 'Platos Indispensables de la Cocina Chiapaneca', en: 'Essential Chiapan Cuisine Dishes' },
      content: {
        es: `<p><strong>Cochito chiapaneco</strong> — El plato emblemático. Cerdo marinado cocido lentamente en horno de leña hasta que la carne se deshace. Se acompaña con salsa roja y tortillas calientes. Es obligatorio.</p><p><strong>Sopa de pan</strong> — Más elaborada de lo que suena: pan desmoronado en caldo con pollo, verduras, especias. Una fusión colonial que se convirtió en tradición.</p><p><strong>Tamales chiapanecos</strong> — Más grandes que los del centro de México, envueltos en hoja de plátano. El de rajas con queso y el de mole negro son los más representativos.</p><p><strong>Pozol</strong> — Bebida precolombina de maíz fermentado con cacao. Nutritiva, refrescante y adquirida. La consumes en el mercado con una tortilla.</p>`,
        en: `<p><strong>Cochito chiapaneco</strong> — The signature dish. Marinated pork slowly cooked in a wood oven until the meat falls apart. Accompanied with red sauce and warm tortillas. Mandatory.</p><p><strong>Sopa de pan (bread soup)</strong> — More elaborate than it sounds: bread crumbled in broth with chicken, vegetables, spices. A colonial fusion that became tradition.</p><p><strong>Chiapan tamales</strong> — Larger than central Mexican ones, wrapped in banana leaf. The rajas with cheese and the black mole ones are most representative.</p><p><strong>Pozol</strong> — Pre-Columbian fermented corn and cacao drink. Nutritious, refreshing and an acquired taste. Have it in the market with a tortilla.</p>`
      }
    },
    {
      id: 'donde-comer',
      title: { es: 'Dónde Comer: Por Zona', en: 'Where to Eat: By Zone' },
      content: {
        es: `<p><strong>Zona Centro y Libramiento Norte</strong> — Concentra la mayoría de los restaurantes formales. Restaurante Las Pichanchas (cocina chiapaneca clásica con show de marimba), El Fogón de Jovel (cochito imprescindible), La Casona.</p><p><strong>Mercado Central</strong> — Si quieres la experiencia más local posible: desayunos completos por menos de $150 pesos, pozol, tamales, antojitos. Abre desde las 6am.</p><p><strong>Boulevard Belisario Domínguez</strong> — La arteria gastronómica de la clase media tuxtleca. Cadenas nacionales y restaurantes locales de mayor nivel. Opciones de mariscos también.</p>`,
        en: `<p><strong>Centro and Norte Beltway Zone</strong> — Most formal restaurants here. Las Pichanchas (classic Chiapan cuisine with marimba show), El Fogón de Jovel (essential cochito), La Casona.</p><p><strong>Central Market</strong> — For the most local experience: full breakfasts under 150 pesos, pozol, tamales, antojitos. Open from 6am.</p><p><strong>Boulevard Belisario Domínguez</strong> — The gastronomic artery of Tuxtla's middle class. National chains and higher-end local restaurants. Seafood options too.</p>`
      }
    },
    {
      id: 'presupuesto',
      title: { es: 'Por Presupuesto', en: 'By Budget' },
      content: {
        es: `<p><strong>Económico (bajo $150 MXN):</strong> Mercado Central, comidas corridas en el centro (menú del día con sopa, plato fuerte y bebida), taquerías en Libramiento Norte.</p><p><strong>Precio medio ($150-400 MXN):</strong> La mayoría de restaurantes en Belisario Domínguez, mariscos en la zona norte, cocina chiapaneca en restaurantes establecidos.</p><p><strong>Especial ($400+ MXN):</strong> Las Pichanchas (experiencia cultural completa con marimba), algunos restaurantes en hoteles boutique del centro.</p>`,
        en: `<p><strong>Budget (under $150 MXN):</strong> Central Market, set lunch menus downtown (soup, main course, drink), taquerias on Libramiento Norte.</p><p><strong>Mid-range ($150-400 MXN):</strong> Most restaurants on Belisario Domínguez, seafood in the north zone, established Chiapan cuisine restaurants.</p><p><strong>Special occasion ($400+ MXN):</strong> Las Pichanchas (full cultural experience with marimba), some boutique hotel restaurants downtown.</p>`
      }
    },
    {
      id: 'botaneros',
      title: { es: 'Los Botaneros: Cultura Social Única', en: 'Botaneros: Unique Social Culture' },
      content: {
        es: `<p>Los botaneros son el fenómeno gastronómico-social más característico de Tuxtla. Son bares donde <strong>la comida es gratuita</strong> con cada consumo de bebida — no snacks, sino platos elaborados que van rotando cada 20-30 minutos.</p><p>La lógica: pagas tu cerveza o cubeta, y recibes botanas continuamente: tacos, quesadillas, enchiladas, mariscos, dependiendo del botanero y el día. Es la mejor relación calidad-precio de Tuxtla.</p><p>Los botaneros más conocidos están en la Zona Norte (periférico norte) y algunos en el centro. La cultura completa está detallada en nuestra guía de botaneros.</p>`,
        en: `<p>Botaneros are Tuxtla's most characteristic gastronomic-social phenomenon. They're bars where <strong>food is free</strong> with each drink purchase — not snacks, but elaborate dishes that rotate every 20-30 minutes.</p><p>The logic: you pay for your beer or bucket, and continuously receive botanas: tacos, quesadillas, enchiladas, seafood, depending on the botanero and the day. It's Tuxtla's best value for money.</p><p>The most well-known botaneros are in the Northern Zone (northern ring road) and some downtown. The complete culture is detailed in our botaneros guide.</p>`
      }
    }
  ],
  cta: {
    title: { es: 'Alójate en Tuxtla y Come Bien', en: 'Stay in Tuxtla and Eat Well' },
    description: {
      es: 'Encuentra hospedaje en Tuxtla Gutiérrez cerca de los mejores restaurantes y la zona de botaneros.',
      en: 'Find accommodation in Tuxtla close to the best restaurants and the botanero zone.'
    },
    buttonText: { es: 'Ver Opciones', en: 'See Options' },
    buttonLink: '/properties?zone=Tuxtla'
  },
  relatedSlugs: ['tuxtla-gutierrez', 'botaneros-tuxtla', 'gastronomia-chiapaneca', 'cafe-chiapas', 'chiapas']
};

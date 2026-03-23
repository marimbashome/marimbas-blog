import { Guide } from './types';

export const museosCdmxGuide: Guide = {
  slug: 'museos-cdmx',
  title: { es: 'Museos de la Ciudad de México', en: 'Mexico City Museums' },
  subtitle: {
    es: 'Los mejores museos de CDMX: Antropología, Castillo de Chapultepec, Soumaya, Frida Kahlo.',
    en: 'Best museums in Mexico City: Anthropology, Chapultepec Castle, Soumaya, Frida Kahlo.',
  },
  heroImage: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=500&fit=crop&q=80',
  category: 'attraction',
  region: 'cdmx',
  readTime: 12,
  tags: {
    es: ['museos', 'cultura', 'arte', 'historia', 'cdmx'],
    en: ['museums', 'culture', 'art', 'history', 'cdmx']
  },
  metaTitle: { es: 'Museos CDMX | Los 10 Mejores de la Ciudad de México', en: 'Mexico City Museums | The 10 Best' },
  metaDescription: {
    es: 'Los mejores museos de CDMX: Antropología, Castillo de Chapultepec, Soumaya, Frida Kahlo. Horarios, precios y consejos prácticos.',
    en: 'Best museums in Mexico City: Anthropology, Chapultepec Castle, Soumaya, Frida Kahlo. Hours, prices and practical tips.'
  },
  sections: [
    {
      id: 'por-que-cdmx-museos',
      title: { es: 'Por Qué CDMX es la Capital de los Museos', en: "Why Mexico City is the Museum Capital" },
      content: {
        es: `<p>CDMX tiene más de 170 museos — más que cualquier otra ciudad de América Latina y en el top 5 mundial por concentración museística. Y la mayoría son gratuitos o muy accesibles.</p><p>La razón: el gobierno mexicano históricamente ha subsidiad la cultura como política pública. El resultado es acceso democrático a una de las colecciones arqueológicas más importantes del mundo.</p>`,
        en: `<p>Mexico City has more than 170 museums — more than any other city in Latin America and in the global top 5 by museum density. And most are free or very accessible.</p><p>The reason: the Mexican government has historically subsidized culture as public policy. The result is democratic access to one of the world's most important archaeological collections.</p>`
      }
    },
    {
      id: 'antropologia',
      title: { es: 'Museo Nacional de Antropología', en: 'National Museum of Anthropology' },
      content: {
        es: `<p>El museo más visitado de México y uno de los más importantes del mundo. Colección de 600,000 piezas arqueológicas, incluyendo la Piedra del Sol (Calendario Azteca), la Sala Maya con la tumba de Pakal, y piezas olmecas únicas.</p><p><strong>Práctico:</strong> Ubicado en Bosque de Chapultepec. Metro Auditorio o Chapultepec. Martes a domingo 9:00-19:00. Entrada $85 MXN (domingos gratis para mexicanos). Plan al menos 3 horas.</p>`,
        en: `<p>Mexico's most visited museum and one of the world's most important. Collection of 600,000 archaeological pieces, including the Sun Stone (Aztec Calendar), the Maya Room with Pakal's tomb, and unique Olmec pieces.</p><p><strong>Practical:</strong> Located in Bosque de Chapultepec. Metro Auditorio or Chapultepec. Tuesday-Sunday 9am-7pm. Entry $85 MXN (free Sundays for Mexicans). Plan at least 3 hours.</p>`
      }
    },
    {
      id: 'chapultepec',
      title: { es: 'Castillo de Chapultepec', en: 'Chapultepec Castle' },
      content: {
        es: `<p>El único castillo en Norteamérica que fue residencia de emperadores (Maximiliano y Carlota) y presidentes de México. Las vistas panorámicas de la ciudad desde el cerro son espectaculares.</p><p>Hoy es el Museo Nacional de Historia con colecciones desde la Conquista hasta la Revolución. Las habitaciones imperiales restauradas son fascinantes. Entrada $75 MXN. Cerrado lunes.</p>`,
        en: `<p>The only castle in North America that served as residence of emperors (Maximilian and Carlota) and Mexican presidents. The panoramic city views from the hill are spectacular.</p><p>Today it's the National History Museum with collections from the Conquest to the Revolution. The restored imperial rooms are fascinating. Entry $75 MXN. Closed Mondays.</p>`
      }
    },
    {
      id: 'casa-azul',
      title: { es: 'Casa Azul de Frida Kahlo', en: "Frida Kahlo's Blue House" },
      content: {
        es: `<p>La casa donde nació, vivió y murió Frida Kahlo en Coyoacán. Una de las experiencias más íntimas de CDMX: su estudio con pinturas inacabadas, su cama con espejo en el techo, su colección de arte popular mexicano.</p><p><strong>Importante:</strong> Los boletos se agotan semanas antes. Compra SIEMPRE en línea en museofridakahlo.org.mx. Llegada puntual obligatoria. Martes a domingo. ~$250 MXN.</p>`,
        en: `<p>The house where Frida Kahlo was born, lived and died in Coyoacán. One of Mexico City's most intimate experiences: her studio with unfinished paintings, her bed with a mirror on the ceiling, her Mexican folk art collection.</p><p><strong>Important:</strong> Tickets sell out weeks in advance. ALWAYS buy online at museofridakahlo.org.mx. Punctual arrival mandatory. Tuesday-Sunday. ~$250 MXN.</p>`
      }
    },
    {
      id: 'museos-gratis',
      title: { es: 'Los Mejores Museos Gratuitos', en: 'The Best Free Museums' },
      content: {
        es: `<p><strong>Museo Soumaya</strong> — Colección de Carlos Slim: 66,000 piezas con Rodin, Dalí y arte mexicano. Siempre gratis en Polanco.</p><p><strong>Museo del Templo Mayor</strong> — Las ruinas del templo azteca en pleno Centro Histórico, junto a la Catedral. Contexto arqueológico insuperable. $80 MXN (domingos gratis).</p><p><strong>Palacio de Bellas Artes</strong> — Los murales de Diego Rivera y David Alfaro Siqueiros. El edificio art nouveau es ya una obra de arte. Acceso al vestíbulo gratis.</p><p><strong>MUNAL</strong> (Museo Nacional de Arte) — Arte mexicano del siglo XVI al XX. Frente a la Alameda. Domingos entrada libre.</p>`,
        en: `<p><strong>Museo Soumaya</strong> — Carlos Slim's collection: 66,000 pieces including Rodin, Dalí and Mexican art. Always free in Polanco.</p><p><strong>Museo del Templo Mayor</strong> — Aztec temple ruins in the Historic Center, next to the Cathedral. Unmatched archaeological context. $80 MXN (free Sundays).</p><p><strong>Palacio de Bellas Artes</strong> — Diego Rivera and David Alfaro Siqueiros murals. The art nouveau building is itself a work of art. Lobby access free.</p><p><strong>MUNAL</strong> (National Art Museum) — Mexican art from 16th to 20th century. Facing the Alameda. Free Sundays.</p>`
      }
    },
    {
      id: 'itinerario-museos',
      title: { es: 'Itinerario de 2 Días de Museos', en: '2-Day Museum Itinerary' },
      content: {
        es: `<p><strong>Día 1 — Chapultepec:</strong> Mañana en el Museo de Antropología (3h), tarde en el Castillo de Chapultepec (2h). Cena en Polanco.</p><p><strong>Día 2 — Centro y Coyoacán:</strong> Mañana en Bellas Artes + Templo Mayor (3h), tarde en la Casa Azul de Frida Kahlo (reserva con anticipación, 1.5h). Regreso por los mercados de Coyoacán.</p>`,
        en: `<p><strong>Day 1 — Chapultepec:</strong> Morning at the Anthropology Museum (3h), afternoon at Chapultepec Castle (2h). Dinner in Polanco.</p><p><strong>Day 2 — Center and Coyoacán:</strong> Morning at Bellas Artes + Templo Mayor (3h), afternoon at Frida Kahlo's Blue House (book ahead, 1.5h). Return through Coyoacán markets.</p>`
      }
    }
  ],
  cta: {
    title: { es: 'Alójate en el Corazón Cultural de CDMX', en: 'Stay in the Cultural Heart of Mexico City' },
    description: {
      es: 'Encuentra hospedaje cerca de Chapultepec y el Centro Histórico para aprovechar los museos al máximo.',
      en: 'Find accommodation near Chapultepec and the Historic Center to make the most of the museums.'
    },
    buttonText: { es: 'Ver Opciones', en: 'See Options' },
    buttonLink: '/properties?zone=Condesa'
  },
  relatedSlugs: ['cdmx', 'polanco', 'roma-norte', 'condesa', '100-cosas-hacer-cdmx', 'teotihuacan']
};

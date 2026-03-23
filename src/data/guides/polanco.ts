import { Guide } from './types';

export const polancoGuide: Guide = {
  slug: 'polanco',
  title: { es: 'Polanco, CDMX', en: 'Polanco, Mexico City' },
  subtitle: {
    es: 'Descubre Polanco: barrio de lujo en CDMX con Pujol y Quintonil, museos Soumaya y Jumex, y.',
    en: 'Discover Polanco: luxury CDMX neighborhood with Pujol and Quintonil, Soumaya and Jumex.',
  },
  heroImage: 'https://images.unsplash.com/photo-1590070780796-13d85748f840?w=800&h=500&fit=crop&q=80',
  category: 'neighborhood',
  region: 'cdmx',
  readTime: 10,
  tags: {
    es: ['polanco', 'gastronomía', 'lujo', 'museos', 'cdmx'],
    en: ['polanco', 'gastronomy', 'luxury', 'museums', 'cdmx']
  },
  metaTitle: { es: 'Polanco CDMX | Guía de Lujo y Restaurantes Michelin', en: 'Polanco CDMX | Luxury and Michelin Restaurant Guide' },
  metaDescription: {
    es: 'Descubre Polanco: barrio de lujo en CDMX con Pujol y Quintonil, museos Soumaya y Jumex, y gastronomía de clase mundial.',
    en: 'Discover Polanco: luxury CDMX neighborhood with Pujol and Quintonil, Soumaya and Jumex museums, and world-class gastronomy.'
  },
  sections: [
    {
      id: 'por-que-polanco',
      title: { es: 'Por Qué Polanco es Diferente', en: 'Why Polanco is Different' },
      content: {
        es: `<p>Roma-Condesa tiene la mejor escena de restaurantes accesibles y la vida de barrio más vibrante de CDMX. Polanco tiene algo radicalmente diferente: los dos únicos restaurantes del país con dos estrellas Michelin.</p><p><strong>Polanco es:</strong></p><ul><li>Más formal — los restaurantes tienen dress code</li><li>Más caro — la experiencia gastronómica es una inversión</li><li>Más internacional — muchas personas hablan inglés, orientado globalmente</li><li>Menos "de barrio" — más empresarios, diplomáticos, turismo de lujo</li></ul>`,
        en: `<p>Roma-Condesa has the best accessible restaurant scene and most vibrant neighborhood life in CDMX. Polanco has something radically different: the only two restaurants in the country with two Michelin stars.</p><p><strong>Polanco is:</strong></p><ul><li>More formal — restaurants have dress codes</li><li>More expensive — the gastronomic experience is an investment</li><li>More international — many people speak English, globally oriented</li><li>Less "neighborhood-like" — more businessmen, diplomats, luxury tourism</li></ul>`
      }
    },
    {
      id: 'restaurantes',
      title: { es: 'Los Dos Michelin y Más', en: 'The Two Michelin Stars and More' },
      content: {
        es: `<p><strong>Pujol</strong> — El restaurante más famoso de México y en el top 10 mundial según The World's 50 Best. Chef Enrique Olvera. Reserva con 2-3 meses de anticipación. Menú degustación ~$3,000 MXN.</p><p><strong>Quintonil</strong> — Chef Jorge Vallejo, también dos estrellas Michelin. Cocina mexicana contemporánea con ingredientes locales. Más accesible en precio que Pujol. Reserva con 4-6 semanas.</p><p><strong>Para algo menos formal:</strong> Mercado Presidente Masaryk (food court de lujo), Nicos (clásico mexicano familiar), o los restaurantes en Antara Mall.</p>`,
        en: `<p><strong>Pujol</strong> — Mexico's most famous restaurant and top 10 worldwide according to The World's 50 Best. Chef Enrique Olvera. Reserve 2-3 months ahead. Tasting menu ~$3,000 MXN.</p><p><strong>Quintonil</strong> — Chef Jorge Vallejo, also two Michelin stars. Contemporary Mexican cuisine with local ingredients. More accessible in price than Pujol. Reserve 4-6 weeks ahead.</p><p><strong>For something less formal:</strong> Mercado Presidente Masaryk (luxury food court), Nicos (classic Mexican family cooking), or restaurants at Antara Mall.</p>`
      }
    },
    {
      id: 'museos',
      title: { es: 'Museo Soumaya y Jumex', en: 'Soumaya and Jumex Museums' },
      content: {
        es: `<p><strong>Museo Soumaya</strong> — Fundado por Carlos Slim, entrada gratuita siempre. Colección de 66,000 piezas: Rodin, Dalí, monedas coloniales, arte mexicano. El edificio de aluminio diseñado por Fernando Romero es fotogénico por sí mismo. Abre todos los días de 10:30 a 18:30.</p><p><strong>Museo Jumex</strong> — Arte contemporáneo, colección privada de la familia Azcárraga. Exposiciones temporales de artistas internacionales. Entrada ~$80 MXN. Café Jumex es excelente. Cerrado lunes.</p>`,
        en: `<p><strong>Museo Soumaya</strong> — Founded by Carlos Slim, always free entry. Collection of 66,000 pieces: Rodin, Dalí, colonial coins, Mexican art. The aluminum building designed by Fernando Romero is photogenic in itself. Open daily 10:30am-6:30pm.</p><p><strong>Museo Jumex</strong> — Contemporary art, private collection of the Azcárraga family. Temporary exhibitions by international artists. Entry ~$80 MXN. Café Jumex is excellent. Closed Mondays.</p>`
      }
    },
    {
      id: 'presidente-masaryk',
      title: { es: 'Presidente Masaryk: El Bulevar', en: 'Presidente Masaryk: The Boulevard' },
      content: {
        es: `<p>El Presidente Masaryk es el equivalente mexicano de los Campos Elíseos parisinos o la Quinta Avenida neoyorkina. Boutiques de lujo (Hermès, Louis Vuitton, Cartier), restaurantes de alto nivel y hoteles cinco estrellas.</p><p>Para caminar: el tramo de Masaryk entre Arquímedes y Temístocles es el más animado. Los domingos el carril ciclista se llena de familias.</p><p>El <strong>Parque Lincoln</strong> a media cuadra es el pulmón verde del barrio con food trucks, esculturas y la mejor sesión de people-watching de Polanco.</p>`,
        en: `<p>Presidente Masaryk is Mexico's equivalent of Paris's Champs-Élysées or New York's Fifth Avenue. Luxury boutiques (Hermès, Louis Vuitton, Cartier), high-end restaurants and five-star hotels.</p><p>For walking: the Masaryk stretch between Arquímedes and Temístocles is the most lively. On Sundays the bike lane fills with families.</p><p><strong>Parque Lincoln</strong> half a block away is the neighborhood's green lung with food trucks, sculptures and the best people-watching in Polanco.</p>`
      }
    },
    {
      id: 'transporte',
      title: { es: 'Cómo Llegar', en: 'Getting There' },
      content: {
        es: `<p><strong>Metro:</strong> Línea 7 (Rosa), estaciones Polanco o Auditorio. Desde el centro son ~30 minutos.</p><p><strong>Metrobús:</strong> Línea 7, varias estaciones a lo largo de Ejército Nacional.</p><p><strong>Ecobici:</strong> Muchas estaciones en el barrio — ideal para moverse entre el Soumaya, Masaryk y Parque Lincoln.</p><p><strong>Uber/Taxi:</strong> Desde Roma Norte ~$70 MXN, desde el Centro Histórico ~$120 MXN.</p>`,
        en: `<p><strong>Metro:</strong> Line 7 (Pink), Polanco or Auditorio stations. About 30 minutes from downtown.</p><p><strong>Metrobús:</strong> Line 7, several stations along Ejército Nacional.</p><p><strong>Ecobici:</strong> Many stations in the neighborhood — ideal for moving between Soumaya, Masaryk and Parque Lincoln.</p><p><strong>Uber/Taxi:</strong> From Roma Norte ~$70 MXN, from Historic Center ~$120 MXN.</p>`
      }
    }
  ],
  cta: {
    title: { es: 'Alójate en Polanco', en: 'Stay in Polanco' },
    description: {
      es: 'Hospédate en el barrio más cosmopolita de CDMX, a pasos de los mejores restaurantes y museos.',
      en: "Stay in Mexico City's most cosmopolitan neighborhood, steps from the finest restaurants and museums."
    },
    buttonText: { es: 'Ver Opciones', en: 'See Options' },
    buttonLink: '/properties?zone=Polanco'
  },
  relatedSlugs: ['cdmx', 'condesa', 'roma-norte', 'museos-cdmx', 'restaurantes-cdmx', 'bares-cdmx']
};

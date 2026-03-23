import { Guide } from './types';

export const coyoacanGuide: Guide = {
  slug: 'coyoacan',
  title: { es: 'Coyoacán, CDMX', en: 'Coyoacán, Mexico City' },
  subtitle: {
    es: 'Guía completa de Coyoacán: Casa Azul de Frida Kahlo, mercados, plazas, restaurantes y los.',
    en: 'Complete guide to Coyoacán: Frida Kahlo',
  },
  heroImage: 'https://images.unsplash.com/photo-1609175332673-a53f9ee04690?w=800&h=500&fit=crop&q=80',
  category: 'neighborhood',
  region: 'cdmx',
  readTime: 11,
  tags: {
    es: ['coyoacán', 'frida kahlo', 'mercado', 'arte', 'cdmx'],
    en: ['coyoacan', 'frida kahlo', 'market', 'art', 'cdmx']
  },
  metaTitle: { es: 'Coyoacán CDMX | Guía Completa del Barrio Bohemio', en: 'Coyoacán Mexico City | Complete Bohemian Neighborhood Guide' },
  metaDescription: {
    es: 'Guía completa de Coyoacán: Casa Azul de Frida Kahlo, mercados, plazas, restaurantes y los rincones que los turistas no encuentran.',
    en: "Complete guide to Coyoacán: Frida Kahlo's Blue House, markets, plazas, restaurants and the corners tourists don't find."
  },
  sections: [
    {
      id: 'por-que-coyoacan',
      title: { es: 'Por Qué Coyoacán es Especial', en: 'Why Coyoacán is Special' },
      content: {
        es: `<p><strong>Coyoacán es la anomalía de CDMX.</strong> Mientras el resto de la ciudad creció en vertical y en velocidad, Coyoacán mantuvo sus calles empedradas, sus casas coloniales y su ritmo de pueblo.</p><p>Es el barrio más literario y artístico de la ciudad. Aquí vivieron Frida Kahlo, Diego Rivera, León Trotsky y una generación de intelectuales mexicanos. Esa energía creativa todavía se siente en sus plazas, librerías independientes y cafés.</p>`,
        en: `<p><strong>Coyoacán is Mexico City's anomaly.</strong> While the rest of the city grew upward and faster, Coyoacán kept its cobblestone streets, colonial houses and village pace.</p><p>It's the city's most literary and artistic neighborhood. Frida Kahlo, Diego Rivera, Leon Trotsky and a generation of Mexican intellectuals lived here. That creative energy is still felt in its plazas, independent bookstores and cafés.</p>`
      }
    },
    {
      id: 'casa-azul',
      title: { es: 'Casa Azul de Frida Kahlo', en: "Frida Kahlo's Blue House" },
      content: {
        es: `<p>La Casa Azul es la experiencia más buscada de Coyoacán. La casa donde nació y vivió Frida Kahlo es ahora el Museo Frida Kahlo, uno de los más visitados de México.</p><p>Lo que hace especial esta visita es la intimidad: el estudio con pinturas inacabadas, su colección personal de arte popular mexicano, los corsés decorados que usó durante sus recuperaciones, y su cama con espejo en el techo.</p><p><strong>Consejo crítico:</strong> Los boletos se agotan con semanas de anticipación. Compra en línea en museofridakahlo.org.mx antes de llegar a CDMX. Llegada puntual obligatoria. Martes a domingo, ~$250 MXN.</p>`,
        en: `<p>The Blue House is Coyoacán's most sought-after experience. The house where Frida Kahlo was born and lived is now the Frida Kahlo Museum, one of Mexico's most visited.</p><p>What makes this visit special is the intimacy: the studio with unfinished paintings, her personal collection of Mexican folk art, the decorated corsets she wore during her recoveries, and her bed with a ceiling mirror.</p><p><strong>Critical tip:</strong> Tickets sell out weeks in advance. Buy online at museofridakahlo.org.mx before arriving in Mexico City. Punctual arrival mandatory. Tuesday-Sunday, ~$250 MXN.</p>`
      }
    },
    {
      id: 'plazas-mercados',
      title: { es: 'Las Plazas y el Mercado', en: 'The Plazas and the Market' },
      content: {
        es: `<p><strong>Plaza Hidalgo y Jardín Centenario</strong> son el corazón de Coyoacán. Dos plazas adyacentes con la Parroquia de San Juan Bautista (siglo XVI) al fondo. Los fines de semana hay artesanos, músicos y una feria de libros permanente.</p><p><strong>Mercado de Coyoacán</strong> — A media cuadra de las plazas. El tostadas de La Güera (tostadas con mariscos) son famosas en toda la ciudad. Las tlayudas, memelas y aguas frescas artesanales hacen de este mercado una experiencia gastronómica.</p>`,
        en: `<p><strong>Plaza Hidalgo and Jardín Centenario</strong> are the heart of Coyoacán. Two adjacent plazas with the 16th-century Parroquia de San Juan Bautista in the background. On weekends there are artisans, musicians and a permanent book fair.</p><p><strong>Mercado de Coyoacán</strong> — Half a block from the plazas. La Güera's tostadas (tostadas with seafood) are famous across the city. The tlayudas, memelas and artisanal fresh waters make this market a gastronomic experience.</p>`
      }
    },
    {
      id: 'museo-trotsky',
      title: { es: 'Casa Museo León Trotsky', en: "Leon Trotsky House Museum" },
      content: {
        es: `<p>El revolucionario ruso León Trotsky vivió y fue asesinado en esta casa en 1940. El museo conserva la casa tal como era entonces, incluyendo el búnker de concreto que construyó para protegerse, las marcas de bala del primer atentado fallido, y el escritorio donde estaba trabajando cuando fue atacado.</p><p>Es una de las experiencias más cargadas de historia en CDMX. A pocas cuadras de la Casa Azul. Entrada ~$50 MXN. Martes a domingo.</p>`,
        en: `<p>Russian revolutionary Leon Trotsky lived and was assassinated in this house in 1940. The museum preserves the house as it was, including the concrete bunker he built for protection, the bullet marks from the first failed assassination attempt, and the desk where he was working when attacked.</p><p>It's one of Mexico City's most history-charged experiences. A few blocks from the Blue House. Entry ~$50 MXN. Tuesday-Sunday.</p>`
      }
    },
    {
      id: 'rincones-escondidos',
      title: { es: 'Rincones que los Turistas No Encuentran', en: "Corners Tourists Don't Find" },
      content: {
        es: `<p><strong>Viveros de Coyoacán</strong> — Un bosque urbano de 40 hectáreas, completamente gratuito. Senderos, árboles centenarios, pájaros. Es donde los coyoacanenses vienen a respirar.</p><p><strong>Anahuacalli (Museo Diego Rivera)</strong> — Diseñado por Diego Rivera como depósito para su colección prehispánica personal. El edificio es una pirámide de ladrillos. Menos visitado que la Casa Azul pero igualmente fascinante. Precios accesibles.</p><p><strong>Barrio de La Conchita</strong> — Calles empedradas, silencio, arquitectura colonial intacta. El lugar favorito de los fotógrafos.</p>`,
        en: `<p><strong>Viveros de Coyoacán</strong> — A 40-hectare urban forest, completely free. Trails, century-old trees, birds. This is where Coyoacán residents come to breathe.</p><p><strong>Anahuacalli (Diego Rivera Museum)</strong> — Designed by Diego Rivera as a repository for his personal pre-Hispanic collection. The building is a brick pyramid. Less visited than the Blue House but equally fascinating. Accessible prices.</p><p><strong>Barrio de La Conchita</strong> — Cobblestone streets, silence, intact colonial architecture. Photographers' favorite spot.</p>`
      }
    },
    {
      id: 'como-llegar',
      title: { es: 'Cómo Llegar', en: 'Getting There' },
      content: {
        es: `<p><strong>Metro:</strong> Línea 3 (Verde), estación Viveros o Coyoacán. Desde el centro ~25 minutos. Desde la estación camina o toma un trolebús hasta el centro del barrio.</p><p><strong>Desde Roma-Condesa:</strong> En bicicleta por Ciclovía de Insurgentes es una opción agradable (~25 minutos). También Uber ~$80 MXN.</p><p><strong>Consejo de tiempo:</strong> Visita entre semana para evitar las multitudes del fin de semana, especialmente en la Casa Azul.</p>`,
        en: `<p><strong>Metro:</strong> Line 3 (Green), Viveros or Coyoacán station. About 25 minutes from downtown. From the station walk or take a trolleybus to the neighborhood center.</p><p><strong>From Roma-Condesa:</strong> By bike along the Insurgentes Ciclovía is a pleasant option (~25 minutes). Also Uber ~$80 MXN.</p><p><strong>Timing tip:</strong> Visit on weekdays to avoid weekend crowds, especially at the Blue House.</p>`
      }
    }
  ],
  cta: {
    title: { es: 'Alójate en Coyoacán', en: 'Stay in Coyoacán' },
    description: {
      es: 'Hospédate en el barrio más pintoresco de CDMX, a pasos de la Casa Azul y los mejores mercados.',
      en: "Stay in Mexico City's most picturesque neighborhood, steps from the Blue House and the best markets."
    },
    buttonText: { es: 'Ver Opciones', en: 'See Options' },
    buttonLink: '/properties?zone=Coyoacan'
  },
  relatedSlugs: ['cdmx', 'museos-cdmx', 'xochimilco', '100-cosas-hacer-cdmx', 'teotihuacan']
};

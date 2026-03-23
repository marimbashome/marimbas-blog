import { Guide } from './types';

export const teotihuacanGuide: Guide = {
  slug: 'teotihuacan',
  title: { es: 'Teotihuacán', en: 'Teotihuacan' },
  subtitle: {
    es: 'Todo lo que necesitas saber para visitar Teotihuacán: cómo llegar, qué ver, horarios.',
    en: 'Everything you need to know to visit Teotihuacan: how to get there, what to see, hours.',
  },
  heroImage: 'https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=800&h=500&fit=crop&q=80',
  category: 'attraction',
  region: 'cdmx',
  readTime: 10,
  tags: {
    es: ['teotihuacán', 'pirámides', 'arqueología', 'cdmx', 'excursión'],
    en: ['teotihuacan', 'pyramids', 'archaeology', 'cdmx', 'day trip']
  },
  metaTitle: { es: 'Teotihuacán | Guía Completa para Visitar las Pirámides', en: 'Teotihuacan | Complete Guide to Visiting the Pyramids' },
  metaDescription: {
    es: 'Todo lo que necesitas saber para visitar Teotihuacán: cómo llegar, qué ver, horarios, precios y consejos para aprovechar al máximo tu visita.',
    en: 'Everything you need to know to visit Teotihuacan: how to get there, what to see, hours, prices and tips to make the most of your visit.'
  },
  sections: [
    {
      id: 'por-que-visitar',
      title: { es: 'Por Qué Visitar Teotihuacán', en: 'Why Visit Teotihuacan' },
      content: {
        es: `<p>Teotihuacán es la zona arqueológica más visitada de México y una de las más importantes del mundo. Fue la ciudad más grande de Mesoamérica entre los años 100 y 650 d.C., con una población de 100,000-200,000 personas — más grande que la Roma imperial de su época.</p><p>Las pirámides del Sol y de la Luna, la Calzada de los Muertos y los murales policromados del Palacio de Quetzalpapalotl son imprescindibles. La escala monumental del sitio necesita experimentarse en persona para comprenderse.</p>`,
        en: `<p>Teotihuacan is Mexico's most visited archaeological zone and one of the most important in the world. It was Mesoamerica's largest city between 100 and 650 AD, with a population of 100,000-200,000 people — larger than imperial Rome at its time.</p><p>The Pyramids of the Sun and Moon, the Avenue of the Dead and the polychrome murals of the Palace of Quetzalpapalotl are unmissable. The monumental scale of the site needs to be experienced in person to be understood.</p>`
      }
    },
    {
      id: 'que-ver',
      title: { es: 'Qué Ver: Las Estructuras Principales', en: 'What to See: Main Structures' },
      content: {
        es: `<p><strong>Pirámide del Sol</strong> — La tercera pirámide más grande del mundo. 65 metros de altura, 248 escalones. Las vistas desde la cima son impresionantes. Subir toma 20-30 minutos según tu condición física.</p><p><strong>Pirámide de la Luna</strong> — Más pequeña pero arquitectónicamente más refinada. Vista directa hacia la Calzada de los Muertos desde la cima. Menos concurrida que la del Sol.</p><p><strong>Calzada de los Muertos</strong> — El eje principal del sitio, 4 km de largo. Los españoles la llamaron así porque pensaron que era un cementerio; en realidad era el boulevard central de la ciudad.</p><p><strong>Ciudadela y Templo de Quetzalcóatl</strong> — La plaza más grande del sitio. El templo tiene los relieves de serpientes emplumadas más importantes de Mesoamérica.</p>`,
        en: `<p><strong>Pyramid of the Sun</strong> — The third largest pyramid in the world. 65 meters tall, 248 steps. Views from the top are impressive. Climbing takes 20-30 minutes depending on your fitness level.</p><p><strong>Pyramid of the Moon</strong> — Smaller but architecturally more refined. Direct view down the Avenue of the Dead from the top. Less crowded than the Sun pyramid.</p><p><strong>Avenue of the Dead</strong> — The main axis of the site, 4 km long. The Spanish named it thinking it was a cemetery; it was actually the city's central boulevard.</p><p><strong>Citadel and Temple of Quetzalcoatl</strong> — The largest plaza on the site. The temple has the most important feathered serpent reliefs in Mesoamerica.</p>`
      }
    },
    {
      id: 'como-llegar',
      title: { es: 'Cómo Llegar desde CDMX', en: 'How to Get There from Mexico City' },
      content: {
        es: `<p><strong>Autobús desde Central del Norte</strong> — La opción más económica y sorprendentemente eficiente. Autobuses directos a Teotihuacán cada 15-20 minutos, $60-80 MXN ida. El viaje dura 50-60 minutos.</p><p><strong>Tour organizado</strong> — Desde $400 MXN incluye transporte + guía especializado. Recomendado para quienes prefieren contexto histórico.</p><p><strong>Uber/auto propio</strong> — 50 minutos por autopista desde CDMX. Estacionamiento ~$100 MXN.</p><p><strong>Precios 2026</strong>: entrada adulto ~$100 MXN (INAH), estacionamiento ~$100 MXN. Globo aerostático desde ~$2,500 MXN.</p><p><strong>Horarios</strong>: abierto diariamente 9am-5pm. Llegar antes de las 9am para menos gente y temperatura más fresca.</p>`,
        en: `<p><strong>Bus from Terminal del Norte</strong> — The most economical and surprisingly efficient option. Direct buses to Teotihuacan every 15-20 minutes, $60-80 MXN one way. Journey takes 50-60 minutes.</p><p><strong>Organized tour</strong> — From $400 MXN includes transport + specialized guide. Recommended for those who prefer historical context.</p><p><strong>Uber/own car</strong> — 50 minutes by highway from Mexico City. Parking ~$100 MXN.</p><p><strong>2026 Prices</strong>: adult entry ~$100 MXN (INAH), parking ~$100 MXN. Hot air balloon from ~$2,500 MXN.</p><p><strong>Hours</strong>: open daily 9am-5pm. Arrive before 9am for fewer crowds and cooler temperatures.</p>`
      }
    },
    {
      id: 'consejos',
      title: { es: 'Consejos Prácticos', en: 'Practical Tips' },
      content: {
        es: `<p>Teotihuacán parece un sitio fácil de visitar pero hay errores comunes que arruinan la experiencia:</p><ul><li><strong>Protector solar obligatorio</strong> — El sitio tiene muy poco sombreado. SPF 50+ es necesario.</li><li><strong>Zapatos cerrados</strong> con buen agarre para las escaleras empinadas de las pirámides.</li><li><strong>Agua abundante</strong> — Es cara dentro del sitio. Lleva al menos 2 litros por persona.</li><li><strong>Llega temprano</strong> — Las primeras 2 horas (9-11am) tienen menos turistas y hace menos calor.</li><li><strong>No compres obsidiana en la entrada</strong> — Los precios se duplican. Dentro del sitio hay tiendas con mejores precios y calidad.</li></ul>`,
        en: `<p>Teotihuacan seems like an easy site to visit but there are common mistakes that ruin the experience:</p><ul><li><strong>Sunscreen is mandatory</strong> — The site has very little shade. SPF 50+ is necessary.</li><li><strong>Closed shoes</strong> with good grip for the steep pyramid stairs.</li><li><strong>Plenty of water</strong> — It's expensive inside the site. Bring at least 2 liters per person.</li><li><strong>Arrive early</strong> — The first 2 hours (9-11am) have fewer tourists and lower temperatures.</li><li><strong>Don't buy obsidian at the entrance</strong> — Prices are doubled there. Inside the site there are shops with better prices and quality.</li></ul>`
      }
    },
    {
      id: 'itinerario',
      title: { es: 'Itinerario Recomendado de Medio Día', en: 'Recommended Half-Day Itinerary' },
      content: {
        es: `<p><strong>8:00am</strong>: Llega a Puerta 2, dirígete a la Pirámide del Sol. Sube lentamente, descansa en la mitad.</p><p><strong>9:30am</strong>: Baja, camina hacia la Calzada de los Muertos hacia el norte.</p><p><strong>10:30am</strong>: Llega a la Pirámide de la Luna. Sube si aún tienes energía.</p><p><strong>11:30am</strong>: Desciende y explora la Ciudadela y el Templo de Quetzalcóatl.</p><p><strong>12:30pm</strong>: Sal antes del calor extremo del mediodía. Almuerza en San Juan Teotihuacán pueblo.</p>`,
        en: `<p><strong>8:00am</strong>: Arrive at Gate 2, head to the Pyramid of the Sun. Climb slowly, rest halfway up.</p><p><strong>9:30am</strong>: Descend, walk along the Avenue of the Dead heading north.</p><p><strong>10:30am</strong>: Arrive at the Pyramid of the Moon. Climb if you still have energy.</p><p><strong>11:30am</strong>: Descend and explore the Citadel and Temple of Quetzalcoatl.</p><p><strong>12:30pm</strong>: Leave before extreme midday heat. Lunch in San Juan Teotihuacan town.</p>`
      }
    }
  ],
  cta: {
    title: { es: 'Alójate en CDMX para tu Visita', en: 'Stay in Mexico City for Your Visit' },
    description: {
      es: 'Hospédate en Roma Norte o Condesa y haz la excursión a Teotihuacán en un día.',
      en: 'Stay in Roma Norte or Condesa and do the Teotihuacan day trip from there.'
    },
    buttonText: { es: 'Ver Opciones', en: 'See Options' },
    buttonLink: '/properties?zone=RomaNorte'
  },
  relatedSlugs: ['cdmx', 'museos-cdmx', '100-cosas-hacer-cdmx', 'metro-cdmx', 'condesa']
};

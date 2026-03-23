import { Guide } from './types';

export const luchaLibreGuide: Guide = {
  slug: 'lucha-libre',
  title: { es: 'Lucha Libre Mexicana', en: 'Mexican Lucha Libre' },
  subtitle: {
    es: 'Descubre la Lucha Libre mexicana: historia, arenas principales, cómo comprar boletos y.',
    en: 'Discover Mexican Lucha Libre: history, main arenas, how to buy tickets and what to expect.',
  },
  heroImage: 'https://images.unsplash.com/photo-1567605747380-948a9c19f1c3?w=800&h=500&fit=crop&q=80',
  category: 'attraction',
  region: 'cdmx',
  readTime: 9,
  tags: {
    es: ['lucha libre', 'deporte', 'cultura', 'entretenimiento', 'cdmx'],
    en: ['lucha libre', 'sport', 'culture', 'entertainment', 'cdmx']
  },
  metaTitle: { es: 'Lucha Libre Mexicana | Guía Completa CDMX', en: 'Mexican Lucha Libre | Complete CDMX Guide' },
  metaDescription: {
    es: 'Descubre la Lucha Libre mexicana: historia, arenas principales, cómo comprar boletos y qué esperar en tu primera función.',
    en: "Discover Mexican Lucha Libre: history, main arenas, how to buy tickets and what to expect at your first show."
  },
  sections: [
    {
      id: 'que-es',
      title: { es: 'Qué es la Lucha Libre', en: 'What is Lucha Libre' },
      content: {
        es: `<p><strong>La Lucha Libre mexicana no es solo wrestling con máscaras. Es teatro, atletismo, cultura popular y uno de los rituales colectivos más singulares de México.</strong></p><p>El público tiene relaciones emocionales genuinas con los luchadores. Los niños aprenden a distinguir entre rudos y técnicos antes que a leer. Los adultos mayores van con sus nietos como tradición familiar intergeneracional.</p><p>Es catártico: un lugar donde la tensión social se resuelve en el ring, donde la ficción del bien contra el mal toca algo real.</p>`,
        en: `<p><strong>Mexican Lucha Libre is not just wrestling with masks. It's theater, athletics, popular culture and one of Mexico's most unique collective rituals.</strong></p><p>The audience has genuine emotional relationships with wrestlers. Kids learn to distinguish between rudos and técnicos before they can read. Older adults go with their grandchildren as an intergenerational family tradition.</p><p>It's cathartic: a place where social tension gets resolved in the ring, where the fiction of good versus evil touches something real.</p>`
      }
    },
    {
      id: 'dos-arenas',
      title: { es: 'Las Dos Arenas Principales', en: 'The Two Main Arenas' },
      content: {
        es: `<p><strong>Arena México</strong> — La "Catedral de la Lucha Libre". Capacidad para 17,000 personas. Sede del CMLL (Consejo Mundial de Lucha Libre). Funciones los viernes a las 20:30 y domingos a las 17:00. Ubicada en la Col. Doctores, Metro Balderas.</p><p><strong>Arena Coliseo</strong> — Más íntima (3,500 personas), ambiente clásico sin pantallas gigantes. Funciones los martes y sábados. También sede del CMLL. Metro Allende o Bellas Artes.</p>`,
        en: `<p><strong>Arena México</strong> — The "Cathedral of Lucha Libre." Capacity for 17,000 people. Home of CMLL (World Lucha Libre Council). Shows on Fridays at 8:30pm and Sundays at 5pm. Located in Col. Doctores, Metro Balderas.</p><p><strong>Arena Coliseo</strong> — More intimate (3,500 people), classic atmosphere without giant screens. Shows on Tuesdays and Saturdays. Also CMLL venue. Metro Allende or Bellas Artes.</p>`
      }
    },
    {
      id: 'boletos',
      title: { es: 'Cómo Comprar Boletos', en: 'How to Buy Tickets' },
      content: {
        es: `<p>Los boletos se compran en taquilla el mismo día o en línea en <strong>taquilla.cmll.com</strong>. Los precios van de $150 a $600 MXN dependiendo del lugar.</p><p><strong>Zonas:</strong></p><ul><li><strong>Palcos (ringside):</strong> más caro, vista perfecta, riesgo de salpicaduras</li><li><strong>Preferente:</strong> precio medio, buena vista lateral</li><li><strong>General (arriba):</strong> económico, vista panorámica completa del ring</li></ul><p>Para turistas, el General desde arriba puede ser más espectacular porque ves toda la coreografía.</p>`,
        en: `<p>Tickets are available at the box office on the day or online at <strong>taquilla.cmll.com</strong>. Prices range from $150 to $600 MXN depending on the section.</p><p><strong>Sections:</strong></p><ul><li><strong>Ringside (Palcos):</strong> most expensive, perfect view, risk of splashes</li><li><strong>Preferente:</strong> mid-price, good lateral view</li><li><strong>General (upper):</strong> budget-friendly, full panoramic view of the ring</li></ul><p>For tourists, the upper General section can be more spectacular because you see all the choreography.</p>`
      }
    },
    {
      id: 'primera-vez',
      title: { es: 'Tu Primera Función: Qué Esperar', en: 'Your First Show: What to Expect' },
      content: {
        es: `<p>Una función estándar tiene 7-8 peleas de distintas categorías: luchadoras, parejas, tríos. La lucha estelar (la principal) es la última y la más espectacular.</p><p>El ambiente es ruidoso, familiar y apasionado. Hay vendedores ambulantes de frituras y cerveza en las gradas. Los rudos insultan al público deliberadamente para provocar reacción.</p><p><strong>Vocabulario básico:</strong> Técnico = héroe, Rudo = villano, Caída = round, Tope = ataque suicida al exterior.</p>`,
        en: `<p>A standard show has 7-8 fights in different categories: women's wrestling, tag teams, trios. The main event (lucha estelar) is last and most spectacular.</p><p>The atmosphere is loud, family-friendly and passionate. Vendors sell snacks and beer in the stands. Rudos deliberately insult the audience to provoke a reaction.</p><p><strong>Basic vocabulary:</strong> Técnico = hero, Rudo = villain, Caída = round, Tope = suicide dive to the outside.</p>'`
      }
    },
    {
      id: 'mascaras',
      title: { es: 'Las Máscaras: Corazón de la Lucha Libre', en: "Masks: The Heart of Lucha Libre" },
      content: {
        es: `<p>La máscara es la identidad del luchador. Perderla en una "Lucha de Apuestas" (apuesta la máscara contra la máscara o cabellera) es el evento más dramático de la Lucha Libre.</p><p>El luchador desenmascarado debe revelar su nombre real — una humillación pública que puede redefinir toda su carrera. Por eso las luchas de apuestas atraen audiencias masivas y precios de boleto que se multiplican.</p><p>Los luchadores icónicos: El Santo (máscara de plata), Blue Demon, Mil Máscaras, y la nueva generación: Volador Jr., Místico, La Máscara.</p>`,
        en: `<p>The mask is the wrestler's identity. Losing it in a "Lucha de Apuestas" (mask vs. mask or hair bet) is the most dramatic event in Lucha Libre.</p><p>The unmasked wrestler must reveal their real name — a public humiliation that can redefine their entire career. That's why mask matches attract massive audiences and ticket prices multiply.</p><p>Iconic wrestlers: El Santo (silver mask), Blue Demon, Mil Máscaras, and the new generation: Volador Jr., Místico, La Máscara.</p>`
      }
    }
  ],
  cta: {
    title: { es: 'Alójate en el Centro Histórico', en: 'Stay in the Historic Center' },
    description: {
      es: 'Quédate cerca de las arenas de Lucha Libre y del corazón histórico de la ciudad.',
      en: 'Stay near the Lucha Libre arenas and the historical heart of the city.'
    },
    buttonText: { es: 'Ver Opciones', en: 'See Options' },
    buttonLink: '/properties?zone=CentroHistorico'
  },
  relatedSlugs: ['cdmx', 'museos-cdmx', 'tacos-cdmx', 'roma-norte', 'condesa']
};

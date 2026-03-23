import { Guide } from './types';

export const queEmpacarMexicoGuide: Guide = {
  slug: 'que-empacar-mexico',
  title: { es: 'Qué Empacar para México', en: 'What to Pack for Mexico' },
  subtitle: {
    es: 'Lista completa de qué empacar para México: ropa por clima, documentos, tecnología y lo.',
    en: 'Complete packing list for Mexico: clothes by climate, documents, technology and what you.',
  },
  heroImage: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&h=500&fit=crop&q=80',
  category: 'practical',
  region: 'all',
  readTime: 8,
  tags: {
    es: ['equipaje', 'maleta', 'viaje', 'qué empacar', 'consejos'],
    en: ['luggage', 'packing', 'travel', 'what to pack', 'tips']
  },
  metaTitle: { es: 'Qué Empacar para México 2026 | Lista Completa', en: 'What to Pack for Mexico 2026 | Complete List' },
  metaDescription: {
    es: 'Lista completa de qué empacar para México: ropa por clima, documentos, tecnología y lo que definitivamente NO necesitas traer.',
    en: 'Complete packing list for Mexico: clothes by climate, documents, technology and what you definitely do NOT need to bring.'
  },
  sections: [
    {
      id: 'entender-clima',
      title: { es: 'Entender el Clima Antes de Empacar', en: 'Understanding the Climate Before Packing' },
      content: {
        es: `<p><strong>CDMX - Temporada Seca (Nov-Abril):</strong> Días cálidos 20-25°C, noches frescas 10-15°C. Cielos despejados la mayoría de los días.</p><p><strong>CDMX - Temporada Lluvias (May-Oct):</strong> Lluvias por las tardes y noches, mañanas soleadas. Temperatura similar pero más húmedo.</p><p><strong>Tuxtla:</strong> Caliente todo el año (28-35°C). Húmedo especialmente en lluvias (mayo-octubre).</p><p><strong>San Cristóbal:</strong> Frío (12-18°C). Noches bajo 10°C en invierno. Es la zona más fría de tu itinerario.</p><p><strong>Palenque:</strong> Caliente y húmedo (28-32°C). La selva requiere preparación diferente.</p>`,
        en: `<p><strong>CDMX - Dry Season (Nov-April):</strong> Warm days 20-25°C, cool nights 10-15°C. Clear skies most days.</p><p><strong>CDMX - Rainy Season (May-Oct):</strong> Afternoon and evening showers, sunny mornings. Similar temperature but more humid.</p><p><strong>Tuxtla:</strong> Hot year-round (28-35°C). Humid especially during rains (May-October).</p><p><strong>San Cristóbal:</strong> Cold (12-18°C). Nights below 10°C in winter. It is the coldest area of your itinerary.</p><p><strong>Palenque:</strong> Hot and humid (28-32°C). The jungle requires different preparation.</p>`
      }
    },
    {
      id: 'ropa',
      title: { es: 'Ropa: Sistema de Capas', en: 'Clothing: Layering System' },
      content: {
        es: `<p>México tiene microclimas tan distintos en un mismo viaje que el sistema de capas es esencial:</p><ul><li><strong>Base ligera</strong> — camisetas de manga corta y pantalones ligeros para Tuxtla y CDMX en verano</li><li><strong>Capa media</strong> — sudadera o chamarra ligera para CDMX por las noches y San Cristóbal</li><li><strong>Capa exterior</strong> — impermeable ligero plegable. Las lluvias de tarde en CDMX y Chiapas son frecuentes</li></ul><p>Para San Cristóbal específicamente: lleva ropa de abrigo real. Los turistas que subestiman el frío chiapaneco lo pasan mal.</p>`,
        en: `<p>Mexico has such distinct microclimates in a single trip that the layering system is essential:</p><ul><li><strong>Light base</strong> — short-sleeve shirts and light pants for Tuxtla and CDMX in summer</li><li><strong>Mid layer</strong> — sweatshirt or light jacket for Mexico City evenings and San Cristóbal</li><li><strong>Outer layer</strong> — lightweight foldable raincoat. Afternoon rains in CDMX and Chiapas are frequent</li></ul><p>For San Cristóbal specifically: bring real warm clothing. Tourists who underestimate the Chiapas cold have a rough time.</p>`
      }
    },
    {
      id: 'calzado',
      title: { es: 'El Calzado: Decisión Crítica', en: 'Footwear: Critical Decision' },
      content: {
        es: `<p>El calzado determina si disfrutas el viaje o lo sufres.</p><p><strong>Para CDMX:</strong> Zapatos cómodos impermeables o con buen drenaje. El adoquín mojado es resbaloso. Tenis con agarre para museos y caminar largas distancias.</p><p><strong>Para Chiapas y naturaleza:</strong> Tenis con agarre y tobillo protegido (no sandalias en zonas con serpientes). Zapatos de trekking ideales si visitas Palenque, Bonampak o cenotes.</p><p><strong>Regla general:</strong> No uses sandalias en zonas rurales o selva. En CDMX está bien, pero fuera de la ciudad no es recomendable.</p>`,
        en: `<p>Footwear determines whether you enjoy the trip or suffer through it.</p><p><strong>For Mexico City:</strong> Comfortable waterproof shoes or good drainage. Wet cobblestones are slippery. Grip trainers for museums and long walks.</p><p><strong>For Chiapas and nature:</strong> Grip trainers with ankle protection (no sandals in snake-prone areas). Trekking shoes ideal if visiting Palenque, Bonampak or cenotes.</p><p><strong>General rule:</strong> Do not wear sandals in rural areas or jungle. Fine in CDMX, but not recommended outside the city.</p>`
      }
    },
    {
      id: 'documentos',
      title: { es: 'Documentos y Dinero', en: 'Documents and Money' },
      content: {
        es: `<p><strong>Pasaporte:</strong> Vigencia mínima de 6 meses. Fotocopia separada del original (en hotel, no en la maleta).</p><p><strong>Seguro de Viaje:</strong> Guarda el número de contacto en tu teléfono Y en papel. Es tu recurso en emergencias.</p><p><strong>Tarjeta de Débito o Crédito:</strong> Preferiblemente con chip. Avisa a tu banco que viajas a México.</p><p><strong>Efectivo en Pesos:</strong> Lleva algo desde el aeropuerto. Los cajeros son abundantes en CDMX pero menos en zonas rurales de Chiapas.</p><p><strong>Reserva de emergencia:</strong> Guarda billetes por separado, en lugar diferente a tu cartera principal.</p>`,
        en: `<p><strong>Passport:</strong> Minimum 6 months validity. Photocopy separate from the original (in hotel safe, not in luggage).</p><p><strong>Travel Insurance:</strong> Save the contact number on your phone AND on paper. It is your resource in emergencies.</p><p><strong>Debit or Credit Card:</strong> Preferably with chip. Notify your bank you are traveling to Mexico.</p><p><strong>Cash in Pesos:</strong> Bring some from the airport. ATMs are abundant in Mexico City but less so in rural Chiapas.</p><p><strong>Emergency reserve:</strong> Keep bills separately, in a different place from your main wallet.</p>`
      }
    },
    {
      id: 'tecnologia',
      title: { es: 'Tecnología y Conectividad', en: 'Technology and Connectivity' },
      content: {
        es: `<p><strong>Adaptador de Enchufe:</strong> No necesario. México usa enchufes americanos tipo A/B, igual que EE.UU.</p><p><strong>Powerbank:</strong> Obligatorio. Los días turísticos agotarán tu batería rápidamente.</p><p><strong>eSIM o SIM Local:</strong> Compra una SIM de Telcel o AT&T en el aeropuerto. Son económicas y funcionan bien. Si usas eSIM, actívala antes de viajar.</p><p><strong>Aplicaciones esenciales:</strong> Google Maps offline (descarga CDMX y Chiapas), Uber, Google Translate con español descargado.</p>`,
        en: `<p><strong>Plug Adapter:</strong> Not needed. Mexico uses American type A/B plugs, same as the USA.</p><p><strong>Powerbank:</strong> Mandatory. Tourist days will drain your battery quickly.</p><p><strong>eSIM or Local SIM:</strong> Buy a Telcel or AT&T SIM at the airport. They are affordable and work well. If using eSIM, activate before traveling.</p><p><strong>Essential apps:</strong> Google Maps offline (download CDMX and Chiapas), Uber, Google Translate with Spanish downloaded.</p>`
      }
    },
    {
      id: 'no-traer',
      title: { es: 'Lo Que NO Necesitas Traer', en: "What You Do NOT Need to Bring" },
      content: {
        es: `<p>Esto es lo que los turistas traen innecesariamente y les pesa la maleta:</p><ul><li><strong>Champú y gel tamaño normal</strong> — Las farmacias mexicanas tienen de todo más barato</li><li><strong>Botiquín pesado</strong> — Las farmacias tienen todo, incluyendo médico de turno</li><li><strong>Moneda extranjera</strong> — Solo pesos mexicanos; cambia en aeropuerto o banco</li><li><strong>Ropa para muchas temporadas</strong> — Mantén la maleta ligera; puedes lavar si es necesario</li><li><strong>Toalla grande</strong> — Los hoteles las proveen; si vas a camping lleva una de microfibra compacta</li></ul>`,
        en: `<p>This is what tourists unnecessarily bring and end up with heavy luggage:</p><ul><li><strong>Full-size shampoo and gel</strong> — Mexican pharmacies have everything cheaper</li><li><strong>Heavy first aid kit</strong> — Pharmacies have everything, including on-duty doctors</li><li><strong>Foreign currency</strong> — Mexican pesos only; exchange at airport or bank</li><li><strong>Clothes for multiple seasons</strong> — Keep luggage light; you can wash if needed</li><li><strong>Large towel</strong> — Hotels provide them; if camping bring a compact microfiber one</li></ul>`
      }
    }
  ],
  cta: {
    title: { es: 'Lista para Tu Viaje a México', en: 'Ready for Your Mexico Trip' },
    description: {
      es: 'Con esta lista ya sabes qué empacar. Ahora encuentra el hospedaje perfecto en CDMX o Chiapas.',
      en: "With this list you know what to pack. Now find the perfect accommodation in Mexico City or Chiapas."
    },
    buttonText: { es: 'Ver Opciones', en: 'See Options' },
    buttonLink: '/properties'
  },
  relatedSlugs: ['seguridad-mexico', 'cdmx', 'digital-nomads-mexico', 'mundial-2026', 'merida-yucatan']
};

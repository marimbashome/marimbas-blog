import { Guide } from './types';

export const cancunGuide: Guide = {
  slug: 'cancun',
  category: 'city',
  region: 'all',
  title: {
    es: 'Cancún',
    en: 'Cancun',
  },
  subtitle: {
    es: 'Todo sobre Cancún: desde la Zona Hotelera hasta el centro local, playas gratis, cenotes.',
    en: 'Everything about Cancun: from the Hotel Zone to local downtown, free beaches, cenotes.',
  },
  heroImage: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&h=500&fit=crop&q=80',
  readTime: 10,
  metaTitle: {
    es: 'Guía de Cancún: playas, ruinas, Isla Mujeres y mucho más',
    en: 'Cancun Guide: Beaches, Ruins, Isla Mujeres & More',
  },
  metaDescription: {
    es: 'Todo sobre Cancún: desde la Zona Hotelera hasta el centro local, playas gratis, cenotes, Isla Mujeres, ruinas mayas y vida nocturna. Descubre el verdadero Cancún.',
    en: 'Everything about Cancun: from the Hotel Zone to local downtown, free beaches, cenotes, Isla Mujeres, Mayan ruins, and nightlife. Discover the real Cancun.',
  },
  tags: {
    es: ['Cancún', 'Quintana Roo', 'Playas', 'Ruinas Mayas', 'Caribe', 'Turismo de playa'],
    en: ['Cancun', 'Quintana Roo', 'Beaches', 'Mayan Ruins', 'Caribbean', 'Beach tourism'],
  },
  sections: [
    {
      id: 'por-que-cancun',
      title: {
        es: 'Por Qué Cancún es Más que la Zona Hotelera',
        en: 'Why Cancun is More Than Just the Hotel Zone',
      },
      content: {
        es: `<p><strong>Cancún tiene mala reputación.</strong> La gente piensa: resorts todo incluido, turismo masivo, sin autenticidad. Es verdad que la Zona Hotelera existe, pero es apenas la mitad de la historia. El otro Cancún — el del centro, con sus mercados, su comida callejera, sus taquerías — es donde vive la verdadera energía.</p>

<p><strong>La geografía es rara.</strong> La Zona Hotelera es una barra de tierra de 25 km que se extiende hacia el mar. De un lado: la laguna de Nichupté (tranquila, manglares). Del otro: el Caribe (ese azul que ves en las postales). El centro de Cancún, donde viven 900,000 personas, está a pocos kilómetros. Es como si tuvieran dos ciudades pegadas pero completamente diferentes.</p>

<p><strong>El verdadero atractivo de Cancún son sus alrededores.</strong> No es la ciudad en sí — son las islas cercanas (Isla Mujeres, Cozumel), los cenotes en la península, los pueblos de pescadores, las playas salvajes del norte. Cancún es el hub desde donde sales a explorar. Es el punto de partida, no el destino.</p>

<p><strong>Acceso sin igual.</strong> El Aeropuerto Internacional de Cancún es el más grande de México (después de CDMX). Tienes vuelos directos desde docenas de ciudades. Eso significa que Cancún, para mejor o para peor, es la puerta de entrada al Caribe mexicano.</p>`,
        en: `<p><strong>Cancun has a bad reputation.</strong> People think: all-inclusive resorts, mass tourism, no authenticity. It's true the Hotel Zone exists, but it's barely half the story. The other Cancun — downtown, with its markets, street food, taquerias — is where the real energy lives.</p>

<p><strong>The geography is weird.</strong> The Hotel Zone is a strip of land 25 km long extending into the sea. On one side: the Nichupté lagoon (calm, mangroves). On the other: the Caribbean (that blue you see in postcards). Downtown Cancun, where 900,000 people live, is just a few kilometers away. It's like they have two cities stuck together but completely different.</p>

<p><strong>The real attraction of Cancun is its surroundings.</strong> It's not the city itself — it's the nearby islands (Isla Mujeres, Cozumel), the cenotes on the peninsula, fishing villages, wild northern beaches. Cancun is the hub from which you explore. It's the starting point, not the destination.</p>

<p><strong>Unmatched access.</strong> Cancun International Airport is Mexico's largest (after CDMX). You have direct flights from dozens of cities. That means Cancun, for better or worse, is the gateway to the Mexican Caribbean.</p>`,
      },
    },
    {
      id: 'zona-hotelera',
      title: {
        es: 'La Zona Hotelera: Hoteles, Playas y Clubs',
        en: 'The Hotel Zone: Hotels, Beaches & Clubs',
      },
      content: {
        es: `<p><strong>La Zona Hotelera es el Cancún de las películas.</strong> Hoteles megaestructuras, playas de arena blanca, piscinas infinitas, personal sonriendo, cócteles en vasos de coco. Si buscas comodidad, lujo y no quieres pensar mucho, aquí está.</p>

<p><strong>Playas en la Zona Hotelera:</strong></p>
<ul>
  <li><strong>Playa Caracol:</strong> La más icónica. Blanca, limpia, llena de turistas. Hay acceso público, pero está rodeada de resorts.</li>
  <li><strong>Playa Chac Mool:</strong> Similar a Caracol. Acceso público desde la avenida principal.</li>
  <li><strong>Playa Tortugas:</strong> Al norte de la zona. Aguas más tranquilas, ideal para snorkel casual. Centro acuático con renta de equipos.</li>
  <li><strong>Playa Langosta:</strong> Pequeña, tranquila, menos turista que las otras. Excelente para al atardecer.</li>
</ul>

<p><strong>Resorts:</strong> Si vienes a hospedarte (lo cual tiene sentido si vuelas de lejos), la opción todo incluido es conveniente. Los hoteles varían desde cadenas masivas (Melia, RIU, Grand Palladium) a resorts más boutique. La mayoría tienen playas privadas, lo que significa agua más limpia y menos gente.</p>

<p><strong>Vida nocturna:</strong></p>
<ul>
  <li><strong>Nightclubs:</strong> La Vaquita, Palazzo, Señor Frog's, Dady'O. Música electrónica, reggaeton, mucha fiesta. Spring break energy incluso en temporada baja. Entrada: 250-500 MXN típicamente.</li>
  <li><strong>Beach clubs:</strong> Palazzo, Palazzo Beach Club. Piscinas, DJ, cócteles caros, ambiente de martes a domingo.</li>
  <li><strong>Bares menos intensos:</strong> Hard Rock Café, Friday's, etc. Si no eres de club masivo, hay opciones más calmadas.</li>
</ul>

<p><strong>Honestidad:</strong> Si no estás en un resort todo incluido, comer en la Zona Hotelera es caro. Un taco en una fonda del centro: 20 MXN. Un taco en la Zona Hotelera: 80-100 MXN. Los precios se multiplican.</p>`,
        en: `<p><strong>The Hotel Zone is movie Cancun.</strong> Mega resorts, white sand beaches, infinity pools, smiling staff, cocktails in coconut glasses. If you're looking for comfort, luxury, and don't want to think hard, it's here.</p>

<p><strong>Beaches in the Hotel Zone:</strong></p>
<ul>
  <li><strong>Playa Caracol:</strong> The most iconic. White, clean, full of tourists. There's public access, but it's surrounded by resorts.</li>
  <li><strong>Playa Chac Mool:</strong> Similar to Caracol. Public access from the main avenue.</li>
  <li><strong>Playa Tortugas:</strong> North of the zone. Calmer waters, ideal for casual snorkeling. Water sports center with equipment rentals.</li>
  <li><strong>Playa Langosta:</strong> Small, quiet, less touristy than others. Excellent for sunset.</li>
</ul>

<p><strong>Resorts:</strong> If you're staying (which makes sense if you're flying from far away), all-inclusive is convenient. Hotels range from massive chains (Melia, RIU, Grand Palladium) to more boutique resorts. Most have private beaches, meaning cleaner water and fewer people.</p>

<p><strong>Nightlife:</strong></p>
<ul>
  <li><strong>Nightclubs:</strong> La Vaquita, Palazzo, Señor Frog's, Dady'O. Electronic music, reggaeton, lots of partying. Spring break energy even in low season. Entry: 250-500 MXN typically.</li>
  <li><strong>Beach clubs:</strong> Palazzo, Palazzo Beach Club. Pools, DJ, expensive cocktails, vibe Tuesday through Sunday.</li>
  <li><strong>Less intense bars:</strong> Hard Rock Café, Friday's, etc. If you're not into massive clubs, there are calmer options.</li>
</ul>

<p><strong>Being honest:</strong> If you're not in an all-inclusive resort, eating in the Hotel Zone is expensive. A taco in a downtown fonda: 20 MXN. A taco in the Hotel Zone: 80-100 MXN. Prices multiply.</p>`,
      },
    },
    {
      id: 'centro-cancun',
      title: {
        es: 'El Centro de Cancún: Vida Local, Mercados y Comida Auténtica',
        en: 'Downtown Cancun: Local Life, Markets & Authentic Food',
      },
      content: {
        es: `<p><strong>El centro es donde vive el verdadero Cancún.</strong> Aquí no hay turistas cada cinco pasos. Aquí hay abuelas comprando jitomates, niños en la escuela, gente que vive de verdad. Es caótico, real, delicioso.</p>

<p><strong>Mercado Veintiocho:</strong> El corazón. Un mercado tradicional mexicano donde vende todo: fruta, vegetales, ropa, zapatos, artículos de hogar. Los pisos están mojados, hay gritos, huele a comida y especias. Es lo opuesto a un mall. En el segundo nivel hay fondas — mesas de plástico, comida hecha al momento. Unos tacos de barbacoa con salsa roja: 50 MXN. Una sopa de mariscos: 80 MXN. Real.</p>

<p><strong>Avenida Tulum:</strong> La arteria principal del centro. Comercios, bancos, ropa, farmacias. A pie, sin prisa, puedes descubrir tiendas locales, pequeños restaurantes que sirven comida del día (comida corrida), heladerías.</p>

<p><strong>Gastronomía del centro:</strong></p>
<ul>
  <li><strong>Tacos de cochinita pibil:</strong> Carne de cerdo marinada en achiote, horneada. Especialidad de Yucatán. En el centro encontrarás buenos a precio justo.</li>
  <li><strong>Ceviches y tiraditos:</strong> Por supuesto, con acceso al mar. Restaurantes pequeños pero frescos. Playa del Carmen está al lado, el pescado es del día.</li>
  <li><strong>Comida corrida (almuerzo del día):</strong> Sopa, plato principal (pollo, carne, pescado), arroz, frijoles, agua. Precio: 70-100 MXN. Es el almuerzo real.</li>
  <li><strong>Horchata y marquesitas:</strong> Bebidas y dulces yucatecos. Marquesita es crema y queso en una oblea crujiente. Vicio local.</li>
</ul>

<p><strong>Ambiente:</strong> Más seguro de lo que parece. Es una ciudad de casi un millón de habitantes — tomadas precauciones normales, es tranquilo. A diferencia de la Zona Hotelera (artificial, turística), aquí es vida real.</p>`,
        en: `<p><strong>Downtown is where real Cancun lives.</strong> There's no tourist every five steps. There are grandmothers buying tomatoes, kids in school, people who actually live here. It's chaotic, real, delicious.</p>

<p><strong>Mercado Veintiocho:</strong> The heart. A traditional Mexican market where everything is sold: fruit, vegetables, clothes, shoes, household items. The floors are wet, there are shouts, it smells like food and spices. It's the opposite of a mall. On the second floor there are fondas — plastic tables, food made on the spot. Some barbacoa tacos with red sauce: 50 MXN. A seafood soup: 80 MXN. Real.</p>

<p><strong>Avenida Tulum:</strong> The main artery of downtown. Commerce, banks, clothing, pharmacies. On foot, without rushing, you can discover local shops, small restaurants serving the daily meal (comida corrida), ice cream shops.</p>

<p><strong>Downtown gastronomy:</strong></p>
<ul>
  <li><strong>Cochinita pibil tacos:</strong> Pork marinated in achiote, baked. Yucatán specialty. In downtown you'll find good ones at fair prices.</li>
  <li><strong>Ceviches and tiraditos:</strong> Of course, with sea access. Small but fresh restaurants. Playa del Carmen is nearby, the fish is from the day.</li>
  <li><strong>Comida corrida (daily lunch):</strong> Soup, main course (chicken, beef, fish), rice, beans, water. Price: 70-100 MXN. It's the real lunch.</li>
  <li><strong>Horchata and marquesitas:</strong> Yucatecan drinks and sweets. Marquesita is cream and cheese on a crispy wafer. Local addiction.</li>
</ul>

<p><strong>Atmosphere:</strong> Safer than it appears. It's a city of almost a million people — with normal precautions, it's calm. Unlike the Hotel Zone (artificial, touristy), here it's real life.</p>`,
      },
    },
    {
      id: 'playas-cercanas',
      title: {
        es: 'Las Playas: Playa Delfines Gratis, Playa Norte y Más',
        en: 'The Beaches: Free Delfines Beach, Playa Norte & More',
      },
      content: {
        es: `<p><strong>No necesitas pagar resort para acceder a playas increíbles.</strong> Cancún tiene opciones públicas que rivalizan con cualquier resort en belleza.</p>

<p><strong>Playa Delfines:</strong> La joya escondida. Acceso público completamente gratis. Arena blanca, agua turquesa, no tan llena como Caracol. Tiene estacionamiento (50 MXN), baños públicos, vendedores de comida. Es el secreto de los locales. Quedar aquí al atardecer sin pagar nada: invaluable. Nota: cierra al atardecer, no es 24/7.</p>

<p><strong>Playa Norte de Isla Mujeres:</strong> Técnicamente no es Cancún, pero está a 20 minutos en ferry. Las aguas más tranquilas del Caribe. Arena blanca, el agua es tibio todo el año. Ideal para bucear, nadar tranquilo, estar con familias. Los bares en la playa venden cócteles a precios justos (no es Zona Hotelera). Es el domingo de playa del caribe.</p>

<p><strong>Playas norte (Punta Cancún hacia el norte):</strong> Menos turísticas que las del sur. Aguas más turquesas, menos olas. Acceso público en varios puntos. Algunos tienen palafitos (cabañas sobre el agua) para rentar.</p>

<p><strong>Isla Contoy (Parque Nacional):</strong> Protegida, con acceso limitado. Tours desde Cancún: 600-1000 MXN. Se llega en bote, sin desarrollo, solo naturaleza. Aves migratorias, peces, arrecife de coral virgen. Experiencia: bucear donde casi no hay gente, ver tortugas, disfrutar silencio.</p>`,
        en: `<p><strong>You don't need a resort to access incredible beaches.</strong> Cancun has public options that rival any resort in beauty.</p>

<p><strong>Playa Delfines:</strong> The hidden gem. Completely free public access. White sand, turquoise water, not as crowded as Caracol. It has parking (50 MXN), public bathrooms, food vendors. It's the locals' secret. Being here at sunset without paying anything: priceless. Note: closes at sunset, not 24/7.</p>

<p><strong>Playa Norte on Isla Mujeres:</strong> Technically not Cancun, but it's 20 minutes by ferry. The calmest Caribbean waters. White sand, warm water year-round. Ideal for snorkeling, calm swimming, being with families. Beach bars sell cocktails at fair prices (not Hotel Zone). It's the Caribbean beach Sunday.</p>

<p><strong>Northern beaches (Punta Cancun northward):</strong> Less touristy than southern ones. More turquoise waters, fewer waves. Public access at several points. Some have palafitos (water cabins) to rent.</p>

<p><strong>Isla Contoy (National Park):</strong> Protected, with limited access. Tours from Cancun: 600-1000 MXN. Reached by boat, no development, just nature. Migratory birds, fish, virgin coral reef. Experience: snorkel where there are almost no people, see turtles, enjoy silence.</p>`,
      },
    },
    {
      id: 'ruinas-isla-mujeres',
      title: {
        es: 'Ruinas de El Rey, Isla Mujeres y Cenotes',
        en: 'El Rey Ruins, Isla Mujeres & Cenotes',
      },
      content: {
        es: `<p><strong>Las ruinas mayas de El Rey están dentro de la Zona Hotelera.</strong> Sitio arqueológico pequeño, modesto, pero muy fotogénico. Acceso: 75 MXN. Está dentro de un parque ecológico. Pirámide principal: unos 3 metros de alto (no es Chichén Itzá, pero es real, está aquí). Alrededor: manglares, playas, fauna local. Pueden haber iguanas, pájaros. El horario: 9 am - 5 pm.</p>

<p><strong>Isla Mujeres (la isla completa):</strong> Mucho más que Playa Norte. La isla tiene 7 km de largo, 400 metros de ancho. Pueblito colorido en el sur, playas en el oeste, punta norte con Playa Langosta y Punta Cancun (donde está la estatua sumergida del arte). Cómo llegar: ferry desde Cancún (Puerto Juárez, al norte). 20 minutos, 150 MXN ida. La isla: sin coches masivos, scooters y taxis son lo normal. Explorable en un día fácilmente.</p>

<p><strong>Qué hacer en Isla Mujeres:</strong></p>
<ul>
  <li><strong>Playa Norte:</strong> La estrella. Aguas transparentes, playas de arena blanca, bares en la arena.</li>
  <li><strong>Punta Sur (Faro, Templo y Santuario de Tortugas):</strong> Ruinas, faro con vista, centro de tortugas marinas. Acceso: 200 MXN aprox. Vale para fotocuenta y educación.</li>
  <li><strong>Pueblo central:</strong> Tiendas, restaurantes, comida callejera. Menos turístico que Playa Norte. Aquí vive la verdadera isla.</li>
  <li><strong>Snorkel con tiburones ballena (junio-septiembre):</strong> Temporal corto pero increíble. El tiburón ballena es inofensivo, come plancton. Nadar al lado: experiencia bucketlist. Tours: 1500-2500 MXN.</li>
</ul>

<p><strong>Cenotes:</strong> Los hay en toda la península, algunos accesibles desde Cancún. Tulum (a una hora) tiene más variedad. Pero desde Cancún hay opciones. Xcaret y Xplor son parques temáticos masivos (caro, lleno). Una alternativa: cenotes más pequeños al interior, con tours desde el centro. Agua dulce, fría, clara. Fotografía: extraordinaria.</p>`,
        en: `<p><strong>The Mayan ruins of El Rey are inside the Hotel Zone.</strong> Small, modest archaeological site, but very photogenic. Admission: 75 MXN. It's inside an ecological park. Main pyramid: about 3 meters tall (it's not Chichén Itzá, but it's real, it's here). Around it: mangroves, beaches, local fauna. There may be iguanas, birds. Hours: 9 am - 5 pm.</p>

<p><strong>Isla Mujeres (the whole island):</strong> Much more than Playa Norte. The island is 7 km long, 400 meters wide. Colorful village in the south, beaches on the west, north point with Playa Langosta and Punta Cancun (where the submerged art statue is). How to get there: ferry from Cancun (Puerto Juárez, to the north). 20 minutes, 150 MXN round trip. The island: no massive cars, scooters and taxis are normal. Easily explorable in one day.</p>

<p><strong>What to do on Isla Mujeres:</strong></p>
<ul>
  <li><strong>Playa Norte:</strong> The star. Transparent waters, white sand beaches, beach bars.</li>
  <li><strong>South Point (Lighthouse, Temple & Turtle Sanctuary):</strong> Ruins, lighthouse with views, sea turtle center. Admission: approx 200 MXN. Worth it for Instagram and education.</li>
  <li><strong>Central village:</strong> Shops, restaurants, street food. Less touristy than Playa Norte. Here lives the real island.</li>
  <li><strong>Whale shark snorkeling (June-September):</strong> Short season but incredible. The whale shark is harmless, eats plankton. Swimming alongside: bucket-list experience. Tours: 1500-2500 MXN.</li>
</ul>

<p><strong>Cenotes:</strong> They're all over the peninsula, some accessible from Cancun. Tulum (an hour away) has more variety. But from Cancun there are options. Xcaret and Xplor are massive themed parks (expensive, crowded). An alternative: smaller cenotes inland, with tours from downtown. Fresh water, cold, clear. Photography: extraordinary.</p>`,
      },
    },
    {
      id: 'como-llegar-itinerario',
      title: {
        es: 'Cómo Llegar desde CDMX, Temporadas e Itinerario 5 Días',
        en: 'Getting There from CDMX, Seasons & 5-Day Itinerary',
      },
      content: {
        es: `<p><strong>Desde CDMX a Cancún:</strong></p>

<p><strong>Vuelo (lo usual):</strong> Vuelos directos CDMX-Cancún: 1 hora 45 minutos. Múltiples aerolíneas (Aeroméxico, Volaris, Viva Aerobus). Costo: 1500-3000 MXN ida y vuelta (si compras con anticipación). El aeropuerto de Cancún es moderno, eficiente.</p>

<p><strong>Conducir (no recomendado):</strong> 20 horas de carretera. Pocos lo hacen. Puedes llegar, pero la mayoría prefiere volar.</p>

<p><strong>Temporadas:</strong></p>
<ul>
  <li><strong>Temporada alta (diciembre-marzo):</strong> Clima perfecto (25-28°C), mucha gente, precios máximos. Navidad y Año Nuevo: especialmente lleno. Semana Santa: desastre turístico.</li>
  <li><strong>Intermedia (abril-mayo, septiembre-noviembre):</strong> Menos gente, clima aún bueno, precios mejores. Ideal para no ir en pico pero querer buen clima.</li>
  <li><strong>Baja (junio-agosto):</strong> Calor y humedad (30-35°C), huracanes son posible (bajo riesgo pero es temporada). Precios más baratos. Tiburones ballena (junio-septiembre) es épocapara esto.</li>
  <li><strong>Evitar:</strong> Octubre. Lluvia, huracanes más probables. Menos operativos turísticos.</li>
</ul>

<p><strong>Itinerario 5 días (clásico):</strong></p>
<ul>
  <li><strong>Día 1:</strong> Llega. Instálate en Zona Hotelera o centro. Explora a pie. Cena en un restaurante de playa. Acostúmbrate a la altitud.</li>
  <li><strong>Día 2:</strong> Snorkel o buceo en el arrecife mesoamericano (tour desde hotel). Tarde: Playa Delfines o Playa Tortugas. Sunset drink.</li>
  <li><strong>Día 3:</strong> Isla Mujeres (ferry, día completo). Playa Norte, pueblo, punta sur. Regresa al atardecer.</li>
  <li><strong>Día 4:</strong> Cenotes o ruinas (El Rey o excursión a Tulum, 1 hora). Tarde: Mercado Veintiocho, comida local. Vida nocturna si te interesa.</li>
  <li><strong>Día 5:</strong> Playa relajada, compras, prepararse para partir. Vuelo por la tarde/noche.</li>
</ul>`,
        en: `<p><strong>From CDMX to Cancun:</strong></p>

<p><strong>Flight (the usual):</strong> Direct flights CDMX-Cancun: 1 hour 45 minutes. Multiple airlines (Aeromexico, Volaris, Viva Aerobus). Cost: 1500-3000 MXN round trip (if you book in advance). Cancun airport is modern, efficient.</p>

<p><strong>Driving (not recommended):</strong> 20 hours of road. Few do it. You can arrive, but most prefer flying.</p>

<p><strong>Seasons:</strong></p>
<ul>
  <li><strong>High season (December-March):</strong> Perfect weather (25-28°C), lots of people, maximum prices. Christmas and New Year: especially crowded. Easter week: tourist disaster.</li>
  <li><strong>Intermediate (April-May, September-November):</strong> Fewer people, still good weather, better prices. Ideal to avoid peak but want good weather.</li>
  <li><strong>Low (June-August):</strong> Hot and humid (30-35°C), hurricanes possible (low risk but it's the season). Cheaper prices. Whale sharks (June-September) is the time for this.</li>
  <li><strong>Avoid:</strong> October. Rain, hurricanes more likely. Fewer tourist operations.</li>
</ul>

<p><strong>5-day itinerary (classic):</strong></p>
<ul>
  <li><strong>Day 1:</strong> Arrive. Settle in Hotel Zone or downtown. Explore on foot. Dinner at a beach restaurant. Get used to the altitude.</li>
  <li><strong>Day 2:</strong> Snorkel or diving on the Mesoamerican reef (tour from hotel). Afternoon: Playa Delfines or Playa Tortugas. Sunset drink.</li>
  <li><strong>Day 3:</strong> Isla Mujeres (ferry, full day). Playa Norte, village, south point. Return at sunset.</li>
  <li><strong>Day 4:</strong> Cenotes or ruins (El Rey or excursion to Tulum, 1 hour away). Afternoon: Mercado Veintiocho, local food. Nightlife if interested.</li>
  <li><strong>Day 5:</strong> Relaxed beach, shopping, prep to leave. Flight afternoon/evening.</li>
</ul>`,
      },
    },
  ],
  cta: {
    title: { es: 'Tu base en Cancún y Quintana Roo', en: 'Your Base in Cancún and Quintana Roo' },
    description: { es: 'Hospédate en propiedades seleccionadas y disfruta del Caribe mexicano.', en: 'Stay in curated properties and enjoy the Mexican Caribbean.' },
    buttonText: {
      es: 'Ver propiedades en CDMX',
      en: 'View Properties in CDMX',
    },
    buttonLink: '/properties?zone=CDMX',
  },
  relatedSlugs: ['tulum', 'riviera-maya', 'holbox', 'chichen-itza', 'merida-yucatan'],
};

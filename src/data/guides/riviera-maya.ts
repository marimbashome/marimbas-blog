import { Guide } from './types';

export const rivieraMayaGuide: Guide = {
  slug: 'riviera-maya',
  category: 'pillar',
  region: 'all',
  title: {
    es: 'Riviera Maya',
    en: 'Riviera Maya',
  },
  subtitle: {
    es: 'La guía definitiva de Riviera Maya: qué es, destinos principales (Cancún, Playa del.',
    en: 'The ultimate Riviera Maya guide: what it is, main destinations (Cancun, Playa del Carmen.',
  },
  heroImage: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&h=500&fit=crop&q=80',
  readTime: 12,
  metaTitle: {
    es: 'Guía Riviera Maya: playas, destinos, buceo, parques temáticos y cenotes',
    en: 'Riviera Maya Guide: Beaches, Destinations, Diving, Theme Parks & Cenotes',
  },
  metaDescription: {
    es: 'La guía definitiva de Riviera Maya: qué es, destinos principales (Cancún, Playa del Carmen, Tulum, Bacalar), playas, buceo, cenotes, parques temáticos, cómo moverse, precios, para quién es cada zona.',
    en: 'The ultimate Riviera Maya guide: what it is, main destinations (Cancun, Playa del Carmen, Tulum, Bacalar), beaches, diving, cenotes, theme parks, how to navigate, prices, who each area is for.',
  },
  tags: {
    es: ['Riviera Maya', 'Quintana Roo', 'Playas', 'Buceo', 'Cenotes', 'Turismo de Caribe', 'Parques'],
    en: ['Riviera Maya', 'Quintana Roo', 'Beaches', 'Diving', 'Cenotes', 'Caribbean Tourism', 'Parks'],
  },
  sections: [
    {
      id: 'que-es-riviera-maya',
      title: {
        es: 'Qué es la Riviera Maya: Definición, Geografía, Escala',
        en: 'What is Riviera Maya: Definition, Geography, Scale',
      },
      content: {
        es: `<p><strong>Riviera Maya es un corredor de 130 km de costa mexicana en el Caribe.</strong> Inicia en Cancún (norte) y termina en Tulum/Bacalar (sur, límite con Belice). Es una región administrativa + turística + geográfica.</p>

<p><strong>Geografía:</strong> Costa oriental de la Península de Yucatán. Agua de mar caribeña (turquesa, cálida). Tierra: manglares, jungla, piedra caliza. Bajo tierra: cenotes (acuíferos subterráneos). Demografía: poco poblada históricamente, convertida en destino turístico masivo en los últimos 30 años.</p>

<p><strong>Municipios que la componen:</strong></p>
<ul>
  <li><strong>Benito Juárez:</strong> Dónde está Cancún. Más poblado, más desarrollado, más cosmopolita.</li>
  <li><strong>Solidaridad:</strong> Playa del Carmen. Centro comercial y de servicios. Mezcla de turismo y vida local.</li>
  <li><strong>Tulum:</strong> Ruinas + bienestar. Frontera sur de la región.</li>
  <li><strong>Otros:</strong> Cozumel (isla), municipios menores (Bacalar, Xcalak).</li>
</ul>

<p><strong>Por qué es tan grande:</strong> Acceso directo (Aeropuerto Cancún es el más grande de Latinoamérica en términos de turismo), infraestructura desarrollada (hoteles, carreteras, servicios), naturaleza (playas, cenotes, arrecife de coral), y marketing agresivo (es la cara de México en turismo global).</p>

<p><strong>Economía:</strong> Turismo es 80%+ de la economía regional. Hoteles, resorts, restaurantes, tours, operadores, transportistas. Cuando el turismo baja, la economía sufre. 2020 (COVID) fue catastrófico. Ahora (2026) está recuperado.</p>`,
        en: `<p><strong>Riviera Maya is a 130 km strip of Mexican Caribbean coast.</strong> Starts in Cancun (north) and ends in Tulum/Bacalar (south, Belize border). It's an administrative + touristic + geographic region.</p>

<p><strong>Geography:</strong> Eastern coast of the Yucatan Peninsula. Caribbean sea water (turquoise, warm). Land: mangroves, jungle, limestone. Underground: cenotes (underground aquifers). Demographics: historically sparsely populated, converted to massive tourist destination in the last 30 years.</p>

<p><strong>Municipalities that make it up:</strong></p>
<ul>
  <li><strong>Benito Juárez:</strong> Where Cancun is. Most populated, most developed, most cosmopolitan.</li>
  <li><strong>Solidaridad:</strong> Playa del Carmen. Commercial and service center. Mix of tourism and local life.</li>
  <li><strong>Tulum:</strong> Ruins + wellness. Southern frontier of the region.</li>
  <li><strong>Others:</strong> Cozumel (island), smaller municipalities (Bacalar, Xcalak).</li>
</ul>

<p><strong>Why it's so big:</strong> Direct access (Cancun Airport is Latin America's largest in tourism terms), developed infrastructure (hotels, highways, services), nature (beaches, cenotes, coral reef), and aggressive marketing (it's Mexico's face in global tourism).</p>

<p><strong>Economy:</strong> Tourism is 80%+ of regional economy. Hotels, resorts, restaurants, tours, operators, transporters. When tourism drops, the economy suffers. 2020 (COVID) was catastrophic. Now (2026) recovered.</p>`,
      },
    },
    {
      id: 'destinos-principales',
      title: {
        es: 'Los Destinos Principales: Cancún, Playa del Carmen, Tulum, Bacalar',
        en: 'Main Destinations: Cancun, Playa del Carmen, Tulum, Bacalar',
      },
      content: {
        es: `<p><strong>Riviera Maya no es un único lugar — es varios destinos conectados.</strong> Cada uno tiene su propia energía, público objetivo, y razón para ir.</p>

<p><strong>Cancún:</strong> Puerta de entrada. Zona Hotelera (resort masivo), Centro (vida local). Hub de transporte. Punto de salida para tours a otros destinos. Público: familias, grupos, turismo de masas. Vibe: turístico, comercial, energía alta. Precio: máximo (comparado con sur).</p>

<p><strong>Playa del Carmen:</strong> Intermedio. Más pequeño que Cancún, más grande que Tulum. Quinta Avenida es el corazón (tiendas, bares, gente). Playas detrás (acceso directo a mar). Punto de conexión a Cozumel (ferry). Público: viajeros internacionales, parejas, grupos jóvenes. Vibe: cosmopolita, vida nocturna, "escapada urbana en la playa". Precio: alto pero menos que Zona Hotelera Cancún.</p>

<p><strong>Tulum:</strong> Diferente. Ruinas + playa + bienestar. Menos hogar, más retiro. Yin-yang: masificación turística + gente buscando autenticidad. Público: mochileros, yóguis, profesionales en pausa, influencers. Vibe: trendy, alternativa, espiritual (algunos dirían "poseureria espiritual"). Precio: intermedio a alto, pero variable.</p>

<p><strong>Bacalar:</strong> Alternativa al mar. Lago, no océano. Kayak, colores, naturaleza tranquila. Lejos del bullicio. Público: parejas, familias, gente buscando paz. Vibe: tranquilo, local, genuino. Precio: accesible, menos inflado.</p>

<p><strong>Otros menciones (Cozumel, Holbox, Isla Mujeres):</strong> Son islas o sub-destinos. Cada una merece su propia guía (de hecho, las tienen aquí). Acceso desde Riviera Maya vía ferry.</p>`,
        en: `<p><strong>Riviera Maya is not one place — it's several connected destinations.</strong> Each has its own energy, target audience, and reason to visit.</p>

<p><strong>Cancun:</strong> Gateway. Hotel Zone (massive resort), Downtown (local life). Transport hub. Launch point for tours to other destinations. Audience: families, groups, mass tourism. Vibe: touristy, commercial, high energy. Price: maximum (compared to south).</p>

<p><strong>Playa del Carmen:</strong> In-between. Smaller than Cancun, bigger than Tulum. Quinta Avenida is the heart (shops, bars, people). Beaches behind (direct sea access). Connection point to Cozumel (ferry). Audience: international travelers, couples, young groups. Vibe: cosmopolitan, nightlife, "urban beach escape". Price: high but less than Cancun Hotel Zone.</p>

<p><strong>Tulum:</strong> Different. Ruins + beach + wellness. Less resort, more retreat. Yin-yang: tourist masses + people seeking authenticity. Audience: backpackers, yogis, professionals on pause, influencers. Vibe: trendy, alternative, spiritual (some say "spiritual posturing"). Price: intermediate to high, but variable.</p>

<p><strong>Bacalar:</strong> Alternative to sea. Lake, not ocean. Kayaking, colors, calm nature. Away from hustle. Audience: couples, families, people seeking peace. Vibe: calm, local, genuine. Price: accessible, less inflated.</p>

<p><strong>Other mentions (Cozumel, Holbox, Isla Mujeres):</strong> These are islands or sub-destinations. Each deserves its own guide (in fact, they have them here). Access from Riviera Maya via ferry.</p>`,
      },
    },
    {
      id: 'playas-buceo',
      title: {
        es: 'Las Playas: Calidad del Agua, Acceso, Diferencias Regionales',
        en: 'The Beaches: Water Quality, Access, Regional Differences',
      },
      content: {
        es: `<p><strong>La Riviera Maya tiene 130 km de playas.</strong> No todas son iguales. Varían por ubicación, profundidad, contaminación, desarrollo.</p>

<p><strong>Zonas norte (Cancún, Punta Cancún):</strong> Agua turquesa, pero playas están más llenas (Zona Hotelera). Acceso = resorts mostly. Agua: clara pero con más gente, lo que significa más sedimento en suspensión, menos transparencia ideal. Playas públicas: difíciles de encontrar.</p>

<p><strong>Zona central (Playa del Carmen):</strong> Excelente agua. Playas amplias, acceso relativamente fácil. Arenales blancos, profundidad suave. Infraestructura: barras en playa. Público: medio-alto turismo pero manejable. Calidad: 8/10.</p>

<p><strong>Zona sur (Tulum, Bacalar):</strong> Agua más clara (menos gente inicialmente al sur). Playas de palafitos (cabañas sobre agua). Acceso: por resorts o tours. Calidad: 9/10 pero menos infraestructura. Precio: mayor.</p>

<p><strong>Buceo y snorkel:</strong> Riviera Maya es hogar del arrecife mesoamericano (segundo más grande del mundo). Buceo profesional: operadores en cada destino. Snorkel: desde playa es posible en muchos lados (acceso directo a coral, peces, esponjas). Visibilidad: 20-30+ metros en buen día. Fauna: peces coloreados, rayas, ocasionalmente tortugas y tiburones.</p>

<p><strong>Mejor temporada para buceo:</strong> Noviembre-febrero. Agua calma, visibilidad excelente, menos lluvia. Junio-septiembre: posible pero hay corrientes, visibilidad variable.</p>`,
        en: `<p><strong>Riviera Maya has 130 km of beaches.</strong> Not all the same. They vary by location, depth, pollution, development.</p>

<p><strong>Northern zones (Cancun, Punta Cancun):</strong> Turquoise water, but beaches are more crowded (Hotel Zone). Access = mostly resorts. Water: clear but with more people, meaning more sediment in suspension, less than ideal transparency. Public beaches: hard to find.</p>

<p><strong>Central zone (Playa del Carmen):</strong> Excellent water. Wide beaches, relatively easy access. White sand, gentle depth. Infrastructure: beach bars. Public: medium-high tourism but manageable. Quality: 8/10.</p>

<p><strong>Southern zone (Tulum, Bacalar):</strong> Clearer water (fewer people initially in south). Palafito beaches (cabins over water). Access: by resorts or tours. Quality: 9/10 but less infrastructure. Price: higher.</p>

<p><strong>Diving and snorkeling:</strong> Riviera Maya is home to the Mesoamerican reef (world's second-largest). Professional diving: operators in each destination. Snorkeling: possible from beach in many places (direct access to coral, fish, sponges). Visibility: 20-30+ meters on a good day. Fauna: colored fish, rays, occasionally turtles and sharks.</p>

<p><strong>Best season for diving:</strong> November-February. Calm water, excellent visibility, less rain. June-September: possible but currents, variable visibility.</p>`,
      },
    },
    {
      id: 'parques-cenotes',
      title: {
        es: 'Xcaret, Xplor, Cenotes: Parques Temáticos y Naturaleza',
        en: 'Xcaret, Xplor, Cenotes: Theme Parks & Nature',
      },
      content: {
        es: `<p><strong>Xcaret y Xplor son los "Disney" de la Riviera Maya.</strong> Parques temáticos masivos, caros, pero organizados. Xcaret es cultural + natural. Xplor es aventura.</p>

<p><strong>Xcaret:</strong> El mayor parque. Entrada: 1500-2000 MXN día entero. Todo incluido: playas interiores, snorkel, cenotes, ríos subterráneos, zoológico, museo de mayas, shows nocturnos. Es imposible hacer todo en un día. Multitudes: prepararse. Vibe: parque temático profesional. No es "naturaleza pura" — es "naturaleza empaquetada". Punto: si no tienes tiempo para cenotes salvajes, aquí los ves todos.</p>

<p><strong>Xplor:</strong> Aventura. Tirolesas (ziplines) sobre jungla, kayak en ríos subterráneos, vehículos todo terreno en cuevas. Entrada: 1500+ MXN. Es adrenalina. Público: familias con niños, grupos jóvenes. Vibe: parque de acción. Menos cultural, más "¡diversión!".</p>

<p><strong>Cenotes reales (no en parques):</strong> Si no quieres masificación, cenotes reales existen. Acceso más difícil, menos infraestructura, más auténtico. Tours locales desde Tulum, Playa del Carmen, otros. Precio: 300-800 MXN por tour. Experiencia: jungla, agua clara, silencio, pocos turistas. Fotografía: extraordinaria.</p>

<p><strong>Mentalidad sobre parques:</strong> Xcaret/Xplor son negocios gigantes. La experiencia está bien, pero es "turismo producido". Si buscas naturaleza genuina, opta por cenotes pequenos, playas públicas, kayaks locales. Si quieres comodidad + estructura, parques son solución.</p>`,
        en: `<p><strong>Xcaret and Xplor are the "Disney" of Riviera Maya.</strong> Massive theme parks, expensive, but organized. Xcaret is cultural + natural. Xplor is adventure.</p>

<p><strong>Xcaret:</strong> The largest park. Admission: 1500-2000 MXN full day. All-inclusive: interior beaches, snorkeling, cenotes, underground rivers, zoo, Mayan museum, night shows. Impossible to do everything in a day. Crowds: prepare. Vibe: professional theme park. Not "pure nature" — it's "packaged nature". Point: if you don't have time for wild cenotes, you see them all here.</p>

<p><strong>Xplor:</strong> Adventure. Zip lines over jungle, kayaking in underground rivers, all-terrain vehicles in caves. Admission: 1500+ MXN. It's adrenaline. Audience: families with kids, young groups. Vibe: action park. Less cultural, more "fun!".</p>

<p><strong>Real cenotes (not in parks):</strong> If you don't want crowds, real cenotes exist. Harder access, less infrastructure, more authentic. Local tours from Tulum, Playa del Carmen, others. Price: 300-800 MXN per tour. Experience: jungle, clear water, silence, few tourists. Photography: extraordinary.</p>

<p><strong>Mindset about parks:</strong> Xcaret/Xplor are giant businesses. The experience is fine, but it's "produced tourism". If you seek genuine nature, opt for small cenotes, public beaches, local kayaking. If you want comfort + structure, parks are the answer.</p>`,
      },
    },
    {
      id: 'como-moverse',
      title: {
        es: 'Cómo Moverse por la Riviera Maya: ADO, Colectivos, Autos',
        en: 'How to Navigate Riviera Maya: ADO, Collectivos, Cars',
      },
      content: {
        es: `<p><strong>La Riviera Maya está conectada por la Carretera 307.</strong> Es el eje norte-sur. Toda la región está a lo largo de esta carretera. Transporte disponible en todos los niveles.</p>

<p><strong>ADO (autobús):</strong> La opción de transporte público. Rutas: Cancún ↔ Tulum ↔ Bacalar. Frecuencia: cada 1-2 horas en ruta principal. Costo: 100-300 MXN (Cancún-Tulum). Comodidad: aceptable. Tiempo: 1.5-2 horas Cancún-Tulum. Ventaja: barato, no tienes que manejar. Desventaja: paradas, horarios fijos.</p>

<p><strong>Colectivos (vans compartidos):</strong> Más rápido que ADO, solo un poco más caro. Ruta flexible. Salen cuando se llenan (no horarios). Cancún-Tulum: 150-200 MXN, 1.5 horas. Menos cómodo que ADO pero más directo. Populares entre locales y backpackers.</p>

<p><strong>Auto rentado:</strong> Máxima libertad. Carretera 307 es excelente, segura, bien señalizada. Gasolina: disponible. Peajes: sí, aproximadamente 200-400 MXN Cancún-Tulum-Bacalar. Costo: auto compacto 600-1000 MXN/día. Seguro: recomendado. Ventaja: flexibilidad. Desventaja: costo, necesitas licencia de conducir internacional.</p>

<p><strong>Uber/Taxi:</strong> Existen en destinos principales (Cancún, Playa del Carmen, Tulum). Caro para distancias largas. Mejor para moverse dentro de una ciudad.</p>

<p><strong>Tours organizados:</strong> Punto A a punto B con guía. Incluye transporte, entrada, guía turístico. Caro pero sin estrés. Bueno si no quieres responsabilidad de manejar o navegar.</p>`,
        en: `<p><strong>Riviera Maya is connected by Highway 307.</strong> It's the north-south axis. The whole region is along this highway. Transportation available at all levels.</p>

<p><strong>ADO (bus):</strong> The public transport option. Routes: Cancun ↔ Tulum ↔ Bacalar. Frequency: every 1-2 hours on main route. Cost: 100-300 MXN (Cancun-Tulum). Comfort: acceptable. Time: 1.5-2 hours Cancun-Tulum. Advantage: cheap, you don't drive. Disadvantage: stops, fixed schedules.</p>

<p><strong>Collectivos (shared vans):</strong> Faster than ADO, only slightly more expensive. Flexible route. Leave when full (no schedules). Cancun-Tulum: 150-200 MXN, 1.5 hours. Less comfortable than ADO but more direct. Popular with locals and backpackers.</p>

<p><strong>Rental car:</strong> Maximum freedom. Highway 307 is excellent, safe, well-marked. Gas: available. Tolls: yes, approximately 200-400 MXN Cancun-Tulum-Bacalar. Cost: compact car 600-1000 MXN/day. Insurance: recommended. Advantage: flexibility. Disadvantage: cost, need international driving license.</p>

<p><strong>Uber/Taxi:</strong> Exist in main destinations (Cancun, Playa del Carmen, Tulum). Expensive for long distances. Better for moving within a city.</p>

<p><strong>Organized tours:</strong> Point A to point B with guide. Includes transport, admission, tour guide. Expensive but stress-free. Good if you don't want driving/navigation responsibility.</p>`,
      },
    },
    {
      id: 'temporadas-precios',
      title: {
        es: 'Temporadas, Precios y Para Quién es Cada Zona',
        en: 'Seasons, Prices & Who Each Area is For',
      },
      content: {
        es: `<p><strong>Temporadas en Riviera Maya:</strong></p>

<p><strong>Alta (diciembre-marzo):</strong> Clima perfecto, agua cálida, sol garantizado. Humedad baja. Turismo masivo. Precios máximos (+30-50% vs. baja). Hoteles llenos. Playas llenas. Reservar 2-3 meses antes. Pros: clima ideal. Contras: aglomeración, caro.</p>

<p><strong>Intermedia (abril-mayo, septiembre-noviembre):</strong> Buen clima, menos gente, precios mejores (-15-20% vs. alta). Ideal para quien busca balance. Lluvia ocasional pero no constante. Septiembre-octubre: riesgo de huracán (bajo pero existe).</p>

<p><strong>Baja (junio-agosto):</strong> Calor extremo (35°C), humedad alta, lluvia frecuente. Precio mínimo (mejor descuentos). Pocos turistas. Tiburones ballena en pico (junio-julio-agosto). Si aguantas clima, es la mejor para naturaleza + precio.</p>

<p><strong>Precios típicos (hotel 3-4 estrellas por noche):</strong></p>
<ul>
  <li><strong>Cancún Zona Hotelera (alta):</strong> 3000-5000+ MXN</li>
  <li><strong>Playa del Carmen (alta):</strong> 2000-4000 MXN</li>
  <li><strong>Tulum (alta):</strong> 1500-3500 MXN</li>
  <li><strong>Bacalar (alta):</strong> 800-1500 MXN</li>
  <li><strong>Baja temporada:</strong> 50% menos aprox</li>
</ul>

<p><strong>Para quién es cada zona:</strong></p>
<ul>
  <li><strong>Cancún:</strong> Familias, resorts todo incluido, turismo masivo, vida nocturna intensa. Si buscas lujo + infraestructura + comodidad, aquí.</li>
  <li><strong>Playa del Carmen:</strong> Parejas jóvenes, viajeros independientes, gente que quiere playa + ciudad. Cosmopolita, diverso.</li>
  <li><strong>Tulum:</strong> Mochileros, yóguis, profesionales creativos, influencers. Quienes buscan estilo de vida alternativo.</li>
  <li><strong>Bacalar:</strong> Parejas, familias buscando paz, gente escapando de masificación. Naturaleza tranquila, precio accesible.</li>
</ul>`,
        en: `<p><strong>Seasons in Riviera Maya:</strong></p>

<p><strong>High (December-March):</strong> Perfect weather, warm water, guaranteed sun. Low humidity. Mass tourism. Maximum prices (+30-50% vs. low). Hotels full. Beaches full. Book 2-3 months ahead. Pros: ideal weather. Cons: crowding, expensive.</p>

<p><strong>Shoulder (April-May, September-November):</strong> Good weather, fewer people, better prices (-15-20% vs. high). Ideal for balance seekers. Occasional rain but not constant. September-October: hurricane risk (low but exists).</p>

<p><strong>Low (June-August):</strong> Extreme heat (35°C), high humidity, frequent rain. Minimum price (best discounts). Few tourists. Whale sharks at peak (June-July-August). If you can handle weather, best for nature + price.</p>

<p><strong>Typical prices (3-4 star hotel per night):</strong></p>
<ul>
  <li><strong>Cancun Hotel Zone (high):</strong> 3000-5000+ MXN</li>
  <li><strong>Playa del Carmen (high):</strong> 2000-4000 MXN</li>
  <li><strong>Tulum (high):</strong> 1500-3500 MXN</li>
  <li><strong>Bacalar (high):</strong> 800-1500 MXN</li>
  <li><strong>Low season:</strong> 50% less approx</li>
</ul>

<p><strong>Who each zone is for:</strong></p>
<ul>
  <li><strong>Cancun:</strong> Families, all-inclusive resorts, mass tourism, intense nightlife. If you seek luxury + infrastructure + comfort, here.</li>
  <li><strong>Playa del Carmen:</strong> Young couples, independent travelers, people wanting beach + city. Cosmopolitan, diverse.</li>
  <li><strong>Tulum:</strong> Backpackers, yogis, creative professionals, influencers. Those seeking alternative lifestyle.</li>
  <li><strong>Bacalar:</strong> Couples, families seeking peace, people escaping crowds. Calm nature, accessible price.</li>
</ul>`,
      },
    },
  ],
  cta: {
    title: { es: 'Tu base en la Riviera Maya', en: 'Your Base in the Riviera Maya' },
    description: { es: 'Hospédate en propiedades seleccionadas y disfruta del Caribe mexicano.', en: 'Stay in curated properties and enjoy the Mexican Caribbean.' },
    buttonText: {
      es: 'Ver propiedades en CDMX',
      en: 'View Properties in CDMX',
    },
    buttonLink: '/properties?zone=CDMX',
  },
  relatedSlugs: ['cancun', 'tulum', 'holbox', 'chichen-itza', 'merida-yucatan'],
};

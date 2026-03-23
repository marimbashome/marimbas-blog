import { Guide } from './types';

export const condesaGuide: Guide = {
  slug: 'condesa',
  category: 'neighborhood',
  region: 'cdmx',
  title: {
    es: 'La Condesa',
    en: 'La Condesa',
  },
  subtitle: {
    es: 'Todo sobre La Condesa: dónde comer, qué hacer, cafés, vida nocturna y tips para disfrutar.',
    en: 'Everything about La Condesa: where to eat, things to do, cafés, nightlife and tips to.',
  },
  heroImage: '/images/guides/condesa-hero.jpg',
  readTime: 10,
  metaTitle: {
    es: 'Guía de La Condesa, CDMX — El barrio más caminable de la ciudad',
    en: 'La Condesa Guide, Mexico City — The Most Walkable Neighborhood',
  },
  metaDescription: {
    es: 'Todo sobre La Condesa: dónde comer, qué hacer, cafés, vida nocturna y tips para disfrutar el barrio más cool de CDMX.',
    en: `Everything about La Condesa: where to eat, things to do, cafés, nightlife and tips to enjoy CDMX's coolest neighborhood.`,
  },
  tags: {
    es: ['La Condesa', 'CDMX', 'Barrio', 'Cafés', 'Nómadas digitales', 'Gastronomía'],
    en: ['La Condesa', 'Mexico City', 'Neighborhood', 'Cafés', 'Digital nomads', 'Gastronomy'],
  },
  sections: [
    {
      id: 'el-barrio',
      title: {
        es: 'El Barrio',
        en: 'The Neighborhood',
      },
      content: {
        es: `<p><strong>La Condesa es puro carácter.</strong> Este barrio es el que todos imaginan cuando piensan en la Ciudad de México moderna: arquitectura Art Deco de los años 20 y 30, calles arboladas, cafés en cada esquina y una energía creativa que rezuma de cada grieta.</p>

<p><strong>La arquitectura es el primer enamoramiento.</strong> Los edificios de principios del siglo XX, con sus detalles geométricos y fachadas redondeadas, le dan a Condesa un aire de elegancia vintage que ningún otro barrio de la ciudad logra capturar. En primavera, los jacarandas tiñen las calles de púrpura — es mágico.</p>

<p><strong>Parque México y Parque España son el corazón.</strong> Estos dos parques conectados forman la columna vertebral del barrio. Parque México, en particular, es una maravilla del diseño Art Deco con sus áreas verdes, teatro al aire libre, cancha para perros y una atmósfera que invita a quedarse horas. No es solo un parque: es donde la comunidad se reúne.</p>

<p><strong>Caminabilidad absoluta.</strong> Aquí no necesitas metro ni Uber para explorar. Todo está a pie: restaurantes, galerías, tiendas boutique, librerías, bares. Puedes pasar horas caminando sin repetir calle. Es el tipo de barrio donde los descubrimientos serendípitos ocurren a cada cuadra.</p>

<p><strong>La vibe es cosmopolita, creativa y dog-friendly.</strong> Condesa es un mosaico: hay familias mexicanas de toda la vida, nómadas digitales con laptop en café, artistas en sus estudios, viajeros que decidieron quedarse un mes y terminaron viviendo años. Hay más perros que personas (es exageración, pero casi). Y la cultura del café es seria — aquí no es solo una bebida, es un ritual.</p>`,
        en: `<p><strong>La Condesa is pure character.</strong> This neighborhood is what everyone imagines when they think of modern Mexico City: Art Deco architecture from the 1920s and 30s, tree-lined streets, cafés on every corner, and a creative energy that seeps from every crack in the pavement.</p>

<p><strong>The architecture is love at first sight.</strong> The early 20th-century buildings, with their geometric details and rounded facades, give Condesa an air of vintage elegance that no other neighborhood in the city can match. In spring, the jacarandas paint the streets purple — it's magical.</p>

<p><strong>Parque México and Parque España are the heart.</strong> These two connected parks form the backbone of the neighborhood. Parque México in particular is a marvel of Art Deco design with green spaces, an open-air theater, a dog park, and an atmosphere that invites you to stay for hours. It's not just a park: it's where the community gathers.</p>

<p><strong>Absolute walkability.</strong> You don't need the metro or Uber to explore here. Everything is within walking distance: restaurants, galleries, boutique shops, bookstores, bars. You can spend hours walking without repeating a street. It's the kind of neighborhood where serendipitous discoveries happen at every block.</p>

<p><strong>The vibe is cosmopolitan, creative, and dog-friendly.</strong> Condesa is a mosaic: there are lifelong Mexican families, digital nomads with laptops in cafés, artists in their studios, travelers who came for a month and ended up living for years. There are more dogs than people (slight exaggeration, but close). And the café culture is serious — here it's not just a beverage, it's a ritual.</p>`,
      },
    },
    {
      id: 'que-hacer',
      title: {
        es: 'Qué Hacer',
        en: 'Things to Do',
      },
      content: {
        es: `<p><strong>Avenida Ámsterdam es el ritual obligatorio.</strong> Esta avenida ovalada que rodea Parque México es perfecta para un paseo de verdad. A las mañanas: corredores y perros. A las tardes: cafés llenos, niños en patineta, artistas vendiendo en la esquina. A las noches: parejas, vida. Camina lentamente. No hay prisa en Ámsterdam.</p>

<ul>
  <li><strong>Parque México:</strong> Más que un parque. Detalles Art Deco en cada rincón, un teatro al aire libre donde tocan bandas locales, áreas para perros, y bancos para sentarse a ver pasar la vida. Visita a diferentes horas del día — es distinto cada vez.</li>
  <li><strong>Parque España:</strong> Más pequeño y con energía diferente. Los fines de semana hay mercados, corredores por la mañana, familias. Es donde los locales van cuando quieren menos turismo que México.</li>
  <li><strong>Tiendas boutique en Tamaulipas y Michoacán:</strong> Diseño mexicano, ropa de diseñadores independientes, galerías de arte. Cada tienda cuenta una historia. No es shopping masivo — es descubrimiento.</li>
  <li><strong>Mercado Michoacán:</strong> El corazón gastronómico del barrio. No es turístico: es donde compran los vecinos. Frutas, quesos, jamón ibérico, vino, charcutería artesanal. El olor es irresistible.</li>
  <li><strong>Galerías de arte en Ámsterdam:</strong> Desde exposiciones experimentales hasta artistas establecidos. La escena de arte contemporáneo de CDMX tiene mucho de aquí.</li>
  <li><strong>Caza de street art:</strong> Muchas paredes son lienzos. Calles como Mazatlán y Cuitláhuac tienen murales impresionantes. Es arte que cambia cada temporada.</li>
  <li><strong>Bosque de Chapultepec:</strong> Sí, está "al lado" (15 minutos caminando). El bosque más grande de la ciudad, museos (antropología, arte), senderos, lagos. Un escape sin dejar el barrio.</li>
</ul>`,
        en: `<p><strong>Avenida Ámsterdam is the mandatory ritual.</strong> This oval avenue that winds around Parque México is perfect for a real stroll. Mornings: runners and dogs. Afternoons: cafés packed, kids on skateboards, artists selling on corners. Evenings: couples, life. Walk slowly. There's no rush on Ámsterdam.</p>

<ul>
  <li><strong>Parque México:</strong> More than a park. Art Deco details in every corner, an open-air theater where local bands play, dog areas, and benches to watch life pass by. Visit at different times of day — it's different each time.</li>
  <li><strong>Parque España:</strong> Smaller and with a different energy. Weekends bring markets, morning runners, families. It's where locals go when they want less tourism than México.</li>
  <li><strong>Boutique shops on Tamaulipas and Michoacán:</strong> Mexican design, independent designer clothing, art galleries. Each shop tells a story. It's not mass shopping — it's discovery.</li>
  <li><strong>Mercado Michoacán:</strong> The gastronomic heart of the neighborhood. It's not touristy: this is where neighbors shop. Fruits, cheeses, Spanish ham, wine, artisanal charcuterie. The smell is irresistible.</li>
  <li><strong>Art galleries along Ámsterdam:</strong> From experimental exhibitions to established artists. CDMX's contemporary art scene has much of its roots here.</li>
  <li><strong>Street art hunting:</strong> Many walls are canvases. Streets like Mazatlán and Cuitláhuac have impressive murals. It's art that changes every season.</li>
  <li><strong>Bosque de Chapultepec:</strong> Yes, it's "right there" (15 minutes walking). The city's largest forest, museums (anthropology, art), trails, lakes. An escape without leaving the neighborhood.</li>
</ul>`,
      },
    },
    {
      id: 'donde-comer',
      title: {
        es: 'Dónde Comer',
        en: 'Where to Eat',
      },
      content: {
        es: `<p><strong>La Condesa + Roma Norte son una sola cosa gastronómica.</strong> Juntos forman la zona de restaurantes más innovadora de CDMX. Los bordes del barrio (hacia Roma) tienen propuestas más edgy; el centro de Condesa es más accesible.</p>

<p><strong>Casual y asequible:</strong></p>
<ul>
  <li>Tacos de canasta temprano a la mañana en las esquinas — auténticos, baratos, increíbles.</li>
  <li>Fondas en calles laterales (Laredo, Morelos): comida mexicana de abuela. Mole, chiles rellenos, arroz. Los locales van aquí.</li>
  <li>Puestos de comida en Mercado Michoacán: desde tamales hasta tacos de camarón, todo a 30-50 MXN.</li>
</ul>

<p><strong>Restaurantes con onda:</strong></p>
<ul>
  <li><strong>Lardo:</strong> Mediterráneo-mexicano. Pasta fresca, ceviches, charcutería. La vibe es relajada pero el sabor es serio.</li>
  <li><strong>Ojo de Agua:</strong> Mexicana saludable sin ser pretenciosa. Sopas, ensaladas, guacamole hecho en la mesa. Perfecto para almuerzo.</li>
  <li><strong>Café La Gloria:</strong> Café + comida ligera. Breakfast todo el día, pasteles, sándwiches. Es donde terminas después de un paseo.</li>
  <li><strong>Expendio de Maíz:</strong> Todo sobre el maíz: quesadillas, tlayudas, pozole. Casual, sabroso, auténtico.</li>
</ul>

<p><strong>Café de verdad (esto es importante):</strong></p>
<ul>
  <li><strong>Chiquitito Café:</strong> Café de especialidad. Los baristas saben lo que hacen. Ubicado en Ámsterdam, es punto de reunión de nómadas.</li>
  <li><strong>Blend Station:</strong> Tercera ola hecha accesible. Tostadores locales, buen espresso, ambiente de trabajo.</li>
  <li><strong>Dosis Café:</strong> Pequeño, intenso. Café perfecto en pociones pequeñas. Los locales compran aquí.</li>
  <li><strong>Almanegra:</strong> Café + libros. Ambiente de intelectualidad relajada. Americano de 60-80 MXN (promedio en la zona).</li>
</ul>

<p><strong>Noche:</strong></p>
<ul>
  <li>Mezcalerías en Tamaulipas: los viernes la calle es una fiesta. Mezcal de productor, música en vivo, energía.</li>
  <li>Rooftop bars: vistas de la ciudad, cócteles que importan, puesta de sol.</li>
  <li>Jazz clubs: hay una escena seria de jazz. Busca "Mama Rumba" o "Zinco Jazz Club" (en los bordes hacia Centro).</li>
</ul>`,
        en: `<p><strong>La Condesa + Roma Norte are one gastronomic thing.</strong> Together they form CDMX's most innovative restaurant zone. The edges of the neighborhood (toward Roma) have edgier concepts; central Condesa is more accessible.</p>

<p><strong>Casual and affordable:</strong></p>
<ul>
  <li>Tacos de canasta early in the morning on corners — authentic, cheap, incredible.</li>
  <li>Fondas on side streets (Laredo, Morelos): grandmother's Mexican food. Mole, chiles rellenos, rice. Locals eat here.</li>
  <li>Food stalls in Mercado Michoacán: from tamales to shrimp tacos, everything from 30-50 MXN.</li>
</ul>

<p><strong>Restaurants with vibe:</strong></p>
<ul>
  <li><strong>Lardo:</strong> Mediterranean-Mexican. Fresh pasta, ceviches, charcuterie. The vibe is relaxed but the flavor is serious.</li>
  <li><strong>Ojo de Agua:</strong> Healthy Mexican without pretense. Soups, salads, guacamole made at the table. Perfect for lunch.</li>
  <li><strong>Café La Gloria:</strong> Café + light food. Breakfast all day, pastries, sandwiches. It's where you end up after a walk.</li>
  <li><strong>Expendio de Maíz:</strong> Everything about corn: quesadillas, tlayudas, pozole. Casual, flavorful, authentic.</li>
</ul>

<p><strong>Real coffee (this matters):</strong></p>
<ul>
  <li><strong>Chiquitito Café:</strong> Specialty coffee. The baristas know what they're doing. Located on Ámsterdam, it's a gathering point for nomads.</li>
  <li><strong>Blend Station:</strong> Third wave coffee made accessible. Local roasters, good espresso, work atmosphere.</li>
  <li><strong>Dosis Café:</strong> Small, intense. Perfect coffee in small portions. Locals buy here.</li>
  <li><strong>Almanegra:</strong> Coffee + books. A relaxed intellectual atmosphere. Americano from 60-80 MXN (average in the area).</li>
</ul>

<p><strong>Night:</strong></p>
<ul>
  <li>Mezcalerías on Tamaulipas: Fridays turn the street into a party. Producer mezcal, live music, energy.</li>
  <li>Rooftop bars: city views, cocktails that matter, sunset.</li>
  <li>Jazz clubs: there's a serious jazz scene. Look for "Mama Rumba" or "Zinco Jazz Club" (toward Centro's edges).</li>
</ul>`,
      },
    },
    {
      id: 'trabajo-remoto',
      title: {
        es: 'Trabajo Remoto y Nómadas',
        en: 'Remote Work & Digital Nomads',
      },
      content: {
        es: `<p><strong>La Condesa es la capital no oficial de los nómadas digitales de CDMX.</strong> Si vienes a trabajar desde la ciudad, este es el barrio. Punto.</p>

<p><strong>WiFi confiable en casi todos lados.</strong> La mayoría de cafés principales tienen conexión decente. No es fibra óptica, pero funciona para reuniones en Zoom, descargas y todo lo que necesites. Los cafés saben que son workspace — los dejan estar horas con una americano.</p>

<p><strong>Coworking spaces formales:</strong> Hay varias opciones si necesitas escritorio dedicado, reuniones con clientes, zona más profesional. Busca "WeWork", "Regus" o espacios independientes en Ámsterdam y calles aledañas.</p>

<p><strong>El ritmo de la zona es ideal para productividad:</strong></p>
<ul>
  <li>Mañanas: café, laptop, enfoque. Los cafés están tranquilos antes del mediodía.</li>
  <li>Mediodía: pausa, almuerzo en Mercado Michoacán o un restaurante cercano.</li>
  <li>Tardecita: segundo turno de trabajo en otro café, o trabajo desde una azotea.</li>
  <li>Noche: comunidad. Hay eventos de networking, meetups de developers, cenas de nómadas en restaurantes.</li>
</ul>

<p><strong>Conexión con otros nómadas es orgánica.</strong> Verás las mismas caras en diferentes cafés. Alguien te presentará a alguien. Algunos se quedan 2 semanas, otros se quedan 2 años. Es un ecosistema vivo.</p>

<p><strong>Costo de vida razonable comparado con otras ciudades:</strong> Un americano típico en cafés de zona: 60-80 MXN (3-4 USD). Puedes vivir y trabajar cómodamente aquí sin arruinarte.</p>`,
        en: `<p><strong>La Condesa is the unofficial capital of digital nomads in CDMX.</strong> If you come to work from the city, this is the neighborhood. Period.</p>

<p><strong>Reliable WiFi almost everywhere.</strong> Most main cafés have decent connection. It's not fiber optics, but it works for Zoom meetings, downloads, and everything you need. Cafés know they're workspaces — they'll let you stay for hours with an americano.</p>

<p><strong>Formal coworking spaces:</strong> There are several options if you need a dedicated desk, client meetings, or a more professional zone. Look for "WeWork", "Regus", or independent spaces on Ámsterdam and neighboring streets.</p>

<p><strong>The rhythm of the zone is ideal for productivity:</strong></p>
<ul>
  <li>Mornings: coffee, laptop, focus. Cafés are quiet before noon.</li>
  <li>Midday: break, lunch at Mercado Michoacán or a nearby restaurant.</li>
  <li>Late afternoon: second work shift in another café, or work from a rooftop.</li>
  <li>Evening: community. There are networking events, developer meetups, nomad dinners at restaurants.</li>
</ul>

<p><strong>Connection with other nomads is organic.</strong> You'll see the same faces in different cafés. Someone will introduce you to someone. Some stay 2 weeks, others 2 years. It's a living ecosystem.</p>

<p><strong>Cost of living is reasonable compared to other cities:</strong> A typical americano in neighborhood cafés: 60-80 MXN (3-4 USD). You can live and work comfortably here without breaking the bank.</p>`,
      },
    },
    {
      id: 'desde-condesa',
      title: {
        es: 'Moverse desde La Condesa',
        en: 'Getting Around from La Condesa',
      },
      content: {
        es: `<p><strong>La ubicación de Condesa es estratégica.</strong> No es accidente que sea donde todos quieren estar. Tienes todo a alcance.</p>

<p><strong>Metro:</strong></p>
<ul>
  <li><strong>Chapultepec (Línea 1):</strong> La estación más cercana. Desde aquí llegas al Centro Histórico en 15 minutos, Bellas Artes, Zócalo.</li>
  <li><strong>Chilpancingo (Línea 9):</strong> Un poco más lejos, pero te conecta hacia el sur: Coyoacán, Xochimilco.</li>
</ul>

<p><strong>A pie:</strong></p>
<ul>
  <li><strong>Roma Norte:</strong> 10 minutos caminando. Es prácticamente la continuación de Condesa pero con energía distinta.</li>
  <li><strong>Bosque de Chapultepec:</strong> 15 minutos. Directo desde Ámsterdam hacia el poniente.</li>
  <li><strong>Parque La Alameda Central:</strong> 20 minutos hacia el sur, y desde ahí el Centro Histórico está a nada.</li>
</ul>

<p><strong>Metrobús:</strong> Paradas en Insurgentes (calle principal que bordea el barrio) te llevan a todos lados. Es rápido, barato, y frecuente.</p>

<p><strong>Uber:</strong> Sí, existe. Para distancias largas o cuando llueve:</p>
<ul>
  <li>Centro Histórico: 20 minutos</li>
  <li>Coyoacán: 25 minutos</li>
  <li>Aeropuerto Internacional (Benito Juárez): 45 minutos (tráfico variable)</li>
  <li>San Ángel: 20 minutos</li>
</ul>

<p><strong>Ecobici:</strong> El sistema de bicicletas compartidas. Estaciones por todo el barrio. Es barato y muchos locales lo usan para distancias medias.</p>

<p><strong>El resumen: No necesitas mudarte de Condesa para alcanzar lo que importa.</strong> Todo lo bueno de CDMX está a distancia manejable. Y si quieres algo que no está cerca, está solo 20-30 minutos lejos.</p>`,
        en: `<p><strong>La Condesa's location is strategic.</strong> It's no accident that it's where everyone wants to be. You have everything within reach.</p>

<p><strong>Metro:</strong></p>
<ul>
  <li><strong>Chapultepec (Line 1):</strong> The nearest station. From here you reach Centro Histórico in 15 minutes, Bellas Artes, Zócalo.</li>
  <li><strong>Chilpancingo (Line 9):</strong> A bit further, but connects you south: Coyoacán, Xochimilco.</li>
</ul>

<p><strong>On foot:</strong></p>
<ul>
  <li><strong>Roma Norte:</strong> 10 minutes walking. It's practically the continuation of Condesa but with a different energy.</li>
  <li><strong>Bosque de Chapultepec:</strong> 15 minutes. Straight from Ámsterdam toward the west.</li>
  <li><strong>Parque La Alameda Central:</strong> 20 minutes south, and from there Centro Histórico is minutes away.</li>
</ul>

<p><strong>Metrobús:</strong> Stops on Insurgentes (main street bordering the neighborhood) take you everywhere. It's fast, cheap, and frequent.</p>

<p><strong>Uber:</strong> Yes, it exists. For long distances or when it rains:</p>
<ul>
  <li>Centro Histórico: 20 minutes</li>
  <li>Coyoacán: 25 minutes</li>
  <li>International Airport (Benito Juárez): 45 minutes (traffic dependent)</li>
  <li>San Ángel: 20 minutes</li>
</ul>

<p><strong>Ecobici:</strong> The bike-sharing system. Stations throughout the neighborhood. It's cheap and many locals use it for medium distances.</p>

<p><strong>The summary: You don't need to leave Condesa to reach what matters.</strong> Everything good about CDMX is at manageable distance. And if you want something that's not nearby, it's only 20-30 minutes away.</p>`,
      },
    },
    {
      id: 'tips-practicos',
      title: {
        es: 'Tips Prácticos',
        en: 'Practical Tips',
      },
      content: {
        es: `<p><strong>Altitud:</strong> Condesa está a 2,240 metros sobre el nivel del mar. Si vienes del nivel del mar, los primeros 2-3 días siente el cambio. Tómate la vida con calma el primer día, mantente hidratado, y evita cambios de presión bruscos (no hagas ejercicio intenso el día 1).</p>

<p><strong>Mejores calles para caminar:</strong></p>
<ul>
  <li><strong>Ámsterdam:</strong> La avenida icónica. Parques, cafés, vida.</li>
  <li><strong>Tamaulipas:</strong> Tiendas, galerías, vibes indie.</li>
  <li><strong>Atlixco:</strong> Donde está la propiedad Marimbas — residencial, elegante, tranquila.</li>
  <li><strong>Mazatlán:</strong> Callejuela con murales, descubrimientos, artistas.</li>
</ul>

<p><strong>Seguridad:</strong> La Condesa es segura. Muy segura comparada con otras partes de la ciudad. De día: camina con confianza. De noche: toma las precauciones normales que tomarías en cualquier ciudad grande. Evita calles completamente oscuras después de medianoche, mantén teléfono en bolsillo, camina en grupos si es tarde. Pero no es un barrio peligroso — es un barrio vivo.</p>

<p><strong>Sismos:</strong> CDMX está en una zona sísmica. Los temblores son parte de la vida aquí. La mayoría son leves. En caso de un sismo fuerte, siguen los protocolos: cúbrete, bajo marcos de puertas o bajo mesas sólidas. Las autoridades tienen sistemas de alerta. No es razón para asustarse, pero es bueno estar consciente.</p>

<p><strong>Propina (Tipping):</strong></p>
<ul>
  <li>Restaurantes: 10-15% es lo estándar. Si te sentó bien, un poco más. Si fue excelente, 18-20%.</li>
  <li>Cafés: No obligatorio, pero si dejas una moneda, se aprecia.</li>
  <li>Hoteles, taxis: En hoteles, 10-20 MXN por servicio. En taxi, redondea o deja lo que sientas.</li>
</ul>

<p><strong>Clima:</strong> CDMX tiene primavera casi todo el año. Días templados, noches fresquitas. Abril-mayo puede hacer calor. Octubre-noviembre es perfecto. Noviembre-febrero es frío por las noches. Lleva una chamarra siempre.</p>

<p><strong>Idioma:</strong> El español es la lengua, pero en Condesa, especialmente en cafés y restaurantes, muchos hablan inglés. Los locales aprecian si lo intentas en español primero.</p>`,
        en: `<p><strong>Altitude:</strong> Condesa is at 2,240 meters above sea level. If you're coming from sea level, you'll feel the change the first 2-3 days. Take life slowly on day one, stay hydrated, and avoid sudden pressure changes (don't do intense exercise on day 1).</p>

<p><strong>Best streets for walking:</strong></p>
<ul>
  <li><strong>Ámsterdam:</strong> The iconic avenue. Parks, cafés, life.</li>
  <li><strong>Tamaulipas:</strong> Shops, galleries, indie vibes.</li>
  <li><strong>Atlixco:</strong> Where Marimbas property is — residential, elegant, quiet.</li>
  <li><strong>Mazatlán:</strong> Little street with murals, discoveries, artists.</li>
</ul>

<p><strong>Safety:</strong> La Condesa is safe. Very safe compared to other parts of the city. During the day: walk with confidence. At night: take normal precautions you'd take in any big city. Avoid completely dark streets after midnight, keep phone in pocket, walk in groups if late. But it's not a dangerous neighborhood — it's a living neighborhood.</p>

<p><strong>Earthquakes:</strong> CDMX is in a seismic zone. Tremors are part of life here. Most are mild. In case of a strong earthquake, follow protocols: cover yourself, get under doorframes or under solid tables. Authorities have alert systems. It's not a reason to be scared, but it's good to be aware.</p>

<p><strong>Tipping:</strong></p>
<ul>
  <li>Restaurants: 10-15% is standard. If you felt good, a bit more. If it was excellent, 18-20%.</li>
  <li>Cafés: Not mandatory, but if you leave a coin, it's appreciated.</li>
  <li>Hotels, taxis: At hotels, 10-20 MXN per service. In taxi, round up or leave what you feel.</li>
</ul>

<p><strong>Climate:</strong> CDMX has spring almost year-round. Mild days, cool nights. April-May can get hot. October-November is perfect. November-February is cold at night. Always bring a jacket.</p>

<p><strong>Language:</strong> Spanish is the language, but in Condesa, especially in cafés and restaurants, many speak English. Locals appreciate it if you try Spanish first.</p>`,
      },
    },
  ],
  cta: {
    title: {
      es: 'Quédate en el corazón de La Condesa',
      en: 'Stay in the Heart of La Condesa',
    },
    description: {
      es: 'Nuestros departamentos en Atlixco 173 te ponen a pasos de todo lo mejor del barrio. Reserva directo.',
      en: 'Our apartments at Atlixco 173 put you steps from the best of the neighborhood. Book direct.',
    },
    properties: [
      {
        name: 'Condesa. 2',
        zone: 'Condesa',
        link: '/properties?zone=Condesa',
      },
      {
        name: 'Condesa. 4',
        zone: 'Condesa',
        link: '/properties?zone=Condesa',
      },
      {
        name: 'Condesa. 7',
        zone: 'Condesa',
        link: '/properties?zone=Condesa',
      },
      {
        name: 'Condesa. 8',
        zone: 'Condesa',
        link: '/properties?zone=Condesa',
      },
    ],
  },
  relatedSlugs: ['roma-norte', 'cdmx', 'restaurantes-cdmx', 'bares-cdmx', '100-cosas-hacer-cdmx'],
};
import { Guide } from './types';

export const tacosCdmxGuide: Guide = {
  slug: 'tacos-cdmx',
  title: { es: "Guía Definitiva de Tacos en la Ciudad de México", en: "The Ultimate Guide to Tacos in Mexico City" },
  subtitle: {
    es: 'Aprende sobre los diferentes tipos de tacos de México, dónde encontrar los mejores y cómo.',
    en: '<p>There are tacos everywhere in Mexico — but Mexico City tacos have their own unique.',
  },
  heroImage: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&h=500&fit=crop&q=80',
  category: 'practical',
  region: 'cdmx',
  readTime: 9,
  tags: { es: ["tacos", "comida", "cultura", "méxico"], en: ["tacos", "food", "culture", "mexico"] },
  metaTitle: { es: "Guía Definitiva de Tacos en CDMX - Dónde y Cuándo Comer", en: "Ultimate Tacos Guide in CDMX - Where & When to Eat" },
  metaDescription: { es: "Aprende sobre los diferentes tipos de tacos de México, dónde encontrar los mejores y cómo comerlos como un chilango auténtico.", en: "Learn about Mexico City tacos, where to find the best ones, and how to eat like a true chilango." },
  sections: [
    {
      id: 'introduction',
      title: { es: "La Lógica de los Tacos Chilangos", en: "The Logic of Mexico City Tacos" },
      content: {
        es: `<p>Hay tacos en todo México — pero los tacos de la Ciudad de México tienen una lógica propia que no se repite en ningún otro lado: son el resultado de siglos de migración interna. Cada región de México llegó a la capital trayendo sus técnicas, sabores y tradiciones culinarias, creando un ecosistema de tacos único en el mundo.</p>`,
        en: `<p>There are tacos everywhere in Mexico — but Mexico City tacos have their own unique logic that's not repeated anywhere else: they're the result of centuries of internal migration. Each region of Mexico came to the capital bringing its techniques, flavors and culinary traditions, creating a tacos ecosystem unique in the world.</p>`,
      },
    },
    {
      id: 'why-different',
      title: { es: "Por Qué los Tacos de CDMX son Diferentes", en: "Why CDMX Tacos Are Different" },
      content: {
        es: `<p><strong>Diversidad de regiones:</strong> A diferencia de otras ciudades mexicanas donde predomina un estilo local, en la CDMX conviven todas las corrientes taqueras de México.</p>
<p><strong>Técnicas únicas:</strong> Siglos de refinamiento han generado métodos de cocción y preparación que solo existen en la capital.</p>
<p><strong>Accesibilidad:</strong> Los tacos son la puerta de entrada a la gastronomía mexicana en la CDMX. Desde madrugada hasta madrugada, en cualquier esquina, hay alguien preparando tacos con dedicación.</p>`,
        en: `<p><strong>Regional diversity:</strong> Unlike other Mexican cities where one local style predominates, in CDMX all taco currents of Mexico coexist.</p>
<p><strong>Unique techniques:</strong> Centuries of refinement have generated cooking and preparation methods that only exist in the capital.</p>
<p><strong>Accessibility:</strong> Tacos are the gateway to Mexican gastronomy in CDMX. From midnight to midnight, on any corner, someone is preparing tacos with dedication.</p>`,
      },
    },
    {
      id: 'dictionary',
      title: { es: "El Diccionario del Taco Chilango", en: "The Dictionary of Mexico City Tacos" },
      content: {
        es: `<p><strong>Pastor:</strong> El rey de los tacos. Trompo de carne marinada, piña asada en la punta, cilantro fresco. La tortilla debe ser de maíz, recién hecha.</p>
<p><strong>Suadero:</strong> La falda de res cocida lentamente en manteca. Jugoso, grasoso, adictivo. El favorito capitalino por excelencia.</p>
<p><strong>Guisado:</strong> Cocina de la abuela: rajas, nopales, chicharrón prensado, hígado, sesos. Cambia diariamente según lo que el cocinero preparó esa mañana.</p>
<p><strong>Canasta:</strong> Los tacos de bicicleta. Preparados al vapor en una canasta, se venden al desayuno y mediodía. Rellenos variados, tortillas suaves, ideal para acompañar con salsa.</p>
<p><strong>Carnitas:</strong> Cerdo confitado a fuego lento. Tierno, desmenuzado, lleno de sabor. Base para quesadillas y la tendencia global del taco de carnitas.</p>
<p><strong>Birria:</strong> El caldo es el protagonista. Originario de Jalisco pero adoptado por la CDMX. La quesabirria es el taco moderno de esta tradición.</p>`,
        en: `<p><strong>Pastor:</strong> The king of tacos. Marinated meat trompo, roasted pineapple at the tip, fresh cilantro. The tortilla must be made of corn, freshly made.</p>
<p><strong>Suadero:</strong> Beef skirt slowly cooked in lard. Juicy, fatty, addictive. The quintessential Mexico City favorite.</p>
<p><strong>Guisado:</strong> Grandmother's cooking: rajas, nopales, pressed chicharrón, liver, brains. Changes daily according to what the cook prepared that morning.</p>
<p><strong>Canasta:</strong> Bicycle tacos. Prepared steamed in a basket, sold at breakfast and lunch. Varied fillings, soft tortillas, ideal to accompany with salsa.</p>
<p><strong>Carnitas:</strong> Pork slowly braised. Tender, shredded, full of flavor. Base for quesadillas and the global trend of carnitas tacos.</p>
<p><strong>Birria:</strong> The broth is the protagonist. Originating from Jalisco but adopted by CDMX. Quesabirria is the modern taco of this tradition.</p>`,
      },
    },
    {
      id: 'types-guide',
      title: { es: "Los Mejores Tacos por Tipo", en: "The Best Tacos by Type" },
      content: {
        es: `<p><strong>Al Pastor:</strong> El giro del trompo es hipnotizante. La piña asada toma un color caramelo. La tortilla de maíz, calentita, recibe la carne y un punto de salsa. Cilantro opcional pero recomendado.</p>
<p><strong>De Suadero:</strong> Cocción lenta en manteca, cada hebra de carne suelta. Los mejores capitalinos vienen de vendedores de barrio que llevan años en la misma esquina.</p>
<p><strong>De Guisado:</strong> Acceso directo a la cocina de la abuela. Cada día diferente. Lunes pueden ser rajas con queso, martes chicharrón prensado, miércoles sesos.</p>
<p><strong>De Canasta:</strong> Ideales para desayuno o mediodía. La vaporización mantiene todo suave. Los vendedores en bicicleta aparecen religiosamente a las 6 AM y 2 PM.</p>
<p><strong>De Carnitas y Birria:</strong> La quesabirria es una tendencia global. Tortilla frita, carne deshebrada, queso fundido, y el caldo para mojar. Adictivo.</p>`,
        en: `<p><strong>Al Pastor:</strong> The trompo rotation is hypnotic. The roasted pineapple takes on a caramel color. The warm corn tortilla receives the meat and a touch of salsa. Cilantro optional but recommended.</p>
<p><strong>Suadero:</strong> Slow cooking in lard, each strand of meat loose. The best Mexico City ones come from neighborhood vendors who have been on the same corner for years.</p>
<p><strong>Guisado:</strong> Direct access to grandmother's cooking. Different every day. Monday could be rajas with cheese, Tuesday pressed chicharrón, Wednesday brains.</p>
<p><strong>Canasta:</strong> Ideal for breakfast or lunch. Steaming keeps everything soft. Bicycle vendors appear religiously at 6 AM and 2 PM.</p>
<p><strong>Carnitas & Birria:</strong> Quesabirria is a global trend. Fried tortilla, shredded meat, melted cheese, and broth for dipping. Addictive.</p>`,
      },
    },
    {
      id: 'time-guide',
      title: { es: "Tacos por Hora del Día", en: "Tacos by Time of Day" },
      content: {
        es: `<p><strong>Madrugada (2-6 AM):</strong> Al Pastor y Suadero dominan. Los que salen de antros o regresan de trabajar nocturnamente encuentran los trompos girar aún bajo las luces de neón.</p>
<p><strong>Mañana (6-10 AM):</strong> Canasta y Guisado. Los vendedores de bicicleta con sus canastas de vapor. Es la hora más social — desayunar tacos es un ritual matutino.</p>
<p><strong>Mediodía (12-3 PM):</strong> Guisado y Carnitas. Los comensales corren antes de volver al trabajo. Algunos todavía atrapan los últimos canastas.</p>
<p><strong>Noche (6-11 PM):</strong> Pastor y Suadero regresan. Después del trabajo, la comida principal es taquera. Los trompos vuelven a girar con intensidad.</p>`,
        en: `<p><strong>Late night (2-6 AM):</strong> Al Pastor and Suadero dominate. Those leaving clubs or returning from night work find the trompos still spinning under neon lights.</p>
<p><strong>Morning (6-10 AM):</strong> Canasta and Guisado. Bicycle vendors with their steam baskets. It's the most social hour — eating tacos is a morning ritual.</p>
<p><strong>Midday (12-3 PM):</strong> Guisado and Carnitas. Diners rush before returning to work. Some still catch the last basket tacos.</p>
<p><strong>Night (6-11 PM):</strong> Pastor and Suadero return. After work, the main meal is tacos. The trompos spin again with intensity.</p>`,
      },
    },
    {
      id: 'best-locations',
      title: { es: "Los Mejores Tacos Cerca de Roma-Condesa", en: "Best Tacos Near Roma-Condesa" },
      content: {
        es: `<p><strong>Esquina Durango-Cuauhtémoc:</strong> Pastor y suadero de barrio. Frescos todos los días. Es el tipo de lugar que los locales conocen pero muchos turistas se pierden.</p>
<p><strong>Birria - Esquina Puebla y Monterrey:</strong> La mejor quesabirria de la zona. El caldo es el secreto bien guardado. Se vuelven locos los domingos.</p>
<p><strong>La Glorieta - Ámsterdam 173, Condesa:</strong> Guisados al mediodía. Cambian diariamente. Punto de encuentro local.</p>
<p><strong>A 10 minutos caminando:</strong></p>
<ul>
<li>El Vilsito (Narvarte): El trompo más famoso de esa zona. Abierto de noche.</li>
<li>El Villamelón (Escandón): Alternativa con carácter propio.</li>
<li>Tacos Tony (Condesa): Suadero de culto, línea constante.</li>
</ul>
<p><strong>Si te animas a aventurarte más:</strong></p>
<ul>
<li>Los Cocuyos (Centro): Madrugada. El suadero que visitó Bourdain.</li>
<li>Los Especiales (Centro): Canasta con mención Michelin.</li>
</ul>`,
        en: `<p><strong>Durango-Cuauhtémoc Corner:</strong> Neighborhood pastor and suadero. Fresh every day. It's the kind of place locals know but many tourists miss.</p>
<p><strong>Birria - Puebla and Monterrey Corner:</strong> The best quesabirria in the area. The broth is the well-kept secret. They go crazy on Sundays.</p>
<p><strong>La Glorieta - Ámsterdam 173, Condesa:</strong> Guisados at lunch. Change daily. Local meeting point.</p>
<p><strong>A 10 minute walk away:</strong></p>
<ul>
<li>El Vilsito (Narvarte): The most famous trompo in that area. Open at night.</li>
<li>El Villamelón (Escandón): Alternative with character.</li>
<li>Tacos Tony (Condesa): Cult suadero, constant line.</li>
</ul>
<p><strong>If you dare to venture further:</strong></p>
<ul>
<li>Los Cocuyos (Downtown): Late night. The suadero that Bourdain visited.</li>
<li>Los Especiales (Downtown): Basket tacos with Michelin mention.</li>
</ul>`,
      },
    },
    {
      id: 'how-to-eat',
      title: { es: "Cómo Comer Tacos Como un Chilango", en: "How to Eat Tacos Like a True Chilango" },
      content: {
        es: `<p><strong>La tortilla:</strong> Siempre de maíz. Punto no negociable.</p>
<p><strong>La salsa:</strong> Verde o roja según el gusto personal. Nunca ketchup (eso es un crimen culinario).</p>
<p><strong>Los acompañamientos:</strong> Cilantro y cebolla sí. Limón al gusto. Cada quien domina su experiencia.</p>
<p><strong>La técnica:</strong> No uses tenedor. Las manos son la herramienta correcta. La tortilla es tu plato, tu cuchara y tu vaso todo en uno.</p>
<p><strong>La actitud:</strong> Los tacos son democráticos. Desde el CEO hasta el obrero, todos comemos de la misma manera, en el mismo espacio, con la misma salsa.</p>`,
        en: `<p><strong>The tortilla:</strong> Always made of corn. Non-negotiable point.</p>
<p><strong>The salsa:</strong> Green or red according to personal taste. Never ketchup (that's a culinary crime).</p>
<p><strong>The accompaniments:</strong> Cilantro and onion yes. Lime as desired. Everyone masters their own experience.</p>
<p><strong>The technique:</strong> Don't use a fork. Your hands are the right tool. The tortilla is your plate, your spoon and your glass all in one.</p>
<p><strong>The attitude:</strong> Tacos are democratic. From the CEO to the laborer, we all eat the same way, in the same space, with the same salsa.</p>`,
      },
    },
  ],
  cta: {
    title: { es: "Descansa Después de Tus Aventuras Taqueras", en: "Rest After Your Taco Adventures" },
    description: { es: "Reserva tu estancia en nuestras propiedades favoritas en Roma-Condesa", en: "Book your stay in our favorite properties in Roma-Condesa" },
    properties: [
      { name: "Roma Norte. El Rincón", zone: "Roma Norte", link: "/properties?zone=RomaNorte" },
      { name: "Condesa. El Parque", zone: "Condesa", link: "/properties?zone=Condesa" },
    ],
  },
  relatedSlugs: ["cdmx", "condesa", "roma-norte", "restaurantes-cdmx"],
};

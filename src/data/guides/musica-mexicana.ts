import { Guide } from './types';

export const musicaMexicanaGuide: Guide = {
  title: {
    es: 'La Música Mexicana: Espejo de una Identidad Nacional',
    en: 'Mexican Music: Mirror of a National Identity',
  },
  subtitle: {
    es: 'La Música Mexicana: Espejo de una Identidad Nacional',
    en: 'La Música Mexicana: Espejo de una Identidad Nacional',
  },
  slug: 'musica-mexicana',
  heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop&q=80',
  metaTitle: {
    es: 'Música Mexicana: Guía Completa de Géneros y Artistas',
    en: 'Mexican Music: Complete Guide to Genres and Artists',
  },
  metaDescription: {
    es: 'Mariachi, banda, son jarocho, bolero y más: la guía completa de la música mexicana y su historia.',
    en: 'Mariachi, banda, son jarocho, bolero and more: the complete guide to Mexican music and its history.',
  },
  tags: {
    es: ['Música', 'Cultura', 'Mariachi', 'Bolero', 'México'],
    en: ['Music', 'Culture', 'Mariachi', 'Bolero', 'Mexico'],
  },
  category: 'pillar',
  region: 'all',
  readTime: 12,
  sections: [
    {
      title: { es: 'La Música como Identidad', en: 'Music as Identity' },
      id: 'musica-identidad',
      content: { es: `<h2>La Música Mexicana como Espejo de la Identidad Nacional</h2>
    <p>La música mexicana no es simplemente entretenimiento: es la expresión viva de una civilización que ha absorbido influencias indígenas, españolas, africanas y modernas, creando algo único e inconfundible. Cada género, cada instrumento, cada canción cuenta la historia de México.</p>
    
    <p>Desde el mariachi de Jalisco hasta la marimba de Chiapas, desde el rock de la capital hasta el corridos del norte, la música es el lenguaje donde México se reconoce a sí mismo. Para entender México, necesitas escucharla.</p>

    <h2>El Mariachi: La Banda Sonora de México</h2>
    <p>El mariachi es la representación musical de México ante el mundo. Aunque su origen es debatido —Jalisco, Colima y Cocula reclaman su invención— el consenso académico lo ubica en Jalisco en el siglo XVIII.</p>
    
    <p><strong>Los instrumentos tradicionales:</strong></p>
    <ul>
      <li><strong>Vihuela:</strong> Pequeña guitarra de cinco cuerdas que marca el ritmo</li>
      <li><strong>Guitarrón:</strong> Guitarra gigante de seis cuerdas que da el bajo profundo</li>
      <li><strong>Guitarra:</strong> Proporciona armonía en el registro medio</li>
      <li><strong>Violines:</strong> Dos o más, que tocan la melodía principal</li>
      <li><strong>Trompetas:</strong> De una a dos, que añaden brío y dramatismo</li>
    </ul>
    
    <p><strong>El traje de charro:</strong> No es un disfraz sino un uniforme de ceremonial. El color negro con plata es el más tradicional, aunque existen variantes regionales. Cada botón, cada bordado tiene significado.</p>
    
    <p><strong>Mariachi Vargas de Tecalitlán:</strong> Fundado en 1898, es el grupo más famoso del mundo. Su evolución musical marca los estándares de excelencia del género. Ganaron Grammys, tocaron en el Grammy Awards, llevan la música mexicana a teatros de concierto.</p>
    
    <p><strong>Las canciones icónicas:</strong> "Cielito Lindo" (la más cantada del mundo), "Guadalajara, Guadalajara" (himno jalisciense), "El Son de la Negra" (explosión de energía), "Las Mañanitas" (la serenata de cumpleaños de México).</p>
    
    <p>La UNESCO reconoció el mariachi como Patrimonio Cultural Inmaterial de la Humanidad en 2011. No es exageración: es arte mundial hecho en México.</p>

    <h2>La Banda Sinaloense: La Música del Pueblo</h2>
    <p>Si el mariachi es la música elegante, la banda sinaloense es la música del corazón. Con 80+ instrumentos de viento, la banda sinaloense es masiva, dramática, emocionante.</p>
    
    <p><strong>Géneros derivados:</strong></p>
    <ul>
      <li><strong>Banda:</strong> La formación original de Sinaloa, con decenas de instrumentistas</li>
      <li><strong>Norteña:</strong> Más íntima, dos o tres musicos, acordeón y bajo sexto</li>
      <li><strong>Grupera:</strong> Banda moderna fusionada con rítmos tropicales</li>
    </ul>
    
    <p>En términos de escuchas, la banda es la música más popular de México en números reales. Artistas como Los Ángeles Azules, Reik y Calibre 50 son fenómenos de streaming que superan al rock mexicano en cifras.</p>

    <h2>El Son Jarocho: Ritmo de Resistencia Cultural</h2>
    <p>Veracruz es la puerta de América para México. El son jarocho es la música que nació en los puertos, en el encuentro de indígenas, españoles y africanos esclavizados.</p>
    
    <p><strong>"La Bamba"</strong> es la canción más famosa del son jarocho, hoy un ícono mundial. Pero el son jarocho es mucho más: es ritmo de protesta, de alegría a pesar del sufrimiento, de mestizaje celebrado.</p>
    
    <p>El <strong>zapateado</strong> —el taconeo con los pies como instrumento— es la forma en que los cuerpos se rebelan en ritmo. El bailarín no solo baila: resiste, celebra, cuenta historias con los pies.</p>

    <h2>El Son Huasteco y El Falsetto Característico</h2>
    <p>La región huasteca (que incluye partes de Veracruz, Hidalgo, San Luis Potosí) tiene su propio universo musical. El son huasteco es conocido mundialmente por sus voces.</p>
    
    <p>El <strong>falsetto huasteco</strong> es icónico: voces agudas, casi femeninas, que crean una textura vocal única. Los tríos huastecos son legendarios por esta cualidad. El timbre es casi irreal, transporta al oyente a otro lugar.</p>

    <h2>El Bolero Mexicano: Amor, Tristeza, Nostalgia</h2>
    <p>Si la música mexicana tiene alma, el bolero es su corazón. Nacido en Cuba pero hecho propio en México, el bolero es la canción de amor imposible, de desamor, de nostalgia.</p>
    
    <p><strong>Agustín Lara</strong> fue el poeta del bolero mexicano. "Solamente Una Vez", "Veracruz": canciones que no envejecen porque hablan de emociones eternas.</p>
    
    <p><strong>Pedro Infante</strong> fue el ídolo máximo. Su voz ronca, romántica pero real, hizo llorar a millones. Murió joven (1957) pero su legado es infinito.</p>
    
    <p>Los <strong>tríos</strong> —tres voces, guitarras, a veces maracas— son la formación perfecta para el bolero. La intimidad de un trío es hipnotizante.</p>

    <h2>La Marimba: El Instrumento Nacional de México y Chiapas</h2>
    <p>La marimba es el corazón musical de Chiapas. Este instrumento de percusión de 64+ teclas de madera, con resonadores de tubos, produce un sonido cálido, profundo, mágico.</p>
    
    <p>El <strong>son chiapaneco</strong> es una forma musical que solo existe con marimba. Cada región de Chiapas tiene sus propios sones, sus propias melodías. San Cristóbal, Tuxtla, Tapachula: cada lugar suena diferente.</p>
    
    <p>Escuchar una orquesta de marimbas es una experiencia espiritual. Los tamborileros golpean las teclas con palos forrados en tela, creando ritmos que parecen surgir de la tierra misma.</p>

    <h2>El Rock Mexicano: De Los Yaquis a Molotov</h2>
    <p>A los 50s, cuando el rock llegó a México, los músicos mexicanos lo tomaron y lo convirtieron en algo propio. No fue imitación: fue transformación.</p>
    
    <p><strong>Los Yaquis</strong> y <strong>Three Souls in my Mind</strong> fueron los pioneros de los 60s. Después llegó <strong>Café Tacvba</strong> (los Noventa), que revolucionó el género combinando rock con son jarocho, con cumbia, con todo.</p>
    
    <p><strong>Molotov</strong> traía rap, funk, provocación política. <strong>Kinky</strong> era electrónica experimental. El rock mexicano nunca fue un género: fue un laboratorio creativo.</p>
    
    <p>Hoy, el rock mexicano sigue vivo pero difícilmente es "la música de las masas". Sin embargo, artistas como Zoé, Carla Morrison, y Los Interamericanos mantienen viva la tradición.</p>

    <h2>La Cumbia Colombo-Mexicana: La Fusión Hecha Propia</h2>
    <p>La cumbia llegó de Colombia pero se hizo mexicana. Selena, Grupo Límite, Intocable: artistas de Corpus Christi (Texas) y del norte mexicano tomaron la cumbia colombiana y la hibridaron con la tradición norteña.</p>
    
    <p>El resultado es una música que es profundamente mexicana pero tiene raíces transnacionales. La cumbia es la música de la frontera, del viaje, de la migración.</p>

    <h2>La Música Contemporánea: De Bad Bunny a Peso Pluma</h2>
    <p>Mexico City es hoy una potencia de música urbana. <strong>Bad Bunny</strong> es puertorriqueño pero registró su éxito en México. El reggaeton es global, pero México es uno de sus mercados más grandes.</p>
    
    <p><strong>Peso Pluma</strong> y los <strong>corridos tumbados</strong> son un fenómeno generacional. Los Gen Z de Guadalajara crearon un nuevo género: corridos (música norteña tradicional) pero hechos lentamente, con armonías de trap. Es la música más escuchada de México hoy.</p>
    
    <p>El <strong>Latin pop</strong> de artistas como Eslabón Armado muestra que la música mexicana sigue evolucionando, absorbiendo influencias, creando nuevas fusiones.</p>

    <h2>Los Festivales: Dónde Experimenta México Su Música</h2>
    <p><strong>Vive Latino</strong> (marzo, CDMX): El festival de rock en español más importante de América Latina. 90,000+ personas diarias en el Foro Sol. 25+ años de historia. Es donde México celebra su creación musical.</p>
    
    <p><strong>Bahidora</strong> (febrero, Valle de Bravo): El festival más curado de México. Electrónica + indie. Es el Coachella mexicano: más exclusivo, más experimental, más artístico.</p>
    
    <p><strong>Pal Norte</strong> (abril, Monterrey): Rock en español, pop internacional. 80,000+ personas. El festival del norte.</p>
    
    <p><strong>Flowfest</strong> (octubre-noviembre, CDMX): Urban, reggaeton, trap. La generación joven.</p>

    <h2>Dónde Escuchar Música en Vivo: CDMX y Chiapas</h2>
    <p><strong>En CDMX:</strong></p>
    <ul>
      <li><strong>Plaza Garibaldi:</strong> El lugar legendario. Mariachis listos para serenatas, tríos, bandas. Caro pero auténtico.</li>
      <li><strong>Foro GNP (Polanco):</strong> Conciertos de artistas internacionales y mexicanos. Acústica perfecta.</li>
      <li><strong>Palacio de Bellas Artes:</strong> Conciertos clásicos y de música tradicional. Es un templo.</li>
      <li><strong>Cantinas históricas:</strong> Café Central, El Tenampa (también en Garibaldi). Ambiente auténtico, precios accesibles.</li>
    </ul>
    
    <p><strong>En Chiapas:</strong></p>
    <ul>
      <li><strong>Parque Marimba (Tuxtla Gutiérrez):</strong> Conciertos de orquestas de marimba. Experiencia profundamente chiapaneca.</li>
      <li><strong>San Cristóbal:</strong> Mercados y plazas donde escuchas música tradicional orgánica. Menos turístico, más auténtico.</li>
      <li><strong>Cantinas locales:</strong> Donde la música es generada por la comunidad, no por turismo.</li>
    </ul>

    <h2>Conclusión: La Música Es México</h2>
    <p>No puedes entender México sin su música. Cada género cuenta una historia: de tierra, de amor, de lucha, de alegría. Viene de los Andes (marimba), de España (vihuela), de África (ritmos), de indigenismo prehispánico (escalas, pentatónicas), del modernismo urbano (rock, urbano).</p>
    
    <p>Cuando viajas a México, lleva audífonos. Escucha. La música te llevará a lugares que los mapas no pueden.</p>`, en: `` },
    },
    {
      title: { es: 'El Mariachi: Banda Sonora de México', en: `Mariachi: Mexico's Soundtrack` },
      id: 'mariachi',
      content: { es: ``, en: `` },
    },
    {
      title: { es: 'La Banda Sinaloense', en: 'Banda from Sinaloa' },
      id: 'banda-sinaloense',
      content: { es: ``, en: `` },
    },
    {
      title: { es: 'Son Jarocho y Resistencia', en: 'Son Jarocho and Resistance' },
      id: 'son-jarocho',
      content: { es: ``, en: `` },
    },
    {
      title: { es: 'El Bolero: Corazón Mexicano', en: 'Bolero: Mexican Heart' },
      id: 'bolero-mexicano',
      content: { es: ``, en: `` },
    },
    {
      title: { es: 'Marimba de Chiapas', en: 'Chiapas Marimba' },
      id: 'marimba-chiapas',
      content: { es: ``, en: `` },
    },
    {
      title: { es: 'Rock Mexicano Moderno', en: 'Modern Mexican Rock' },
      id: 'rock-mexicano',
      content: { es: ``, en: `` },
    },
    {
      title: { es: 'Festivales y Conciertos', en: 'Festivals and Concerts' },
      id: 'festivales-conciertos',
      content: { es: ``, en: `` },
    },
  ],
  relatedSlugs: ['cdmx', 'chiapas', 'parque-marimba', 'plaza-garibaldi', 'foro-gnp'],
  cta: {
    title: { es: 'Vive la Música Mexicana desde Adentro', en: 'Experience Mexican Music from Within' },
    description: { es: 'Hospédate en CDMX o Chiapas y descubre la música mexicana de primera mano en sus lugares más auténticos.', en: 'Stay in Mexico City or Chiapas and discover Mexican music firsthand in its most authentic places.' },
    buttonText: { es: 'Ver propiedades', en: 'View properties' },
    buttonLink: '/properties',
  },
};

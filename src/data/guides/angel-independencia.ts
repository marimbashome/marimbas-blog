import { Guide } from './types';

export const angelIndependenciaGuide: Guide = {
  slug: 'angel-independencia',
  title: { es: 'El Ángel de la Independencia', en: 'Angel of Independence' },
  subtitle: {
    es: 'Descubre la historia, arquitectura y significado cultural del Ángel de la Independencia.',
    en: 'Discover the history, architecture and cultural significance of Mexico City',
  },
  heroImage: 'https://images.unsplash.com/photo-1574492852020-b3f2c9c0a3a0?w=800&h=500&fit=crop&q=80',
  category: 'attraction',
  region: 'cdmx',
  readTime: 8,
  tags: {
    es: ['monumento', 'historia', 'paseo de la reforma', 'cdmx'],
    en: ['monument', 'history', 'reforma', 'cdmx']
  },
  metaTitle: { es: 'El Ángel de la Independencia | Guía Completa CDMX', en: 'Angel of Independence | Complete CDMX Guide' },
  metaDescription: {
    es: 'Descubre la historia, arquitectura y significado cultural del Ángel de la Independencia. Ubicación, horarios y qué ver alrededor.',
    en: "Discover the history, architecture and cultural significance of Mexico City's Angel of Independence."
  },
  sections: [
    {
      id: 'por-que-importante',
      title: { es: 'Más Que un Monumento', en: 'More Than a Monument' },
      content: {
        es: `<p><strong>El Ángel no es solo una estructura arquitectónica — es el corazón emocional de CDMX.</strong></p><p>Es donde los capitalinos se reúnen en momentos de victoria y tragedia. Aquí celebran los títulos de la Selección Mexicana, los triunfos deportivos y los momentos históricos de la nación. Es un símbolo de identidad que traspasa generaciones.</p>`,
        en: `<p><strong>The Angel is not just an architectural structure — it's the emotional heart of Mexico City.</strong></p><p>It's where capitalinos gather in moments of victory and tragedy. They celebrate Mexico's national team victories and historical milestones here. It's a symbol of identity that transcends generations.</p>`
      }
    },
    {
      id: 'historia',
      title: { es: 'Historia: De Porfirio Díaz al Siglo XXI', en: 'History: From Porfirio Díaz to the 21st Century' },
      content: {
        es: `<p>El Ángel fue inaugurado en 1910 por el presidente Porfirio Díaz como parte de las celebraciones del Centenario de la Independencia. La columna mide 36 metros y la figura dorada de la Victoria Alada en la cima es icónica en el skyline de la ciudad.</p><p>En 1957 un terremoto derribó la estatua original. Fue restaurada y desde entonces ha sobrevivido otros sismos, convirtiéndose en símbolo de resiliencia.</p>`,
        en: `<p>The Angel was inaugurated in 1910 by President Porfirio Díaz as part of the Centennial Independence celebrations. The column stands 36 meters tall and the golden Winged Victory figure at the top is iconic in the city's skyline.</p><p>In 1957 an earthquake toppled the original statue. It was restored and has since survived other earthquakes, becoming a symbol of resilience.</p>`
      }
    },
    {
      id: 'arquitectura',
      title: { es: 'Arquitectura y Diseño', en: 'Architecture and Design' },
      content: {
        es: `<p>La columna de estilo corintio está construida en cantera y acero. En el interior hay una escalera de caracol con 200 peldaños que lleva hasta la base de la Victoria Alada. El conjunto fue diseñado por el arquitecto Antonio Rivas Mercado.</p><p>El pedestal contiene los restos de varios héroes de la Independencia, incluyendo Miguel Hidalgo, José María Morelos, Vicente Guerrero e Ignacio Allende.</p>`,
        en: `<p>The Corinthian-style column is built in quarry stone and steel. Inside there's a spiral staircase with 200 steps leading to the base of the Winged Victory. The ensemble was designed by architect Antonio Rivas Mercado.</p><p>The pedestal contains the remains of several Independence heroes, including Miguel Hidalgo, José María Morelos, Vicente Guerrero and Ignacio Allende.</p>`
      }
    },
    {
      id: 'visita-practica',
      title: { es: 'Cómo Visitarlo', en: 'How to Visit' },
      content: {
        es: `<p><strong>Ubicación:</strong> Paseo de la Reforma entre Florencia y Río Tiber, Colonia Juárez.</p><p><strong>Metro:</strong> Estación Sevilla (Línea 9) o Insurgentes (Línea 1), luego caminata de 10 minutos.</p><p><strong>Metrobús:</strong> Línea 1, estación Ángel de la Independencia — queda literalmente enfrente.</p><p>El exterior es de acceso libre las 24 horas. El interior (escalera al mirador) abre miércoles a domingo de 9:00 a 17:00 horas, entrada gratuita.</p>`,
        en: `<p><strong>Location:</strong> Paseo de la Reforma between Florencia and Río Tiber, Colonia Juárez.</p><p><strong>Metro:</strong> Sevilla station (Line 9) or Insurgentes (Line 1), then a 10-minute walk.</p><p><strong>Metrobús:</strong> Line 1, Ángel de la Independencia station — it's literally right in front.</p><p>The exterior is freely accessible 24 hours. The interior (stairs to the viewpoint) opens Wednesday to Sunday 9am-5pm, free entry.</p>`
      }
    },
    {
      id: 'alrededores',
      title: { es: 'Qué Ver Alrededor', en: 'What to See Nearby' },
      content: {
        es: `<p>El Ángel está en el corazón del Paseo de la Reforma, el bulevar más icónico de México. A pocos minutos caminando encontrarás:</p><ul><li><strong>Museo Nacional de Antropología:</strong> a 15 minutos en Metrobús hacia Polanco</li><li><strong>Castillo de Chapultepec:</strong> dentro del bosque, a 20 minutos caminando</li><li><strong>Zona Rosa:</strong> barrio cosmopolita con restaurantes y vida nocturna</li><li><strong>Colonia Juárez:</strong> vecindario emergente con cafés de especialidad</li></ul>`,
        en: `<p>The Angel sits at the heart of Paseo de la Reforma, Mexico's most iconic boulevard. A few minutes' walk away you'll find:</p><ul><li><strong>National Museum of Anthropology:</strong> 15 minutes by Metrobús toward Polanco</li><li><strong>Chapultepec Castle:</strong> inside the forest, 20 minutes' walk</li><li><strong>Zona Rosa:</strong> cosmopolitan neighborhood with restaurants and nightlife</li><li><strong>Colonia Juárez:</strong> emerging neighborhood with specialty coffee shops</li></ul>`
      }
    }
  ],
  cta: {
    title: { es: 'Alójate Cerca del Ángel', en: 'Stay Near the Angel' },
    description: {
      es: 'Encuentra hospedaje en la Zona Rosa y Colonia Juárez — a pasos del monumento más icónico de CDMX.',
      en: "Find accommodation in Zona Rosa and Colonia Juárez — steps from Mexico City's most iconic monument."
    },
    buttonText: { es: 'Ver Opciones', en: 'See Options' },
    buttonLink: '/properties?zone=Reforma'
  },
  relatedSlugs: ['cdmx', 'condesa', 'roma-norte', 'museos-cdmx', 'polanco']
};

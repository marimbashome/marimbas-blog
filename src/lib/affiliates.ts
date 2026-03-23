// Affiliate link configuration and utilities for Marimbas Home guides
// Supports: Viator, GetYourGuide, Booking.com, Airalo (eSIM)

export type AffiliateProvider = 'viator' | 'getyourguide' | 'booking' | 'airalo' | 'holafly' | 'nomad' | 'airhelp' | 'safetywing' | 'discovercars' | 'uber';

export interface AffiliateLink {
  provider: AffiliateProvider;
  title: { es: string; en: string };
  description: { es: string; en: string };
  url: string;
  category: 'tours' | 'accommodation' | 'esim' | 'transport';
  icon: string; // emoji
}

// Affiliate IDs — Updated Mar 23, 2026
// Status: Viator=ACTIVE, Awin/Booking=ACTIVE, Travelpayouts=ACTIVE, Airalo=IN_REVIEW, GYG=PENDING_SIGNUP, Holafly=APPLIED
// New: Nomad/AirHelp/SafetyWing=APPLIED on impact.com, DiscoverCars=ACTIVE (Awin), Uber=APPLIED
export const AFFILIATE_IDS: Record<AffiliateProvider, string> = {
  viator: 'P00293758', // ✅ Active — TripAdvisor/Viator affiliate
  getyourguide: 'MARIMBAS_GYG_ID', // ⏳ Pending — complete signup at https://partner.getyourguide.com
  booking: '2823632', // ✅ Active — Awin publisher ID for Booking.com affiliate
  airalo: 'MARIMBAS_AIRALO_ID', // ⏳ In Review — impact.com, Airalo program ID 3251170
  holafly: 'MARIMBAS_HOLAFLY_ID', // ⏳ Applied — https://www.holafly.com/affiliates
  nomad: 'MARIMBAS_NOMAD_ID', // ⏳ Applied on impact.com — Nomad eSIM, 10% commission
  airhelp: '510699', // ✅ Active via Travelpayouts (ID: 712988) — flight compensation, ~15% commission
  safetywing: 'MARIMBAS_SAFETYWING_ID', // ⏳ Applied on impact.com — travel insurance, 10% recurring commission
  discovercars: 'MARIMBAS_DISCOVERCARS_ID', // ✅ Active — Awin, car rentals, 70% commission, 365-day cookie
  uber: 'MARIMBAS_UBER_ID', // ⏳ Applied — Uber rides, $5 per new user signup
};

// Pre-built affiliate links by destination/topic
// These map guide slugs to relevant affiliate offerings
export const AFFILIATE_LINKS_BY_GUIDE: Record<string, AffiliateLink[]> = {
  // CDMX Tours
  'teotihuacan': [
    {
      provider: 'viator',
      title: { es: 'Tour Teotihuacán desde CDMX', en: 'Teotihuacan Tour from Mexico City' },
      description: { es: 'Tour guiado con transporte incluido', en: 'Guided tour with included transport' },
      url: `https://www.viator.com/Mexico-City-tours/Teotihuacan/d631-g6-c7?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🏛️',
    },
    {
      provider: 'getyourguide',
      title: { es: 'Experiencias en Teotihuacán', en: 'Teotihuacan Experiences' },
      description: { es: 'Tours, vuelos en globo y más', en: 'Tours, hot air balloons and more' },
      url: `https://www.getyourguide.com/teotihuacan-l2651/?partner_id=${AFFILIATE_IDS.getyourguide}`,
      category: 'tours',
      icon: '🎈',
    },
  ],
  'xochimilco': [
    {
      provider: 'viator',
      title: { es: 'Tour Xochimilco en Trajinera', en: 'Xochimilco Trajinera Boat Tour' },
      description: { es: 'Recorre los canales de Xochimilco', en: 'Cruise the canals of Xochimilco' },
      url: `https://www.viator.com/Mexico-City-tours/Xochimilco/d631-g6-c22?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🚣',
    },
  ],
  'museo-antropologia': [
    {
      provider: 'getyourguide',
      title: { es: 'Visita Guiada Museo de Antropología', en: 'Guided Visit National Museum' },
      description: { es: 'Tour experto por las salas principales', en: 'Expert tour through main halls' },
      url: `https://www.getyourguide.com/mexico-city-l194/national-museum-anthropology-t5678/?partner_id=${AFFILIATE_IDS.getyourguide}`,
      category: 'tours',
      icon: '🏛️',
    },
  ],
  'lucha-libre': [
    {
      provider: 'viator',
      title: { es: 'Noche de Lucha Libre + Tacos', en: 'Lucha Libre Night + Tacos' },
      description: { es: 'Arena México con guía y comida', en: 'Arena México with guide and food' },
      url: `https://www.viator.com/Mexico-City-tours/Lucha-Libre/d631-g6-c81?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🤼',
    },
  ],
  'plaza-garibaldi': [
    {
      provider: 'viator',
      title: { es: 'Tour Nocturno Garibaldi + Cantinas', en: 'Garibaldi Night Tour + Cantinas' },
      description: { es: 'Mariachi, mezcal y vida nocturna', en: 'Mariachi, mezcal and nightlife' },
      url: `https://www.viator.com/Mexico-City-tours/Nightlife/d631-g6-c20?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🎺',
    },
  ],
  'casa-azul-frida': [
    {
      provider: 'getyourguide',
      title: { es: 'Boletos Casa Azul + Coyoacán', en: 'Blue House Tickets + Coyoacán' },
      description: { es: 'Entrada sin fila + tour por Coyoacán', en: 'Skip-the-line + Coyoacán tour' },
      url: `https://www.getyourguide.com/mexico-city-l194/frida-kahlo-museum-t1234/?partner_id=${AFFILIATE_IDS.getyourguide}`,
      category: 'tours',
      icon: '🎨',
    },
  ],
  // Chiapas Tours
  'canon-del-sumidero': [
    {
      provider: 'viator',
      title: { es: 'Tour Cañón del Sumidero en Lancha', en: 'Sumidero Canyon Boat Tour' },
      description: { es: 'Recorrido completo del cañón + Chiapa de Corzo', en: 'Full canyon tour + Chiapa de Corzo' },
      url: `https://www.viator.com/Tuxtla-Gutierrez-tours/Day-Trips/d50344-g6-c7?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🚤',
    },
  ],
  'san-cristobal': [
    {
      provider: 'viator',
      title: { es: 'Tours desde San Cristóbal', en: 'Tours from San Cristóbal' },
      description: { es: 'Chamula, Zinacantán, cascadas y más', en: 'Chamula, Zinacantán, waterfalls and more' },
      url: `https://www.viator.com/San-Cristobal-de-las-Casas-tours/d50345?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '⛪',
    },
    {
      provider: 'booking',
      title: { es: 'Hoteles en San Cristóbal', en: 'Hotels in San Cristóbal' },
      description: { es: 'Desde boutique hasta hostales', en: 'From boutique to hostels' },
      url: `https://www.booking.com/city/mx/san-cristobal-de-las-casas.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏨',
    },
  ],
  'palenque': [
    {
      provider: 'viator',
      title: { es: 'Tour Zona Arqueológica Palenque', en: 'Palenque Archaeological Zone Tour' },
      description: { es: 'Guía experto + cascadas de Agua Azul', en: 'Expert guide + Agua Azul waterfalls' },
      url: `https://www.viator.com/Palenque-tours/d50346?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🏛️',
    },
  ],
  'chamula': [
    {
      provider: 'getyourguide',
      title: { es: 'Tour Chamula y Zinacantán', en: 'Chamula & Zinacantán Tour' },
      description: { es: 'Comunidades indígenas desde San Cristóbal', en: 'Indigenous communities from San Cristóbal' },
      url: `https://www.getyourguide.com/san-cristobal-de-las-casas-l4567/chamula-t8901/?partner_id=${AFFILIATE_IDS.getyourguide}`,
      category: 'tours',
      icon: '🕯️',
    },
  ],
  'selva-lacandona-bonampak': [
    {
      provider: 'viator',
      title: { es: 'Expedición Selva Lacandona', en: 'Lacandon Jungle Expedition' },
      description: { es: 'Bonampak, Yaxchilán y comunidades', en: 'Bonampak, Yaxchilán and communities' },
      url: `https://www.viator.com/Palenque-tours/Nature/d50346-g6-c11?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🌿',
    },
  ],
  // Accommodation-focused guides (Booking.com, Transport)
  'cdmx': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Ciudad de México', en: 'Hotels in Mexico City' },
      description: { es: 'Encuentra hospedaje en cualquier zona', en: 'Find accommodation in any neighborhood' },
      url: `https://www.booking.com/city/mx/mexico-city.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏨',
    },
    {
      provider: 'uber',
      title: { es: 'Uber en Ciudad de México', en: 'Uber in Mexico City' },
      description: { es: 'Transporte seguro y cómodo', en: 'Safe and convenient transport' },
      url: `https://www.uber.com/?promo_code=${AFFILIATE_IDS.uber}`,
      category: 'transport',
      icon: '🚗',
    },
  ],
  'condesa': [
    {
      provider: 'booking',
      title: { es: 'Hospedaje en La Condesa', en: 'Stay in La Condesa' },
      description: { es: 'Hoteles y departamentos en Condesa', en: 'Hotels and apartments in Condesa' },
      url: `https://www.booking.com/district/mx/mexico-city/condesa.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🌳',
    },
  ],
  'roma-norte': [
    {
      provider: 'booking',
      title: { es: 'Hospedaje en Roma Norte', en: 'Stay in Roma Norte' },
      description: { es: 'La zona más trendy de CDMX', en: 'CDMX\'s trendiest neighborhood' },
      url: `https://www.booking.com/district/mx/mexico-city/roma-norte.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏡',
    },
  ],
  'polanco': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Polanco', en: 'Hotels in Polanco' },
      description: { es: 'Zona premium de CDMX', en: 'Premium area of CDMX' },
      url: `https://www.booking.com/district/mx/mexico-city/polanco.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '✨',
    },
  ],
  'cancun': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Cancún', en: 'Hotels in Cancún' },
      description: { es: 'Zona Hotelera y Centro', en: 'Hotel Zone and Downtown' },
      url: `https://www.booking.com/city/mx/cancun.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏖️',
    },
    {
      provider: 'viator',
      title: { es: 'Tours desde Cancún', en: 'Tours from Cancún' },
      description: { es: 'Chichén Itzá, cenotes, snorkel', en: 'Chichén Itzá, cenotes, snorkeling' },
      url: `https://www.viator.com/Cancun/d631?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🐠',
    },
    {
      provider: 'discovercars',
      title: { es: 'Renta de Autos en Cancún', en: 'Car Rental in Cancún' },
      description: { es: '70% comisión, cookie 365 días', en: '70% commission, 365-day cookie' },
      url: `https://www.discovercars.com/?affiliateCode=${AFFILIATE_IDS.discovercars}`,
      category: 'transport',
      icon: '🚗',
    },
  ],
  'tulum': [
    {
      provider: 'booking',
      title: { es: 'Hospedaje en Tulum', en: 'Stay in Tulum' },
      description: { es: 'Eco-hoteles y beach clubs', en: 'Eco-hotels and beach clubs' },
      url: `https://www.booking.com/city/mx/tulum.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🌴',
    },
  ],
  'riviera-maya': [
    {
      provider: 'booking',
      title: { es: 'Hoteles Riviera Maya', en: 'Riviera Maya Hotels' },
      description: { es: 'All-inclusive y boutique', en: 'All-inclusive and boutique' },
      url: `https://www.booking.com/region/mx/rivieramaya.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏝️',
    },
    {
      provider: 'discovercars',
      title: { es: 'Renta de Autos Riviera Maya', en: 'Car Rental Riviera Maya' },
      description: { es: 'Explora playas y cenotes independientemente', en: 'Explore beaches and cenotes independently' },
      url: `https://www.discovercars.com/?affiliateCode=${AFFILIATE_IDS.discovercars}`,
      category: 'transport',
      icon: '🚗',
    },
  ],
  'guadalajara-jalisco': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Guadalajara', en: 'Hotels in Guadalajara' },
      description: { es: 'Centro, Chapultepec y Tlaquepaque', en: 'Downtown, Chapultepec and Tlaquepaque' },
      url: `https://www.booking.com/city/mx/guadalajara.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏨',
    },
  ],
  'merida-yucatan': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Mérida', en: 'Hotels in Mérida' },
      description: { es: 'Casas coloniales y haciendas', en: 'Colonial houses and haciendas' },
      url: `https://www.booking.com/city/mx/merida.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏛️',
    },
  ],
  'oaxaca': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Oaxaca', en: 'Hotels in Oaxaca' },
      description: { es: 'Centro histórico y alrededores', en: 'Historic center and surroundings' },
      url: `https://www.booking.com/city/mx/oaxaca.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏨',
    },
    {
      provider: 'viator',
      title: { es: 'Tours en Oaxaca', en: 'Tours in Oaxaca' },
      description: { es: 'Monte Albán, mezcal, cocina', en: 'Monte Albán, mezcal, cooking' },
      url: `https://www.viator.com/Oaxaca/d50347?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🍶',
    },
  ],
  // Practical guides (eSIM & Travel Insurance)
  'que-empacar-mexico': [
    {
      provider: 'airalo',
      title: { es: 'eSIM para México', en: 'eSIM for Mexico' },
      description: { es: 'Internet móvil sin roaming', en: 'Mobile internet without roaming' },
      url: `https://www.airalo.com/mexico?ref=${AFFILIATE_IDS.airalo}`,
      category: 'esim',
      icon: '📱',
    },
    {
      provider: 'holafly',
      title: { es: 'eSIM Holafly México', en: 'Holafly Mexico eSIM' },
      description: { es: 'Datos ilimitados desde $6 USD/día', en: 'Unlimited data from $6 USD/day' },
      url: `https://www.holafly.com/esim-mexico?ref=${AFFILIATE_IDS.holafly}`,
      category: 'esim',
      icon: '🌐',
    },
    {
      provider: 'nomad',
      title: { es: 'Nomad eSIM México', en: 'Nomad eSIM Mexico' },
      description: { es: 'eSIM alternativa, 10% comisión', en: 'Alternative eSIM, 10% commission' },
      url: `https://www.nomadicsim.com/mexico?ref=${AFFILIATE_IDS.nomad}`,
      category: 'esim',
      icon: '📡',
    },
    {
      provider: 'safetywing',
      title: { es: 'SafetyWing Seguro de Viaje', en: 'SafetyWing Travel Insurance' },
      description: { es: 'Cobertura médica de viajeros, 10% comisión recurrente', en: 'Traveler medical coverage, 10% recurring commission' },
      url: `https://www.safetywing.com/?referral_code=${AFFILIATE_IDS.safetywing}`,
      category: 'esim',
      icon: '🛡️',
    },
  ],
  'digital-nomads-mexico': [
    {
      provider: 'airalo',
      title: { es: 'eSIM México para Nómadas', en: 'Mexico eSIM for Nomads' },
      description: { es: 'Planes largos con datos abundantes', en: 'Long plans with plenty of data' },
      url: `https://www.airalo.com/mexico?ref=${AFFILIATE_IDS.airalo}`,
      category: 'esim',
      icon: '💻',
    },
    {
      provider: 'safetywing',
      title: { es: 'Seguro Nómada SafetyWing', en: 'SafetyWing Nomad Insurance' },
      description: { es: 'Cobertura médica para nómadas digitales', en: 'Medical coverage for digital nomads' },
      url: `https://www.safetywing.com/?referral_code=${AFFILIATE_IDS.safetywing}`,
      category: 'esim',
      icon: '🛡️',
    },
    {
      provider: 'uber',
      title: { es: 'Uber en México', en: 'Uber in Mexico' },
      description: { es: 'Transporte seguro en ciudades', en: 'Safe transport in cities' },
      url: `https://www.uber.com/?promo_code=${AFFILIATE_IDS.uber}`,
      category: 'transport',
      icon: '🚗',
    },
  ],
  'seguridad-mexico': [
    {
      provider: 'airalo',
      title: { es: 'Mantente Conectado en México', en: 'Stay Connected in Mexico' },
      description: { es: 'eSIM para emergencias y navegación', en: 'eSIM for emergencies and navigation' },
      url: `https://www.airalo.com/mexico?ref=${AFFILIATE_IDS.airalo}`,
      category: 'esim',
      icon: '📡',
    },
    {
      provider: 'safetywing',
      title: { es: 'Seguro de Viaje SafetyWing', en: 'SafetyWing Travel Insurance' },
      description: { es: 'Cobertura médica de emergencia', en: 'Emergency medical coverage' },
      url: `https://www.safetywing.com/?referral_code=${AFFILIATE_IDS.safetywing}`,
      category: 'esim',
      icon: '🛡️',
    },
    {
      provider: 'airhelp',
      title: { es: 'AirHelp - Compensación de Vuelos', en: 'AirHelp - Flight Compensation' },
      description: { es: 'Reclama compensación por vuelos demorados/cancelados', en: 'Claim compensation for delayed/cancelled flights' },
      url: `https://www.airhelp.com/?ref=${AFFILIATE_IDS.airhelp}`,
      category: 'transport',
      icon: '✈️',
    },
  ],
  // FIFA 2026 (everything)
  'mundial-2026': [
    {
      provider: 'viator',
      title: { es: 'Tours CDMX para el Mundial', en: 'Mexico City Tours for the World Cup' },
      description: { es: 'Experiencias top durante FIFA 2026', en: 'Top experiences during FIFA 2026' },
      url: `https://www.viator.com/Mexico-City/d631?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '⚽',
    },
    {
      provider: 'booking',
      title: { es: 'Hospedaje Mundial 2026', en: 'FIFA 2026 Accommodation' },
      description: { es: 'Reserva cerca del Estadio Azteca', en: 'Book near Estadio Azteca' },
      url: `https://www.booking.com/city/mx/mexico-city.html?aid=${AFFILIATE_IDS.booking}&label=fifa2026`,
      category: 'accommodation',
      icon: '🏟️',
    },
    {
      provider: 'airalo',
      title: { es: 'eSIM para el Mundial', en: 'eSIM for the World Cup' },
      description: { es: 'Internet rápido para streaming y GPS', en: 'Fast internet for streaming and GPS' },
      url: `https://www.airalo.com/mexico?ref=${AFFILIATE_IDS.airalo}`,
      category: 'esim',
      icon: '📱',
    },
  ],
  // Major destinations
  'chichen-itza': [
    {
      provider: 'viator',
      title: { es: 'Tour Chichén Itzá desde Cancún', en: 'Chichén Itzá Tour from Cancún' },
      description: { es: 'Tour completo con cenote y Valladolid', en: 'Full tour with cenote and Valladolid' },
      url: `https://www.viator.com/Cancun-tours/Chichen-Itza/d631-g6-c7?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🏛️',
    },
  ],
  'holbox': [
    {
      provider: 'booking',
      title: { es: 'Hospedaje en Holbox', en: 'Stay in Holbox' },
      description: { es: 'Cabañas frente al mar', en: 'Beachfront cabanas' },
      url: `https://www.booking.com/city/mx/holbox-island.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏝️',
    },
  ],
  'los-cabos-baja': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Los Cabos', en: 'Hotels in Los Cabos' },
      description: { es: 'Resorts y boutique hotels', en: 'Resorts and boutique hotels' },
      url: `https://www.booking.com/city/mx/cabo-san-lucas.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🌅',
    },
  ],
  'valle-de-guadalupe': [
    {
      provider: 'viator',
      title: { es: 'Tour de Vinos Valle de Guadalupe', en: 'Wine Tour Valle de Guadalupe' },
      description: { es: 'Degustación en viñedos premium', en: 'Tasting at premium vineyards' },
      url: `https://www.viator.com/Ensenada-tours/Wine/d50348-g6-c50?pid=${AFFILIATE_IDS.viator}`,
      category: 'tours',
      icon: '🍷',
    },
  ],
  'puebla': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Puebla', en: 'Hotels in Puebla' },
      description: { es: 'Centro histórico colonial', en: 'Colonial historic center' },
      url: `https://www.booking.com/city/mx/heroica-puebla-de-zaragoza.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏛️',
    },
  ],
  'monterrey': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Monterrey', en: 'Hotels in Monterrey' },
      description: { es: 'Zona centro y San Pedro', en: 'Downtown and San Pedro' },
      url: `https://www.booking.com/city/mx/monterrey.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏔️',
    },
  ],
  'mazatlan': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Mazatlán', en: 'Hotels in Mazatlán' },
      description: { es: 'Zona Dorada y Centro Histórico', en: 'Golden Zone and Historic Center' },
      url: `https://www.booking.com/city/mx/mazatlan.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏖️',
    },
  ],
  'queretaro': [
    {
      provider: 'booking',
      title: { es: 'Hoteles en Querétaro', en: 'Hotels in Querétaro' },
      description: { es: 'Centro histórico patrimonio UNESCO', en: 'UNESCO World Heritage center' },
      url: `https://www.booking.com/city/mx/queretaro.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏛️',
    },
  ],
  'sayulita-nayarit': [
    {
      provider: 'booking',
      title: { es: 'Hospedaje en Sayulita', en: 'Stay in Sayulita' },
      description: { es: 'Surf, yoga y playa', en: 'Surf, yoga and beach' },
      url: `https://www.booking.com/city/mx/sayulita.html?aid=${AFFILIATE_IDS.booking}`,
      category: 'accommodation',
      icon: '🏄',
    },
  ],
};

// Get affiliate links for a guide, with fallback to generic links
export function getAffiliateLinksForGuide(slug: string): AffiliateLink[] {
  return AFFILIATE_LINKS_BY_GUIDE[slug] || [];
}

// Get generic affiliate links based on guide region
export function getGenericAffiliateLinks(region: 'cdmx' | 'chiapas' | 'all'): AffiliateLink[] {
  const esim: AffiliateLink = {
    provider: 'airalo',
    title: { es: 'eSIM para México', en: 'eSIM for Mexico' },
    description: { es: 'Internet móvil sin roaming', en: 'Mobile internet without roaming' },
    url: `https://www.airalo.com/mexico?ref=${AFFILIATE_IDS.airalo}`,
    category: 'esim',
    icon: '📱',
  };

  const safetywing: AffiliateLink = {
    provider: 'safetywing',
    title: { es: 'SafetyWing Seguro de Viaje', en: 'SafetyWing Travel Insurance' },
    description: { es: 'Cobertura médica para viajeros', en: 'Traveler medical coverage' },
    url: `https://www.safetywing.com/?referral_code=${AFFILIATE_IDS.safetywing}`,
    category: 'esim',
    icon: '🛡️',
  };

  if (region === 'cdmx') {
    return [
      {
        provider: 'viator',
        title: { es: 'Tours en Ciudad de México', en: 'Mexico City Tours' },
        description: { es: 'Las mejores experiencias', en: 'Top experiences' },
        url: `https://www.viator.com/Mexico-City/d631?pid=${AFFILIATE_IDS.viator}`,
        category: 'tours',
        icon: '🗺️',
      },
      {
        provider: 'uber',
        title: { es: 'Uber en CDMX', en: 'Uber in CDMX' },
        description: { es: 'Transporte seguro $5 primer viaje', en: 'Safe transport $5 first ride' },
        url: `https://www.uber.com/?promo_code=${AFFILIATE_IDS.uber}`,
        category: 'transport',
        icon: '🚗',
      },
      esim,
      safetywing,
    ];
  }

  if (region === 'chiapas') {
    return [
      {
        provider: 'viator',
        title: { es: 'Tours en Chiapas', en: 'Chiapas Tours' },
        description: { es: 'Aventura y cultura maya', en: 'Adventure and Mayan culture' },
        url: `https://www.viator.com/Tuxtla-Gutierrez/d50344?pid=${AFFILIATE_IDS.viator}`,
        category: 'tours',
        icon: '🌿',
      },
      esim,
      safetywing,
    ];
  }

  return [esim, safetywing];
}

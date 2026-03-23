import { Guide } from './types';

export const saludEmergenciasMexicoGuide: Guide = {
  slug: 'salud-emergencias-mexico',
  title: { es: 'Salud y Emergencias en México', en: 'Health and Emergencies in Mexico' },
  subtitle: {
    es: 'Números de emergencia, hospitales recomendados, farmacias, vacunas necesarias y cómo.',
    en: 'Emergency numbers, recommended hospitals, pharmacies, necessary vaccines and how to.',
  },
  heroImage: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=500&fit=crop&q=80',
  category: 'practical',
  region: 'all',
  readTime: 9,
  tags: {
    es: ['salud', 'emergencias', 'seguridad', 'viaje', 'médico'],
    en: ['health', 'emergencies', 'safety', 'travel', 'medical']
  },
  metaTitle: { es: 'Salud y Emergencias en México | Guía para Viajeros 2026', en: 'Health and Emergencies in Mexico | Traveler Guide 2026' },
  metaDescription: {
    es: 'Números de emergencia, hospitales recomendados, farmacias, vacunas necesarias y cómo manejar problemas de salud en México.',
    en: 'Emergency numbers, recommended hospitals, pharmacies, necessary vaccines and how to handle health issues in Mexico.'
  },
  sections: [
    {
      id: 'numeros-emergencia',
      title: { es: 'Números de Emergencia', en: 'Emergency Numbers' },
      content: {
        es: `<p><strong>911</strong> — Número unificado desde 2016, funciona en todo México para ambulancias, policía y bomberos.</p><p><strong>065</strong> — Cruz Roja Mexicana (también válido en algunas regiones).</p><p><strong>068</strong> — Bomberos (en algunos estados).</p><p>Consejo clave: Guarda estos números en tu teléfono Y en papel por separado. Si pierdes el teléfono, necesitarás los números anotados.</p>`,
        en: `<p><strong>911</strong> — Unified number since 2016, works throughout Mexico for ambulances, police and fire trucks.</p><p><strong>065</strong> — Mexican Red Cross (also valid in some regions).</p><p><strong>068</strong> — Fire Department (in some states).</p><p>Key advice: Save these numbers on your phone AND on paper separately. If you lose your phone, you will need the written numbers.</p>`
      }
    },
    {
      id: 'hospitales-cdmx',
      title: { es: 'Hospitales Recomendados en CDMX', en: 'Recommended Hospitals in Mexico City' },
      content: {
        es: `<p><strong>ABC Medical Center (American British Cowdray)</strong> — El hospital preferido por extranjeros en CDMX. Personal bilingüe, estándares internacionales. Col. Las Américas. Emergencias 24h.</p><p><strong>Hospital Ángeles Pedregal</strong> — Alta calidad, acepta seguros internacionales. Sur de CDMX.</p><p><strong>Hospital Nacional Homeopático</strong> — Opción pública de alta calidad para emergencias, gratuito para visitantes en ciertos casos.</p><p>Para emergencias menores: cualquier "Urgencias" de una clínica privada en zonas turísticas (Roma, Condesa, Polanco) atiende rápido y económico.</p>`,
        en: `<p><strong>ABC Medical Center (American British Cowdray)</strong> — The preferred hospital for foreigners in Mexico City. Bilingual staff, international standards. Las Américas neighborhood. 24h emergencies.</p><p><strong>Hospital Ángeles Pedregal</strong> — High quality, accepts international insurance. Southern CDMX.</p><p><strong>National Homeopathic Hospital</strong> — High-quality public option for emergencies, free for visitors in certain cases.</p><p>For minor emergencies: any private clinic "Urgencias" in tourist areas (Roma, Condesa, Polanco) attends quickly and affordably.</p>`
      }
    },
    {
      id: 'hospitales-chiapas',
      title: { es: 'Hospitales en Chiapas', en: 'Hospitals in Chiapas' },
      content: {
        es: `<p><strong>En Tuxtla Gutiérrez:</strong> Hospital de las Culturas (público, básico), <strong>Hospital San José</strong> (privado, recomendado para viajeros).</p><p><strong>En San Cristóbal:</strong> Hospital Regional (público, básico), <strong>Clínica Santo Tomás</strong> (privada, mejor opción).</p><p>Recomendación: si viajas a la selva (Palenque, Bonampak), es más seguro tener cobertura de evacuación médica hacia CDMX en tu seguro de viaje.</p>`,
        en: `<p><strong>In Tuxtla Gutiérrez:</strong> Hospital de las Culturas (public, basic), <strong>Hospital San José</strong> (private, recommended for travelers).</p><p><strong>In San Cristóbal:</strong> Regional Hospital (public, basic), <strong>Clínica Santo Tomás</strong> (private, better option).</p><p>Recommendation: if you travel to the jungle (Palenque, Bonampak), it is safer to have medical evacuation coverage to Mexico City in your travel insurance.</p>`
      }
    },
    {
      id: 'farmacias',
      title: { es: 'Farmacias con Médico de Turno', en: 'Pharmacies with On-Duty Doctor' },
      content: {
        es: `<p><strong>Farmacias del Ahorro, Benavides, Guadalajara, Farmacias Similares</strong> — todas tienen médico de turno en un consultorio dentro de la farmacia.</p><p><strong>Costo de consulta:</strong> $30-50 pesos (menos de $2 USD). Sin cita. Muchos diagnósticos simples se resuelven aquí.</p><p>Presentes en cada esquina en CDMX, Tuxtla, San Cristóbal. Es la opción más accesible para problemas menores: resfriados, diarrea, infecciones simples.</p><p><strong>Ventaja:</strong> el doctor receta y compras las medicinas en la misma farmacia. Muy conveniente.</p>`,
        en: `<p><strong>Farmacias del Ahorro, Benavides, Guadalajara, Farmacias Similares</strong> — all have a doctor on duty in a clinic inside the pharmacy.</p><p><strong>Consultation cost:</strong> $30-50 pesos (less than $2 USD). No appointment needed. Many simple diagnoses are resolved here.</p><p>Present on every corner in Mexico City, Tuxtla, San Cristóbal. It is the most accessible option for minor issues: colds, diarrhea, simple infections.</p><p><strong>Advantage:</strong> the doctor prescribes and you buy the medicine at the same pharmacy. Very convenient.</p>`
      }
    },
    {
      id: 'problemas-comunes',
      title: { es: 'Problemas de Salud Más Comunes', en: 'Most Common Health Issues' },
      content: {
        es: `<p><strong>Diarrea del Viajero (Venganza de Moctezuma):</strong> Causada por agua del grifo, hielo, ensaladas lavadas con agua de llave. Regla de oro: si no puedes pelarlo, no lo comas crudamente.</p><p><strong>Bronquitis por Contaminación:</strong> CDMX tiene mala calidad del aire en invierno. Si tienes asma o alergias, lleva inhalador.</p><p><strong>Deshidratación:</strong> Combinación de calor, altitud (CDMX está a 2,250m) y ritmo turístico. Bebe agua constantemente.</p><p><strong>Quemaduras Solares:</strong> En Chiapas el sol es más intenso. SPF 50+ es obligatorio.</p>`,
        en: `<p><strong>Traveler's Diarrhea (Montezuma's Revenge):</strong> Caused by tap water, ice, salads washed with tap water. Golden rule: if you cannot peel it, do not eat it raw.</p><p><strong>Pollution Bronchitis:</strong> Mexico City has poor air quality in winter. If you have asthma or allergies, bring an inhaler.</p><p><strong>Dehydration:</strong> Combination of heat, altitude (CDMX is at 2,250m) and tourist pace. Drink water constantly.</p><p><strong>Sunburn:</strong> In Chiapas the sun is more intense. SPF 50+ is mandatory.</p>`
      }
    },
    {
      id: 'vacunas',
      title: { es: 'Vacunas Recomendadas', en: 'Recommended Vaccines' },
      content: {
        es: `<p><strong>Hepatitis A:</strong> Altamente recomendada para viajeros.</p><p><strong>Tétanos:</strong> Verifica que esté actualizado (cada 10 años).</p><p><strong>Fiebre Tifoidea:</strong> Recomendada especialmente para viajes a la selva.</p><p><strong>Antipalúdico:</strong> Solo necesario para zonas de selva baja de Chiapas y costa. Si viajas solo a CDMX, San Cristóbal y Tuxtla no lo necesitas.</p><p>Consulta con tu médico 4-6 semanas antes del viaje. Algunas vacunas requieren dosis múltiples.</p>`,
        en: `<p><strong>Hepatitis A:</strong> Highly recommended for travelers.</p><p><strong>Tetanus:</strong> Check that it is up to date (every 10 years).</p><p><strong>Typhoid Fever:</strong> Especially recommended for jungle trips.</p><p><strong>Antimalarial:</strong> Only needed for low jungle areas of Chiapas and coast. If you only travel to Mexico City, San Cristóbal and Tuxtla you do not need it.</p><p>Consult your doctor 4-6 weeks before traveling. Some vaccines require multiple doses.</p>`
      }
    },
    {
      id: 'botiquin',
      title: { es: 'Botiquín Básico Recomendado', en: 'Basic Recommended First Aid Kit' },
      content: {
        es: `<p><strong>Para todos los viajeros:</strong></p><ul><li>Antidiarreico (loperamida)</li><li>Sales de rehidratación oral</li><li>Analgésico (paracetamol o ibuprofeno)</li><li>Antihistamínico (cetirizina)</li><li>Protector solar SPF 50+</li><li>Repelente DEET (especialmente para Chiapas en temporada lluvias)</li></ul><p>Recuerda: las farmacias mexicanas tienen todo más barato. No necesitas traer un botiquín pesado.</p>`,
        en: `<p><strong>For all travelers:</strong></p><ul><li>Antidiarrheal (loperamide)</li><li>Oral rehydration salts</li><li>Painkiller (paracetamol or ibuprofen)</li><li>Antihistamine (cetirizine)</li><li>SPF 50+ sunscreen</li><li>DEET repellent (especially for Chiapas during rainy season)</li></ul><p>Remember: Mexican pharmacies have everything cheaper. You do not need to bring a heavy first aid kit.</p>`
      }
    }
  ],
  cta: {
    title: { es: 'Prepárate y Viaja Seguro', en: 'Prepare and Travel Safely' },
    description: {
      es: 'Con esta información estás listo para manejar cualquier situación médica en México. Ahora encuentra el hospedaje perfecto.',
      en: "With this information you're ready to handle any medical situation in Mexico. Now find the perfect accommodation."
    },
    buttonText: { es: 'Ver Opciones', en: 'See Options' },
    buttonLink: '/properties'
  },
  relatedSlugs: ['seguridad-mexico', 'que-empacar-mexico', 'aeropuertos-cdmx', 'cdmx', 'chiapas']
};

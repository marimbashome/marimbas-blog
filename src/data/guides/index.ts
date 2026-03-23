import type { Guide } from './types';

import { cienCosasHacerCdmxGuide } from './100-cosas-hacer-cdmx';
import { aeropuertosCdmxGuide } from './aeropuertos-cdmx';
import { angelIndependenciaGuide } from './angel-independencia';
import { antrosVidaNocturnaCdmxGuide } from './antros-vida-nocturna-cdmx';
import { artesaniasChiapasCdmxGuide } from './artesanias-chiapas-cdmx';
import { bacalarMahahualGuide } from './bacalar-mahahual';
import { baresCdmxGuide } from './bares-cdmx';
import { basilicaGuadalupeGuide } from './basilica-guadalupe';
import { bebidasAlcolicasChiapasGuide } from './bebidas-alcoholicas-chiapas';
import { bebidasAlcolicasMexicoGuide } from './bebidas-alcoholicas-mexico';
import { bebidasNoAlcolicasMexicoGuide } from './bebidas-no-alcoholicas-mexico';
import { berriozabalCoitaGuide } from './berriozabal-coita';
import { botanerosTuxtlaGuide } from './botaneros-tuxtla';
import { cafeChiapasGuide } from './cafe-chiapas';
import { cancunGuide } from './cancun';
import { canonDelSumideroGuide } from './canon-del-sumidero';
import { carnavalChiapasGuide } from './carnaval-chiapas';
import { casaAzulFridaGuide } from './casa-azul-frida';
import { cdmxGuide } from './cdmx';
import { cervezasMexicanasGuide } from './cervezas-mexicanas';
import { chamulaGuide } from './chamula';
import { chiapaDeCorzoGuide } from './chiapa-de-corzo';
import { chiapasGuide } from './chiapas';
import { chichenItzaGuide } from './chichen-itza';
import { cineMexicanoGuide } from './cine-mexicano';
import { civilizacionesPrehispanicasGuide } from './civilizaciones-prehispanicas';
import { comitanGuide } from './comitan';
import { comunidadesIndigenasChiapasGuide } from './comunidades-indigenas-chiapas';
import { condesaGuide } from './condesa';
import { coyoacanGuide } from './coyoacan';
import { diaDeMuertosGuide } from './dia-de-muertos';
import { digitalNomadsMexicoGuide } from './digital-nomads-mexico';
import { dulcesTipicosMexicoGuide } from './dulces-tipicos-mexico';
import { economiaNegocionMexicoGuide } from './economia-negocios-mexico';
import { f1MexicoGuide } from './f1-mexico';
import { festivalesMusicaMexicoGuide } from './festivales-musica-mexico';
import { foroGnpGuide } from './foro-gnp';
import { gastronomiaChiapanecaGuide } from './gastronomia-chiapaneca';
import { gruposEtnicosChiapasGuide } from './grupos-etnicos-chiapas';
import { guadalajaraJaliscoGuide } from './guadalajara-jalisco';
import { guanajuatoSanMiguelGuide } from './guanajuato-san-miguel';
import { historiaChiapasGuide } from './historia-chiapas';
import { historiaMexicoGuide } from './historia-mexico';
import { holboxGuide } from './holbox';
import { idiomasLenguasMexicoGuide } from './idiomas-lenguas-mexico';
import { ligaMxDeportesCdmxGuide } from './liga-mx-deportes-cdmx';
import { losCabosBajaGuide } from './los-cabos-baja';
import { luchaLibreGuide } from './lucha-libre';
import { mariachiTriosGuide } from './mariachi-trios';
import { mariposaMoarcaGuide } from './mariposa-monarca';
import { mazatlanGuide } from './mazatlan';
import { mejoresDestinosMexicoGuide } from './mejores-destinos-mexico';
import { mejoresPlayasMexicoGuide } from './mejores-playas-mexico';
import { meridaYucatanGuide } from './merida-yucatan';
import { metroCdmxGuide } from './metro-cdmx';
import { monterreyGuide } from './monterrey';
import { mundialGuide } from './mundial-2026';
import { museoAntropologiaGuide } from './museo-antropologia';
import { museoDelAmbarGuide } from './museo-del-ambar';
import { museosCdmxGuide } from './museos-cdmx';
import { museosTuxtlaGuide } from './museos-tuxtla';
import { musicaMexicanaGuide } from './musica-mexicana';
import { oaxacaGuide } from './oaxaca';
import { palenqueGuide } from './palenque';
import { parqueMarimbaGuide } from './parque-marimba';
import { playasChiapasGuide } from './playas-chiapas';
import { plazaGaribaldiGuide } from './plaza-garibaldi';
import { polancoGuide } from './polanco';
import { pueblaGuide } from './puebla';
import { pueblosMagicosChiapasGuide } from './pueblos-magicos-chiapas';
import { pueblosMagicosMexicoGuide } from './pueblos-magicos-mexico';
import { queEmpacarMexicoGuide } from './que-empacar-mexico';
import { queretaroGuide } from './queretaro';
import { reservasNaturalesChiapasGuide } from './reservas-naturales-chiapas';
import { restaurantesCdmxGuide } from './restaurantes-cdmx';
import { restaurantesTuxtlaGuide } from './restaurantes-tuxtla';
import { rioLaVentaGuide } from './rio-la-venta';
import { rivieraMayaGuide } from './riviera-maya';
import { romaNorteGuide } from './roma-norte';
import { salsasComidaPicanteMexicoGuide } from './salsas-comida-picante-mexico';
import { saludEmergenciasMexicoGuide } from './salud-emergencias-mexico';
import { sanCristobalGuide } from './san-cristobal';
import { sayulitaNayaritGuide } from './sayulita-nayarit';
import { seguridadMexicoGuide } from './seguridad-mexico';
import { selvaLacandonaBonampakGuide } from './selva-lacandona-bonampak';
import { simaDelasCotorrasGuide } from './sima-de-las-cotorras';
import { tacosCdmxGuide } from './tacos-cdmx';
import { teatroAuditorioCdmxGuide } from './teatro-auditorio-cdmx';
import { teotihuacanGuide } from './teotihuacan';
import { tlalpanGuide } from './tlalpan';
import { toninaGuide } from './tonina';
import { trenMayaGuide } from './tren-maya';
import { tulumGuide } from './tulum';
import { tuxtlaGuide } from './tuxtla-gutierrez';
import { valleDeGuadalupeGuide } from './valle-de-guadalupe';
import { xochimilcoGuide } from './xochimilco';
import { zonasArqueologicasMexicoGuide } from './zonas-arqueologicas-mexico';
import { zoomatGuide } from './zoomat';

export const allGuides: Guide[] = [
  cienCosasHacerCdmxGuide,
  aeropuertosCdmxGuide,
  angelIndependenciaGuide,
  antrosVidaNocturnaCdmxGuide,
  artesaniasChiapasCdmxGuide,
  bacalarMahahualGuide,
  baresCdmxGuide,
  basilicaGuadalupeGuide,
  bebidasAlcolicasChiapasGuide,
  bebidasAlcolicasMexicoGuide,
  bebidasNoAlcolicasMexicoGuide,
  berriozabalCoitaGuide,
  botanerosTuxtlaGuide,
  cafeChiapasGuide,
  cancunGuide,
  canonDelSumideroGuide,
  carnavalChiapasGuide,
  casaAzulFridaGuide,
  cdmxGuide,
  cervezasMexicanasGuide,
  chamulaGuide,
  chiapaDeCorzoGuide,
  chiapasGuide,
  chichenItzaGuide,
  cineMexicanoGuide,
  civilizacionesPrehispanicasGuide,
  comitanGuide,
  comunidadesIndigenasChiapasGuide,
  condesaGuide,
  coyoacanGuide,
  diaDeMuertosGuide,
  digitalNomadsMexicoGuide,
  dulcesTipicosMexicoGuide,
  economiaNegocionMexicoGuide,
  f1MexicoGuide,
  festivalesMusicaMexicoGuide,
  foroGnpGuide,
  gastronomiaChiapanecaGuide,
  gruposEtnicosChiapasGuide,
  guadalajaraJaliscoGuide,
  guanajuatoSanMiguelGuide,
  historiaChiapasGuide,
  historiaMexicoGuide,
  holboxGuide,
  idiomasLenguasMexicoGuide,
  ligaMxDeportesCdmxGuide,
  losCabosBajaGuide,
  luchaLibreGuide,
  mariachiTriosGuide,
  mariposaMoarcaGuide,
  mazatlanGuide,
  mejoresDestinosMexicoGuide,
  mejoresPlayasMexicoGuide,
  meridaYucatanGuide,
  metroCdmxGuide,
  monterreyGuide,
  mundialGuide,
  museoAntropologiaGuide,
  museoDelAmbarGuide,
  museosCdmxGuide,
  museosTuxtlaGuide,
  musicaMexicanaGuide,
  oaxacaGuide,
  palenqueGuide,
  parqueMarimbaGuide,
  playasChiapasGuide,
  plazaGaribaldiGuide,
  polancoGuide,
  pueblaGuide,
  pueblosMagicosChiapasGuide,
  pueblosMagicosMexicoGuide,
  queEmpacarMexicoGuide,
  queretaroGuide,
  reservasNaturalesChiapasGuide,
  restaurantesCdmxGuide,
  restaurantesTuxtlaGuide,
  rioLaVentaGuide,
  rivieraMayaGuide,
  romaNorteGuide,
  salsasComidaPicanteMexicoGuide,
  saludEmergenciasMexicoGuide,
  sanCristobalGuide,
  sayulitaNayaritGuide,
  seguridadMexicoGuide,
  selvaLacandonaBonampakGuide,
  simaDelasCotorrasGuide,
  tacosCdmxGuide,
  teatroAuditorioCdmxGuide,
  teotihuacanGuide,
  tlalpanGuide,
  toninaGuide,
  trenMayaGuide,
  tulumGuide,
  tuxtlaGuide,
  valleDeGuadalupeGuide,
  xochimilcoGuide,
  zonasArqueologicasMexicoGuide,
  zoomatGuide,
];

export { t, tArr } from './types';
export type { Guide, GuideSection, GuideItinerary, GuideCTA, Locale } from './types';

export function getGuideBySlug(slug: string): Guide | undefined {
  return allGuides.find((g) => g.slug === slug);
}

export function getRelatedGuides(guide: Guide): Guide[] {
  return (guide.relatedSlugs || [])
    .map((slug) => allGuides.find((g) => g.slug === slug))
    .filter(Boolean) as Guide[];
}

export function getGuidesByRegion(region: Guide['region']): Guide[] {
  return allGuides.filter((g) => g.region === region || g.region === 'all');
}

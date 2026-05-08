/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from 'bootstrap';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const iconaCustom = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
/**
 * 2. FUNCIÓ DEL MAPA
 */
function initMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  try {
    const verduCoords = [41.6111, 1.1408];
    const map = L.map('map').setView(verduCoords, 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attributionControl: false }).addTo(map);

    const localitzacions = [
      {
        nom: "Castell de Verdú",
        coords: [41.610901, 1.143942],
        desc: "Xerrades (Orobitg, Cumella i Balada)"
      },
      {
        nom: "Taller d'Enric Orobitg",
        coords: [41.6122, 1.14340],
        desc: "Demostració de Torn i Foc"
      },
      {
        nom: "Taller de Carme Balada",
        coords: [41.61110, 1.14022],
        desc: "Creació de Formes Nues"
      }
    ];

    localitzacions.forEach(lloc => {
      L.marker(lloc.coords, { icon: iconaCustom })
        .addTo(map)
        .bindPopup(`<b>${lloc.nom}</b><br>${lloc.desc}`);
    });
  } catch (error) {
    console.error("Error al mapa:", error);
  }
}

+(function () {
  console.log("Executant scripts d'Aura Negra...");

  // 1. Inicialitzem els tooltips de Bootstrap
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

  // 2. Inicialitzem el mapa
  initMap();
})();
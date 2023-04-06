const leafletMapOptions = {
    zoomControl: false,
    fullscreenControl: true,
};

function renderMapCarto(mapId, lng, lat, zoom) {
    const map = L.map(mapId, leafletMapOptions).setView([lng, lat], zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function renderMapGeoportalOrtophotomap(mapId, lng, lat, zoom) {
    const map = L.map(mapId, leafletMapOptions).setView([lng, lat], zoom);
    L.tileLayer.wms('https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/HighResolution?', {
        layers: "Raster",
        maxZoom: 22,
    }).addTo(map);
}
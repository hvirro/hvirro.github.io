var myLayer = L.geoJson(ov);

map = new L.map('map', {
	layers:[myLayer]
});

var theLayers = new L.LayerGroup([myLayer]);
var baseLayers = { };
var overlays = {
	"Omavalitsused": myLayer
};
L.control.layers(baseLayers, overlays).addTo(map);

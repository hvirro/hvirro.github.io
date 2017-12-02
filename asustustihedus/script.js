var map = L.map('map');

var myLayer = L.geoJson(ov).addTo(map);

var theLayers = L.LayerGroup([myLayer]);
var baseLayers = { };
var overlays = {
	"Omavalitsused": myLayer
};
L.control.layers(baseLayers, overlays).addTo(map);

map.fitBounds(myLayer.getBounds());

L.control.scale({imperial:false, maxWidth:250}).addTo(map);

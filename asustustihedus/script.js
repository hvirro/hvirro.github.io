var myLayer = L.geoJson(ov);

var map = L.map('map', {
	layers:[myLayer]
});

var theLayers = L.LayerGroup([myLayer]);
var baseLayers = { };
var overlays = {
	"Omavalitsused": myLayer
};
L.control.layers(baseLayers, overlays).addTo(map);

map.fitBounds(myLayer.getBounds());

L.control.scale({imperial:false, maxWidth:250}).addTo(map);

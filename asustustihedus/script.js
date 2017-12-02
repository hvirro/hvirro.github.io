var myLayer = L.GeoJSON(ov);

var map = new L.map('map', {
	layers:[myLayer]
});

var theLayers = new L.LayerGroup([myLayer]);
var baseLayers = { };
var overlays = {
	"Omavalitsused": myLayer
};
L.control.layers(baseLayers, overlays).addTo(map);

map.fitBounds(myLayer.getBounds());

L.control.scale({imperial:false, maxWidth:250}).addTo(map);

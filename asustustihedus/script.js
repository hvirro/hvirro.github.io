var myLayer= L.geoJson(ov);
var theLayers = new L.layerGroup([myLayer]);
map = new L.map('map', {
layers:[myLayer],
});
var baseLayers={};
var overLay={
"Omavalitsused": myLayer,
}
L.control.layers(baseLayers, overLay).addTo(map);
map.fitBounds(myLayer.getBounds());

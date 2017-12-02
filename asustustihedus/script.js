var myLayer= L.geoJson(ov);
var theLayers = new L.layerGroup([myLayer]);
var map = new L.map('map', {
layers:[myLayer],
});
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
var baseLayers={};
var overLay={
"Omavalitsused": myLayer,
}
L.control.layers(baseLayers, overLay).addTo(map);
map.fitBounds(myLayer.getBounds());

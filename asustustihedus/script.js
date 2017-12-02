var map = new L.map('map');

var myLayer = new L.geoJson(ov);
myLayer.addTo(map);
map.fitBounds(myLayer.getBounds());

var theLayers = new L.LayerGroup([myLayer]);
var baseLayers = { };
var overlays = {
  "Omavalitsused":myLayer,
};
L.control.layers(baseLayers, overlays).addTo(map);

L.control.scale({imperial:false, maxWidth:250}).addTo(map);

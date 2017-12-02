var map = new L.map('map');

var myLayer= new L.geoJson(ov);
myLayer.addTo(map);
map.fitBounds(myLayer.getBounds());

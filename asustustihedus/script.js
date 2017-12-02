var map = new L.map('map');

// var myLayer = new L.geoJson(ov);
var myLayer = new L.geoJson.ajax("ov.geojson");
myLayer.addTo(map);
map.fitBounds(myLayer.getBounds());

L.control.scale({imperial:false, maxWidth:250}).addTo(map);

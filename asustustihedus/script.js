var map = L.map('map');

var myLayer= new L.geoJson.ajax("ov.geojson");
myLayer.addTo(map);

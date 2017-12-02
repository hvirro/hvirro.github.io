var map = new L.map('map');

var myLayer= new L.geoJson.ajax("ov.geojson");
myLayer.addTo(map);

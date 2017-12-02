var map = L.map('map');

var myLayer= L.geoJson.ajax(ov).addTo(map);

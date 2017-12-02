var map = L.map('map');

L.geoJson(ov).addTo(map);

map.fitBounds(myLayer.getBounds());

L.control.scale({imperial:false, maxWidth:250}).addTo(map);

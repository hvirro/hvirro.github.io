var map = new L.map('map', {
layers:[myLayer],
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

var myLayer= L.geoJson(ov).addTo(map);

// Loome objekti 'map', kuhu lisame pärast omavalitsuste kaardikihi
var map = new L.map('map');

// Lisame taustaks OSM-i kihi
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Funktsioon omavalitsuste värviskaala määramiseks tiheduse alusel
function getColor(d) {
	return d > 640 ? '#a50f15' :
	d > 210 ? '#de2d26' :
	d > 20 ? '#fb6a4a' :
	d > 10 ? '#fcae91' :
	'#fee5d9';
}

// Funktsioon omavalitsuste stiili määramiseks
function style(feature) {
    return {
        fillColor: getColor(feature.properties.tihedus),
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
}

// Funktsioon, mis suurendab omavalitsuseni, kui sellel klõps teha
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Loome failist 'ov.js' objekti ov, rakendame loodud funktsioonid ja lisame hüpikakna OV nime, maakonna ja tiheduse esitamiseks
var ov = L.geoJson(ov, {
	onEachFeature: function(feature, layer) {
		layer.setStyle(style(feature));
		var f = feature.properties;
		var popupContent = (f.ONIMI+", "+f.MNIMI+"<br>Asustustihedus:"+"<br>"+
				    Math.round(f.tihedus*10)/10+" elanikku km<sup>2</sup> kohta");
		layer.on('mouseover', function(e) {
			var popup = L.popup().setLatLng([e.latlng.lat, e.latlng.lng]).setContent(popupContent).openOn(map);
		});
		layer.on({
			click: zoomToFeature
		});
	}
}).addTo(map);

// Kohendame vaate vastavalt objektile 'ov'
map.fitBounds(ov.getBounds());

// Lisame paneeli kihi sisse ja välja lülitamiseks
var theLayers = new L.LayerGroup([ov]);
var baseLayers = { };
var overlays = {
  "Omavalitsused":ov
};
L.control.layers(baseLayers, overlays).addTo(map);

// Mõõtkava
L.control.scale({imperial:false, maxWidth:250}).addTo(map);

// Loome legendi ja kujundame selle vastavalt värviskaalale (kasutame ka HTML-faili päises lisatud CSS-i)
var legend = L.control({position: 'bottomright'});
legend.onAdd = function(map) {
	var div = L.DomUtil.create('div', 'info legend'), 
		levels = [0, 10, 20, 210, 640], 
		labels = [];
	for (var i = 0; i < levels.length; i++) {
		div.innerHTML +=
			'<i style="background:' + getColor(levels[i]+1) + '"></i> ' 
			+ levels[i]+(levels[i+1] ? '&ndash;'+levels[i+1]+'<br>' : '+');
	}
	return div;
};
legend.addTo(map);

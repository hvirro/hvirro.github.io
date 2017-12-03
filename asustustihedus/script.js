// Loome tausta
var map = new L.map('map');

var ov = new L.geoJson(ov);

myLayer.addTo(map);
map.fitBounds(myLayer.getBounds());

var theLayers = new L.LayerGroup([myLayer]);
var baseLayers = { };
var overlays = {
  "Omavalitsused":myLayer
};

L.control.layers(baseLayers, overlays).addTo(map);

L.control.scale({imperial:false, maxWidth:250}).addTo(map);

var tihedused = new L.geoJson(tihedused);

for (var i in ov.features) {
	for (var j in tihedused.features) {
		if (ov.features[i].properties.OKOOD==tihedused.features[j].properties.OKOOD) {
			ov.features[i].properties.tihedus=tihedused.features[j].properties.tihedus;
		}
	}
}

function getColor(d) {
	return d > 640 ? '#cb181d' :
	d > 210 ? '#fb6a4a' :
	d > 20 ? '#fcae91' :
	'#fee5d9';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.tihedus),
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
}

// ov.setStyle(style(feature));

L.geoJson(ov, {style:style}).addTo(map);

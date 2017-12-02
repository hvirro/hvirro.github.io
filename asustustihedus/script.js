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
	return d > 640 ? '#54278f' :
	d > 210 ? '#756bb1' :
	d > 20 ? '#9e9ac8' :
	d > 10 ? '#cbc9e2' :
	'#f2f0f7';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.tihedus),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
}

L.geoJson(ov, {style:style}).addTo(map);

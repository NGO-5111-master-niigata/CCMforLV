<!-- mapbox読み込み,ピンチイン、ピンチアウト禁止 -->

mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/ngo5111/ck4jileag43k11cmpt73u8bmp',
	center: [142.387864,43.7651547],
	zoom: 15.05,
	touchZoomRotate: false
});


<!-- コンパス読み込み -->

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl({
	showZoom: false
}));


<!-- 出発地の黒点、目的地の白点付ける -->

// GeoJSON object to hold our measurement features
var geojson = {
	'type': 'FeatureCollection',
	'features': []
};

map.on('load', function () {
	// Add a symbol layer.
	map.addSource('geojson', {
		'type': 'geojson',
		'data': geojson
	});

	<!-- 旭川市表示 2.0km -->

	map.addLayer({
		id: 'departure1',
		type: 'circle',
		"source": {
			"type": "geojson",
			"data": {
				"type": "FeatureCollection",
				"features": [
					{
					"type": "Feature",
						"properties": {},
						"geometry": {
							"type": "Point",
							"coordinates": [142.381858,43.759002]
						}
					}
				]
			}
		},
		paint: {
			'circle-radius': 10,
			'circle-color': '#000000',
			'circle-stroke-color': '#ffffff',
			'circle-stroke-width': 1,
		},
		filter: ['in', '$type', 'Point']
	});
	map.addLayer({
		id: 'destination1',
		type: 'circle',
		"source": {
			"type": "geojson",
			"data": {
				"type": "FeatureCollection",
				"features": [
					{
						"type": "Feature",
						"properties": {},
						"geometry": {
							"type": "Point",
							"coordinates": [142.3938471,43.7713074]
						}
					}
				]
			}
		},
		paint: {
			'circle-radius': 10,
			'circle-color': '#ffffff',
			'circle-stroke-color': '#000000',
			'circle-stroke-width': 1,
		},
		filter: ['in', '$type', 'Point']
	});
});


<!-- マーカー付ける -->

var marker = new mapboxgl.Marker({
	draggable: true
	})
	.setLngLat([142.381858,43.759002])
	.addTo(map);
 
function MoveMarker() {
	var lngLat = marker.getLngLat();
	coordinates.style.display = 'block';
	coordinates.innerHTML =
		'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}
 
marker.on('drag', MoveMarker);


<!-- 色変える物を定義 -->

var layer = ['building',
             'water',
             'road',
             'pedestrian-path',
             'major_rail',
             'bridge',
             'tunnel',
             'background',
             'landuse',
　　　　　　];


<!-- 使う色 -->

var colors = ['#f6aa00',　<!-- オレンジ -->
              '#fff100',　<!-- 黄色 -->　
              '#990099',　<!-- 紫 -->
              '#4dc4ff',　<!-- 空色 -->
              '#ff8082',　<!-- ピンク -->
              '#ffcabf',　<!-- 明るいピンク -->
              '#ffff80',　<!-- クリーム -->
              '#bfe4ff',　<!-- 明るい空色 -->
              '#c9ace6',　<!-- 明るい紫 -->
              '#ffca80',　<!-- ベージュ -->
              '#804000',　<!-- 茶色 -->
              '#005aff',　<!-- 青 -->
　　　　　　　];


<!-- 色変える -->]

var CtA = document.getElementById('CtA');

CtA.addEventListener('click', function() {
        map.setPaintProperty('building','fill-color','#f6aa00');
        map.setPaintProperty('water','fill-color','#4dcaff');
        map.setPaintProperty('road','line-color','#990099');
        map.setPaintProperty('pedestrian-path','line-color','#990099');
        map.setPaintProperty('major_rail','line-color','#990099');
        map.setPaintProperty('bridge','line-color','#990099');
        map.setPaintProperty('tunnel','line-color','#990099');
        map.setPaintProperty('background','background-color','#fff100');
        map.setPaintProperty('landuse','fill-color','#fff100');
},false);

var CtB = document.getElementById('CtB');

CtB.addEventListener('click',function(){
        map.setPaintProperty('building','fill-color','#ffcabf');
        map.setPaintProperty('water','fill-color','#bfe4ff');
        map.setPaintProperty('road','line-color','#c9ace6');
        map.setPaintProperty('pedestrian-path','line-color','#c9ace6');
        map.setPaintProperty('major_rail','line-color','#c9ace6');
        map.setPaintProperty('bridge','line-color','#c9ace6');
        map.setPaintProperty('tunnel','line-color','#c9ace6');
        map.setPaintProperty('background','background-color','#ffff80');
        map.setPaintProperty('landuse','fill-color','#ffff80');
},false);

var CtC = document.getElementById('CtC');

CtC.addEventListener('click',function(){
        map.setPaintProperty('building','fill-color','#f6aa00');
        map.setPaintProperty('water','fill-color','#005aff');
        map.setPaintProperty('road','line-color','#4dc4ff');
        map.setPaintProperty('pedestrian-path','line-color','#4dc4ff');
        map.setPaintProperty('major_rail','line-color','#4dc4ff');
        map.setPaintProperty('bridge','line-color','#4dc4ff');
        map.setPaintProperty('tunnel','line-color','#4dc4ff');
        map.setPaintProperty('background','background-color','#ffff80');
        map.setPaintProperty('landuse','fill-color','#ffff80');
},false);

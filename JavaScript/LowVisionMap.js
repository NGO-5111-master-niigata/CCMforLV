<!-- mapbox読み込み -->

mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/ngo5111/ckb5wuazy2heu1imwnukcqukh',
	center: [135,34.39],
	zoom: 8,
});


<!-- コンパス読み込み -->

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

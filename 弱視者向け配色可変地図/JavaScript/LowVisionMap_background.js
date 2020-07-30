<!-- mapbox読み込み -->

mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/ngo5111/ckb5wuazy2heu1imwnukcqukh',
	center: [135,34.39],
	zoom: 8,
});


<!-- 開始位置設定 -->

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();

// an arbitrary start will always be the same
// only the end or destination will change
var start = [135,35.39];


<!-- コンパス読み込み -->

	map.addControl(new mapboxgl.NavigationControl());


<!-- ルートリクエスト機能追加 -->

	// create a function to make a directions request
	function getRoute(end) {
	  // make a directions request using cycling profile
	  // an arbitrary start will always be the same
	  // only the end or destination will change
	  var start = [-122.662323, 45.523751];
	  var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

	  // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	  var req = new XMLHttpRequest();
	  req.open('GET', url, true);
	  req.onload = function() {
	    var json = JSON.parse(req.response);
	    var data = json.routes[0];
	    var route = data.geometry.coordinates;
	    var geojson = {
	      type: 'Feature',
	      properties: {},
	      geometry: {
	        type: 'LineString',
	        coordinates: route
	      }
	    };
	    // if the route already exists on the map, reset it using setData
	    if (map.getSource('route')) {
	      map.getSource('route').setData(geojson);
	    } else { // otherwise, make a new request
	      map.addLayer({
	        id: 'route',
	        type: 'line',
	        source: {
	          type: 'geojson',
	          data: {
	            type: 'Feature',
	            properties: {},
	            geometry: {
	              type: 'LineString',
	              coordinates: geojson
	            }
	          }
	        },
	        layout: {
	          'line-join': 'round',
	          'line-cap': 'round'
	        },
	        paint: {
	          'line-color': '#3887be',
	          'line-width': 5,
	          'line-opacity': 0.75
	        }
	      });
	    }

			<!-- ターン指示追加 -->

			var instructions = document.getElementById('instructions');
			var steps = data.legs[0].steps;

			var tripInstructions = [];
			for (var i = 0; i < steps.length; i++) {
			  tripInstructions.push('<br><li>' + steps[i].maneuver.instruction) + '</li>';
			  instructions.innerHTML = '<br><span class="duration">Trip duration: ' + Math.floor(data.duration / 60) + ' min 🚴 </span>' + tripInstructions;
			}

	  };
	  req.send();
	}

	map.on('load', function() {
	  // make an initial directions request that
	  // starts and ends at the same location
	  getRoute(start);

	  // Add starting point to the map
	  map.addLayer({
	    id: 'point',
	    type: 'circle',
	    source: {
	      type: 'geojson',
	      data: {
	        type: 'FeatureCollection',
	        features: [{
	          type: 'Feature',
	          properties: {},
	          geometry: {
	            type: 'Point',
	            coordinates: start
	          }
	        }
	        ]
	      }
	    },
	    paint: {
	      'circle-radius': 10,
	      'circle-color': '#3887be'
	    }
	  });
	  // this is where the code from the next step will go
	});


<!-- 出発地目的地追加 -->

	map.on('click', function(e) {
  var coordsObj = e.lngLat;
  canvas.style.cursor = '';
  var coords = Object.keys(coordsObj).map(function(key) {
    return coordsObj[key];
  });
  var end = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: coords
      }
    }
    ]
  };
  if (map.getLayer('end')) {
    map.getSource('end').setData(end);
  } else {
    map.addLayer({
      id: 'end',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: coords
            }
          }]
        }
      },
      paint: {
        'circle-radius': 10,
        'circle-color': '#f30'
      }
    });
  }
  getRoute(coords);
});

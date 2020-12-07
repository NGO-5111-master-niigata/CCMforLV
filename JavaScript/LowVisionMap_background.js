
<!-- 現在地を取得 -->

navigator.geolocation.getCurrentPosition(success,error); 


<!-- 現在地周辺の地図読み込み -->

mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/ngo5111/ckemjqmlv2cyh19rrpe99nr7y',
	center: [139.70 , 35.68] ,
	zoom: 11.5
});


<!-- 取得に成功した場合の関数 -->

function success(position){
	var com = position.coords;
	var comlng = com.longitude ;
	var comlat = com.latitude ;
	map.setCenter([+ comlng , + comlat]);


	<!-- コントロールボタン、ジオコーダー追加 -->

	map.addControl(
		new mapboxgl.NavigationControl({
		}),
		'bottom-right'
	);

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}),
		'top-right'
	);
}


<!-- 表示ボタン押したらチェックボックス調べて大きくする -->
			
function show(){
	const PlaceLabel = document.Label.PlaceLabel;
			
	for (let i = 0; i < PlaceLabel.length; i++){
		if(PlaceLabel[i].checked){ 
			const tmp = [];
			tmp.push(PlaceLabel[i].value);
			map.setLayoutProperty(tmp,'text-size',60);
		}
	}
}


<!-- 非表示ボタン押したらチェックボックス調べて消す -->

function hide(){
	const PlaceLabel = document.Label.PlaceLabel;
			
	for (let i = 0; i < PlaceLabel.length; i++){
		if(PlaceLabel[i].checked){ 
			const tmp = [];
			tmp.push(PlaceLabel[i].value);
			map.setLayoutProperty(tmp,'text-size',0);
		}
	}
}


<!-- 取得に失敗した場合の関数 -->

function error(err){

	<!-- コントロールボタン、ジオコーダー追加 -->

	map.addControl(new mapboxgl.NavigationControl());

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}),
		'bottom-right'
	);
}


<!-- 表示ボタン押したらチェックボックス調べて大きくする -->
			
function show(){
	const PlaceLabel = document.Label.PlaceLabel;
			
	for (let i = 0; i < PlaceLabel.length; i++){
		if(PlaceLabel[i].checked){ 
			const tmp = [];
			tmp.push(PlaceLabel[i].value);
			map.setLayoutProperty(tmp,'text-size',60);
		}
	}
}


<!-- 非表示ボタン押したらチェックボックス調べて消す -->

function hide(){
	const PlaceLabel = document.Label.PlaceLabel;
			
	for (let i = 0; i < PlaceLabel.length; i++){
		if(PlaceLabel[i].checked){ 
			const tmp = [];
			tmp.push(PlaceLabel[i].value);
			map.setLayoutProperty(tmp,'text-size',0);
		}
	}
}




	
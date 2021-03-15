
/* 現在地を取得 */

navigator.geolocation.getCurrentPosition(success,error); 


/* 現在地周辺の地図読み込み */

mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/ngo5111/ckemjqmlv2cyh19rrpe99nr7y',
	center: [139.70 , 35.68] ,
	zoom: 11.5
});


/* 取得に成功した場合の関数 */

function success(position){
	var com = position.coords;
	var comlng = com.longitude ;
	var comlat = com.latitude ;
	map.setCenter([+ comlng , + comlat]);

	/* コントロールボタン、ジオコーダー追加 */

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


/* 取得に失敗した場合の関数 */

function error(err){

	/* コントロールボタン、ジオコーダー追加 */

	map.addControl(new mapboxgl.NavigationControl());

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}),
		'bottom-right'
	);
}


/* 設定画面押したら別のウインドウ開く */

function control(){
	window.open("MapEdit.html", "設定画面", "top=100,left=100,width=300,height=400");
}


/* トグルスイッチのON/OFF調べて文字の表示/非表示制御 */

function toggle(){

	const tmp = [];
	const PlaceLabel = document.getElementsByName("PlaceLabel");

	for (let i = 0; i < PlaceLabel.length; i++){
		
		console.log("aaa");

		if(PlaceLabel[i].checked === false){ 
			console.log("bbb");

			tmp.splice(0,i);
			tmp.push(PlaceLabel[i].value);

			console.log(i);

			console.log(tmp);
			
			map.setLayoutProperty(tmp,'text-size',0);
		}
	}
}



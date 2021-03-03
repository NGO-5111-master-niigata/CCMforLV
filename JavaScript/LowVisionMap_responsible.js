
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


/* 国名のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle1(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("country-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("country-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 国名のラベルをクリックしたら選択状態に移行 */

map.on('click', 'country-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('country-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 県名のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle2(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("state-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("state-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 県名のラベルをクリックしたら選択状態に移行 */

map.on('click', 'state-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('state-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 市の名前のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle3(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("state-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("state-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 市の名前のラベルをクリックしたら選択状態に移行 */

map.on('click', 'settlement-major-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('settlement-major-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 空港、自衛隊基地の名前のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle4(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("airport-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("airport-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 空港、自衛隊基地のラベルをクリックしたら選択状態に移行 */

map.on('click', 'airport-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('airport-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 山、温泉のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle5(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("natural-point-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("natural-point-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 山、温泉のラベルをクリックしたら選択状態に移行 */

map.on('click', 'natural-point-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('natural-point-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 川、海のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle6(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("water-point-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("water-point-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 川、海のラベルをクリックしたら選択状態に移行 */

map.on('click', 'water-point-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('water-point-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 太い道路のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle7(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("road-label-simple",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("road-label-simple",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 太い道路のラベルをクリックしたらスライダーでのサイズ変更に移行 */

map.on('click', 'road-label-simple', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('road-label-simple','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 細い道路、歩道のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle8(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("path-pedestrian-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("path-pedestrian-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 細い道路、歩道のラベルをクリックしたらスライダーでのサイズ変更に移行 */

map.on('click', 'path-pedestrian-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('path-pedestrian-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});






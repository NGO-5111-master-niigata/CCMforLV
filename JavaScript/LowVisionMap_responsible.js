
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


/* 設定画面押したら別のウインドウ開く */

function control(){
	window.open("MapEdit.html", "設定画面", "top=100,left=100,width=300,height=400");
}


/* 国名のトグルスイッチで文字表示、非表示切り替え */

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


/* 県名のトグルスイッチで文字表示、非表示切り替え */

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


/* 空港、自衛隊基地のトグルスイッチで文字表示、非表示切り替え */

flag = false;
num = 0;
function toggle3(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("airport-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("airport-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}


/* 山、温泉のトグルスイッチで文字表示、非表示切り替え */

flag = false;
num = 0;
function toggle4(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("natural-point-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("natural-point-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}


/* 川、海のトグルスイッチで文字表示、非表示切り替え */

flag = false;
num = 0;
function toggle5(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("water-point-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("water-point-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}


/* 太い道路のトグルスイッチで文字表示、非表示切り替え */

flag = false;
num = 0;
function toggle6(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("road-label-simple",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("road-label-simple",'text-size',50);
	} //条件を満たしていない場合の処理}
}


/* 細い道路、歩道のトグルスイッチで文字表示、非表示切り替え */

flag = false;
num = 0;
function toggle7(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("road-pedestrian-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("road-pedestrian-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}


/* 文字サイズ調節用のスライダー表示 */

const inputElem = document.getElementById('Label-Size-Slider'); // input要素
const currentValueElem = document.getElementById('current-value'); // 埋め込む先のspan要素

// 現在の値をspanに埋め込む関数
const setCurrentValue = (val) => {
  currentValueElem.innerText = val;
}

// inputイベント時に値をセットする関数
const rangeOnChange = (e) =>{
  setCurrentValue(e.target.value);
}

window.onload = () => {
  inputElem.addEventListener('input', rangeOnChange); // スライダー変化時にイベントを発火
  setCurrentValue(inputElem.value); // ページ読み込み時に値をセット
}





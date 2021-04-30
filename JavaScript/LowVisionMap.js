
/* 現在地を取得 */

navigator.geolocation.getCurrentPosition(success,error); 


/* 新宿周辺の地図読み込み */

mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/ngo5111/ckmyhpfws07pd17ryugc8nw0v',
	localIdeographFontFamily: false,
	center: [139.70 , 35.68] ,
	zoom:15.5
});


/* 取得に成功した場合の関数 */

/* 現在地の周辺地図表示しながらコントロールボタン追加 */

function success(position){
	var com = position.coords;
	var comlng = com.longitude ;
	var comlat = com.latitude ;
	map.setCenter([+ comlng , + comlat]);

	map.addControl(
		new mapboxgl.NavigationControl({
		}),
		'bottom-right'
	);
}


/* 取得に失敗した場合の関数 */

function error(err){

/* コントロールボタン追加（新宿周辺表示） */

	map.addControl(
		new mapboxgl.NavigationControl({
		}),
		'bottom-right'
	);
}


/* 国名のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */

/* スイッチの初期状態定義。判定時に使用 */
flag1 = true;

function toggle1(){
	flag1 = !flag1; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-1").value = flag1; /* ラベルの変更 */
	if(flag1==true){
		console.log("aaaaa");
		map.setLayoutProperty("country-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("country-label",'text-size',0);
	}
}

/* 県名のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */

/* スイッチの初期状態定義。判定時に使用 */
flag2 = true;

function toggle2(){
	flag2 = !flag2; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-2").value = flag2; /* ラベルの変更 */
	if(flag2==true){
		console.log("aaaaa");
		map.setLayoutProperty("state-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("state-label",'text-size',0);
	}
}

/* 市の名前のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */

/* スイッチの初期状態定義。判定時に使用 */
flag3 = true;

function toggle3(){
	flag3 = !flag3; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-3").value = flag3; /* ラベルの変更 */
	if(flag3==true){
		console.log("aaaaa");
		map.setLayoutProperty("settlement-major-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("settlement-major-label",'text-size',0);
	}
}

/* 町名のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */

/* スイッチの初期状態定義。判定時に使用 */
flag4 = true;

function toggle4(){
	flag4 = !flag4; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-4").value = flag4; /* ラベルの変更 */
	if(flag4==true){
		console.log("aaaaa");
		map.setLayoutProperty("settlement-subdivision-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("settlement-subdivision-label",'text-size',0);
	}
}

/* 地方、地域の名前のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */

/* スイッチの初期状態定義。判定時に使用 */
flag5 = true;

function toggle5(){
	flag5 = !flag5; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-5").value = flag5; /* ラベルの変更 */
	if(flag5==true){
		console.log("aaaaa");
		map.setLayoutProperty("settlement-minor-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("settlement-minor-label",'text-size',0);
	}
}

/* 建物名のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */

/* スイッチの初期状態定義。判定時に使用 */
flag6 = true;

function toggle6(){
	flag6 = !flag6; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-6").value = flag6; /* ラベルの変更 */
	if(flag6==true){
		console.log("aaaaa");
		map.setLayoutProperty("poi-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("poi-label",'text-size',0);
	}
}

/* 空港、自衛隊基地のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
function toggle7(){

/* スイッチの初期状態定義。判定時に使用 */
flag7 = true;

	flag7 = !flag7; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-7").value = flag7; /* ラベルの変更 */
	if(flag7==true){
		console.log("aaaaa");
		map.setLayoutProperty("airport-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("airport-label",'text-size',0);
	}
}

/* 島、山、温泉のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
function toggle8(){
	flag8 = !flag8; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-8").value = flag8; /* ラベルの変更 */
	if(flag8==true){
		console.log("aaaaa");
		map.setLayoutProperty("natural-point-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("natural-point-label",'text-size',0);
	}
}

/* 川、海のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
function toggle9(){
	flag9 = !flag9; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-9").value = flag9; /* ラベルの変更 */
	if(flag9==true){
		console.log("aaaaa");
		map.setLayoutProperty("water-point-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("water-point-label",'text-size',0);
	}
}

/* 太い道路のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
function toggle10(){
	flag10 = !flag10; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-10").value = flag10; /* ラベルの変更 */
	if(flag10==true){
		console.log("aaaaa");
		map.setLayoutProperty("road-label-simple",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("road-label-simple",'text-size',0);
	}
}

/* 細い道路、歩道のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
function toggle11(){
	flag11 = !flag11; /* trueとfalseの切り替え ! 否定演算子 */
	document.getElementById("setting-item-11").value = flag11; /* ラベルの変更 */
	if(flag11==true){
		console.log("aaaaa");
		map.setLayoutProperty("path-pedestrian-label",'text-size',30);
	}
	else{
		console.log("bbbbb");
		map.setLayoutProperty("path-pedestrian-label",'text-size',0);
	}
}


/* 右上の「≡」押したらスライドで操作パネル出現 */

$('.menu-trigger').on('click',function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('nav').removeClass('open');
		$('.overlay').removeClass('open');
	}
	else {
		$(this).addClass('active');
    	$('nav').addClass('open');
		$('.overlay').addClass('open');
    }
});

$('.overlay').on('click',function(){
	if($(this).hasClass('open')){
		$(this).removeClass('open');
		$('.menu-trigger').removeClass('active');
		$('nav').removeClass('open');      
	}
});


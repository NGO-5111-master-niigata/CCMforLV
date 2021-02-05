
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


<!-- 設定画面押したら別のウインドウ開く -->

function control(){
	window.open("MapEdit.html", "設定画面", "top=100,left=100,width=300,height=400");
}



/* ・・・のチェックボックス押したら文字の表示、非表示切り替え */

function onFunc(){
	$("#check").text("ONの処理を実行するよ！");	
}
function offFunc(){
	$("#check").text("OFFの処理を実行するよ！");	
}

$(function () {
    $("setting-item-1").click(function(){
        $(this).toggleClass("active");
        var flg = $(this).hasClass("active");
        if(flg == true){
            onFunc();
        }else{
            offFunc();
        }
    });
});
	



/* ・・・のチェックボックス押したら文字の表示、非表示切り替え */

flag = false;
num = 0;
function toggle(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("country-label",'text-size',100);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("country-label",'text-size',0);
	} //条件を満たしていない場合の処理}
}










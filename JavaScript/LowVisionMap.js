
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
			map.setLayoutProperty("country-label",'text-size',30);
		}
		else{
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
			map.setLayoutProperty("state-label",'text-size',30);
		}
		else{
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
			map.setLayoutProperty("settlement-major-label",'text-size',30);
		}
		else{
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
			map.setLayoutProperty("settlement-subdivision-label",'text-size',30);
		}
		else{
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
			map.setLayoutProperty("settlement-minor-label",'text-size',30);
		}
		else{
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
			map.setLayoutProperty("poi-label",'text-size',30);
		}
		else{
			map.setLayoutProperty("poi-label",'text-size',0);
		}
	}

/* 空港、自衛隊基地のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
	/* スイッチの初期状態定義。判定時に使用 */
	flag7 = true;
	function toggle7(){
		flag7 = !flag7; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-7").value = flag7; /* ラベルの変更 */
		if(flag7==true){
			map.setLayoutProperty("airport-label",'text-size',30);
		}
		else{
			map.setLayoutProperty("airport-label",'text-size',0);
		}
	}

/* 島、山、温泉のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
	/* スイッチの初期状態定義。判定時に使用 */
	flag8 = true;
	function toggle8(){
		flag8 = !flag8; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-8").value = flag8; /* ラベルの変更 */
		if(flag8==true){
			map.setLayoutProperty("natural-point-label",'text-size',30);
		}
		else{
			map.setLayoutProperty("natural-point-label",'text-size',0);
		}
	}

/* 川、海のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
	/* スイッチの初期状態定義。判定時に使用 */
	flag9 = true;
	function toggle9(){
		flag9 = !flag9; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-9").value = flag9; /* ラベルの変更 */
		if(flag9==true){
			map.setLayoutProperty("water-point-label",'text-size',30);
		}
		else{
			map.setLayoutProperty("water-point-label",'text-size',0);
		}
	}

/* 太い道路のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
	/* スイッチの初期状態定義。判定時に使用 */
	flag10 = true;
	function toggle10(){
		flag10 = !flag10; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-10").value = flag10; /* ラベルの変更 */
		if(flag10==true){
			map.setLayoutProperty("road-label-simple",'text-size',30);
		}
		else{
			map.setLayoutProperty("road-label-simple",'text-size',0);
		}
	}

/* 細い道路、歩道のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
	/* スイッチの初期状態定義。判定時に使用 */
	flag11 = true;
	function toggle11(){
		flag11 = !flag11; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-11").value = flag11; /* ラベルの変更 */
		if(flag11==true){
			map.setLayoutProperty("path-pedestrian-label",'text-size',30);
		}
		else{
			map.setLayoutProperty("path-pedestrian-label",'text-size',0);
		}
	}


/* ハンバーガーメニュー押したらスライドで操作パネル出現 */
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



/* 文字サイズ変更スライダーの挙動制御 */
/* スライダーの値が変更されたときにイベントを発火 */
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


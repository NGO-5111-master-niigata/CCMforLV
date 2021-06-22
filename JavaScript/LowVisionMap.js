
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

/* 市町村名のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
/* スイッチの初期状態定義。判定時に使用 */
	flag3 = true;
	function toggle3(){
		flag3 = !flag3; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-3").value = flag3; /* ラベルの変更 */
		if(flag3==true){
			map.setLayoutProperty("settlement-major-label",'text-size',30);
			map.setLayoutProperty("settlement-subdivision-label",'text-size',30);
			map.setLayoutProperty("settlement-minor-label",'text-size',30);
		}
		else{
			map.setLayoutProperty("settlement-major-label",'text-size',0);
			map.setLayoutProperty("settlement-subdivision-label",'text-size',0);
			map.setLayoutProperty("settlement-minor-label",'text-size',0);
		}
	}

/* 建物、橋のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
/* スイッチの初期状態定義。判定時に使用 */
	flag4 = true;
	function toggle4(){
		flag4 = !flag4; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-4").value = flag4; /* ラベルの変更 */
		if(flag4==true){
			map.setLayoutProperty("poi-label",'text-size',30);
			map.setLayoutProperty("airport-label",'text-size',30);
		}
		else{
			map.setLayoutProperty("poi-label",'text-size',0);
			map.setLayoutProperty("airport-label",'text-size',0);
		}
	}

/* 山のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
/* スイッチの初期状態定義。判定時に使用 */
	flag5 = true;
	function toggle5(){
		flag5 = !flag5; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-5").value = flag5; /* ラベルの変更 */
		if(flag5==true){
			map.setLayoutProperty("natural-point-label",'text-size',30);
		}
		else{
			map.setLayoutProperty("natural-point-label",'text-size',0);
		}
	}

	/* 川、湖、海のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
	/* スイッチの初期状態定義。判定時に使用 */
		flag6 = true;
		function toggle6(){
			flag6 = !flag6; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-6").value = flag6; /* ラベルの変更 */
			if(flag6==true){
				map.setLayoutProperty("water-point-label",'text-size',30);
				map.setLayoutProperty("water-line-label",'text-size',30);
				map.setLayoutProperty("waterway-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("water-point-label",'text-size',0);
				map.setLayoutProperty("water-line-label",'text-size',0);
				map.setLayoutProperty("waterway-label",'text-size',0);
			}
		}

/* 国道、高速道路のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
/* スイッチの初期状態定義。判定時に使用 */
	flag7 = true;
	function toggle7(){
		flag7 = !flag7; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-7").value = flag7; /* ラベルの変更 */
		if(flag7==true){
			map.setLayoutProperty("road-label-simple",'text-size',30);
		}
		else{
			map.setLayoutProperty("road-label-simple",'text-size',0);
		}
	}

/* 細い道路、歩道のトグルスイッチのON/OFF調べて文字の表示/非表示制御 */
/* スイッチの初期状態定義。判定時に使用 */
	flag8 = true;
	function toggle8(){
		flag8 = !flag8; /* trueとfalseの切り替え ! 否定演算子 */
		document.getElementById("setting-item-8").value = flag8; /* ラベルの変更 */
		if(flag8==true){
			map.setLayoutProperty("path-pedestrian-label",'text-size',30);
		}
		else{
			map.setLayoutProperty("path-pedestrian-label",'text-size',0);
		}
	}

/* 文字の大きさ調整のオプション開いてラベルを選択 */
/* 選択したラベルの文字サイズをスライダーで調整できるようになる */
/* if文を何度も通して条件分岐。愚直で汚いプログラムなので要改造 */

/* オプションで国名のラベル選択時 */
function ChoosingLayer(){

	const EditLabel = document.getElementById("ChoosedLayer").value;

	console.log(EditLabel);

	if(EditLabel=="NowChoosedCountry"){
		const elem = document.getElementById('Label-Size-Slider'); // input要素
		const target = document.getElementById('current-value'); // 埋め込む先のspan要素
	
		const rangeValue = function (elem, target) {
			return function(evt){
				const tmp = document.getElementById('Label-Size-Slider').value;
				target.innerHTML = elem.value;
				map.setLayoutProperty("country-label",'text-size',+ tmp);
			}
		}
		elem.addEventListener('input', rangeValue(elem, target));
	}
		/* オプションで県名のラベル選択時 */
		if(EditLabel=="NowChoosedState"){
			const elem = document.getElementById('Label-Size-Slider'); // input要素
			const target = document.getElementById('current-value'); // 埋め込む先のspan要素
		
			const rangeValue = function (elem, target) {
				return function(evt){
					const tmp = document.getElementById('Label-Size-Slider').value;
					target.innerHTML = elem.value;
					map.setLayoutProperty("state-label",'text-size',+ tmp);
				}
			}
			elem.addEventListener('input', rangeValue(elem, target));
		}
			/* オプションで市町村名のラベル選択時 */
			if(EditLabel=="NowChoosedTownAndVillage"){
				const elem = document.getElementById('Label-Size-Slider'); // input要素
				const target = document.getElementById('current-value'); // 埋め込む先のspan要素
			
				const rangeValue = function (elem, target) {
					return function(evt){
						const tmp = document.getElementById('Label-Size-Slider').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("settlement-major-label",'text-size',+ tmp);
						map.setLayoutProperty("settlement-subdivision-label",'text-size',+ tmp);
						map.setLayoutProperty("settlement-minor-label",'text-size',+ tmp);	
					}
				}
				elem.addEventListener('input', rangeValue(elem, target));
			}
				/* オプションで建物、橋のラベル選択時 */
				if(EditLabel=="NowChoosedBuilding"){
					const elem = document.getElementById('Label-Size-Slider'); // input要素
					const target = document.getElementById('current-value'); // 埋め込む先のspan要素
				
					const rangeValue = function (elem, target) {
						return function(evt){
							const tmp = document.getElementById('Label-Size-Slider').value;
							target.innerHTML = elem.value;
							map.setLayoutProperty("poi-label",'text-size',+ tmp);
							map.setLayoutProperty("airport-label",'text-size',+ tmp);
						}
					}
					elem.addEventListener('input', rangeValue(elem, target));
				}
					/* オプションで山のラベル選択時 */
					if(EditLabel=="NowChoosedMountains"){
						const elem = document.getElementById('Label-Size-Slider'); // input要素
						const target = document.getElementById('current-value'); // 埋め込む先のspan要素
					
						const rangeValue = function (elem, target) {
							return function(evt){
								const tmp = document.getElementById('Label-Size-Slider').value;
								target.innerHTML = elem.value;
								map.setLayoutProperty('natural-point-label','text-size',+ tmp);
							}
						}
						elem.addEventListener('input', rangeValue(elem, target));
					}
						/* オプションで川、湖、海のラベル選択時 */
						if(EditLabel=="NowChoosedWaters"){
							const elem = document.getElementById('Label-Size-Slider'); // input要素
							const target = document.getElementById('current-value'); // 埋め込む先のspan要素
						
							const rangeValue = function (elem, target) {
								return function(evt){
									const tmp = document.getElementById('Label-Size-Slider').value;
									target.innerHTML = elem.value;
									map.setLayoutProperty("water-point-label",'text-size',+ tmp);
									map.setLayoutProperty("water-line-label",'text-size',+ tmp);
									map.setLayoutProperty("waterway-label",'text-size',+ tmp);			
								}
							}
							elem.addEventListener('input', rangeValue(elem, target));
						}
							/* オプションで国道、高速道路、バイパスなどのラベル選択時 */
							if(EditLabel=="NowChoosedHighway"){
								const elem = document.getElementById('Label-Size-Slider'); // input要素
								const target = document.getElementById('current-value'); // 埋め込む先のspan要素
							
								const rangeValue = function (elem, target) {
									return function(evt){
										const tmp = document.getElementById('Label-Size-Slider').value;
										target.innerHTML = elem.value;
										map.setLayoutProperty('road-label-simple','text-size',+ tmp);
									}
								}
								elem.addEventListener('input', rangeValue(elem, target));
							}
									/* オプションでその他道路、歩道などのラベル選択時 */
									if(EditLabel=="NowChosedMinorRoads"){
										const elem = document.getElementById('Label-Size-Slider'); // input要素
										const target = document.getElementById('current-value'); // 埋め込む先のspan要素
									
										const rangeValue = function (elem, target) {
											return function(evt){
												const tmp = document.getElementById('Label-Size-Slider').value;
												target.innerHTML = elem.value;
												map.setLayoutProperty('path-pedestrian-label','text-size',+ tmp);
											}
										}
										elem.addEventListener('input', rangeValue(elem, target));
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


/* ナビゲーション */
/* Aに出発地、Bに目的地入力 */
/* A、Bのアイコンはドラッグアンッドロップで場所変更可能（その際、場所は緯度経度表示になる） */
var Navigation = new MapboxDirections({
		accessToken: mapboxgl.accessToken,
		language: 'ja', 
});

document.getElementById('Navigation').appendChild(Navigation.onAdd(map));












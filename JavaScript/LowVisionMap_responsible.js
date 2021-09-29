
/* 共通設定 */

	/* 現在地を取得 */
	navigator.geolocation.getCurrentPosition(success,error); 

	/* 新宿周辺の地図読み込み */
	mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/ngo5111/cktnvy8b00odd17p4ked5sf77',
		localIdeographFontFamily: false,
		center: [139.70 , 35.68] ,
		zoom:15.5
	});

	/* 取得に成功した場合の関数 */
	function success(position){
		/* 現在地周辺地図表示しながらコントロールボタン追加 */
		var com = position.coords;
		var comlng = com.longitude ;
		var comlat = com.latitude ;
		map.setCenter([+ comlng , + comlat]);
		map.addControl(
			new mapboxgl.NavigationControl({
			}),
			'bottom-right'
		);
		/* 検索ボックス表示 */
		const geocoder = new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		});
		document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
	}

	/* 取得に失敗した場合の関数 */
	function error(err){
		/* 新宿周辺地図表示しながらコントロールボタン追加 */
		map.addControl(
			new mapboxgl.NavigationControl({
			}),
			'bottom-right'
		);
		/* ナビゲーション追加 */
		map.addControl(
			new MapboxGeocoder({
				accessToken: mapboxgl.accessToken,
				mapboxgl: mapboxgl
			}),
			'top-left'
		);
		/* 検索ボックス表示 */
		const geocoder = new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		});
		document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
	}
		
/* 共通設定ここまで */


/* PC用 */
	/* 道路、線路の表示/非表示制御 */
	/* トグルスイッチ */
		/* 国道、高速道路の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag10 = true;
		function toggle10(){
			flag10 = !flag10; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-10_PC").value = flag10; /* ラベルの変更 */
			if(flag10==true){
				map.setLayoutProperty("road-motorway-trunk",'visibility','visible');
				map.setLayoutProperty("road-motorway-trunk-case",'visibility','visible');
				map.setLayoutProperty("bridge-motorway-trunk",'visibility','visible');
				map.setLayoutProperty("bridge-motorway-trunk-2-case",'visibility','visible');
				map.setLayoutProperty("bridge-motorway-trunk-2",'visibility','visible');
				map.setLayoutProperty("bridge-motorway-trunk-case",'visibility','visible');
				map.setLayoutProperty("tunnel-motorway-trunk",'visibility','visible');
				map.setLayoutProperty("tunnel-motorway-trunk-case",'visibility','visible');
			}
			else{
				map.setLayoutProperty("road-motorway-trunk",'visibility','none');
				map.setLayoutProperty("road-motorway-trunk-case",'visibility','none');
				map.setLayoutProperty("bridge-motorway-trunk",'visibility','none');
				map.setLayoutProperty("bridge-motorway-trunk-2-case",'visibility','none');
				map.setLayoutProperty("bridge-motorway-trunk-2",'visibility','none');
				map.setLayoutProperty("bridge-motorway-trunk-case",'visibility','none');
				map.setLayoutProperty("tunnel-motorway-trunk",'visibility','none');
				map.setLayoutProperty("tunnel-motorway-trunk-case",'visibility','none');
			}
		}

		/* 地方道路の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag11 = true;
		function toggle11(){
			flag11 = !flag11; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-11_PC").value = flag11; /* ラベルの変更 */
			if(flag11==true){
				map.setLayoutProperty("road-primary",'visibility','visible');
				map.setLayoutProperty("road-primary-case",'visibility','visible');
				map.setLayoutProperty("road-secondary-tertiary",'visibility','visible');
				map.setLayoutProperty("road-secondary-tertiary-case",'visibility','visible');
				map.setLayoutProperty("bridge-primary-secondary-tertiary",'visibility','visible');
				map.setLayoutProperty("bridge-primary-secondary-tertiary-case",'visibility','visible');
				map.setLayoutProperty("road-major-link",'visibility','visible');
				map.setLayoutProperty("road-major-link-case",'visibility','visible');
				map.setLayoutProperty("bridge-major-link",'visibility','visible');
				map.setLayoutProperty("bridge-major-link-case",'visibility','visible');
				map.setLayoutProperty("bridge-major-link-2",'visibility','visible');
				map.setLayoutProperty("bridge-major-link-2-case",'visibility','visible');
				map.setLayoutProperty("tunnel-primary-secondary-tertiary",'visibility','visible');
				map.setLayoutProperty("tunnel-primary-secondary-tertiary-case",'visibility','visible');
			}
			else{
				map.setLayoutProperty("road-motorway-trunk",'visibility','none');
				map.setLayoutProperty("road-motorway-trunk-case",'visibility','none');
				map.setLayoutProperty("bridge-motorway-trunk",'visibility','none');
				map.setLayoutProperty("bridge-motorway-trunk-2-case",'visibility','none');
				map.setLayoutProperty("bridge-motorway-trunk-2",'visibility','none');
				map.setLayoutProperty("bridge-motorway-trunk-case",'visibility','none');
				map.setLayoutProperty("bridge-primary-secondary-tertiary",'visibility','none');
				map.setLayoutProperty("bridge-primary-secondary-tertiary-case",'visibility','none');
				map.setLayoutProperty("road-major-link",'visibility','none');
				map.setLayoutProperty("road-major-link-case",'visibility','none');
				map.setLayoutProperty("bridge-major-link",'visibility','none');
				map.setLayoutProperty("bridge-major-link-case",'visibility','none');
				map.setLayoutProperty("bridge-major-link-2",'visibility','none');
				map.setLayoutProperty("bridge-major-link-2-case",'visibility','none');
				map.setLayoutProperty("tunnel-primary-secondary-tertiary",'visibility','none');
				map.setLayoutProperty("tunnel-primary-secondary-tertiary-case",'visibility','none');
			}
		}

		/* その他の道路の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag12 = true;
		function toggle12(){
			flag12 = !flag12; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-12_PC").value = flag12; /* ラベルの変更 */
			if(flag12==true){
				map.setLayoutProperty("road-street",'visibility','visible');
				map.setLayoutProperty("road-street-case",'visibility','visible');
				map.setLayoutProperty("road-minor",'visibility','visible');
				map.setLayoutProperty("road-minor-case",'visibility','visible');
				map.setLayoutProperty("road-minor-low",'visibility','visible');
				map.setLayoutProperty("road-construction",'visibility','visible');
				map.setLayoutProperty("road-path",'visibility','visible');
				map.setLayoutProperty("road-path-bg",'visibility','visible');
				map.setLayoutProperty("bridge-street-minor-case",'visibility','visible');
				map.setLayoutProperty("bridge-street-minor-low",'visibility','visible');
				map.setLayoutProperty("bridge-construction",'visibility','visible');
				map.setLayoutProperty("bridge-path",'visibility','visible');
				map.setLayoutProperty("bridge-path-bg",'visibility','visible');
				map.setLayoutProperty("tunnel-street-minor",'visibility','visible');
				map.setLayoutProperty("tunnel-street-minor-case",'visibility','visible');
				map.setLayoutProperty("tunnel-street-minor-low",'visibility','visible');
			}
			else{
				map.setLayoutProperty("road-street",'visibility','none');
				map.setLayoutProperty("road-street-case",'visibility','none');
				map.setLayoutProperty("road-minor",'visibility','none');
				map.setLayoutProperty("road-minor-case",'visibility','none');
				map.setLayoutProperty("road-minor-low",'visibility','none');
				map.setLayoutProperty("road-construction",'visibility','none');
				map.setLayoutProperty("road-path",'visibility','none');
				map.setLayoutProperty("road-path-bg",'visibility','none');
				map.setLayoutProperty("bridge-street-minor-case",'visibility','none');
				map.setLayoutProperty("bridge-street-minor-low",'visibility','none');
				map.setLayoutProperty("bridge-construction",'visibility','none');
				map.setLayoutProperty("bridge-path",'visibility','none');
				map.setLayoutProperty("bridge-path-bg",'visibility','none');
				map.setLayoutProperty("tunnel-street-minor",'visibility','none');
				map.setLayoutProperty("tunnel-street-minor-case",'visibility','none');
				map.setLayoutProperty("tunnel-street-minor-low",'visibility','none');
			}
		}

		/* 歩道の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag13 = true;
		function toggle13(){
			flag13 = !flag13; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-13_PC").value = flag13; /* ラベルの変更 */
			if(flag13==true){
				map.setLayoutProperty("road-pedestrian",'visibility','visible');
				map.setLayoutProperty("road-pedestrian-case",'visibility','visible');
				map.setLayoutProperty("road-steps",'visibility','visible');
				map.setLayoutProperty("road-steps-bg",'visibility','visible');
				map.setLayoutProperty("bridge-pedestrian",'visibility','none');
				map.setLayoutProperty("bridge-pedestrian-case",'visibility','none');
				map.setLayoutProperty("bridge-steps",'visibility','none');
				map.setLayoutProperty("bridge-steps-bg",'visibility','none');
			}
			else{
				map.setLayoutProperty("road-pedestrian",'visibility','none');
				map.setLayoutProperty("road-pedestrian-case",'visibility','none');
				map.setLayoutProperty("road-steps",'visibility','none');
				map.setLayoutProperty("road-steps-bg",'visibility','none');
				map.setLayoutProperty("bridge-pedestrian",'visibility','none');
				map.setLayoutProperty("bridge-pedestrian-case",'visibility','none');
				map.setLayoutProperty("bridge-steps",'visibility','none');
				map.setLayoutProperty("bridge-steps-bg",'visibility','none');
			}
		}

	/* 文字の表示/非表示制御 */
	/* トグルスイッチ */
		/* 国名の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag1 = true;
		function toggle1(){
			flag1 = !flag1; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-1_PC").value = flag1; /* ラベルの変更 */
			if(flag1==true){
				map.setLayoutProperty("country-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("country-label",'text-size',0);
			}
		}

		/* 県名の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag2 = true;
		function toggle2(){
			flag2 = !flag2; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-2_PC").value = flag2; /* ラベルの変更 */
			if(flag2==true){
				map.setLayoutProperty("state-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("state-label",'text-size',0);
			}
		}

		/* 市町村名の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag3 = true;
		function toggle3(){
			flag3 = !flag3; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-3_PC").value = flag3; /* ラベルの変更 */
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

		/* 建物、橋の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag4 = true;
		function toggle4(){
			flag4 = !flag4; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-4_PC").value = flag4; /* ラベルの変更 */
			if(flag4==true){
				map.setLayoutProperty("poi-label",'text-size',30);
				map.setLayoutProperty("airport-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("poi-label",'text-size',0);
				map.setLayoutProperty("airport-label",'text-size',0);
			}
		}

		/* 山の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag5 = true;
		function toggle5(){
			flag5 = !flag5; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-5_PC").value = flag5; /* ラベルの変更 */
			if(flag5==true){
				map.setLayoutProperty("natural-point-label",'text-size',30);
				map.setLayoutProperty("natural-line-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("natural-point-label",'text-size',0);
				map.setLayoutProperty("natural-line-label",'text-size',0);
			}
		}

		/* 川、湖、海の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag6 = true;
		function toggle6(){
			flag6 = !flag6; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-6_PC").value = flag6; /* ラベルの変更 */
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

		/* 国道、高速道路の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag7 = true;
		function toggle7(){
			flag7 = !flag7; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-7_PC").value = flag7; /* ラベルの変更 */
			if(flag7==true){
				map.setLayoutProperty("road-label",'text-size',30);
				map.setLayoutProperty("road-exit-label",'text-size',30);
				map.setLayoutProperty("road-number-shield",'text-size',30);
				map.setLayoutProperty("road-intersection",'text-size',30);
			}
			else{
				map.setLayoutProperty("road-label",'text-size',0);
				map.setLayoutProperty("road-exit-label",'text-size',0);
				map.setLayoutProperty("road-number-shield",'text-size',0);
				map.setLayoutProperty("road-intersection",'text-size',0);
			}
		}

		/* 細い道路、歩道の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag8 = true;
		function toggle8(){
			flag8 = !flag8; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-8_PC").value = flag8; /* ラベルの変更 */
			if(flag8==true){
				map.setLayoutProperty("path-pedestrian-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("path-pedestrian-label",'text-size',0);
			}
		}

		/* 公共交通機関（バス、電車）などの表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag9 = true;
		function toggle9(){
			flag9 = !flag9; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-9_PC").value = flag9; /* ラベルの変更 */
			if(flag9==true){
				map.setLayoutProperty("transit-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("transit-label",'text-size',0);
			}
		}



	/* 文字の大きさ調整 */
		/* セレクトボックス開いて大きさ変更するラベルを選択 */
		/* 選択したラベルの文字サイズをスライダーで調整できるようになる */
		function ChoosingLayer_PC(){
			const elem = document.getElementById('Label-Size-Slider_PC'); // input要素
			const target = document.getElementById('current-value_PC'); // 埋め込む先のspan要素
			const rangeValue = function (elem, target){
				return function(evt){
					const EditLabel = document.getElementById("ChoosedLayer_PC").value;
					target.innerHTML = elem.value;
					/* オプションで国名のラベル選択時 */
					if(EditLabel=="NowChoosedCountry"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("country-label",'text-size',+ tmp);
					}	
					/* オプションで県名のラベル選択時 */
					else if(EditLabel=="NowChoosedState"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("state-label",'text-size',+ tmp);
					}
					/* オプションで市町村名のラベル選択時 */
					else if(EditLabel=="NowChoosedTownAndVillage"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("settlement-major-label",'text-size',+ tmp);
						map.setLayoutProperty("settlement-subdivision-label",'text-size',+ tmp);
						map.setLayoutProperty("settlement-minor-label",'text-size',+ tmp);	
					}
					/* オプションで建物、橋のラベル選択時 */
					else if(EditLabel=="NowChoosedBuilding"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("poi-label",'text-size',+ tmp);
						map.setLayoutProperty("airport-label",'text-size',+ tmp);
					}
					/* オプションで山のラベル選択時 */
					else if(EditLabel=="NowChoosedMountains"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('natural-point-label','text-size',+ tmp);
					}
					/* オプションで川、湖、海のラベル選択時 */
					else if(EditLabel=="NowChoosedWaters"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("water-point-label",'text-size',+ tmp);
						map.setLayoutProperty("water-line-label",'text-size',+ tmp);
						map.setLayoutProperty("waterway-label",'text-size',+ tmp);			
					}
					/* オプションで国道、高速道路、バイパスなどのラベル選択時 */
					else if(EditLabel=="NowChoosedHighway"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('road-label-simple','text-size',+ tmp);
					}
					/* オプションでその他道路、歩道などのラベル選択時 */
					else if(EditLabel=="NowChoosedMinorRoads"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('path-pedestrian-label','text-size',+ tmp);
					}
					/* オプションで公共交通機関（バス、電車）などのラベル選択時 */
					else if(EditLabel=="NowChoosedTransit"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('transit-label','text-size',+ tmp);
					}
				}
			}
			elem.addEventListener('input', rangeValue(elem, target));
		}


	/* 経路案内 */
		/* Aに出発地、Bに目的地入力 */
		/* A、Bのアイコンはドラッグアンッドロップで場所変更可能（その際、場所は緯度経度表示になる） */

		var Navigation = new MapboxDirections({
			accessToken: mapboxgl.accessToken,
			language: 'ja', 
		});
		document.getElementById('Navigation').appendChild(Navigation.onAdd(map));


	/* カラーパレット */
		var swatches_PC = document.getElementById('swatches_PC');
		var colors = [
			'#ff4b00',
			'#005aff',
			'#fff100',
			'#f6aa00',
			'#03af7a',
			'#990099',
			'#ffcabf',
			'#d8f255',
			'#bfe4ff',
			'#000000',
			'#84919e',
			'#ffffff',
		];

		 
		colors.forEach(function (color) {
			var swatch = document.createElement('button');
			swatch.style.backgroundColor = color;
			swatch.addEventListener('click', function () {
				const EditLayer = document.getElementById("ColoredLayer_PC").value;
				/* オプションで国名のラベル選択時 */
				if(EditLayer=="NowChoosedBackGround"){
					map.setPaintProperty('land','background-color',color);
					map.setPaintProperty('landuse','fill-color',color);
				}
				if(EditLayer=="NowChoosedBuilding"){
					map.setPaintProperty('building','fill-color',color);
					map.setPaintProperty('building-outline','line-color',color);
					map.setPaintProperty('bridge-simple','line-color',color);
					map.setPaintProperty('bridge-case-simple','line-color',color);
					map.setPaintProperty('bridge-pedestrian','line-color',color);
					map.setPaintProperty('bridge-steps','line-color',color);
					map.setPaintProperty('bridge-path','line-color',color);
				}
				if(EditLayer=="NowChoosedWaters"){
					map.setPaintProperty('water','fill-color',color);
					map.setPaintProperty('waterway','line-color',color);
				}
				if(EditLayer=="NowChoosedHighway"){
					map.setPaintProperty('road-simple','line-color',color);
				}
				if(EditLayer=="NowChoosedMinorRoads"){
					map.setPaintProperty('road-pedestrian','line-color',color);
					map.setPaintProperty('road-steps','line-color',color);
					map.setPaintProperty('road-path','line-color',color);
					map.setPaintProperty('tunnel-pedestrian','line-color',color);
					map.setPaintProperty('tunnel-steps','line-color',color);
					map.setPaintProperty('tunnel-path','line-color',color);
				}
			});
			swatches_PC.appendChild(swatch);
		});

/* PC用ここまで */



/* スマートフォン用 */

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


	/* トグルスイッチ */
		/* 国名の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag1 = true;
		function toggle1(){
			flag1 = !flag1; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-1_SP").value = flag1; /* ラベルの変更 */
			if(flag1==true){
				map.setLayoutProperty("country-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("country-label",'text-size',0);
			}
		}

		/* 県名の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag2 = true;
		function toggle2(){
			flag2 = !flag2; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-2_SP").value = flag2; /* ラベルの変更 */
			if(flag2==true){
				map.setLayoutProperty("state-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("state-label",'text-size',0);
			}
		}

		/* 市町村名の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag3 = true;
		function toggle3(){
			flag3 = !flag3; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-3_SP").value = flag3; /* ラベルの変更 */
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

		/* 建物、橋の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag4 = true;
		function toggle4(){
			flag4 = !flag4; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-4_SP").value = flag4; /* ラベルの変更 */
			if(flag4==true){
				map.setLayoutProperty("poi-label",'text-size',30);
				map.setLayoutProperty("airport-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("poi-label",'text-size',0);
				map.setLayoutProperty("airport-label",'text-size',0);
			}
		}

		/* 山の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag5 = true;
		function toggle5(){
			flag5 = !flag5; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-5_SP").value = flag5; /* ラベルの変更 */
			if(flag5==true){
				map.setLayoutProperty("natural-point-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("natural-point-label",'text-size',0);
			}
		}

		/* 川、湖、海の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag6 = true;
		function toggle6(){
			flag6 = !flag6; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-6_SP").value = flag6; /* ラベルの変更 */
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

		/* 国道、高速道路の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag7 = true;
		function toggle7(){
			flag7 = !flag7; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-7_SP").value = flag7; /* ラベルの変更 */
			if(flag7==true){
				map.setLayoutProperty("road-label",'text-size',30);
				map.setLayoutProperty("road-exit-label",'text-size',30);
				map.setLayoutProperty("road-number-shield",'text-size',30);
				map.setLayoutProperty("road-intersection",'text-size',30);
			}
			else{
				map.setLayoutProperty("road-label",'text-size',0);
				map.setLayoutProperty("road-exit-label",'text-size',0);
				map.setLayoutProperty("road-number-shield",'text-size',0);
				map.setLayoutProperty("road-intersection",'text-size',0);
			}
		}

		/* 細い道路、歩道の表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag8 = true;
		function toggle8(){
			flag8 = !flag8; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-8_SP").value = flag8; /* ラベルの変更 */
			if(flag8==true){
				map.setLayoutProperty("path-pedestrian-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("path-pedestrian-label",'text-size',0);
			}
		}

		/* 公共交通機関（バス、電車）などの表示/非表示制御 */
		/* スイッチの初期状態定義。判定時に使用 */
		flag9 = true;
		function toggle9(){
			flag9 = !flag9; /* trueとfalseの切り替え ! 否定演算子 */
			document.getElementById("setting-item-9_SP").value = flag9; /* ラベルの変更 */
			if(flag9==true){
				map.setLayoutProperty("transit-label",'text-size',30);
			}
			else{
				map.setLayoutProperty("transit-label",'text-size',0);
			}
		}



	/* 文字サイズ変更スライダー */
		/* 文字の大きさ調整のオプション開いてラベルを選択 */
		/* 選択したラベルの文字サイズをスライダーで調整できるようになる */
		/* if文を何度も通して条件分岐。愚直で汚いプログラムなので要改造 */

		function ChoosingLayer_SP(){
			const elem = document.getElementById('Label-Size-Slider_SP'); // input要素
			const target = document.getElementById('current-value_SP'); // 埋め込む先のspan要素
			const rangeValue = function (elem, target){
				return function(evt){
					const EditLabel = document.getElementById("ChoosedLayer_SP").value;
					target.innerHTML = elem.value;
					/* オプションで国名のラベル選択時 */
					if(EditLabel=="NowChoosedCountry"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("country-label",'text-size',+ tmp);
					}	
					/* オプションで県名のラベル選択時 */
					else if(EditLabel=="NowChoosedState"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("state-label",'text-size',+ tmp);
					}
					/* オプションで市町村名のラベル選択時 */
					else if(EditLabel=="NowChoosedTownAndVillage"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("settlement-major-label",'text-size',+ tmp);
						map.setLayoutProperty("settlement-subdivision-label",'text-size',+ tmp);
						map.setLayoutProperty("settlement-minor-label",'text-size',+ tmp);	
					}
					/* オプションで建物、橋のラベル選択時 */
					else if(EditLabel=="NowChoosedBuilding"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("poi-label",'text-size',+ tmp);
						map.setLayoutProperty("airport-label",'text-size',+ tmp);
					}
					/* オプションで山のラベル選択時 */
					else if(EditLabel=="NowChoosedMountains"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('natural-point-label','text-size',+ tmp);
					}
					/* オプションで川、湖、海のラベル選択時 */
					else if(EditLabel=="NowChoosedWaters"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty("water-point-label",'text-size',+ tmp);
						map.setLayoutProperty("water-line-label",'text-size',+ tmp);
						map.setLayoutProperty("waterway-label",'text-size',+ tmp);			
					}
					/* オプションで国道、高速道路、バイパスなどのラベル選択時 */
					else if(EditLabel=="NowChoosedHighway"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('road-label-simple','text-size',+ tmp);
					}
					/* オプションでその他道路、歩道などのラベル選択時 */
					else if(EditLabel=="NowChooedMinorRoads"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('path-pedestrian-label','text-size',+ tmp);
					}
					/* オプションで公共交通機関（バス、電車）などのラベル選択時 */
					else if(EditLabel=="NowChoosedTransit"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('transit-label','text-size',+ tmp);
					}
				}
			}
			elem.addEventListener('input', rangeValue(elem, target));
		}


	/* カラーパレット */
		var swatches_PC = document.getElementById('swatches_PC');
		var colors = [
			'#ff4b00',
			'#005aff',
			'#fff100',
			'#f6aa00',
			'#03af7a',
			'#990099',
			'#ffcabf',
			'#d8f255',
			'#bfe4ff',
			'#000000',
			'#84919e',
			'#ffffff',
		];

		
		colors.forEach(function (color) {
			var swatch = document.createElement('button');
			swatch.style.backgroundColor = color;
			swatch.addEventListener('click', function () {
				const EditLayer = document.getElementById("ColoredLayer_SP").value;
				/* オプションで国名のラベル選択時 */
				if(EditLayer=="NowChoosedBackGround"){
					map.setPaintProperty('land','background-color',color);
					map.setPaintProperty('landuse','fill-color',color);
				}
				if(EditLayer=="NowChoosedBuilding"){
					map.setPaintProperty('building','fill-color',color);
					map.setPaintProperty('building-outline','line-color',color);
					map.setPaintProperty('bridge-simple','line-color',color);
					map.setPaintProperty('bridge-case-simple','line-color',color);
					map.setPaintProperty('bridge-pedestrian','line-color',color);
					map.setPaintProperty('bridge-steps','line-color',color);
					map.setPaintProperty('bridge-path','line-color',color);
				}
				if(EditLayer=="NowChoosedWaters"){
					map.setPaintProperty('water','fill-color',color);
					map.setPaintProperty('waterway','line-color',color);
				}
				if(EditLayer=="NowChoosedHighway"){
					map.setPaintProperty('road-simple','line-color',color);
				}
				if(EditLayer=="NowChoosedMinorRoads"){
					map.setPaintProperty('road-pedestrian','line-color',color);
					map.setPaintProperty('road-steps','line-color',color);
					map.setPaintProperty('road-path','line-color',color);
					map.setPaintProperty('tunnel-pedestrian','line-color',color);
					map.setPaintProperty('tunnel-steps','line-color',color);
					map.setPaintProperty('tunnel-path','line-color',color);
				}
			});
			swatches_SP.appendChild(swatch);
		});

/* スマートフォン用ここまで */











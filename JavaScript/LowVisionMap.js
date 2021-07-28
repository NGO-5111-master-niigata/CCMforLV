
/* 共通設定 */

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

			map.addControl(
				new MapboxGeocoder({
					accessToken: mapboxgl.accessToken,
					mapboxgl: mapboxgl
				}),
				'top-left'
			);
		}


	/* 取得に失敗した場合の関数 */
		function error(err){
			/* 新宿周辺地図表示しながらコントロールボタン追加 */
			map.addControl(
				new mapboxgl.NavigationControl({
				}),
				'bottom-right'
			);

			/* 新宿周辺地図表示しながらナビゲーション追加 */
			map.addControl(
				new MapboxGeocoder({
					accessToken: mapboxgl.accessToken,
					mapboxgl: mapboxgl
				}),
				'top-left'
			);
		}

/* 共通設定ここまで */


/* PC用 */

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
				map.setLayoutProperty("road-label-simple",'text-size',30);
			}
			else{
				map.setLayoutProperty("road-label-simple",'text-size',0);
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


	/* 文字サイズ変更スライダー */
		/* 文字の大きさ調整のオプション開いてラベルを選択 */
		/* 選択したラベルの文字サイズをスライダーで調整できるようになる */
		/* if文を何度も通して条件分岐。愚直で汚いプログラムなので要改造 */

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
					else if(EditLabel=="NowChosedMinorRoads"){
						const tmp = document.getElementById('Label-Size-Slider_PC').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('path-pedestrian-label','text-size',+ tmp);
					}
				}
			}
			elem.addEventListener('input', rangeValue(elem, target));
		}


	/* ナビゲーション */
		/* Aに出発地、Bに目的地入力 */
		/* A、Bのアイコンはドラッグアンッドロップで場所変更可能（その際、場所は緯度経度表示になる） */
		var Navigation = new MapboxDirections({
			accessToken: mapboxgl.accessToken,
			language: 'ja', 
		});

		document.getElementById('Navigation_PC').appendChild(Navigation.onAdd(map));


	/* カラーパレット */

		var swatches = document.getElementById('swatches');
		var colors = [
			'#ffffcc',
			'#a1dab4',
			'#41b6c4',
			'#2c7fb8',
			'#253494',
			'#fed976',
			'#feb24c',
			'#fd8d3c',
			'#f03b20',
			'#bd0026'
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
			swatches.appendChild(swatch);
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
				map.setLayoutProperty("road-label-simple",'text-size',30);
			}
			else{
				map.setLayoutProperty("road-label-simple",'text-size',0);
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
					else if(EditLabel=="NowChosedMinorRoads"){
						const tmp = document.getElementById('Label-Size-Slider_SP').value;
						target.innerHTML = elem.value;
						map.setLayoutProperty('path-pedestrian-label','text-size',+ tmp);
					}
				}
			}
			elem.addEventListener('input', rangeValue(elem, target));
		}


/* スマートフォン用ここまで */











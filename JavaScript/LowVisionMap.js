<!-- 現在地を取得 -->

navigator.geolocation.getCurrentPosition(success,error);

		<!-- 取得に成功した場合の関数 -->

		function success(position){

			var com = position.coords;
			var comlng = com.longitude ;
			var comlat = com.latitude ;

			<!-- 現在地周辺の地図読み込み -->

			mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
			var map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/ngo5111/ckemjqmlv2cyh19rrpe99nr7y',
				center: [+ comlng , + comlat] ,
				zoom: 14.5
			});


			<!-- コントロールボタン、ジオコーダー追加 -->

			map.addControl(new mapboxgl.NavigationControl());

			map.addControl(
				new MapboxGeocoder({
					accessToken: mapboxgl.accessToken,
					mapboxgl: mapboxgl
				}),
				'top-left'
				);

			<!-- 文字サイズ変更ボタン追加 -->
	
			map.on('load', function() {
				var large = document.getElementById('large');

				large.addEventListener('click', function() {
					map.setLayoutProperty('state-label', 'text-size', 40);
				},false);
				
				var small = document.getElementById('small');

				small.addEventListener('click', function() {
					map.setLayoutProperty('state-label', 'text-size', 10);
				},false);
			});


			<!-- 県名の表示非表示切り替えボタン追加 -->
	
			map.on('load', function() {
				var on = document.getElementById('on');

				on.addEventListener('click', function() {
					map.setLayoutProperty('state-label', 'text-size', 60);
				},false);
				
				var off = document.getElementById('off');

				off.addEventListener('click', function() {
					map.setLayoutProperty('state-label', 'text-size', 0);
				},false);
			});
		}


		<!-- 取得に失敗した場合の関数 -->

		function error(err){

			var comlng = 139.70 ;
			var comlat = 35.68 ;

			<!-- 現在地周辺の地図読み込み -->

			mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
			var map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/ngo5111/ckemjqmlv2cyh19rrpe99nr7y',
				center: [+ comlng , + comlat] ,
				zoom: 14.5
			});


			<!-- コントロールボタン、ジオコーダー追加 -->

			map.addControl(new mapboxgl.NavigationControl());

			map.addControl(
				new MapboxGeocoder({
					accessToken: mapboxgl.accessToken,
					mapboxgl: mapboxgl
				}),
				'top-left'
				);

			<!-- 文字サイズ変更ボタン追加 -->
	
			map.on('load', function() {
				var large = document.getElementById('large');

				large.addEventListener('click', function() {
					map.setLayoutProperty('state-label', 'text-size', 40);
				},false);
				
				var small = document.getElementById('small');

				small.addEventListener('click', function() {
					map.setLayoutProperty('state-label', 'text-size', 10);
				},false);
			});


			<!-- 県名の表示非表示切り替えボタン追加 -->
	
			map.on('load', function() {
				var on = document.getElementById('on');

				on.addEventListener('click', function() {
					map.setLayoutProperty('state-label', 'text-size', 60);
				},false);
				
				var off = document.getElementById('off');

				off.addEventListener('click', function() {
					map.setLayoutProperty('state-label', 'text-size', 0);
				},false);
			});
		}

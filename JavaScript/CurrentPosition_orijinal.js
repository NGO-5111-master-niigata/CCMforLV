<!-- 現在地を取得 -->

navigator.geolocation.getCurrentPosition(success,error);

		<!-- 取得に成功した場合の関数 -->

		function success(position){

			var com = position.coords;
			var comlng = com.longitude ;
			var comlat = com.latitude ;

			<!-- 新宿駅周辺の地図読み込み -->

			mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
			var map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/ngo5111/ckb5wuazy2heu1imwnukcqukh',
				center: [+ comlng , + comlat] ,
				zoom: 12
			});
		}


		<!-- 取得に失敗した場合の関数 -->

		function error(err){

			var comlng = 139.70 ;
			var comlat = 35.68 ;

			<!-- 新宿駅周辺の地図読み込み -->

			mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
			var map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/ngo5111/ckb5wuazy2heu1imwnukcqukh',
				center: [139.70 , 35.68] ,
				zoom: 12
			});
		}
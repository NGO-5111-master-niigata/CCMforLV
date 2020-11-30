
			<!-- 現在地周辺の地図読み込み -->

			mapboxgl.accessToken = 'pk.eyJ1IjoibmdvNTExMSIsImEiOiJjanh6Z3l6cmIwMG9tM21uNGtuNnB0NXM2In0.IwFlVev1tMBm-gy5zWiS9Q';
			var map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/ngo5111/ckemjqmlv2cyh19rrpe99nr7y',
				center: [140 , 40] ,
				zoom: 11.5
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




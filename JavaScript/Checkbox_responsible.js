
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

function EditGo(){

}


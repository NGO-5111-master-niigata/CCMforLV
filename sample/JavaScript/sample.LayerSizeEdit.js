

/* オプション開いて選択したラベルの大きさを変更できるようにしたい */
/* 現状は上手くいってない */






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




var elem = document.getElementsByClassName('range');
var rangeValue = function (elem, target) {
	return function(evt){
		target.innerHTML = elem.value;
 	}
}
for(var i = 0, max = elem.length; i < max; i++){
	bar = elem[i].getElementsByTagName('input')[0];
	target = elem[i].getElementsByTagName('span')[0];
	bar.addEventListener('input', rangeValue(bar, target));
}



var CoosedLayer = document.getElementById('ChoosedLayer');
 
ChoosedLayer.addEventListener('change', function() {
  	console.log('オプションいじってましたかー!?');
}, false);








/* セレクトメニュー内変更したら選んだラベルをスライダーで文字の大きさ調整できるようになる */
function ChoosingLayer(){

	console.log("オプションいじってますよね？");

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('current-value');

	const SizeEditingLabel = document.getElementsByName("ChoosedLayer");

	console.log(elem);

	console.log(target);

	console.log(SizeEditingLabel);

	const rangeValue = function (elem,target) {
		return function(evt){

			const EditLabel = [];
			const tmp = document.getElementById('Label-Size-Slider').value;

			EditLabel.splice(0,100);
			EditLabel.push(SizeEditingLabel.value);

			if(EditLabel=="NowChoosedCountry"){
				map.setLayoutProperty('country-label','text-size',+ tmp);
				if(EditLabel=="NowChoosedState"){
					map.setLayoutProperty('state-label','text-size',+ tmp);
					if(EditLabel=="NowChoosedTownAndVillsge"){
						map.setLayoutProperty("settlement-major-label",'text-size',+ tmp);
						map.setLayoutProperty("settlement-subdivision-label",'text-size',+ tmp);
						map.setLayoutProperty("settlement-minor-label",'text-size',+ tmp);
						if(EditLabel=="NowChoosedBuilding"){
							map.setLayoutProperty("poi-label",'text-size',+ tmp);
							map.setLayoutProperty("airport-label",'text-size',+ tmp);
							if(EditLabel=="NowChoosedMountains"){
								map.setLayoutProperty("natural-point-label",'text-size',+ tmp);
								if(EditLabel=="NowChoosedTownAndVillsge"){
									map.setLayoutProperty("water-point-label",'text-size',+ tmp);
									map.setLayoutProperty("water-line-label",'text-size',+ tmp);
									map.setLayoutProperty("waterway-label",'text-size',+ tmp);
									if(EditLabel=="NowChoosedHighway"){
										map.setLayoutProperty("road-label-simple",'text-size',+ tmp);
										if(EditLabel=="NowChosedMinorRoads"){
											map.setLayoutProperty("path-pedestrian-label",'text-size',+ tmp);
										}
									}
								}
							}
						}
					}
				}				
			}
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
};




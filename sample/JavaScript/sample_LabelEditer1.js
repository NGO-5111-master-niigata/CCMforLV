/* 国名のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle1(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-1").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("country-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("country-label",'text-size',50);
	} //条件を満たしていない場合の処理}
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


/* 県名のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle2(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-2").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("state-labe2",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("state-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 県名のラベルをクリックしたら選択状態に移行 */

map.on('click', 'state-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('state-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 市の名前のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle3(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-3").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("settlement-major-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("settlement-major-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 市の名前のラベルをクリックしたら選択状態に移行 */

map.on('click', 'settlement-major-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('settlement-major-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 町の名前のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle4(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-4").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("settlement-subdivision-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("settlement-subdivision-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 町の名前のラベルをクリックしたら選択状態に移行 */

map.on('click', 'settlement-subdivision-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('settlement-subdivision-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 地方、地域の名前のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle5(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-5").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("settlement-minor-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("settlement-minor-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 地方、地域の名前のラベルをクリックしたら選択状態に移行 */

map.on('click', 'settlement-minor-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('settlement-minor-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 建物名の名前のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle6(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-6").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("poi-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("poi-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 建物名の名前のラベルをクリックしたら選択状態に移行 */

map.on('click', 'poi-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('poi-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 空港、自衛隊基地の名前のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle7(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-7").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("airport-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("airport-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 空港、自衛隊基地のラベルをクリックしたら選択状態に移行 */

map.on('click', 'airport-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('airport-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 島、山、温泉のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle8(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-8").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("natural-point-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("natural-point-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 島、山、温泉のラベルをクリックしたら選択状態に移行 */

map.on('click', 'natural-point-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('natural-point-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 川、海のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle9(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-9").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("water-point-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("water-point-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 川、海のラベルをクリックしたら選択状態に移行 */

map.on('click', 'water-point-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('water-point-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 太い道路のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle10(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-10").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("road-label-simple",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("road-label-simple",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 太い道路のラベルをクリックしたらスライダーでのサイズ変更に移行 */

map.on('click', 'road-label-simple', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('road-label-simple','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});


/* 細い道路、歩道のトグルスイッチ、スライダーの制御 */

flag = false;
num = 0;
function toggle11(){
	flag = !flag; // trueとfalseの切り替え ! 否定演算子
	document.getElementById("setting-item-11").value = flag; // ボタンのラベルの変更
	if(flag == true){
		map.setLayoutProperty("path-pedestrian-label",'text-size',0);
	} //条件を満たした場合の処理
	else{  
		map.setLayoutProperty("path-pedestrian-label",'text-size',50);
	} //条件を満たしていない場合の処理}
}

/* 細い道路、歩道のラベルをクリックしたらスライダーでのサイズ変更に移行 */

map.on('click', 'path-pedestrian-label', function() {

	const elem = document.getElementById('Label-Size-Slider');
	const target = document.getElementById('value');
	
	const rangeValue = function (elem, target) {
		return function(evt){
			const tmp = document.getElementById('Label-Size-Slider').value;
			target.innerHTML = elem.value;
			map.setLayoutProperty('path-pedestrian-label','text-size',+ tmp);
		}
	}
	elem.addEventListener('input', rangeValue(elem, target));
});

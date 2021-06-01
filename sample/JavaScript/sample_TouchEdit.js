	/* 国名のラベルをクリックしたら選択状態に移行してスライダーで文字の大きさ調整できるようになる */
    map.on('click', 'country-label', function() {

        console.log("触りましたね？");

        const elem = document.getElementById('Label-Size-Slider');
        const target = document.getElementById('value');

        const rangeValue = function (elem, target) {
            return function(evt){
                const tmp = document.getElementById('Label-Size-Slider').value;
                map.setLayoutProperty('country-label','text-size',+ tmp);
            }
        }
        elem.addEventListener('input', rangeValue(elem, target));
    });

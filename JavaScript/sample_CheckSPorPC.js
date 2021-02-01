function isSmartPhone() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      return true;
    } else {
      return false;
    }
  }



  <!-- 別のコード -->

if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
	// スマホ・タブレット（iOS・Android）の場合の処理を記述
    }
        else{
        // PCの場合の処理を記述
    }



<!-- スマートフォン＆タブレットとパソコンで別のJavaScriptを実行 -->

$(window).load(function() {
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    // スマートフォン＆タブレット用JS
    } else {
    // PC用JS
    }
    });
    







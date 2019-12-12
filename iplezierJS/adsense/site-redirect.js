//1 PARTE - REDIRECT
function orr_setCookie(strCookie, strValor, lngHoras) {
    let dtmData = new Date();
    let strExpires = null;
    if (lngHoras) {
        dtmData.setTime(dtmData.getTime() + (lngHoras * 60 * 1000 * 60));
        strExpires = "; expires=" + dtmData.toGMTString();
    } else {
        strExpires = "";
    }
    document.cookie = strCookie + "=" + strValor + strExpires + "; path=/";
    window.location.href = "/";
}
orr_setCookie('iplezier_redirected', '1', 1);

//2 PARTE - ELSE NO HEAD
function orr_getCookie(strCookie) {
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
function orr_delCookie(strCookie) {
    document.cookie = strCookie + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function orr_insertCss (){
    let css = 'body,html{overflow: hidden !important;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}
if(orr_getCookie("iplezier_redirected") != null) {
    orr_insertCss();
    orr_delCookie('iplezier_redirected');
}
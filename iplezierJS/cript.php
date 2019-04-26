<html>
<head>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <!--<script src="cript.js"></script>-->
    <script>
        var obfx;
        function obf(s1, id = 1247) {
            var i=null;
            var x=0;
            var x2=null;
            var x3=null;
            var x4=Math.floor(Math.random()*(25-0+1)+0);
            var sx='';
            var result = String.fromCharCode(parseInt(x4) + 65);
            x4 = parseInt(x4) + parseInt(id);
            var i;
            for (i = 0; i <= s1.length-1; i++) {
                x = s1.charAt(i);
                x = x.charCodeAt(0) + parseInt(x4);

                if (x <= 25) {
                    sx = 'A'+String.fromCharCode(parseInt(x) + 65);
                } else {
                    x2 = Math.floor(parseInt(x) / 25);
                    x3 = parseInt(x) - (parseInt(x2) * 25);
                    sx = String.fromCharCode(parseInt(x2)+65) + String.fromCharCode(parseInt(x3)+65);
                }
                result = result + sx;
            }
            return btoa(result);
        }

        function deobf(s1, id = 1247) {
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

        fetch('https://cdn.iplezier.site/assets/js/source/iPlezier.js?ver=1.1')
            .then(function(response) {
                return response.text();
            })
            .then(function(body) {
                obfx = body;
            });
    </script>
</head>

<body>

</body>
</html>
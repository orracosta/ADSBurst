<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
function Encryptar(s1, id = 1010) {
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

function Decrypt(s1, id = 1010) {
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

$.get("https://trox.online/crypt.php", function(data){
	console.log(Decrypt(data,1745));
});
</script>
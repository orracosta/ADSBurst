<?php
	function Encrypt($s1, $id = 1745) {
		$i=null; $x=0; $x2=null; $x3=null; $x4=rand(0,25); $sx='';
		$result = chr($x4+65);
		$x4 = $x4 + $id;
		for ($i = 0; $i <= strlen($s1)-1; $i++) {
			$x = ord(@$s1[$i]) + @$x4;
			if ($x <= 25) {
				$sx = 'A' . chr($x+65);
			} else {
				$x2 = floor( $x / 25 );
				$x3 = $x - ($x2 * 25);
				$sx = chr($x2+65) . chr($x3+65);
			}
			$result = $result . $sx;
		}
		return base64_encode($result);
	}
	function Decrypt($s1, $id = 1745) {
		$s1 = base64_decode($s1);
		$result = '';
		$xx2 = ord($s1[0]) - 65;
		$s1 = substr($s1, 1);
		while (strlen($s1) > 0) {
			$result = $result . chr( (ord($s1[0])-65) * 25 + ( ord($s1[1])-65 ) - $xx2 - $id);
			$s1 = substr($s1, 2);
		}
		return $result;
	}
?>
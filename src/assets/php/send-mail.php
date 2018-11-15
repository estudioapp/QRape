<?php

$email = $_GET["email"];

$headers  = 'MIME-Version: 1.0'."\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
$headers .= 'From:Equipo de ChangoFree<team@changofree.com>'."\r\n";
$cuerpo ="
<style type='text/css'>
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');
	p,h1,b{
		font-family: 'Open Sans', sans-serif;
	}
</style>
<div style='background-color:#f1f1f1;width:100%;height:700px;margin:0 auto;padding-top:10px;'>
<div style='width:95%;height:670px;margin:0 auto;
background-color:#fff;'>
<center style='background-color: #0051ff2e;'>
    <h1 style='color:white; padding-top:25px; padding-bottom:25px'>ChangoFree</h1>
</center>
<div style='width:90%;height:380px;margin:10px auto;
background-color:#fff;'>
<p style='font-size:25px'>¡Registro exitoso!</p>

<p style='font-size: 19px;'>
Te recordamos que tenes 15 diás de uso gratuito, una vez terminado el lapso, tendras que contratar un plan 
</p>
<b style='font-size: 20px'>¡Empezá a digitalizar tu negocio ahora!</b>
<p style='font-size: 19px; margin-left:40%'>Saluda Atte. El equipo de ChangoFree</p>
</div></div>
</div>";
echo mail($email,"¡Registro exitoso! - Team ChangoFree", $cuerpo ,$headers);

?>
<?php

date_default_timezone_set("America/Argentina/Buenos_Aires");
$time=time();
$fecha=date("Y-m-d",$time);
$hora= date("H:i",$time);

/**
 * @version 1.0
 */

require("class.phpmailer.php");
require("class.smtp.php");

$Titulo = $_GET["titulo"];
$emailDestino = $_GET["email"];
$mensaje = $_GET["mensaje"];

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "smtpout.secureserver.net";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "team@changofree.com";  // Mi cuenta de correo
$smtpClave = "Cristian98!";  // Mi contraseña

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $smtpUsuario; // Email desde donde envío el correo.
$mail->FromName = $Name;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
$mail->AddReplyTo($Email); // Esto es para que al recibir el correo y poner Responder, lo haga a la cuenta del visitante. 
$mail->Subject = "$Titulo"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "{$mensajeHtml} ";// Texto del email en formato HTML
$mail->AltBody = "{$mensaje} $mensaje"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo "El correo fue enviado correctamente.";
} else {
    echo "Oc";
}
?>
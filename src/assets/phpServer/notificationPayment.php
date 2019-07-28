<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once '../vendor/autoload.php';

/*************************************/

MercadoPago\SDK::setAccessToken("APP_USR-5418211864373749-072119-395b2b63f81680f70d4825bba47413c5-4970503");

/************* RECIBE ID Y TOPIC ************************/

$topic = null;
$id = null;

$keyClient = null;
$estado = "free";

# Validamos la acción del servidor
if(!isset($_GET["topic"]) && !isset($_GET["id"])){
    http_response_code(400);
    return;
}
if($_GET["topic"] == "merchant_order"){
    http_response_code(400);
    return;
}
if(!isset($_GET["topic"])){
    $topic = $_POST["topic"];    
}else{
    $topic = $_GET["topic"];
}
if(!isset($_GET["id"])){
    $id= $_POST["id"];    
}else{
    $id = $_GET["id"];
}



# Testeamos que la id recivida sea de un pago reciente
$payment = MercadoPago\Payment::find_by_id($id);


# Verificamos que la compra se haya efectuado
if($payment->status == 'approved'){
    if($payment->transaction_details->total_paid_amount >= $payment->transaction_amount){
        $estado = "Acreditado";
    }else{
        $estado = "Pago no acreditado";
    }
}else{
    $estado = "Pago pendiente";
}
if($payment->status == 'approved'){


#User CloudFirestore
$keyUserCloudFirestore = $payment->external_reference;

#Url database
$url = "https://firestore.googleapis.com/v1beta1/projects/qrselector-5b259/databases/(default)/documents/users/".$keyUserCloudFirestore;


#Listado de usuario - CURL
$cht = curl_init();
curl_setopt($cht, CURLOPT_URL, $url);
curl_setopt($cht, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($cht);
curl_close($cht);

#Decodificacion del JSON
$info = json_decode($response, true);


#Variables a modificar
$email = $info['fields']['email']['stringValue'];
$emailVerified =  $info['fields']['emailVerified']['booleanValue'];
$tipoUsuario = $info['fields']['tipoUsuario']['stringValue'];
$uid = $info['fields']['uid']['stringValue'];

#Modificacion de variables
$firestore_data  = [
    "email" => ["stringValue" => $email],
    "emailVerified" => ["booleanValue" => $emailVerified],
    "tipoUsuario" => ["stringValue" => "premium"],
    "uid" => ["stringValue" => $uid]
];

$data = ["fields" => (object)$firestore_data];

$json = json_encode($data);

#Update Profile
$curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_HTTPHEADER => array('Content-Type: application/json',
            'Content-Length: ' . strlen($json),
            'X-HTTP-Method-Override: PATCH'),
        CURLOPT_URL => $url,
        CURLOPT_USERAGENT => 'cURL',
        CURLOPT_POSTFIELDS => $json
    ));

    $response = curl_exec( $curl );

    curl_close( $curl );
}

?>

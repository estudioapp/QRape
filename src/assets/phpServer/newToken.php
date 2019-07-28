<?php
  error_reporting(E_ALL);
  ini_set('display_errors', '1');

  require_once '../vendor/autoload.php';
  MercadoPago\SDK::setAccessToken("APP_USR-5418211864373749-072119-395b2b63f81680f70d4825bba47413c5-4970503");

  $key = $_GET["key"];
  //$Precio = $_GET["precio"];
  //$Fecha = $_GET["fecha"];
 
  $preference = new MercadoPago\Preference();
  
  # Setting item      
  $item = new MercadoPago\Item();
  $item->title = "Qready - Cuota semestral";
  $item->quantity = 1;
  $item->currency_id = "ARS";
  $item->unit_price = 2;
  // $item->unit_price = 2;/7
    
  # Setting preferences
  $preference->items = array($item);
  
  $preference->external_reference = $key;

  $preference->notification_url = "https://qready.com.ar/assets/php/notificationPayment.php";

   
    $preference->back_urls = array(
      "success" => "https://qready.com.ar",
      "failure" => "",
      "pending" => ""
    );

  # Save and posting preference
  $preference->save();
  
  # Getting url from MercadoPago

  echo $preference->init_point;
  ?>
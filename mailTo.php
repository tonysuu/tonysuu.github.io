<?php
  if ($_POST["submit"]){
    $recipient="tonysu1122@hotmail.com";
    $subject="Sent From tonysu.me";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];
    $mailBody="Name: " . $sender . "\n" . "Email: " . $senderEmail . "\n" . $message;
    $headers = 'From: contacts@tonysu.me';
    mail($recipient,$subject,$mailBody,$headers);
    sleep(1);
	header('Location: contacts.html'); // Set here redirect page or destination page
  }
?>
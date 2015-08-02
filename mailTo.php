<?php
  if ($_POST["submit"]){
    $recipient="tonysu1122@hotmail.com";
    $subject="Sent From tonysu.me";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["sender"];
    $message=$_POST["message"];
    $mailBody="Name";
    mail($recipient,$subject,$mailBody);
    sleep(1);
	header('Location: contacts.html'); // Set here redirect page or destination page
  }
?>

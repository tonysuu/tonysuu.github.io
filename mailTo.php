<?php
  if ($_POST["submit"]){
    $recipient="tonysu1122@hotmail.com";
    $subject="Sent From tonysu.me";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["sender"];
    $message=$_POST["message"]
    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";
    mail($recipient,$subject,$mailBody,"From: $sender <$senderEmail>");
    sleep(1);
	header("Location:http://tonysu.me/contacts.html"); // Set here redirect page or destination page
  }
?>
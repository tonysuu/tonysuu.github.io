<!DOCTYPE html>
<html>
<head>
    <link rel="shortcut icon" href="/img/favicon.ico" type="image/icon">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="stylesheet.css" type="text/css" />
    <link rel="icon" href="http://www.tonysu.me/favicon.ico" type="image/icon">
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <title>Tony Su</title>
</head>
<body>
    <div class="menu">
      <div id="menu_content">
           <div id="close-button"><img src="img/close_icon.png"/></div>
           <div id="menu-list">
               <div id="accordion">
                   <h3><a>Home</a></h3>
                   <div></div>
                   <h3><a>Projects</a></h3>
                   <div>
                       <a href="projects.html#ttt_row"><p>Tic Tac Toe</p></a>
                       <a href="projects.html#mtype_row"><p>MType</p></a>
                       <a href="projects.html#brick_row"><p>Brick Breaker</p></a>
                       <a href="projects.html#android_row"><p>Android Applicatoins</p></a>
                       <a href="projects.html#calculator_row"><p>Universal Calculator</p></a>
                       <a href="projects.html#others_row"><p>Others</p></a>
                   </div>
                   <h3 id="resume"><a href="resume.html">Resume</a></h3>
                   <div></div>
                   <h3 id="contact"><a>Contact Me</a></h3>
                   <div></div>
               </div>
           </div>
       </div>
   </div>
   <div id="header">
    <div id="name">Tony Su</div>
    <div id="navbar">
        <div id="menu-icon"><i class="fa fa-bars fa-3x"> <span style="font-family: 'Century Gothic',serif">MENU</span></i></div>
        <div id="menu-nav">
            <ul>
                <li><div class="icon"><a href="index.html" class="link">Home</a></div></li>
                <li><div class="icon"><a href="projects.html" class="link">Projects</a></div></li>
                <li><div class="icon"><a href="resume.html" class="link">Resume</a></div></li>
                <li><div class="icon"><a href="#" class="link">Contact</a></div></li>
            </ul>
        </div>
    </div>
</div>
<div id="content" ng-app="">
    <!--<div id="fields">
        <div id="fields_name">
            <p style="text-align: center">name: <input type="text" ng-model="first_name" placeholder="hit me"></p>
            <p>{{first_name}}</p>
        </div>
    </div> -->
    <form method="post" action="contacts.php">
        <label>Name:</label>
        <input name="sender" ng-model="first_name">

        <label>Email address:</label>
        <input name="senderEmail">

        <label>Message:</label>
        <textarea rows="5" cols="20" name="message"></textarea>

        <input type="submit" name="submit">
    </form>
    <div id="envelope">
        <div style="top: 200px"><p>{{first_name}}</p></div>
    </div>
 </div>
</div>
<div id="footer">
    <div id="footer-content">
    <a href="https://github.com/tonysuu" target="_blank">Github</a> | <a href="https://ca.linkedin.com/pub/tony-su/a0/6b4/a18" target="_blank">LinkIn</a>
     | <a href="mailto:tonysu1122@hotmail.com" target="_top">Email</a> <br />
        &#169 2015 Tony Su. All Rights Reserved.
    </div>
</div>
<script type='text/javascript' src='script.js'></script>
</body>
</html>
<?php
  if ($_POST["submit"]){
    $recipient="tonysu1122@hotmail.com";
    $subject="Sent From tonysu.me";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["sender"];
    $message=$_POST["message"]
    $mailBody="Name: $sender\nEmail: $senderEmail\n$message";
    mail($recipient,$subject,$mailBody,"From: $sender <$senderEmail>");
  }
?>
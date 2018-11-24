<?php
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $send = "email: $email\n phone: $phone\nname: $name\n\n$message";
    $headers = "From: jacobhjustice.dev@gmail.com\r\n";
    mail("jacobhjustice.dev@gmail.com", "CONTACT FROM PORTFOLIO", $send, $headers);

    email("")
?>



<?php
  $name = $_POST['name'];
  $lastName = $_POST['lastName'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];
  $phone = $_POST['phone'];

  $email_from = 'ghaffar2@ghaffarikala.com';

  $email_subject= "New Message From Your Website";

  $email_body = "User Name: $name.\n". 
                  "User Email: $visitor_email.\n".
                    "User Message: $message.\n".
                     "User Subject: $subject.\n". 
                      "User Phone: $phone.\n";

  $to = "ghaffarikala@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";
  

  mail($to,$email_subject,$email_body,$headers);

  header("Location: تماس.html");

  

  
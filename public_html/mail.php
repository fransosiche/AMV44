<?php

if($_SERVER['REQUEST_METHOD'] == "POST"){	
    $to      = 'contact@amv44.fr';
    $subject = 'Prise de contact via amv44.fr';
    $message = 'Nom du contact : '.iconv('UTF-8', 'windows-1252',$_POST["name"]).'<br><br>'.'Email du contact : '.iconv('UTF-8', 'windows-1252',$_POST["mail"]).'<br><br>'.'Numéro de téléphone du contact : '.iconv('UTF-8', 'windows-1252',$_POST["phone"]).'<br><br>'.'Sujet du message : '.iconv('UTF-8', 'windows-1252',$_POST["Sujet du message"]).'<br><br>'.'Message : '.iconv('UTF-8', 'windows-1252',$_POST['message']);
    $headers = 'From: '. $_POST['mail'] . "\r\n" .
    'Reply-To: '.$_POST['mail']. "\r\n" .
    'X-Mailer: PHP/' . phpversion().
    "MIME-Version: 1.0\n".
    'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
    
    try{    
	mail($to, $subject, $message, $headers);	
	echo json_encode(array('reponse' => 'success')); 
	exit;
    } catch (Exception $e) {	    
	return 'erreur_mail';
    }
    
}

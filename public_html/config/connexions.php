<?php
    
    function connectPDOMysql(){
            try{
                $connexion = new PDO('mysql:host='.HOST.';dbname='.DBNAME,USER,PWD,array(
                                PDO::MYSQL_ATTR_INIT_COMMAND =>'SET NAMES UTF8',
                                PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING
                        ));
                return $connexion;

            }catch(PDOException $e){
                echo "Le serveur Web4Business rencontre actuellement des difficultés. Veuillez renouveller votre demande ultérieurement.";
                die();
                return false;
            }
    }


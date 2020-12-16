<?php 
include 'config/config.php';
include 'config/fonctions.php';

$maintenance = getMaintenanceByIdProjet(44);
$ip = get_ip(); 

if ( $maintenance['maintenance'] == "1" && $ip !== IP ){
    header('location: maintenance/index.html');
    exit();
}

<?php
// Array
$data = array("Spesa", "Bollette", "Barbiere");

// Conversione dell'array in JSON
$jsonData = json_encode($data);

//header per indicare che il contenuto è JSON
header('Content-Type: application/json');

// Restituzione del JSON
echo $jsonData;
?>
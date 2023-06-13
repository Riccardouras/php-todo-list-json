<?php
header('Content-Type: application/json');

$data = file_get_contents("dati.json");

$todoList = json_decode($data, true);

if( isset($_POST['newTask']) ) {
    $todoList[] = $_POST['newTask'];
    file_put_contents("dati.json", json_encode($todoList) );

}

$jsonData = json_encode($todoList);
// Restituzione del JSON
echo $jsonData;
?>
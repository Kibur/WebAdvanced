<?php
// insert to database
$con = new mysqli('localhost:3307', 'root', 'usbw', 'the_mad_pedestrian');
$table = "Scores";
$array = array();

$data = $_POST['data'];

$array = explode("_", $data);

$playerName = $array[0];
$score = $array[1];

$stmt = $con->prepare("INSERT INTO " . $table . " VALUES (?, ?)");
$stmt->bind_param("si", $playerName, $score);
$stmt->execute();

$con->close();
?>
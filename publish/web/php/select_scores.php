<?php
$con = new mysqli('localhost:3307', 'root', 'usbw', 'the_mad_pedestrian');
$table = "Scores";
$result = $con->query("SELECT Player, Score FROM " . $table . " ORDER BY Score DESC LIMIT 0,5");
$array = array();

while ($row = $result->fetch_assoc()) {
	$array[] = $row;
}

$con->close();

print(json_encode($array));
?>
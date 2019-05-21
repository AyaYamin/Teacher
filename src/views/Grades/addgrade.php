<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
$link = mysqli_connect("localhost", "root", "", "project_new");
 

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$payload = file_get_contents('php://input');
$input = json_decode($payload, true);
$point=$input['point'];
$sql = "INSERT INTO grade (point) VALUES ('$point')";

 
$sql_1=mysqli_query($link,$sql);
//$row=mysqli_fetch_row($sql_1);


echo"ahlam:";
?>
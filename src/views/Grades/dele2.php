<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: http://localhost:3000');
$link = mysqli_connect("localhost", "root", "", "project_new");

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$payload = file_get_contents('php://input');
$input = json_decode($payload, true);

mysqli_select_db($link,'project_new');
$query=("SELECT * FROM Exam");

$result=mysqli_query($link,$query);
$row=mysqli_fetch_array($result);

$param1=$_GET['param1'];
$param2=$_GET['param2'];
$param3=$_GET['param3'];
$param4=$_GET['param4'];
$param5=$_GET['param5'];
$mark=$row['max'];
$sub=$row['subject'];
$t=$row['type'];
$sem=$row['semester'];
//and max='$mark' and subject='$sub' and type='$t' and semester='$sem'
//mysqli_query($link,"DELETE from Exam WHERE classid='$param1' and level='$param2' and max='$mark' and subject='$sub' and type='$t' and semester='$sem'");

mysqli_query($link,"DELETE from exam WHERE classid='$param1' and level='$param2' and type='$param3' and date='$param4' and subject='$param5'");
mysqli_close($link);
?>
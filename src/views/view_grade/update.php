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


$param1=$_GET['param1'];
$param2=$_GET['param2'];
$name=$_GET['param4'];
$mark=$input[$_GET['param4']];
$sql = " UPDATE grades set point='$mark' Where name='$name' and id_class='$param1' and level='$param2'";

echo $sql;
if(mysqli_query($link, $sql)){
    echo "<br>";
    echo "Records added successfully.";
    echo "<br>";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
    echo "<br>";
}

mysqli_close($link);
?>
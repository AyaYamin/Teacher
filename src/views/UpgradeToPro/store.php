<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
$link = mysqli_connect("localhost", "root", "", "project_new");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$payload = file_get_contents('php://input');
$input = json_decode($payload, true);


$param1=$_GET['param1'];//classid
$param2=$_GET['param2'];//level
$param3=$_GET['param3'];//type
$name=$_GET['param4'];
$id=$_GET['param5'];
$sub=$_GET['param6'];
//$sql = "SELECT name,id FROM student  Where id_class='$param1' and level='$param2'and type='$param3'";

$mark=$input[$_GET['param4']];

$x=$input['x'];
$sql = "INSERT INTO grades(name,id,point,type,level,id_class,subject) VALUES ('$name','$id','$mark','$param3','$param2','$param1','$sub')";
echo "<br>";
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
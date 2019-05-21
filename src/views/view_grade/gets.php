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
$param3=$_GET['param3'];
$param4=$_GET['param4'];
$sql = "SELECT * FROM grades  Where id_class='$param1' and level='$param2' and type='$param3' and subject='$param4'";

$myArray = array();

if ($result = $link->query($sql)) {
   
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        
        $myArray[] = $row;    
        
    }
    echo json_encode($myArray);
}

 else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 

mysqli_close($link);
?>
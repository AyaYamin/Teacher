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


$idd=$_GET['id'];

$sql = "SELECT fname FROM teacher WHERE id='$idd'";

//$myArray = array();
$result = $link->query($sql);
$row = $result->fetch_array(MYSQLI_ASSOC);
echo $row['fname'];
/*if () {
   
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        
        $myArray[] = $row;    
        
    }
    echo json_encode($myArray);
}

 else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 */

mysqli_close($link);
?>
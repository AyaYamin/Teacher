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

//$x="SELECT count(*)FROM student";
//echo $x;

$id=$_GET['id'];

$sql = "SELECT level,section FROM teacher WHERE id='951478236' ORDER BY level,section ASC   ";

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
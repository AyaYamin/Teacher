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

$x=$input['level'];
$sql = "SELECT * FROM student WHERE level='$x' ";

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
 
echo "<a href='client_details.php?id=".$x."'>Edit</a>";
mysqli_close($link);
?>
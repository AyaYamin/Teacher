<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
$link = mysqli_connect("localhost", "root", "", "project_new");
 

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

//$payload = file_get_contents('php://input');
//
//$input = json_decode($payload, true);


$sql = "SELECT section FROM teacher WHERE id='11'";

$sql_1=mysqli_query($link,$sql);
$row=mysqli_fetch_row($sql_1);
$someString = $row[0];
echo $someString;
echo "<br>";


$sql_2="SELECT name,id FROM student WHERE classid='$someString'";
echo $sql_2."<br>";
$myArray = array();
if ($result = $link->query($sql_2)) {
    while($row = $result->fetch_array(MYSQLI_ASSOC)) { $myArray[] = $row;   }
    echo json_encode($myArray);
}else{echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);}

echo "<br>";

mysqli_close($link);
?>
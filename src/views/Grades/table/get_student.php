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

$sql = "SELECT section FROM teacher WHERE id='11'";
$sql_1=mysqli_query($link,$sql);
$row=mysqli_fetch_row($sql_1);
$someString = $row[0];
echo $someString;

echo "<br>";

//$sql_2="SELECT name FROM student WHERE classid=$someString";
$sql_2="SELECT name FROM student";

echo $sql_2;
echo "<br>";
//$sql_3=mysqli_query($link,$sql_2);
//$row1=mysqli_fetch_array($sql_3);
//$res=mysqli_result($row1,true);

/*$lvls = mysqli_query($link, $sql_2);
$myArray = array();
while($lvl = mysqli_fetch_array($lvls)){
     $myArray[] = $lvl; 
}*/


$myArray = array();
if ($result = $link->query($sql_2)) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
}

 else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
//echo json_encode($myArray);
//$sql_3=mysqli_query($link,$sql_2);


/*$myArray = array();
if ($result = $link->query($sql_2)) {
   
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        
       $myArray[] = $row;    
        
    }
   echo json_encode($myArray);
}

 else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}*/
 

mysqli_close($link);
?>
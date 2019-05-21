
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Expose-Headers: *');
$db = new mysqli("localhost", "root", "", "project_new");
if (!$db) die("database connection error");

$servername = "localhost";
$username = "root";
$password = "";


$conn = new mysqli($servername, $username, $password, "project_new");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}


$payload = file_get_contents('php://input');
$input = json_decode($payload, true);


//$lev = $input['level'];
//$section=$input['section'];
$param1=$_GET['param1'];
$param2=$_GET['param2'];
$sub = $input['subject'];
$sem = $input['sel_s'];
$type= $input['sel_t'];
$max=$input['max'];

$date = $input['date'];

$sql = "INSERT INTO Exam(level,classid,subject,semester, max,type,date ) VALUES ('$param2','$param1','$sub','$sem','$max','$type','$date')";

//echo $sql."<br/>";
//$sql_1=mysqli_query($conn,$sql);
/*
$row=mysqli_fetch_row($sql_1);
$someString = (string)($row[0]);
echo $someString;
echo "<br>";


$str_arr = preg_split ("/\,/",  $someString,0,True); 
for($i=0;$i<count($str_arr);$i++){
     echo $str_arr[$i]."<br/>";
}

*/


//$result = $conn->query($sql);

echo "<br>";
echo $sql;
if(mysqli_query($conn, $sql)){
    echo "<br>";
    echo "Records added successfully.";
    echo "<br>";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
    echo "<br>";
}


?>



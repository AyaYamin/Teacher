
<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: token, Content-Type');


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


$type = $input['type'];
//$sub = $input['subject'];
//$sem = $input['sel_s'];
//$type= $input['sel_t'];
//$max=$input['max'];
//$min = $input['min'];
$date = $input['date'];
$desc = $input['desc'];
$param1=$_GET['param1'];
$param2=$_GET['param2'];



$sql = "INSERT INTO activity(level,id_class,Type,date,description) VALUES ('$param2','$param1','$type','$date','$desc')";


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
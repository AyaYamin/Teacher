
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


$fname = $input['fname'];
$mname = $input['mname'];
$lname = $input['lname'];
$id= $input['id'];
$level=$input['level'];
$classid = $input['classid'];
$date = $input['date'];
$check=$input['check'];

$sql = "SELECT absence FROM Attendance";


$res = mysqli_query($conn,$sql);

while ($row = mysqli_fetch_assoc($res)) {
    

    foreach($row as $key => $field) {  
        echo "$key";
        echo "<br>";
        $field=$field+1;
      
       

        if(empty($row[$key])){

            echo $key." : empty field :"."<br>"; 

        }else{

        echo $key." =" . $field."<br>";   
        $x="update absence INTO Attendance VALUES ($field)";  
        $result = $conn->query($x);

        }
    }
}


/*

//$sql = "INSERT INTO Attendance(fname,mname,lname,id,class,classid,date,absence) VALUES ('$fname','$mname','$lname','$id','$level','$classid','$date','$check')";

$sql = "INSERT INTO Attendance(absence) VALUES (1)";

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

*/
?>
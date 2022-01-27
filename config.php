<?php
$host = 'ec2-54-224-64-114.compute-1.amazonaws.com';
$dbname = 'df811j2skqs79k';
$user = 'qvabyltnyiheig';
$pass = 'e041694084ec359ba53f404bdd6e6f94927b374f3a99c75c43c79ab1fc3c7acd';

// $host = 'localhost';
// $dbname = 'postgres';
// $user = 'postgres';
// $pass = 'postgres';

$db = new PDO("pgsql:host=$host;dbname=$dbname", "$user", "$pass");

// $sqlIns = "INSERT INTO comments(name,email,message)VALUES('irvan','irvan@gmail.com','mantap')";
// $db->query($sqlIns);

// $sqlUp = "UPDATE comments set message='apa kabar' where name='irvan'";
// $db->query($sqlUp);

// $sqlDel = "DELETE from comments where name='irvan'";
// $db->query($sqlDel);

// $sqlGet = "SELECT * FROM comments";
// foreach ($db->query($sqlGet) as $row) {
//   echo $row['name'];
//   echo "<br>";
//   echo $row['email'];
//   echo "<br>";
//   echo $row['message'];
//   echo "<br>";
// }

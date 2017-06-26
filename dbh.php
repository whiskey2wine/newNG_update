<?php
$servername = "172.29.0.143";
$username = "sa";
$password = "P@ssw0rd";

// Create connection
$conn = mssql_connection($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>

<?php

include 'db.php';
include 'fields.php';

$conn = new mysqli($servername, $username, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$columns_sql = "
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
reg_date TIMESTAMP
";

foreach($fields as $key => $value) {
    $columns_sql = $columns_sql . "," . $key . " TEXT";
}

$sql = "CREATE TABLE registration ("
. $columns_sql .
")";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
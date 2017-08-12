<?php
include 'db.php';

$connection = new mysqli($servername, $username, $password, $db);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>
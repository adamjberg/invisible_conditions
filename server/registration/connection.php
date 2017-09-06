<?php
include 'env.php';

$connection = new mysqli($servername, $username, $password, $db);

if (mysqli_connect_errno()) {
    http_response_code(503);
    error_log("Connect failed: " . mysqli_connect_error());
    exit();
}
?>
<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
     http_response_code(405);
     return;
}

$json = json_encode($_POST);

include 'connection.php';

if($statement = $connection->prepare("INSERT INTO registration_registration (data) VALUES ('" . $json . "');")) {
    if($statement->execute()) {    }
    else {
        http_response_code(400);
        $errors["error"] = $statement.error;
        echo json_encode($errors);
    }
}
else {
  http_response_code(400);
}

$connection->close();

?>
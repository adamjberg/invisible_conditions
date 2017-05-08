<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
     http_response_code(405);
     return;
}

include 'fields.php';

$post = $_POST;

$values = array();
$errors = array();

foreach($fields as $key => $value) {
    $post_value = NULL;

    if(isset($post[$key])) {
        $post_value = $post[$key];
        $values[$key] = $post_value;
    }
    
    #if((!isset($value["required"]) || !$value["required"]) && !isset($post_value)) {
    #    $errors[$key] = true;
    #}
}

if(count($errors) > 0) {
    http_response_code(400);
    echo json_encode($errors);
    return;
}

include 'db.php';

$conn = new mysqli($servername, $username, $password, $db);
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if($statement = $conn->prepare("INSERT INTO registration (" . join(',', array_keys($values)) . ") VALUES (" . str_repeat("?,", (count($values) -1)) . "?)")) {
    $statement->bind_param(str_repeat("s", count($values)), ...array_values($values));

    if($statement->execute()) {
        
    }
    else {
        http_response_code(400);
        $errors["error"] = $statement.error;
        echo json_encode($errors);
    }
}

$conn->close();

?>
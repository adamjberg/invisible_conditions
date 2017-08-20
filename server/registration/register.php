<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
     http_response_code(405);
     return;
}

$json = json_encode($_POST);

include 'connection.php';
include 'env.php';

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

function subscribe($list_id) {
  include 'env.php';
  $base_url = "https://us15.api.mailchimp.com/3.0";
  $endpoint = "/lists/" . $list_id . "/members";
  $url = $base_url . $endpoint;

  $name = array(
    "FNAME" => $_POST["first_name"],
    "LNAME" => $_POST["last_name"]
  );
  $subscribe_data = array(
    'email_address' => $_POST["email"],
    "status" => "subscribed",
    "merge_fields" => $name
  );

  $json_subscribe_data = json_encode($subscribe_data);

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $json_subscribe_data);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_USERPWD, "registration:" . $mailchimp_api_key);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      'Content-Type: application/json',
      'Content-Length: ' . strlen($json_subscribe_data))
  );

  $result = curl_exec($ch);

  curl_close($ch);
}

$mentor_list_id = "eb475a36e5";
$participant_list_id = "4d3c48027c";

subscribe($_POST["type"] == "mentor" ? $mentor_list_id : $participant_list_id);

if($_POST["mailing-list"] == "on") {
  subscribe("1e31923fde");
}

?>
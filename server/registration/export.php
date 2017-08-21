<?php

if (!isset($_SERVER['PHP_AUTH_USER'])) {
    header('WWW-Authenticate: Basic realm="My Realm"');
    header('HTTP/1.0 401 Unauthorized');
    exit;
} else {
  include 'connection.php';
  include 'env.php';

  $users = array('admin' => 'oKaWkD8WXZTPMpKQ');
  if($users[$_SERVER['PHP_AUTH_USER']] != $_SERVER['PHP_AUTH_PW']) {
    die('Invalid Credentials');
  }

  $sql = "SELECT data FROM registration_registration";
  $result = $connection->query($sql);

  $arr = array();
  $keys = ["type", "first_name", "last_name", "gender", "gender_identity", "birthday", "phone", "email", "contact_pref", "address", "unit_number", "city", "postal_code", "emergency_contact_first", "emergency_contact_last", "emergency_contact_phone", "emergency_contact_email", "accessibility", "allergies", "special_other", "how_find", "learn", "prev_conference", "how_comfortable", "hobbies", "research-interest-yes-parent", "research-interest-yes-participant", "research-interest-no", "mailing-list"];

  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        array_push($arr, json_decode($row["data"], true));
      }
  }

  ob_start();
  $df = fopen("php://output", 'w');
  fputcsv($df, $keys);
  foreach($arr as $json) {
    $row = array();
    foreach ($keys as $key) {
      $val = "";
      if(array_key_exists($key, $json)) {
        $val = $json[$key];
      }
      array_push($row, $val);
    }
    fputcsv($df, $row);
  }
  fclose($df);
  echo ob_get_clean();

  header("Content-Type: application/force-download");
  header("Content-Type: application/octet-stream");
  header("Content-Type: application/download");

  header("Content-Disposition: attachment;filename=registration.csv");

  $connection->close();
}
?>
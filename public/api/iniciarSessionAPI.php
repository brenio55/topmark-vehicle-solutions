<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json; charset=UTF-8');
$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
  header("HTTP/1.1 200 OK");
  die();
}

require_once('global.php');
try {
  $data = json_decode(file_get_contents("php://input"), true);

  $user = $data["user"];
  $password = $data["password"];
  // var_dump($_POST);

  // var_dump($_ENV);
  $dbhost = $_ENV["dbhost"];
  $dbname = $_ENV["dbname"];

  $conn = new PDO('mysql:dbname=' . $dbname . ';host=' . $dbhost ,$_ENV["dbuser"], $_ENV["dbpassword"]);
  //    $conn = new PDO("mysql:dbname=topmarkvs;host=localhost", "root", "");

  $query = $conn->prepare("SELECT * FROM users WHERE usuario=:usuario AND senha=:senha");
  $query->bindParam(':usuario', $user);
  $query->bindParam(':senha', $password);
  $query->execute();

  $result = $query->fetchAll(PDO::FETCH_ASSOC);

  http_response_code(200);

  if ($result) {
     echo json_encode(
       array(
        'acesso' => 'concedido'
      )
  );
  } else {
    echo json_encode(
      array(
        'acesso' => 'negado'
      )
    );
  }
} catch(Exception $e) {
  echo $e;
} 
?>

<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Request-With, x-xsrf-token');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

include 'config.php';

$postjson = json_decode(file_get_contents('php://input'),true);

if($postjson['action'] == 'login_progress'){
    $password = md5($postjson['password']);
    $logindata = mysqli_fetch_array(mysqli_query($mysqli,"SELECT * FROM users WHERE username='$postjson[username]'"));
    $data = array(
        'username' => $logindata['username'], 
    );

if($logindata){
    $result = json_encode(array('success' => true, 'result' => $data));
}else{
    $result = json_encode(array('success' => false));
}
echo $result;
}
?>
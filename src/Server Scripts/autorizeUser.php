<?php
header("Access-Control-Allow-Origin: *");
$email = "";
$passw = "";

if(isset($_POST['email']) && isset($_POST['passw'])) {

    $email = addslashes($_POST['email']);
    $passw = addslashes($_POST['passw']);

    $answer = array();
    $connection = mysqli_connect('');
    if (!$connection) {
        $answer['result'] = "connection error";
        echo json_encode($answer);
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $db_table_user = "users";
        $sql_check_user = "SELECT * FROM $db_table_user WHERE (email = '$email' AND passw = '$passw') OR (login = '$email' AND passw = '$passw')";
        // проверить результат
        $res = mysqli_query($connection, $sql_check_user);
        $arr = mysqli_fetch_array($res,MYSQLI_ASSOC);
        $count = mysqli_num_rows($res);
        if ($count > 0) {
            $res['result'] = "success";
            echo json_encode($res);
        } else {
            $answer['result'] = "not exist";
            echo json_encode($answer);
        }
    }
    mysqli_close($connection);
} else {
    $answer['result'] = "isset error";
    echo json_encode($answer);
}

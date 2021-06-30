<?php
header("Access-Control-Allow-Origin: *");
$ovner = "";
$title = "";
$token = "";
$descr = "";

if(isset($_POST['ovner']) && isset($_POST['title']) && isset($_POST['token']) && isset($_POST['descr'])) {

    $title = addslashes($_POST['title']);
    $ovner = addslashes($_POST['ovner']);
    $token = addslashes($_POST['token']);
    $descr = addslashes($_POST['descr']);

    $connection = mysqli_connect('');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $db_table = "groups";

        $sql = "INSERT INTO $db_table (tocken,ovner,title,descr) VALUES ($token,$ovner,$title,$descr)";

        $res = mysqli_query($connection, $sql);
        if($res){
            echo "success";
        } else {
            echo "error in" . mysqli_error($connection);
        }
    }
    mysqli_close($connection);
} else {
    echo "error isset";
}

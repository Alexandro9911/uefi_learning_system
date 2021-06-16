<?php
header("Access-Control-Allow-Origin: *");
$myid = "";

if(isset($_POST['myid']) && isset($_POST['group_id'])) {

    $myid = addslashes($_POST['myid']);
    $group_id = $_POST['group_id'];
    $groups = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $sql = "SELECT id,theme FROM tests where ovner_id='$myid' AND for_group='$group_id'";

        $res = mysqli_query($connection, $sql);
        $quantity = mysqli_num_rows($res);
        if($res) {
            $arr = array();
            for($i = 0; $i < $quantity; $i++){
                $row = mysqli_fetch_array($res,MYSQLI_ASSOC);
                array_push($arr,$row);
            }
            echo json_encode($arr);
        }
    }
    mysqli_close($connection);
} else echo "error isset";

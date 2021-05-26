<?php
header("Access-Control-Allow-Origin: *");
$myid = "";
$token = "";


if(isset($_POST['myid']) && isset($_POST['token'])) {

    $id = addslashes($_POST['myid']);
    $token = addslashes($_POST['token']);

    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $db_table = "member_list";

        $sql_detect_group = "SELECT id FROM groups where token = '$token'";

        $res = mysqli_query($connection, $sql_detect_group);
        if($res){
            $row = mysqli_fetch_array($res,MYSQLI_ASSOC);
            $group_id = $row['id'];

            // проверка на то тчо пользователь уже состоит в группе
            $sql_check_member = "SELECT * FROM member_list where group_id = '$group_id' AND user_id = '$myid'";
            $res_check = mysqli_query($connection, $sql_check_member);
            $quantity = mysqli_num_rows($res_check);

            if($quantity > 0){

                $sql_insert = "INSERT INTO member_list VALUES (group_id,user_id)";
                $res_insert = mysqli_query($connection, $sql_insert);
                if($res_insert){
                    echo "success";
                } else {
                    echo "error in insert";
                }
            } else {
                echo "already in";
            }
        } else {
            echo "error in detection" . mysqli_error($connection);
        }
    }
    mysqli_close($connection);
} else {
    echo "error isset";
}

<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['emulator_params']) && isset($_POST['about_ovner']) && isset($_POST['practice_id'])) {

    $emulator_params_object = json_decode($_POST['emulator_params']);
    $about_ovner_object = $_POST['about_ovner'];

    $practice_id = $_POST['practice_id'];
    $my_id = $_POST['my_id'];
    $group_id = $_POST['group_id'];
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {

        $sql_select_members_of_group ="SELECT user_id from member_list where group_id='$group_id'";

        $res = mysqli_query($connection,$sql_select_members_of_group);
        $arr = mysqli_fetch_array($res);
        $c = mysqli_num_rows($res);
        $params_string = json_encode($emulator_params_object);
        $counter = 0;
        for($i = 0; $i < $c; $i++){
            $user = $arr[$i];
            $sql = "INSERT into practice_results(user_id, points, practice_id,emulator_string)
                    values ('$user',0,'$practice_id','$params_string')";
            $res = mysqli_query($connection,$sql);
            if(!$res){
                $counter++;
                echo 'error insert';
                break;
            }
        }
        if($counter != 0){
            echo "some error in insertion loop :(";
        }
        echo "success";
    }
    mysqli_close($connection);
} else {
    echo "error isset";
}


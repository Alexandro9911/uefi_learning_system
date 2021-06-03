<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['emulator_params']) && isset($_POST['about_ovner'])) {

    $emulator_params_object = json_decode($_POST['emulator_params'],true);
    $about_ovner_object = json_decode($_POST['about_ovner'],true);

    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {

        $my_id= $about_ovner_object['ovner_id'];
        $for_group = $about_ovner_object['group_id'];
        $task = $about_ovner_object['task_string'];

        $sql_practice_id = "SELECT id from practice where 
                              for_group='$for_group' AND
                              ovner_id='$my_id' AND
                              task='$task'";
        $result = mysqli_query($connection,$sql_practice_id);
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        $id_practice = $row['id'];

        $members_of_group = array();
        $members_of_group_sql = "SELECT * from member_list where group_id='$for_group'";
        $result = mysqli_query($connection,$members_of_group_sql);
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        for($i = 0; $i < sizeof($row); $i++){
            $member_id = $row['user_id'];
            $sql_insert_result = "INSERT into practice_results(user_id, points, practice_id)
                                values('$member_id','0','$id_practice')";
            $result = mysqli_query($connection,$sql_insert_result);
        }
    }
    mysqli_close($connection);
} else {
    echo "error isset";
}
?>


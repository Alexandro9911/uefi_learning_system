<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['test'])) {

    $test = json_decode($_POST['test']);
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $group= $test['group'];
        $test_str = $test['questions'];
        $theme = $test['theme'];
        $sql_insert_test = "INSERT INTO tests(for_group, theme, test_string) VALUES ('$group','$theme','$test_str')";

        $res = mysqli_query($connection, $sql_insert_test);
        $detect_id_test = "SELECT id FROM tests where for_group='$group' AND theme='$theme' AND test_string='$test_str'";
        $res2 = mysqli_query($connection,$detect_id_test);
        $ids = mysqli_fetch_array($res2, MYSQLI_ASSOC);
        if($res && $res2){
            $test_id = $ids['id'];
            $select_all_users_from_group = "SELECT user_id from member_list where group_id= '$group'";
            $res = mysqli_query($connection,$select_all_users_from_group);
            $arr = mysqli_fetch_array($res,MYSQLI_ASSOC);
            $length = mysqli_num_rows($res);
            $test_for_student = array();
            $quest_str = json_decode($test_str);
            for($i = 0; $i < sizeof($test_str); $i++){
                $quest = $quest_str[$i]['quest'];
                $temp_arr = array();
                $temp_arr['quest'] = $quest;
                $temp_arr['answ'] = "";
                array_push($test_for_student,$temp_arr);
            }
            $final_test = json_encode($test_for_student);
            for( $i = 0; $i < $length; $i++){
                $user = $arr[$i];
                $sql_insert_starting_res = "INSERT INTO results(user_id, points, test_string, test_id) 
                                            VALUES ('$user','0','$final_test','$test_id')";

                $res3 = mysqli_query($connection,$sql_insert_starting_res);
            }
            echo 'success';
        } else {
            echo "error in detection" . mysqli_error($connection);
        }
    }
    mysqli_close($connection);
} else {
    echo "error isset";
}

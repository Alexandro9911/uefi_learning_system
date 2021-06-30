<?php

header("Access-Control-Allow-Origin: *");

if (isset($_POST['test_id']) && isset($_POST['myId']) && isset($_POST['results'])) {

    $test_id= $_POST['test_id'];
    $myId= $_POST['myId'];
    $results = json_decode($_POST['results'], true);

    $connection = mysqli_connect('');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {

        // select
        $sql_select_answer = "select test_string from tests where id = '$test_id'";
        $res = mysqli_query($connection,$sql_select_answer);

        $obj = mysqli_fetch_array($res);
        $test_string_decoded = json_decode($obj['test_string']);

        // compare
        $count = 0;
        $points = 0;
        for($i = 0; $i < sizeof($test_string_decoded);$i++){
            $true_answer = mb_strtolower($test_string_decoded[$i]['answ']);
            $partial_answer = mb_strtolower($results[$i]);
            if($true_answer == $partial_answer){
                $points++;
                $count++;
            } else {
                $count++;
            }
        }
        $points_total = $points . "/" . $count;
        // create result

        $final_test_str = json_encode($test_string_decoded);
        $sql_update = "update results set
                   points='$points_total',
                   test_string='$final_test_str'
                        where user_id='$myId' AND test_id='$test_id'
                   ";
        $res = mysqli_query($connection,$sql_select_answer);

        $sql = "";
        $result_arr = array();
        $result_arr['mark'] = $points_total;
        $result_arr['right'] = $obj;
        $result_arr['answ'] = $_POST['results'];

        echo json_encode($result_arr);

        $res = mysqli_query($connection, $sql);

    }
    mysqli_close($connection);
} else {
    echo "error isset";
}

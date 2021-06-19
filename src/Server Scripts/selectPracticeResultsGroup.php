<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['practice_id']) && isset($_POST['group_id']) && isset($_POST['emulator_id'])) {

    $practice_id = $_POST['practice_id'];
    $group_id = $_POST['group_id'];
    $emulator_id = $_POST['emulator_id'];
    $results = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {


        $sql = "select id, user_id, points, emulator_string, was_started,
                p.theme as practice_theme,
                p.task as practice_task,
                u.last_name as last_name,
                u.first_name as first_name,
                u.middle_name as middle_name                    
                from practice_results
                join practice p on p.id = practice_results.practice_id
                join `groups` g on g.id = p.for_group
                join users u on u.id = practice_results.user_id
                where practice_id='$practice_id' and
                      g.id = '$group_id'";

        $res = mysqli_query($connection, $sql);
        $quantity = mysqli_num_rows($res);

        for ($i = 0 ; $i < $quantity ; ++$i)
        {
            $row = mysqli_fetch_array($res,MYSQLI_ASSOC);
            array_push($results,$row);
        }

        echo json_encode($results);
    }
    mysqli_close($connection);
} else echo "error isset";


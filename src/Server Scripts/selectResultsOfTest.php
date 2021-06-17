<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['test_id']) && isset($_POST['group_id'])) {

    $test_id = $_POST['test_id'];
    $group_id = $_POST['group_id'];
    $results = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {


        $sql = "select results.id, user_id, points, test_id,
                u.last_name as last_name,
                u.first_name as first_name,
                u.middle_name as middle_name,
                t.for_group as group_id
                from results
           join users u on u.id = results.user_id
           join tests t on t.id = results.test_id
           where t.for_group = '$group_id' and test_id='$test_id' ";

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

<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['myId'])) {

    $myId = $_POST['myId'];
    $results = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {


        $sql = "select results.id, test_id, results.test_string, points,user_id,
                        t.theme as test_theme,
                        t.for_group as test_for_group,
                        t.ovner_id as ovner_id,
                        u.middle_name as middle_name,
                        u.first_name as first_name,
                        u.last_name as last_name,
                        g.title as group_title
                            from results
                 join tests t on t.id = results.test_id
                 join users u on u.id = t.ovner_id
                 join `groups` g on g.id = t.for_group
                 where user_id ='$myId'";

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


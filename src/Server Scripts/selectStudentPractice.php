<?php
header("Access-Control-Allow-Origin: *");
$myid = "";

if(isset($_POST['myid'])) {

    $myid = addslashes($_POST['myid']);
    $groups = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {


        $sql = "
        select theme,
               for_group,
               members.group_id as group_id,
               _group.descr as group_descr,
               _group.title as group_title,
               u.middle_name as ovner_middlename,               
               u.first_name as ovner_firstname,
               u.last_name as ovner_lastname,
               task,
               date_from,
               date_to,
               emulator_id
        from practice 
        JOIN `groups` _group on _group.id = practice.for_group
        JOIN member_list members on members.group_id = _group.id
        inner join users u on _group.ovner = u.id
        WHERE members.user_id = '$myid'";

        $res = mysqli_query($connection, $sql);
        $quantity = mysqli_num_rows($res);

        for ($i = 0 ; $i < $quantity ; ++$i)
        {
            $row = mysqli_fetch_array($res,MYSQLI_ASSOC);
            array_push($groups,$row);
        }

        echo json_encode($groups);
    }
    mysqli_close($connection);
} else echo "error isset";

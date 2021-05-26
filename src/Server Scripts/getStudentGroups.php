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
        SELECT gr.title as group_title, 
	    gr.descr as group_descr, 
        gr.id as group_id,
        gr.ovner as ovner_id,
        us.first_name as ovner_firstname,
        us.last_name as ovner_lastname,
        us.middle_name as ovner_middlename       
        FROM member_list
        INNER JOIN `groups` gr on member_list.group_id = gr.id
        INNER JOIN users us on us.id = gr.ovner 
        WHERE user_id = '$myid'";

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

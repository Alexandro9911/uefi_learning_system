<?php
header("Access-Control-Allow-Origin: *");

if (isset($_POST['for_group'])) {

    $group = addslashes($_POST['for_group']);

    $cpus = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $sql = "
        SELECT
               id, for_group, theme, task, date_from, date_to, ovner_id, emulator_id
        FROM practice
        WHERE for_group='$group'";
        $res = mysqli_query($connection, $sql);
        $quantity = mysqli_num_rows($res);

        for ($i = 0; $i < $quantity; ++$i) {
            $row = mysqli_fetch_array($res, MYSQLI_ASSOC);
            array_push($cpus, $row);
        }

        echo json_encode($cpus);
    }
    mysqli_close($connection);
} else echo "error isset";


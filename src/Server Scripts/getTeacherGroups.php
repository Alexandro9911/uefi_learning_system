<?php
header("Access-Control-Allow-Origin: *");
$ovner = "";

if(isset($_POST['ovner'])) {

    $ovner = addslashes($_POST['ovner']);
    $groups = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $db_table = "groups";

        $sql = "SELECT * FROM $db_table WHERE ovner='$ovner'";

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
} else {
    echo "error isset";
}

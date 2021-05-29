<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['myid'])) {

    $socket = addslashes($_POST['myid']);

    $hdds = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $sql = "
SELECT 
        hard_drive_nom.id,
       vendor_id,
       hard_drive_nom.name,
       system_name,
       v.name as vendor_name,
       interface,
       RPM,
       freq,
       buffer_size,
       speed_data_transaction,
       time_access,
       memory_gb_size,
       type,
       raid_req,
       speed_data_read,
       speed_data_write      
FROM hard_drive_nom
join vendors v on v.id = hard_drive_nom.vendor_id";
        $res = mysqli_query($connection, $sql);
        $quantity = mysqli_num_rows($res);

        for ($i = 0 ; $i < $quantity ; ++$i)
        {
            $row = mysqli_fetch_array($res,MYSQLI_ASSOC);
            array_push($hdds,$row);

        }

        echo json_encode($hdds);
    }
    mysqli_close($connection);
} else echo "error isset";

<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['motherboard_support']) && isset($_POST['cpu_support'])) {

    $board = addslashes($_POST['motherboard_support']);
    $cpu = addslashes($_POST['cpu_support']);

    $ddrs = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $sql = "
SELECT 
        ddr_nom.id,
       vendor_id,
       v.name as vendor_name,
       type_ddr,
       t.value as ddr_type_value,
       mem,
       `rank`,
       type_cheap,
       ddr_nom.name,
       product_number,
       freq_base,
       speed_pin,
       max_freq,
       normal_voltage,
       max_voltage,
       form_factor,
       cas,
       ras,
       trp,
       tras
        FROM ddr_nom
join vendors v on v.id = ddr_nom.vendor_id
join ddr_types t on t.id = ddr_nom.type_ddr
where t.value = '$board'";
        $res = mysqli_query($connection, $sql);
        $quantity = mysqli_num_rows($res);

        for ($i = 0 ; $i < $quantity ; ++$i)
        {
            $row = mysqli_fetch_array($res,MYSQLI_ASSOC);
            array_push($ddrs,$row);

        }

        echo json_encode($ddrs);
    }
    mysqli_close($connection);
} else echo "error isset";


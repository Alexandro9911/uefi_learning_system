<?php
header("Access-Control-Allow-Origin: *");
$myid = "";

if(isset($_POST['myid'])) {

    $myid = addslashes($_POST['myid']);

    $boards = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $sql = "
        SELECT motherboard_nom.id, 
               v.name as vendor_name ,
               cn.value as chipset,
               ps.value as proc_soket,
               form_factor,
               dt.value as ddr_type,
               quantity_ddr_ports,
               pt.value as  pcie_type, 
               quantity_sata,
               speed_sata,
               motherboard_nom.name,
               system_name
        FROM motherboard_nom
            join ddr_types dt on motherboard_nom.type_ddr = dt.id
            join chipsets_nom cn on cn.id = motherboard_nom.chipset
            join pcie_types pt on pt.id = motherboard_nom.PCIe_type
            join vendors v on v.id = motherboard_nom.vendor_id
            join processor_socets ps on ps.id = motherboard_nom.processor_soket
        ";

        $res = mysqli_query($connection, $sql);
        $quantity = mysqli_num_rows($res);

        for ($i = 0 ; $i < $quantity ; ++$i)
        {
            $row = mysqli_fetch_array($res,MYSQLI_ASSOC);
            array_push($boards,$row);
        }

        echo json_encode($boards);
    }
    mysqli_close($connection);
} else echo "error isset";


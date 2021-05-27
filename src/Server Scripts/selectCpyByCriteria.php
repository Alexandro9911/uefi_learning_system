<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['socket'])) {

    $socket = addslashes($_POST['socket']);

    $cpus = array();
    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
//        $sql = "
//        SELECT motherboard_nom.id,
//               v.name as vendor_name ,
//               cn.value as chipset,
//               ps.value as proc_soket,
//               form_factor,
//               dt.value as ddr_type,
//               quantity_ddr_ports,
//               pt.value as  pcie_type,
//               quantity_sata,
//               speed_sata,
//               motherboard_nom.name,
//               system_name
//        FROM motherboard_nom
//            join ddr_types dt on motherboard_nom.type_ddr = dt.id
//            join chipsets_nom cn on cn.id = motherboard_nom.chipset
//            join pcie_types pt on pt.id = motherboard_nom.PCIe_type
//            join vendors v on v.id = motherboard_nom.vendor_id
//            join processor_socets ps on ps.id = motherboard_nom.processor_soket
//        ";
        $board_socket = $socket;
        $sql = "
        SELECT
               cpu_nom.id,
               v.name as vendor_name,
               cpu_nom.name,
               system_name,
               quantity_core,
               quantity_thread,
               base_freq,
               max_freq,
               cash,
               system_freq,
               max_ram,
               max_mem_channel,
               ddr_types_list,
               max_mem_freq,
               ps.value as soket,
               socket_id,
               max_temperature,
               command_x    
        FROM cpu_nom
        join vendors v on v.id = cpu_nom.vendor_id
        join processor_socets ps on ps.id = cpu_nom.socket_id
        WHERE socket_id='$board_socket'";
        $res = mysqli_query($connection, $sql);
        $quantity = mysqli_num_rows($res);

        for ($i = 0 ; $i < $quantity ; ++$i)
        {
            $row = mysqli_fetch_array($res,MYSQLI_ASSOC);
//            $ddr_list = array(MYSQLI_ASSOC);
//            $sql = "select ddr_type from ddr_list_cpu where processor_id ='$row[id]'"
//
//            $row["ddr_values_list"] = $ddr_list;
            array_push($cpus,$row);

        }

        echo json_encode($cpus);
    }
    mysqli_close($connection);
} else echo "error isset";



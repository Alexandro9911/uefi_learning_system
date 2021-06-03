<?php
header("Access-Control-Allow-Origin: *");

function compare_disks($first,$second){
    $counter = 0;
    $eq_counting =0;
    for($i =0; $i < sizeof($first); $i++){
        if($first[$i] == $second[$i]){
            $eq_counting++;
            $counter++;
        } else {
            $counter++;
        }
    }
    if($counter == $eq_counting){
        return 1;
    } else {
        return 0;
    }
}

if(isset($_POST['emulator_params']) && isset($_POST['about_ovner'])) {

    $emulator_params_object = json_decode($_POST['emulator_params'],true);
    $about_ovner_object = json_decode($_POST['about_ovner'],true);

    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {

        $emulator = array();
        $practice = array();
        $criteries = array();
        $true_settings = array();

        // создаем образ эмулятора.
        $emulator['cpu'] = $emulator_params_object['cpu'];
        $emulator['motherboard'] = $emulator_params_object['motherboard'];
        $emulator['listHdd'] = $emulator_params_object['listHdd'];
        $emulator['listDdr'] = $emulator_params_object['listDdr'];

        $all_raid = 0;
        $counter = 0;
        for($i = 0; $i < sizeof($emulator_params_object['listHdd']); $i++){
            $curr = $emulator_params_object['listHdd'][$i];
            if($curr['raid_req'] = 1 ){
                $all_raid++;
                $counter++;
            }
            $counter++;
        }
        if($all_raid == $counter){
            $count_eq = 0;
            for($i = 1; $i < sizeof($emulator_params_object['listHdd']); $i++){
                $first_hdd = $emulator_params_object['listHdd'][0];
                $current_hdd = $emulator_params_object['listHdd'][$i];
                $res_compare =  compare_disks($first_hdd,$current_hdd);
                if($res_compare == 1){
                    $count_eq++;
                }
            }
            if($count_eq == $counter){
                $emulator['ena_raid'] = 1;
            } else {
                $emulator['ena_raid'] = 0;
            }
        } else {
            $emulator['ena_raid'] = 0;
        }

        $listCores = array();
        $list_multi = $emulator_params_object['cpu']['multiplayer_by_core'];
        $arrayMulti = explode('#',$list_multi);
        for($i = 0; $i < $emulator_params_object['cpu']['quantity_core']; $i++){
            $str = 'Core #'. $i;
            $arra = array();
            $arra['name'] = $str;
            $arra['multiplayer'] = $arrayMulti[$i];
            array_push($listCores,$arra);
        }

        $emulator['cores'] = $listCores;
        $listFans = array();
        $sql_fans = "SELECT id,min_rpm,max_rpm,can_regulate,form_factor,name,cfm  FROM fan_nom where form_factor = 1 AND id=2";
        $res = mysqli_query($connection, $sql_fans);
        if($res){
            $row = mysqli_fetch_array($res,MYSQLI_ASSOC);;
            array_push($listFans,$row);

            $sql_fans_non_cpu = "SELECT id,min_rpm,max_rpm,can_regulate,form_factor,name,cfm  FROM fan_nom where form_factor = 0 LIMIT 2";
            $res1 = mysqli_query($connection, $sql_fans_non_cpu);
            $row1 = mysqli_fetch_array($res1,MYSQLI_ASSOC);
            array_push($listFans,$row1);

            $emulator['listFan'] = $listFans;
        } else {
            echo "error in" . mysqli_error($connection);
        }
        $emulator['system_time'] = '00:00';
        $emulator['system_date'] = '01.01.2000';
        $emulator['system_lang'] = 'English';

        $params_string = json_encode($emulator);
        $id_emul = 0;
        $sql_insert_emulator = "INSERT INTO emulators (params_string) VALUES ('$params_string')";
        $result = mysqli_query($connection,$sql_insert_emulator);
        if($result){
            $sql_id = "SELECT id from emulators WHERE params_string='$params_string'";
            $result_id = mysqli_query($connection,$sql_id);
            $row3 = mysqli_fetch_array($result_id,MYSQLI_ASSOC);
            $id_emul = $row3['id'];

            $my_id= $about_ovner_object['ovner_id'];
            $for_group = $about_ovner_object['group_id'];
            $task = $about_ovner_object['task_string'];
            $theme = $about_ovner_object['theme'];
            $sql_practice = "INSERT INTO practice (for_group, theme, task, ovner_id, emulator_id)
            VALUES ('$for_group','$theme','$task','$my_id','$id_emul')";
            $result = mysqli_query($connection,$sql_practice);

            $sql_get_practice_id = "SELECT id from practice where
                              for_group='$for_group' AND 
                              theme='$theme' AND
                              task='$task' AND
                              ovner_id='$my_id' AND
                              emulator_id='$id_emul' ";
            $result = mysqli_query($connection,$sql_get_practice_id);
            $result_row = mysqli_fetch_array($result,MYSQLI_ASSOC);
            $params_string = json_decode($params_string);
            $id = $result_row['id'];
            $emulator['practice_id'] = $id;
            $params_string = json_encode($emulator);
            echo $params_string;
        } else {
            echo 'error in insetrion emulator';
        }
    }
    mysqli_close($connection);
} else {
    echo "error isset";
}

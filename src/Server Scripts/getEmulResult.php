<?php
header("Access-Control-Allow-Origin: *");


if(isset($_POST['myId']) && isset($_POST['group_id'])&& isset($_POST['practice_id'])
    && isset($_POST['emulator_id'])&& isset($_POST['emul_str'])) {

    $myId = $_POST['myId'];
    $group_id= $_POST['group_id'];
    $practice_id = $_POST['practice_id'];
    $emulator_id = $_POST['emulator_id'];
    $emulator = $_POST['emul_str'];

    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
       // select criteria
        $sql = "select emulator_id,
                e.criteries_string as criteria,
                e.params_string as params_string
       from practice 
                join emulators e on e.id = practice.emulator_id";

        $res = mysqli_query($connection, $sql);
        $quantity = mysqli_num_rows($res);
        $emulator_obj = mysqli_fetch_array($res);


        $criteria = json_decode($emulator_obj['criteries_string'], true); // критерии оценки
        $params_string = json_decode($emulator_obj['params_string'], true); // исходный эмулятор

        $student_result = json_decode($emulator,true);  // результат студента

        // check criteries ang generate results
        $results = array();
        $interval = $criteria['interval_temp'];

        if($student_result['temperature_cpu']  >= $interval[0] && $student_result['temperature_cpu'] <= $interval[1]){
            $results['match_temp_interval'] = true;
            $results['temperature_cpu'] = $student_result['temperature_cpu'];
        } else {
            $results['match_temp_interval'] = false;
            $results['temperature_cpu'] = $student_result['temperature_cpu'];
        }
        $interval = $criteria['interval_freq_cpu'];
         if($student_result['cpu_speed']  >= $interval[0] && $student_result['cpu_speed'] <= $interval[1]){
             $results['match_freq_cpu_interval'] = true;
             $results['cpu_speed'] = $student_result['cpu_speed'];
         } else {
             $results['match_freq_cpu_interval'] = false;
             $results['cpu_speed'] = $student_result['temperature_cpu'];
         }

         if($params_string['system_date'] == $student_result['system_date'] && $params_string['system_time'] == $student_result['system_time']){
             if($criteria['date_time_setup']){
                 $results['match_date_time'] = 'not setup';
             } else {
                 $results['match_date_time'] = 'not req';
             }
         } else {
             if($criteria['date_time_setup']){
                 $results['match_date_time'] = 'setup';
             } else {
                 $results['match_date_time'] = 'not matter';
             }
         }

         if($params_string['cpu']['bus_speed'] == $student_result['bus_speed']) {
             if($criteria['bus_freq_modifyed']){
                 $results['match_bus_freq'] = 'not setup';
             } else {
                 $results['match_bus_freq'] = 'not req';
             }
         } else {
             if($criteria['bus_freq_modifyed']){
                 $results['match_bus_freq'] = 'not setup';
             } else {
                 $results['match_bus_freq'] = 'setup';
             }
         }

         if($student_result['ratio_limit_mode'] == $criteria['mode_mult']){
             $results['match_ratio_limit_mode'] = true;
         } else {
             $results['match_ratio_limit_mode'] = false;
         }

         $points = json_encode($results);
         $user_progress = $_POST['emul_str'];
         $sql_insert = "update practice_results set
                                  points= '$points',
                                  emulator_string= '$user_progress',
                                  was_started=1
                        where user_id='$myId' and practice_id='$practice_id'";
        // insert emulator
        $res = mysqli_query($connection, $sql_insert);
        echo $points;
        // send results
    }
    mysqli_close($connection);
} else {
    echo "error isset";
}

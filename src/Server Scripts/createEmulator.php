<?php
header("Access-Control-Allow-Origin: *");

if(isset($_POST['emulator_params']) && isset($_POST['about_ovner'])) {

    $emulator_params_object = json_decode($_POST['emulator_params']);
    $about_ovner_object = json_decode($_POST['about_ovner']);
    $emulator = array();
    $practice = array();
    $criteries = array();
    $true_settings = array();

    // создаем образ эмулятора.
    echo $emulator_params_object['cpu']['system_name'];

    // создаем практику.


    // создаем критерии.

    // создаем правильные настройки эмулятора.

//    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
//    if (!$connection) {
//        echo "connection error";
//        die("Connection failed: " . mysqli_connect_error());
//    } else {
//        $sql = "";
//
//        $res = mysqli_query($connection, $sql);
//        if($res){
//            echo "success";
//        } else {
//            echo "error in" . mysqli_error($connection);
//        }
//    }
//    mysqli_close($connection);
} else {
    echo "error isset";
}

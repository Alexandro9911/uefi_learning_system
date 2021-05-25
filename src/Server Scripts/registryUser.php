<?php
header("Access-Control-Allow-Origin: *");
$first_name = "";
$last_name = "";
$middle_name = "";
$category = "";
$email = "";
$passw = "";

//email: this.state.email,
//passw: this.state.passw,
//name: this.state.name,
//last_name: this.state.last_name,
//father_name: this.state.father_name,
//category: this.state.who_i_am
// get params
if(isset($_POST['email']) && isset($_POST['passw']) && isset($_POST['name']) &&
    isset($_POST['last_name']) && isset($_POST['father_name']) && isset($_POST['category'])) {

    $first_name = addslashes($_POST['name']);
    $last_name = addslashes($_POST['last_name']);
    $middle_name = addslashes($_POST['father_name']);
    $category = addslashes($_POST['category']);
    $email = addslashes($_POST['email']);
    $passw = addslashes($_POST['passw']);

    $connection = mysqli_connect('localhost', 'Alexandro', 'Zxcvb1199nm', 'uefi_proj', '3306');
    if (!$connection) {
        echo "connection error";
        die("Connection failed: " . mysqli_connect_error());
    } else {
        $db_table_user = "users";
        $sql_check_user = "SELECT * FROM $db_table_user WHERE email = $email";
        // проверить результат
        $res = mysqli_query($connection, $sql_check_user);
        $count = mysqli_num_rows($res);
        if ($count > 0) {
            echo "user exists";
        } else {
            // вставить пользователя
            $sql_insert_user =
                "INSERT INTO $db_table_user (first_name, last_name,middle_name, passw, email, category) VALUES ('$first_name','$last_name','$middle_name','$passw','$email','$category')";
            $res = mysqli_query($connection, $sql_insert_user);
            if ($res) {
                echo "success";
            } else {
                echo "error in" . mysqli_error($connection);
            }
        }
    }
    mysqli_close($connection);
} else {
    echo "error isset";
}

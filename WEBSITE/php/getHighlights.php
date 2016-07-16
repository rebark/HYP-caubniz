<?php
header('Access-Control-Allow-Origin: *');

    //connection to db
    $mysqli = new mysqli("localhost", "caubniz2", "", "my_caubniz2");

    if (mysqli_connect_errno()) { //verify connection
        echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
        exit(); //do nothing else
    }
    else {
        //connection ok

        # extract results mysqli_result::fetch_array
        $query = " SELECT `name`, `image`, `highlight_description`, `active_in_dropdown` FROM `Assistance Service` WHERE `highlight`='1'";
        //query execution
        $result = $mysqli->query($query);
        //print_r($result);
        //var_dump($result);
        //if there are data available
        if($result->num_rows >0)
        {
            $myArray = array();//create an array
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                $myArray[] = $row; //array_map('utf8_encode',$row);
            }
            echo json_encode($myArray);
        }

        //free result
        //$result->close();

        //close connection
        $mysqli->close();



    }

?>

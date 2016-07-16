<?php
header('Access-Control-Allow-Origin: *');

    $service = $_POST['service'];
    //connection to db
    $mysqli = new mysqli("localhost", "caubniz2", "", "my_caubniz2");

    if (mysqli_connect_errno()) { //verify connection
        echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
        exit(); //do nothing else
    }
    else {
        //connection ok

        # extract results mysqli_result::fetch_array
        $query = "SELECT `Faq - Assistance`.*, `Assistance Service`.*, `Faq`.*, `Device - Assistance`.*
        FROM ((`Assistance Service` JOIN `Faq - Assistance` ON `Assistance Service`.`id_assistance_service`=`Faq - Assistance`.`ID_Assistance_Service`)
        JOIN `Faq` ON  `Faq - Assistance`.`ID_Faq`=`Faq`.`ID_Faq`) LEFT JOIN `Device - Assistance` ON `Assistance Service`.`id_assistance_service`=`Device - Assistance`.`id_assistance_service` WHERE `Assistance Service`.`name`= '$service'";
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

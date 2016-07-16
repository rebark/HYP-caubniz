<?php


     $IdDev = $_POST['iddev'];
//connection to db
    $mysqli = new mysqli("localhost", "caubniz2", "", "my_caubniz2");

    if (mysqli_connect_errno()) { //verify connection
        echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
        exit(); //do nothing else
    }
    else {
        //connection ok

        # extract results mysqli_result::fetch_array
       
        $query = "SELECT `Device`.*, `Device-SL`.*,`Device - Assistance`.*,`SL`.name,`Assistance Service`.name AS `assname`, `Assistance Service`.category, `Assistance Service`.id_assistance_service
        FROM ((((`Device` LEFT JOIN `Device-SL` ON `Device`.`ID_Device`=`Device-SL`.`device_id`)
       LEFT JOIN `Device - Assistance` ON  `Device`.`ID_Device`=`Device - Assistance`.`id_device`)  LEFT JOIN `SL` ON `Device-SL`.`SL_id`=`SL`.`id`) LEFT JOIN `Assistance Service` ON `Assistance Service`.`id_assistance_service`=`Device - Assistance`.`id_assistance_service`)WHERE `Device`.`ID_Device`= '$IdDev'";

        //query execution
        $result = $mysqli->query($query);
        //if there are data available
        if($result->num_rows >0)
        {
            $myArray = array();//create an array
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                $myArray[] = $row;
            }
            echo json_encode($myArray);
        }

        //free result
        $result->close();

        //close connection
        $mysqli->close();



    }

?>

<?php header('Access-Control-Allow-Origin: *');

     $category = $_POST['category'];
     //connection to db
    $mysqli = new mysqli("localhost", "caubniz2", "", "my_caubniz2");

    if (mysqli_connect_errno()) { //verify connection
        echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
        exit(); //do nothing else
    }
    else {
        //connection ok

        # extract results mysqli_result::fetch_array
        $query = " SELECT `id_assistance_service`,`Assistance Service`.`name`, `category`, `subcategory`, `active_in_dropdown`, `Assistance Subcategory`.`Image`, `Short_Description`,
         `Assistance Subcategory`.`Active`  FROM `Assistance Service` JOIN `Assistance Subcategory` ON `Assistance Service`.`subcategory`=`Assistance Subcategory`.`Name`
         WHERE `category`='$category' ORDER BY `id_assistance_service`";
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
        //$result->close();

        //close connection
        $mysqli->close();



    }

?>

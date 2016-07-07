<?php
    header('Access-Control-Allow-Origin: *');

    $par = $_POST['service'];
//connection to db
    $mysqli = new mysqli("localhost", "caubniz2", "", "my_caubniz2");

    if (mysqli_connect_errno()) { //verify connection
        echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
        exit(); //do nothing else
    }
    else {
        //connection ok

        # extract results mysqli_result::fetch_array
        $query = " SELECT * FROM SL WHERE id='$par'";
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

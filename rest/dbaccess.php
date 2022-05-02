<?php

    class DBAccess{

        __construct(){
            $server_name = "localhost";
            $username = "root";
            $password = "";
            $db = "casa_editrice_web_app";
            $this->conn = mysqli_connect($this->server_name, $this->username, $this->password, $this->db);
        }

        
    }

?>
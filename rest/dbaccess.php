<?php

    class DBAccess{

        function __construct(){
            $this->server_name = "localhost";
            $this->username = "root";
            $this->password = "";
            $this->db = "casa_editrice_web_app";
            $this->conn = mysqli_connect($this->server_name, $this->username, $this->password, $this->db);
        }

        function Authenticate($form){
            $ris = mysqli_query($this->conn, "SELECT * FROM amministratore WHERE amministratore.nome = '". $form["username"] ."' AND amministratore.password = '". md5($form["password1"]) ."';");
            if ($ris->num_rows > 0){
                return true;
            }else{
                return false;
            }
        }
    }

?>
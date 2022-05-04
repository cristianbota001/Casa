<?php

    class DBAccess{

        function __construct(){
            $this->server_name = "localhost";
            $this->username = "root";
            $this->password = "";
            $this->db = "casa_editrice_web_app";
            $this->conn = mysqli_connect($this->server_name, $this->username, $this->password, $this->db);
        }

        private function BooleanQuery($ris){
            if ($ris->num_rows > 0){
                return true;
            }else{
                return false;
            }
        }

        public function Authenticate($form){
            $ris = mysqli_query($this->conn, "SELECT * FROM amministratore WHERE amministratore.username = '". $form["username"] ."' AND amministratore.password = '". md5($form["password1"]) ."';");
            return $this->BooleanQuery($ris);
        }

        public function CheckIfUserExists($username){
            $ris = mysqli_query($this->conn, "SELECT * FROM amministratore WHERE amministratore.username = '$username';");
            return $this->BooleanQuery($ris);
        }

        public function AddNewAdmin($username, $password){
            $password = md5($password);
            mysqli_query($this->conn, "INSERT INTO amministratore (username, password) VALUES ('$username', '$password')");
        }
    }

?>
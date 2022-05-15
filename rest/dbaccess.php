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

        private function SerializeQuery($query){
            $value = [];
            while ($row = mysqli_fetch_assoc($query)){
                array_push($value, $row);
            }
            return $value;
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

        public function GetBooks(){
            $query = mysqli_query($this->conn, "SELECT id_catalogo_libri, titolo, genere, anno, ISBN FROM catalogo_libri");
            return $this->SerializeQuery($query);
        }

        public function GetAuthors(){
            $query = mysqli_query($this->conn, "SELECT id_autore, nome, cognome, data_nascita, stato_provenienza FROM autore");
            return $this->SerializeQuery($query);
        }

        public function GetBooksWithFilter($parameters){
            $query = mysqli_query($this->conn, "SELECT nome, cognome, stato_provenienza, titolo, genere, anno, ISBN FROM catalogo_libri NATURAL JOIN autore WHERE IF('". $parameters["author_name"] ."' <> 'NULL', autore.nome = '".  $parameters["author_name"] ."' , 1) AND IF('". $parameters["author_surname"] ."' <> 'NULL', autore.cognome = '".  $parameters["author_surname"] ."' , 1) AND IF('". $parameters["author_nation"] ."' <> 'NULL', autore.stato_provenienza = '".  $parameters["author_nation"] ."' , 1) AND IF('". $parameters["pdate"] ."' <> 'NULL', catalogo_libri.anno = '".  $parameters["pdate"] ."' , 1) AND IF('". $parameters["genre"] ."' <> 'NULL', catalogo_libri.genere = '".  $parameters["genre"] ."' , 1)");
            return $this->SerializeQuery($query);
        }
        
        public function SaveNewBook($form){
            return $form;
        }
    }

?>
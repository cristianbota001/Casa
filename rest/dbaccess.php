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

        private function CheckIfBookExists($form){
            $query = mysqli_query($this->conn, "SELECT catalogo_libri.* FROM catalogo_libri NATURAL JOIN autore WHERE titolo = '". $form["title"] ."' AND genere = '". $form["genre"] ."' AND anno = '". $form["year"] ."' AND isbn = '". $form["isbn"] ."' AND id_autore = '". $form["author"] ."'");
            return $this->BooleanQuery($query);
        }

        private function CheckIfAuthorExists($form){
            $query = mysqli_query($this->conn, "SELECT autore.* FROM autore WHERE nome = '". $form["name"] ."' AND cognome = '". $form["surname"] ."' AND data_nascita = '". $form["dateb"] ."' AND stato_provenienza = '". $form["nation"] ."'");
            return $this->BooleanQuery($query);
        }
        
        public function SaveNewBook($form){
            if (!$this->CheckIfBookExists($form)){
                mysqli_query($this->conn, "INSERT INTO catalogo_libri(id_autore, titolo, genere, anno, ISBN) VALUES('". $form["author"] ."','". $form["title"] ."','". $form["genre"] ."','". $form["year"] ."','". $form["isbn"] ."')");
                return "ok";
            }else{
                return "nok";
            }
        }

        public function SaveNewAuthor($form){
            if (!$this->CheckIfAuthorExists($form)){
                mysqli_query($this->conn, "INSERT INTO autore(nome, cognome, data_nascita, stato_provenienza) VALUES('". $form["name"] ."','". $form["surname"] ."','". $form["dateb"] ."','". $form["nation"] ."')");
                return "ok";
            }else{
                return "nok";
            }
        }
    }

?>
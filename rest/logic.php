<?php

    require_once("./dbaccess.php");
    require_once("./classes/forms.php");

    class Logic{

        function __construct(){
            $this->dbaccess = new DBAccess();
            $this->form = new Forms($this->dbaccess);
        }

        public function ValidateLoginForm($form){
            $errors = $this->form->ValidateLoginForm($form);
            if (count($errors["response"]) > 0){
                return $errors;
            }else{
                return ["response" => "ok"];
            }
        }

        public function ValidateRegistrationForm($form){
            $errors = $this->form->ValidateRegistrationForm($form);
            if (count($errors["response"]) > 0){
                return $errors;
            }else{
                return ["response" => "ok"];
            }
        } 

        public function GetBooks(){
            return ["response" => $this->dbaccess->GetBooks()];
        }

        public function GetAuthors(){
            return ["response" => $this->dbaccess->GetAuthors()];
        }

        public function GetBooksWithFilter($parameters){
            return ["response" => $this->dbaccess->GetBooksWithFilter(json_decode($parameters, true))]; // per avere un array
        }

        public function SaveNewBook($form){
            return ["response" => $this->dbaccess->SaveNewBook($form)]; // per avere un array
        }

    }

?>
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
            if ($form["title"] != "" && $form["genre"] != "" && $form["year"] != "" && $form["isbn"] != "" && $form["author"] != ""){
                return ["response" => $this->dbaccess->SaveNewBook($form)];
            }else{
                return ["response" => "nok"];
            }
        }

        public function SaveNewAuthor($form){
            if ($form["name"] != "" && $form["surname"] != "" && $form["dateb"] != "" && $form["nation"] != ""){
                return ["response" => $this->dbaccess->SaveNewAuthor($form)];
            }else{
                return ["response" => "nok"];
            }
        }

        public function GetBookFromIDBook($id_book){
            if ($id_book != ""){
                return ["response" => $this->dbaccess->GetBookFromIDBook($id_book)];
            }else{
                return ["response" => "nok"];
            }
        }

        public function GetAuthorFromIDAuthor($id_author){
            if ($id_author != ""){
                return ["response" => $this->dbaccess->GetAuthorFromIDAuthor($id_author)];
            }else{
                return ["response" => "nok"];
            }
        }

        public function ModifyTable($the_id, $table, $parameters){
           $parameters = json_decode($parameters, true);
            if ($table == "book"){
                return ["response" => $this->dbaccess->ModifyBookTable($the_id, $parameters)];
            }else if ($table == "author"){

           }
        }

    }

?>
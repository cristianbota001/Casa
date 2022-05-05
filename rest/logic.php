<?php

    require_once("./dbaccess.php");
    require_once("./classes/forms.php");

    class Logic{

        function __construct(){
            session_start();

            $this->InitSession();

            //VARIABLES
            $this->dbaccess = new DBAccess();
            $this->form = new Forms($this->dbaccess);
        }

        public function ValidateLoginForm($form){
            $errors = $this->form->ValidateLoginForm($form);
            if (count($errors["response"]) > 0){
                return $errors;
            }else{
                $_SESSION["admin"] = $form["username"];
                $_SESSION["current_page"] = "home_page";
                return ["response" => "ok"];
            }
        }

        public function ValidateRegistrationForm($form){
            $errors = $this->form->ValidateRegistrationForm($form);
            if (count($errors["response"]) > 0){
                return $errors;
            }else{
                $_SESSION["admin"] = $form["username"];
                $_SESSION["current_page"] = "home_page";
                return ["response" => "ok"];
            }
        }

        private function InitSession(){
            if (!isset($_SESSION["current_page"])){
                $_SESSION["current_page"] = "form_page";
            }
        }

        public function GetCurrentPageSession(){
            return $_SESSION["current_page"];
        }
        
        private function CheckSession(){
            
        }

    }

?>
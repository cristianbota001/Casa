<?php

    require_once("./dbaccess.php");
    require_once("./classes/forms.php");

    class Logic{

        function __construct(){
            session_start();
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
        
        private function CheckSession(){
            
        }

    }

?>
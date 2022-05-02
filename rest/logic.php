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
            if ($errors){
                return $errors;
            }else{
                return true;
            }
        }
        
        private function CheckSession(){
            
        }

    }

?>
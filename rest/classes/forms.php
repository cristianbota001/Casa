<?php

    class Forms{

        function __construct($dbaccess){
            $this->dbaccess = $dbaccess;
        }

        function ValidateLoginForm($form){
            $errors = [];
            if (!$form["username"]){
                $errors["username"] = "Compilare il campo";
            }
            if (!$form["password1"]){
                $errors["password1"] = "Compilare il campo";
            }
            if (!$errors){
                if (!$this->dbaccess->Authenticate($form)){
                    $errors["password1"] = "Utente o password errati";
                }
            }
    
            return $errors;
        }

    }

?>
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

        function ValidateRegistrationForm($form){
            $errors = [];
            if ($form["username"]){
                // controllo in più
            }else{
                $errors["username"] = "Compilare il campo";
            }
            if ($form["password1"] && $form["password2"]){
                if ($form["password1"] != $form["password2"]){
                    $errors["password2"] = "Riscrivere correttamente la password";
                }
            }
            if (!$form["password1"]){
                $errors["password1"] = "Compilare il campo";
            }
            if (!$form["password2"]){
                $errors["password2"] = "Compilare il campo";
            }
            return $errors;
        }

    }

?>
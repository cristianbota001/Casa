<?php

    class Forms{

        function __construct($dbaccess){
            $this->dbaccess = $dbaccess;
        }

        function ValidateLoginForm($form){
            $errors = ["response" => []];
            if (!$form["username"]){
                $errors["response"]["username"] = "Compilare il campo";
            }
            if (!$form["password1"]){
                $errors["response"]["password1"] = "Compilare il campo";
            }
            if (!$errors["response"]){
                if (!$this->dbaccess->Authenticate($form)){
                    $errors["response"]["password1"] = "Utente o password errati";
                }
            }
    
            return $errors;
        }

        function ValidateRegistrationForm($form){
            $errors = ["response" => []];
            if ($form["username"]){
                // controllo in più
            }else{
                $errors["response"]["username"] = "Compilare il campo";
            }
            if ($form["password1"] && $form["password2"]){
                if ($form["password1"] != $form["password2"]){
                    $errors["response"]["password2"] = "Riscrivere correttamente la password";
                }
            }
            if (!$form["password1"]){
                $errors["response"]["password1"] = "Compilare il campo";
            }
            if (!$form["password2"]){
                $errors["response"]["password2"] = "Compilare il campo";
            }
            return $errors;
        }
    }

?>
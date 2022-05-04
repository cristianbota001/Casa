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
                    $errors["response"]["password1"] = "Username o password errati";
                }
            }
    
            return $errors;
        }

        function ValidateRegistrationForm($form){
            $errors = ["response" => []];
            if ($form["username"]){
                if(preg_match('/^[a-zA-Z0-9]+$/', $form["username"]) == 1){
                    if ($this->dbaccess->CheckIfUserExists($form["username"])){
                        $errors["response"] = ["username" => "Username gia esistente"];
                    }
                }else{
                    $errors["response"] = ["username" => "Caratteri non validi"];
                }
            }else{
                $errors["response"]["username"] = "Compilare il campo";
            }
            if (!$form["password1"]){
                $errors["response"]["password1"] = "Compilare il campo";
            }
            if (!$form["password2"]){
                $errors["response"]["password2"] = "Compilare il campo";
            }
            if ($form["password1"] && $form["password2"]){
                if ($form["password1"] != $form["password2"]){
                    $errors["response"]["password2"] = "Riscrivere correttamente la password";
                }
            }
            if (!$errors){
                $this->dbaccess->AddNewAdmin($form["username"], $form["password1"]);
            }
             
            return $errors;
        }
    }

?>
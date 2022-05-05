<?php

require_once("./logic.php");

class Middleware{
    
    function __construct($request){
        $this->request = $request;
        $this->logic = new Logic();
        $this->SwitchRequestMethod();
    }

    private function SwitchRequestMethod(){
        switch ($this->request["REQUEST_METHOD"]){
            case "GET":{
                $this->SwitchMethodGet();
            } break;
            case "POST":{
                $this->SwitchMethodPost();
            } break;
        }
    }

    private function SwitchMethodGet(){
        
    }

    private function SwitchMethodPost(){
        if (isset($_POST["username"]) && isset($_POST["password1"]) && isset($_POST["password2"])){
            $this->RegistrationForm();
        }
        else if (isset($_POST["username"]) && isset($_POST["password1"])){
            $this->LoginForm();
        }else{
            //forbidden response 403
        }
    }

    private function LoginForm(){
        $value = $this->logic->ValidateLoginForm($_POST);
        echo json_encode($value);
    }

    private function RegistrationForm(){
        $value = $this->logic->ValidateRegistrationForm($_POST);
        echo json_encode($value);
    }

}

$middleware = new Middleware($_SERVER);

?>
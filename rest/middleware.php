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
        if (isset($_POST["username"]) && isset($_POST["password1"])){
            $response = $this->logic->ValidateLoginForm($_POST);
            if ($response == true){
                //aggiunta sessione
                echo "{'ok':'/'}"; // funzione per ok
            }else{
                echo json_encode($response);
            }
        }
    }

}

$middleware = new Middleware($_SERVER);

?>
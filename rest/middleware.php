<?php

class Middleware{
    
    function __construct($request){
        $this->request = $request;
        $this->SwitchRequestMethod();
    }

    private function SwitchRequestMethod(){
        switch ($this->request["REQUEST_METHOD"]){
            case "GET":{
                $this->SwitchMethodGet();
            } break;
        }
    }

    private function SwitchMethodGet(){
        
    }

    private function SwitchMethodPost(){

    }

}

$middleware = new Middleware($_SERVER);

?>
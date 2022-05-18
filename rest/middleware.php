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
            case "PUT":{
                $this->SwitchMethodPut();
            } break;
        }
    }

    private function SwitchMethodGet(){
        if (isset($_GET["get_books"])){
            $this->GetBooks();
        }
        else if (isset($_GET["get_authors"])){
            $this->GetAuthors();
        }
        else if (isset($_GET["get_books_filter"])){
            $this->GetBooksWithFilter();
        }
        else if (isset($_GET["get_book_from_id_book"])){
            $this->GetBookFromIDBook();
        }
        else if (isset($_GET["get_author_from_id_author"])){
            $this->GetAuthorFromIDAuthor();
        }
        else{
            //forbidden response 403
        }
    }

    private function SwitchMethodPost(){
        if (isset($_POST["username"]) && isset($_POST["password1"]) && isset($_POST["password2"])){
            $this->RegistrationForm();
        }
        else if (isset($_POST["username"]) && isset($_POST["password1"])){
            $this->LoginForm();
        }
        else if (isset($_POST["title"]) && isset($_POST["genre"]) && isset($_POST["year"]) && isset($_POST["isbn"]) && isset($_POST["author"])){
            $this->SaveNewBook();
        }
        else if(isset($_POST["name"]) && isset($_POST["surname"]) && isset($_POST["dateb"]) && isset($_POST["nation"])){
            $this->SaveNewAuthor();
        }
        else{
            //forbidden response 403
        }
    }

    private function SwitchMethodPut(){
        if (isset($_GET["modify"]) && isset($_GET["table"]) && isset($_GET["parameters"])){
            $this->ModifyTable();
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

    private function GetBooks(){
        $value = $this->logic->GetBooks();
        echo json_encode($value);
    }

    private function GetAuthors(){
        $value = $this->logic->GetAuthors();
        echo json_encode($value);
    }

    private function GetBooksWithFilter(){
        $value = $this->logic->GetBooksWithFilter($_GET["get_books_filter"]);
        echo json_encode($value);
    }

    private function SaveNewBook(){
        $value = $this->logic->SaveNewBook($_POST);
        echo json_encode($value);
    }

    private function SaveNewAuthor(){
        $value = $this->logic->SaveNewAuthor($_POST);
        echo json_encode($value);
    }

    private function GetBookFromIDBook(){
        $value = $this->logic->GetBookFromIDBook($_GET["get_book_from_id_book"]);
        echo json_encode($value);
    }

    private function GetAuthorFromIDAuthor(){
        $value = $this->logic->GetAuthorFromIDAuthor($_GET["get_author_from_id_author"]);
        echo json_encode($value);
    }

    private function ModifyTable(){
        $value = $this->logic->ModifyTable($_GET["modify"], $_GET["table"], $_GET["parameters"]);
        echo json_encode($value);
    }

}

$middleware = new Middleware($_SERVER);

?>
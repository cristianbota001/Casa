
var logic;

window.onload = () => {

    logic = new Logic();

}

class Logic{

    constructor(){
        
        this.url = "http://192.168.1.66/casa_editrice_web_app/client/views";
        //this.url = "http://localhost/casa_editrice_web_app/client/views";
        //this.url = "http://localhost:8080/casa_editrice_web_app/client/views";
        this.middleware = new Middleware();
 
    }

    InitSession = () => {
        if (localStorage.getItem("session") === null){
            localStorage.setItem("session" , "false")
        }
        if (sessionStorage.getItem("session") === null){
            sessionStorage.setItem("session" , "false")
        }
        if (localStorage.getItem("session") === "true"){
            sessionStorage.setItem("session" , "true")
        }
    }

    AddWindowEvents = () => {
        window.addEventListener("pageshow", () => {
            this.Route()
        })
    }

    Route = () => {
        
        this.InitSession()

        if (window.location.pathname == "/casa_editrice_web_app/client/views/home.html"){
            if (sessionStorage.getItem("session") == "false"){
                window.location = this.url + "/form.html"
            }
        }else if (window.location.pathname == "/casa_editrice_web_app/client/views/form.html"){
            if (sessionStorage.getItem("session") == "true"){
                window.location = this.url + "/home.html"
            }
        }
        
    }
}
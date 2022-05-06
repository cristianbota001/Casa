
var logic;

window.onload = () => {

    logic = new Logic();
   
}

class Logic{

    constructor(){

        this.url = "http://localhost/casa_editrice_web_app/client/";
        //this.url = "http://192.168.1.66/casa_editrice_web_app/client/";
        this.middleware = new Middleware();
        
        this.InitSession()
        this.AddWindowEvents()
    }

    InitSession(){
        if (sessionStorage.getItem("session") === null){
            sessionStorage.setItem("session" , "false")
        }
    }

    AddWindowEvents(){
        window.addEventListener("pageshow", () => {
            this.Route()
        })
    }

    /* RemoveLoaderPage(){
        document.querySelector(".first_panel_loader").style.display = "none"
    } */

    Route(){
        
        if (window.location.pathname == "/casa_editrice_web_app/client/home/"){
            if (sessionStorage.getItem("session") == "false"){
                window.location = this.url + "form/"
            }
        }else if (window.location.pathname == "/casa_editrice_web_app/client/form/"){
            if (sessionStorage.getItem("session") == "true"){
                window.location = this.url + "home/"
            }
        }
        
    }
}
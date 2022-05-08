
var logic;

window.onload = () => {

    logic = new Logic();

    
   
}

class Logic{

    constructor(){
        
        //this.url = "http://192.168.1.66/casa_editrice_web_app/client/";
        this.url = "http://localhost/casa_editrice_web_app/client/views";
        this.middleware = new Middleware();

        console.log(window.location.pathname)
        
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
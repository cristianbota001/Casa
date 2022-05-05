
var logic;

window.onload = () => {

    logic = new Logic();
   
}

class Logic{

    constructor(){

        this.url = "http://localhost/casa_editrice_web_app/client/";
        this.middleware = new Middleware();
        
        this.InitSession()
        this.AddWindowEvents()
    }

    InitSession(){
        if (sessionStorage.getItem("current_page") === null){
            sessionStorage.setItem("current_page" , "form_page")
        }
    }

    AddWindowEvents(){
        window.addEventListener("pageshow", () => {
            this.Route()
        })
    }

    RemoveLoaderPage(){
        document.querySelector(".first_panel_loader").style.display = "none"
    }

    Route(){
        switch(sessionStorage.getItem("current_page")){
            case "form_page":{
                if (window.location.pathname != "/casa_editrice_web_app/client/form/"){
                    window.location = this.url + "form/"
                }else{
                    this.RemoveLoaderPage()
                }
            } break;
            case "home_page":{
                if (window.location.pathname != "/casa_editrice_web_app/client/home/"){
                    window.location = this.url + "home/"
                }else{
                    // add events
                }
            } break;
        }
    }

}
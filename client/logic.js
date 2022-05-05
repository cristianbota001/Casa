
var logic;

window.onload = () => {

    logic = new Logic();
   
}

class Logic{

    constructor(){

        this.page_form_index = 0
        this.url = "http://localhost/casa_editrice_web_app/client/";
        this.middleware = new Middleware();
        
        this.InitSession()
        this.AddWindowEvents()
    }

    // FORM PAGE ///////////////////////////////////
    AddFormPageEvents(){
        document.querySelector("#accedi_bottone").addEventListener("click", (e) => {
           this.SendFormData(e, "#access_form")
        })
        document.querySelector("#registrati_bottone").addEventListener("click", (e) => {
           this.SendFormData(e, "#registration_form")
        })
        document.querySelectorAll(".text_input").forEach(ele => {ele.addEventListener("click", () => {ele.style.boxShadow  = "2px 2px 5px 0 rgb(116, 116, 116)"; ele.parentElement.querySelector("p").innerHTML = "" })})
    }

    SendFormData(e, id_form){
        e.preventDefault(); //rivedere
        let form = new FormData(document.querySelector(id_form));
        this.middleware.SendFormData(form, this.GestioneForm.bind(logic));
    }

    GestioneForm(json_data){
        if (json_data !== "ok"){
            document.querySelectorAll(".username_error")[this.page_form_index].innerHTML = json_data.username ? json_data.username :  ""
            document.querySelectorAll(".password1_error")[this.page_form_index].innerHTML = json_data.password1 ? json_data.password1 : ""
            document.querySelector(".password2_error").innerHTML = json_data.password2 ? json_data.password2 : ""
            
            if (json_data.username) {document.querySelectorAll(".username_error")[this.page_form_index].parentElement.querySelector(".text_input").style.boxShadow = "2px 2px 5px 0 rgb(203, 72, 72)";}
            if (json_data.password1) {document.querySelectorAll(".password1_error")[this.page_form_index].parentElement.querySelector(".text_input").style.boxShadow = "2px 2px 5px 0 rgb(203, 72, 72)";}
            if (json_data.password2) {document.querySelector(".password2_error").parentElement.querySelector(".text_input").style.boxShadow = "2px 2px 5px 0 rgb(203, 72, 72)";}
        
        }else{
            sessionStorage.setItem("current_page", "home_page")
            window.location = this.url + "home/";
        }
    }

    FormDivToggle(){
        this.FadeEffect()
        document.querySelector(".form_div_main").classList.toggle("form_div_main_toggle")
        this.page_form_index = this.page_form_index == 1 ? 0 : 1
        document.querySelectorAll(".input_div").forEach(ele => {ele.querySelector("input").value = ""; ele.querySelector("p").innerHTML = ""; ele.querySelector("input").style.boxShadow  = "2px 2px 5px 0 rgb(116, 116, 116)"})
    }

    FadeEffect(){
        if (this.page_form_index == 0) {
            document.querySelector(".accesso_div").classList.add("fade_out_effect");
            document.querySelector(".registrazione_div").classList.add("fade_in_effect");
            document.querySelector(".accesso_div").classList.remove("fade_in_effect");
            document.querySelector(".registrazione_div").classList.remove("fade_out_effect");
        }else{
            document.querySelector(".accesso_div").classList.add("fade_in_effect");
            document.querySelector(".registrazione_div").classList.add("fade_out_effect");
            document.querySelector(".accesso_div").classList.remove("fade_out_effect");
            document.querySelector(".registrazione_div").classList.remove("fade_in_effect");
        }
    }
    // FORM PAGE ///////////////////////////////////

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

    Route(){
        switch(sessionStorage.getItem("current_page")){
            case "form_page":{
                if (window.location.pathname != "/casa_editrice_web_app/client/"){
                    window.location = this.url
                }else{
                    this.AddFormPageEvents()
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
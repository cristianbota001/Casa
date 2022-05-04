
var logic;

window.onload = () => {
    logic = new Logic();
}

class Logic{

    constructor(){
        this.middleware = new Middleware();
        this.AddEvents()

        //VARIABLES
        this.page_form_index = 0
    }

    AddEvents(){
        document.querySelector("#accedi_bottone").addEventListener("click", (e) => {
           this.SendFormData(e, "#access_form")
        })
        document.querySelector("#registrati_bottone").addEventListener("click", (e) => {
           this.SendFormData(e, "#registration_form")
        })
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
        }else{
            //redirect alla home
        }
    }

    FormDivToggle(){
        this.FadeEffect()
        document.querySelector(".form_div_main").classList.toggle("form_div_main_toggle")
        this.page_form_index = this.page_form_index == 1 ? 0 : 1
        document.querySelectorAll(".input_div").forEach(ele => {ele.querySelector("input").value = ""; ele.querySelector("p").innerHTML = "";})
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
}
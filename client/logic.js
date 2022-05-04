
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
        document.querySelector("#reg_inp").addEventListener("keyup", (e) => {
            this.SendCheckUsername(document.querySelector("#reg_inp").value)
        })
    }

    SendFormData(e, id_form){
        e.preventDefault(); //rivedere
        let form = new FormData(document.querySelector(id_form));
        this.middleware.SendFormData(form).then(json_data => {
            this.GestioneForm(json_data.response)
        })
    }

    SendCheckUsername(input_data){
        if (input_data != ""){
            this.middleware.SendCheckUsername(input_data).then(json_data => {
                if (json_data.response !== "ok"){
                    document.querySelectorAll(".username_error")[this.page_form_index].innerHTML = json_data.response.username
                }else{
                    document.querySelectorAll(".username_error")[this.page_form_index].innerHTML = "<span style = 'color:#165C97;'>Username disponbile</span>";
                }
            })
        }else{
            document.querySelectorAll(".username_error")[this.page_form_index].innerHTML = ""
        }
    }

    GestioneForm(json_data){
        if (json_data !== "ok"){
            document.querySelectorAll(".username_error")[this.page_form_index].innerHTML = json_data.username ? json_data.username : (this.page_form_index == 1) ? "<span style = 'color:#165C97;'>Username disponbile</span>" : ""
            document.querySelectorAll(".password1_error")[this.page_form_index].innerHTML = json_data.password1 ? json_data.password1 : ""
            document.querySelector(".password2_error").innerHTML = json_data.password2 ? json_data.password2 : ""
        }else{
            //redirect alla home
        }
    }

    /* async WaitResponseFromMiddleware(promise){
        let response = await promise
    } */

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
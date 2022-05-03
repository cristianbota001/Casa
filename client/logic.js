
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

    async SendFormData(e, id_form){
        e.preventDefault(); //rivedere
        let form = new FormData(document.querySelector(id_form));
        this.middleware.SendFormData(form).then(json_data => {
            this.GestioneForm(json_data.response)
        })
    }

    GestioneForm(json_data){
        if (json_data !== "ok"){
            document.querySelectorAll(".username_error")[this.page_form_index].innerHTML = json_data.username ? json_data.username : ""
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
        document.querySelector(".form_div_main").classList.toggle("form_div_main_toggle")
        this.page_form_index = this.page_form_index == 1 ? 0 : 1
        this.GestioneForm({})
    }
}
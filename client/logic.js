
var logic;

window.onload = () => {
    logic = new Logic();
}

class Logic{

    constructor(){
        this.middleware = new Middleware();
        this.AddEvents()
    }

    AddEvents(){
       document.querySelector("#accedi_bottone").addEventListener("click", (e) => {
           this.SendFormData(e, "#access_form")
       })
       document.querySelector("#registrati_bottone").addEventListener("click", (e) => {
           this.SendFormData(e, "#registrati_bottone")
       })
    }

    async SendFormData(e, id_form){
        e.preventDefault(); //rivedere
        let form = new FormData(document.querySelector(id_form));
        this.middleware.SendFormData(form).then(response => {
            
        })
    }

    /* async WaitResponseFromMiddleware(promise){
        let response = await promise
    } */

    FormDivToggle(){
        document.querySelector(".form_div_main").classList.toggle("form_div_main_toggle")
    }
}
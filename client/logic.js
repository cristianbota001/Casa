
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
           e.preventDefault(); //rivedere
           let form = new FormData(document.querySelector("#access_form"));
           this.middleware.SendRequest("POST", form);
       })
    }

    FormDivToggle(){
        document.querySelector(".form_div_main").classList.toggle("form_div_main_toggle")
    }
}
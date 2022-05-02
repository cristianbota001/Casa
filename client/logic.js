
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
       
    }

    FormDivToggle(){
        document.querySelector(".form_div_main").classList.toggle("form_div_main_toggle")
    }
}
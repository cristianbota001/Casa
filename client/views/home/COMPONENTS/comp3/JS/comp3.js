var comp3;

window.onload = () => {

    comp3 = new Comp3();
    
}

class Comp3 extends Home{

    constructor(){
        super()
        this.AddEvents()
        this.SwitchPage("0")
    }

    AddEvents(){
        document.querySelectorAll(".option_button").forEach(ele => ele.addEventListener("click", (e) => {this.SwitchPage(e.target.value)}))
        document.querySelectorAll(".search_button").forEach(ele => ele.addEventListener("click", (e) => {this.SendSearch(e)}))
    }

    SwitchPage(num_option){
        if (num_option == 0){
            this.SwitchBookPage()
        }else{
            this.SwitchAuthorPage()
        }
        this.CleanAllPage()
        this.num_option = num_option
    }

    SwitchBookPage(){
        document.querySelector("#mini_form_text_input").setAttribute("placeholder", "ID Libro")
        let text_inputs = document.querySelectorAll(".text_input")
        this.SwitchAttributes(text_inputs[0], "title", "Titolo")
        this.SwitchAttributes(text_inputs[1], "genre", "Genere")
        this.SwitchAttributes(text_inputs[2], "year", "Anno")
        this.SwitchAttributes(text_inputs[3], "isbn", "ISBN")
    }

    SwitchAuthorPage(){
        document.querySelector("#mini_form_text_input").setAttribute("placeholder", "ID Autore")
        let text_inputs = document.querySelectorAll(".text_input")
        this.SwitchAttributes(text_inputs[0], "name", "Nome")
        this.SwitchAttributes(text_inputs[1], "surname", "Cognome")
        this.SwitchAttributes(text_inputs[2], "dateb", "Data nascita")
        this.SwitchAttributes(text_inputs[3], "nation", "Stato provenienza")
    }

    SwitchAttributes(element, name, placeholder){
        element.setAttribute("placeholder", placeholder)
        element.setAttribute("name", name)
    }

    SendSearch(e){
        e.preventDefault()
        this.CleanAllPage()
        let the_id = document.querySelector("#mini_form_text_input").value
        if (this.num_option == 0){
            this.middleware.GetBookFromIDBook(the_id, this.ResponseFrom)
        }else{
            this.middleware.GetAuthorFromIDAuthor(the_id, this.ResponseFrom)
        }
    }

    ResponseFrom(json_data){
        if (json_data !== "nok"){
            let text_inputs = document.querySelectorAll(".text_input"), cont = 0;
            for (const [key, value] of Object.entries(json_data)){
                text_inputs[cont].value = value
                cont++
            }
            document.querySelector(".result_after_save[value='0']").innerText = ""
        }else{
            document.querySelector(".result_after_save[value='0']").innerText = "Libro non trovato"
        }
    }

    CleanAllPage(){
        let text_inputs = document.querySelectorAll(".text_input")
        text_inputs.forEach(ele => {
            ele.value = ""
        })
        document.querySelector(".result_after_save[value='0']").innerText = ""
    }

}
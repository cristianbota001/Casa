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

    AddEvents = () => {
        document.querySelectorAll(".option_button").forEach(ele => ele.addEventListener("click", (e) => {this.SwitchPage(e.target.value); this.ChangeButtonsColors(e.target, ".option_button")}))
        document.querySelector(".search_button").addEventListener("click", (e) => {this.SendSearch(e)})
        document.querySelector(".modify_button").addEventListener("click", (e) => {this.SendModifyRequest(e)})
        document.querySelector(".remove_button").addEventListener("click", (e) => {this.SendDeleteRequest(e)})
    }

    SwitchPage = (num_option) => {
        if (num_option == 0){
            this.SwitchBookPage()
        }else{
            this.SwitchAuthorPage()
        }
        this.CleanAllPage()
        this.CleanMiniForm()
        this.num_option = num_option
        this.the_id = null
    }

    SwitchBookPage = () => {
        document.querySelector("#mini_form_text_input").setAttribute("placeholder", "ID Libro")
        let text_inputs = document.querySelectorAll(".text_input")
        this.SwitchAttributes(text_inputs[0], "title", "Titolo")
        this.SwitchAttributes(text_inputs[1], "genre", "Genere")
        this.SwitchAttributes(text_inputs[2], "year", "Anno")
        this.SwitchAttributes(text_inputs[3], "isbn", "ISBN")
    }

    SwitchAuthorPage = () => {
        document.querySelector("#mini_form_text_input").setAttribute("placeholder", "ID Autore")
        let text_inputs = document.querySelectorAll(".text_input")
        this.SwitchAttributes(text_inputs[0], "name", "Nome")
        this.SwitchAttributes(text_inputs[1], "surname", "Cognome")
        this.SwitchAttributes(text_inputs[2], "dateb", "Data nascita")
        this.SwitchAttributes(text_inputs[3], "nation", "Stato provenienza")
    }

    SwitchAttributes = (element, name, placeholder) => {
        element.setAttribute("placeholder", placeholder)
        element.setAttribute("name", name)
    }

    SendSearch = (e) => {
        e.preventDefault()
        this.CleanAllPage()
        let id = document.querySelector("#mini_form_text_input").value
        if (this.num_option == 0){
            this.middleware.GetBookFromIDBook(id, this.ResponseFrom)
        }else{
            this.middleware.GetAuthorFromIDAuthor(id, this.ResponseFrom)
        }
    }

    ResponseFrom = (json_data) => {
        if (json_data !== "nok"){
            let text_inputs = document.querySelectorAll(".text_input"), cont = 0;
            for (const [key, value] of Object.entries(json_data)){
                text_inputs[cont].value = value
                cont++
            }
            document.querySelector(".result_after_save[value='0']").innerText = ""
            this.the_id = document.querySelector("#mini_form_text_input").value
        }else{
            document.querySelector(".result_after_save[value='0']").innerText = this.num_option == "0" ? "Libro non trovato" : "Autore non trovato"
        }
    }

    CleanAllPage = () => {
        let text_inputs = document.querySelectorAll(".text_input")
        text_inputs.forEach(ele => {
            ele.value = ""
        })
        document.querySelector(".result_after_save[value='0']").innerText = ""
    }

    CleanMiniForm = () => {
        document.querySelector("#mini_form_text_input").value = ""
    }

    SendModifyRequest = (e) => {
        e.preventDefault()
        if (this.num_option == "0"){
            var table = "book"
        }else{
            var table = "author"
        }
        if (this.the_id !== null){
            let form_data = new FormData(document.querySelector(".main_form"))
            form_data = JSON.stringify(Object.fromEntries(form_data))
            this.middleware.SendModifyRequest(this.the_id, table, form_data, this.ResponseAfterModify)
        }
    }

    SendDeleteRequest = (e) => {
        e.preventDefault()
        if (this.num_option == "0"){
            var table = "book"
        }else{
            var table = "author"
        }
        if (this.the_id !== null){
            this.middleware.SendDeleteRequest(this.the_id, table, this.ResponseAfterDelete)
        }
    }

    ResponseAfterModify = (json_data) => {
        this.ResponseAfter(json_data, "Modifica")
    }

    ResponseAfterDelete = (json_data) => {
        this.ResponseAfter(json_data, "Eliminazione")
    }

    ResponseAfter = (json_data, mess) => {
        if (json_data !== "nok"){
            document.querySelector(".result_after_save[value='1']").innerText = mess + " avvenuta con successo"
            this.CleanAllPage()
            this.CleanMiniForm()
            this.the_id = null
        }else{
            document.querySelector(".result_after_save[value='1']").innerText = mess + " non avvenuta"
        }
    }

}
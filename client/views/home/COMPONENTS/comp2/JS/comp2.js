var comp2;

window.onload = () => {

    comp2 = new Comp2();
    
}

class Comp2 extends Home{

    constructor(){
        super()
        this.AddEvents()
        this.SwitchForm("0")
    }

    AddEvents(){
        document.querySelectorAll(".option_button").forEach(ele => ele.addEventListener("click", (e) => {this.SwitchForm(e.target.value); this.ChangeButtonsColors(e.target, ".option_button");}))
        document.querySelectorAll(".save_button").forEach(ele => ele.addEventListener("click", (e) => {this.SaveToDB(e)}))
    }

    SwitchForm(num_option){
        if (num_option == 0){
            document.querySelector(".add_info_form_1").style.display = "flex"
            document.querySelector(".add_info_form_2").style.display = "none"
            this.GetAuthors()
        }else{
            document.querySelector(".add_info_form_1").style.display = "none"
            document.querySelector(".add_info_form_2").style.display = "flex"
        }
        this.num_option = num_option
    }

    AddAuthorsInSelectTag(json_data){
        document.querySelector(".select_author").innerHTML = ""
        json_data.forEach(ele => {
            let opt = document.createElement("option")
            opt.setAttribute("value", ele.id_autore)
            opt.innerHTML = ele.nome + " " + ele.cognome + " - ID: " + ele.id_autore
            document.querySelector(".select_author").appendChild(opt)
        })
    }

    GetAuthors(){
        this.middleware.GetAuthorsTable(this.AddAuthorsInSelectTag.bind(comp2))
    }

    ClearInputTexts(){
        document.querySelectorAll(".text_input").forEach(ele => {ele.value = ""})
    }

    AddResEffect(mess){
        document.querySelector(".result_after_save[value = '" + this.num_option + "']").innerText = mess
    }

    SaveToDB(e){
        e.preventDefault()
        if (this.num_option == "0"){
            let form_data = new FormData(document.querySelector(".add_info_form_1"))
            this.middleware.SaveNewBook(form_data, this.ResponseAfterSave.bind(comp2))
        }else{
            let form_data = new FormData(document.querySelector(".add_info_form_2"))
            this.middleware.SaveNewAuthor(form_data, this.ResponseAfterSave.bind(comp2))
        }
    }

    ResponseAfterSave(response){
        if (response == "ok"){
            this.ClearInputTexts()
            this.AddResEffect("Salvato con successo")
        }else{
            this.AddResEffect("Salvataggio non avvenuto")
        }
    }

}
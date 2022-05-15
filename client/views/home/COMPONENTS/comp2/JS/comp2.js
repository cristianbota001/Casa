var comp2;

window.onload = () => {

    comp2 = new Comp2();
    
}

class Comp2 extends Home{

    constructor(){
        super()
        this.AddEvents()
        this.SwitchForm("0")
        this.middleware.GetAuthorsTable(this.AddAuthorsInSelectTag.bind(comp2))
    }

    AddEvents(){
        document.querySelectorAll(".option_button").forEach(ele => ele.addEventListener("click", (e) => {this.SwitchForm(e.target.value)}))
        document.querySelector(".save_button").addEventListener("click", (e) => {this.SaveToDB(e)})
    }

    SwitchForm(num_option){
        if (num_option == 0){
            document.querySelector(".add_info_form_1").style.display = "flex"
            document.querySelector(".add_info_form_2").style.display = "none"
        }else{
            document.querySelector(".add_info_form_1").style.display = "none"
            document.querySelector(".add_info_form_2").style.display = "flex"
        }
        this.num_option = num_option
    }

    AddAuthorsInSelectTag(json_data){
        json_data.forEach(ele => {
            let opt = document.createElement("option")
            opt.setAttribute("value", ele.id_autore)
            opt.innerText = ele.nome + " " + ele.cognome
            document.querySelector(".select_author").appendChild(opt)
        })
    }

    SaveToDB(e){
        e.preventDefault()
        if (this.num_option == "0"){
            let form_data = new FormData(document.querySelector(".add_info_form_1"))
            this.middleware.SaveNewBook(form_data, (json_data) => {console.log(json_data)})
        }else{
            let form_data = new FormData(document.querySelector(".add_info_form_2"))

        }
    }

}
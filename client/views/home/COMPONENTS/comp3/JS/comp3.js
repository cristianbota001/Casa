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
            document.querySelector(".page_1").style.display = "flex"
            document.querySelector(".page_2").style.display = "none"
        }else{
            document.querySelector(".page_1").style.display = "none"
            document.querySelector(".page_2").style.display = "flex"
        }
        this.num_option = num_option
    }

    SendSearch(e){
        e.preventDefault()
        if (this.num_option == 0){
            let id_book = document.querySelector("#id_book_text_input").value
            this.middleware.GetBookFromIDBook(id_book, this.ResponseFromBooks.bind(comp3))
        }else{
            let id_author = document.querySelector("#id_author_text_input").value
            this.middleware.GetAuthorFromIDAuthor(id_author, this.ResponseFromAuthors.bind(comp3))
        }
    }

    ResponseFromBooks(json_data){
        if (json_data !== "nok"){
            document.querySelector(".text_input[name='isbn']").value = json_data.ISBN
            document.querySelector(".text_input[name='title']").value = json_data.titolo
            document.querySelector(".text_input[name='genre']").value = json_data.genere
            document.querySelector(".text_input[name='year']").value = json_data.anno
            document.querySelector(".result_after_save[value='0']").innerText = ""
        }else{
            document.querySelector(".result_after_save[value='0']").innerText = "Libro non trovato"
        }
    }

    ResponseFromAuthors(json_data){
        if (json_data !== "nok"){
            document.querySelector(".text_input[name='name']").value = json_data.nome
            document.querySelector(".text_input[name='surname']").value = json_data.cognome
            document.querySelector(".text_input[name='dateb']").value = json_data.data_nascita
            document.querySelector(".text_input[name='nation']").value = json_data.stato_provenienza
            document.querySelector(".result_after_save[value='0']").innerText = ""
        }else{
            document.querySelector(".result_after_save[value='2']").innerText = "Autore non trovato"
        }
    }
}
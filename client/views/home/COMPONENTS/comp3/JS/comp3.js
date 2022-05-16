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
            let isbn = document.querySelector("#id_book_text_input").value
            this.middleware.GetBookFromIDBook(isbn, this.ResponseFromBooks.bind(comp3))
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
}
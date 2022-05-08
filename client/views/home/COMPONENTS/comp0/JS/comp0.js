var comp0;

window.onload = () => {

    comp0 = new Comp0();
    
}

class Comp0 extends Home{

    constructor(){
        super()
        this.AddButtonsEvents()
    }

    AddButtonsEvents(){
        document.querySelectorAll(".option_button").forEach(ele => ele.addEventListener("click", (e) => {this.GetTables(e)}))
    }

    GetTables(e){
        let num_option = e.target.value
        
        switch (num_option){
            case "0" : {
                this.middleware.GetBooksTable(this.PopulateTable)
            }
        }
        
    }

    PopulateTable(){
        let table = document.querySelector(".table")
        table.innerHTML = "" 
        
    }

}
var comp1;

window.onload = () => {

    comp1 = new Comp1();
    
}

class Comp1 extends Home{

    constructor(){
        super()
        this.AddEvents()
    }

    AddEvents(){
        document.querySelector(".option_button").addEventListener("click", () => {
            document.querySelector(".filter_menu_div").classList.toggle("filter_menu_div_toggle")
        })
        document.querySelector("#filter_annulla").addEventListener("click", () => {
            document.querySelector(".filter_menu_div").classList.toggle("filter_menu_div_toggle")
        })
    }

}
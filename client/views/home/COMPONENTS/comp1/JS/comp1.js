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
        document.querySelector("#filter_invia").addEventListener("click", (e) => {
            this.GetBooksWithFilter()
            /* document.querySelector(".filter_menu_div").classList.toggle("filter_menu_div_toggle") */
        })
    }

    GetBooksWithFilter(){
        this.middleware.GetBooksWithFilter(this.GetParameters(), this.MakeTable.bind(comp1))
    }

    GetParameters(){
        let param = {}
        document.querySelectorAll(".text_input").forEach(ele => {
            if (ele.value.replace(/\s/g, "") != ""){
                param[ele.getAttribute("name")] = ele.value
            }else{
                param[ele.getAttribute("name")] = null
            }
        })
       return JSON.stringify(param);
    }

}
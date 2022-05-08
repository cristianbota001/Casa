var index;

window.onload = () => {

    index = new Index();
   
}

class Index extends Logic{

    constructor(){
        super()
        this.AddHomeEvents()
    }

    AddHomeEvents(){
        document.querySelector(".right_navbar_button").addEventListener("click", () => {
            document.querySelector(".navbar_div").scrollTop  += 70
        })
        document.querySelector(".left_navbar_button").addEventListener("click", () => {
            document.querySelector(".navbar_div").scrollTop  -= 70
        })
        document.querySelector(".burger_menu").addEventListener("click", () => {
            document.querySelector(".navbar_div").classList.toggle("navbar_div_toggle")
        })
        document.querySelector(".close_navbar_div").addEventListener("click", () => {
            document.querySelector(".navbar_div").classList.toggle("navbar_div_toggle")
        })
    }

}
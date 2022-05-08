var home;

window.onload = () => {

    home = new Home();
    //home.InitSession()
    //home.AddWindowEvents()
    home.AddHomeEvents()
    
}

class Home extends Logic{

    constructor(){
        super()
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
        document.querySelectorAll(".navbar_button").forEach(ele => {ele.addEventListener("click", (e) => {this.SwitchPage(e)})})
    }

    SwitchPage(e){
        let num_page = e.target.value
        let obj = document.createElement("object")
        obj.type = 'text/html'
        obj.data = './home/COMPONENTS/comp' + num_page + '.html'
        obj.width = "100%"
        obj.height = "100%"
        document.querySelector(".second_div").innerHTML = "<h1 class='second_div_title'>" + e.target.name + "</h1>"
        document.querySelector(".second_div").appendChild(obj)
    }   
}
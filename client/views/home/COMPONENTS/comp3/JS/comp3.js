var comp3;

window.onload = () => {

    comp3 = new Comp3();
    
}

class Comp3 extends Home{

    constructor(){
        super()
        this.AddEvents()
        this.SwitchForm("0")
    }

    AddEvents(){
        document.querySelectorAll(".option_button").forEach(ele => ele.addEventListener("click", (e) => {this.SwitchForm(e.target.value)}))
    }

    SwitchForm(num_option){
        if (num_option == 0){
            document.querySelector(".page_1").style.display = "flex"
            document.querySelector(".page_2").style.display = "none"
        }else{
            document.querySelector(".page_1").style.display = "none"
            document.querySelector(".page_2").style.display = "flex"
        }
        this.num_option = num_option
    }
}
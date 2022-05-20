var home;

window.onload = () => {

    home = new Home();
    home.InitSession()
    home.AddWindowEvents()
    home.AddHomeEvents()
    home.SwitchPage("0", "Visualizza tutto")
    
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
        document.querySelectorAll(".navbar_button").forEach(ele => {ele.addEventListener("click", (e) => {this.SwitchPage(e.target.value, e.target.name); this.ChangeButtonsColors(e.target, ".navbar_button");})})
        document.querySelector(".logo_title").addEventListener("click", () => {window.location = this.url })
    }

    SwitchPage(num_page, name_page){
        document.querySelector(".navbar_div").classList.toggle("navbar_div_toggle")
        let obj = document.createElement("object")
        obj.type = 'text/html'
        obj.data = './home/COMPONENTS/comp' + num_page + '.html'
        obj.setAttribute("class", "object")
        document.querySelector(".second_div").innerHTML = "<h1 class='second_div_title'>" + name_page + "</h1>"
        document.querySelector(".second_div").appendChild(obj)
    }   

    ChangeButtonsColors(ele, name){
        document.querySelectorAll(name).forEach(ele => { ele.classList.remove("button_color_toggle")})
        ele.classList.add("button_color_toggle")
    }

    GetHeader(row) {
        let arr = []
        for (const [key, value] of Object.entries(row)){
            arr.push(key)
        }
        return arr
    }

    MakeTable(json_data, html_table){

        if (json_data.length == 0){
            return 0
        }

        let head = this.GetHeader(json_data[0])
        let tr = document.createElement("tr")
        
        head.forEach(element => {
            let th = document.createElement("th")
            let div = document.createElement("div")
            div.innerText = element
            th.appendChild(div)
            tr.appendChild(th)
        })

        html_table.appendChild(tr)

        json_data.forEach(element => {
            let tr = document.createElement("tr")
            for (const [key, value] of Object.entries(element)){
                let td = document.createElement("td")
                let div = document.createElement("div")
                
                if (value == null){
                    div.innerText = "NULL"
                }else{
                    div.innerText = value
                }
                 
                td.appendChild(div)
                tr.appendChild(td)
            }
            html_table.appendChild(tr)
        })

    }
}
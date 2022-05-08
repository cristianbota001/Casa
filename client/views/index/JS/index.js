var index;

window.onload = () => {

    index = new Index();
   
}

class Index extends Logic{

    constructor(){
        super()
    }

    Redirect(page){
        window.location = this.url + page
    }

}
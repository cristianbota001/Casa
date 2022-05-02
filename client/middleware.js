class Middleware{

    constructor(){
        this.url = "http://localhost/casa_editrice_web_app/rest/middleware.php";
    }

    SendRequest(method, body){
        fetch(this.url, {method : method, body:body}).then((response) => {
            return response.text();
        }).then((json_data) => {
            console.log(json_data)
        })
    }
}
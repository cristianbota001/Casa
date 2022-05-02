class Middleware{

    constructor(){
        this.url = "http://localhost/casa_editrice_web_app/rest/middleware.php";
    }

    SendRequest(){
        fetch(this.url, {method : "GET"}).then((response) => {
            return response.json();
        }).then((json_data) => {
            console.log(json_data)
        }).catch((error) => {
            console.log(error)
        })
    }
}
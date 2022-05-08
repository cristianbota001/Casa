class Middleware{

    constructor(){
        this.url = "http://localhost/casa_editrice_web_app/rest/middleware.php";
        //this.url = "http://192.168.1.66/casa_editrice_web_app/rest/middleware.php";
    }

    async SendRequest(method, body, url){
        let ris = await fetch(url, {method : method, body:body})
        return ris.json()
    }

    SendFormData(body, callback){
        this.SendRequest("POST", body, this.url).then(json_data => {
            callback(json_data["response"]);
        })
    }

    GetBooksTable(callback){
        this.SendRequest("GET", null, this.url + "?get_books=[]").then(json_data => {
            callback(json_data["response"]);
        })
    }

}
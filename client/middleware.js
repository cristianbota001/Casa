class Middleware{

    constructor(){
        this.url = "http://localhost/casa_editrice_web_app/rest/middleware.php";
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
}
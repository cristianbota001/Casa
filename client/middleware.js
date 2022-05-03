class Middleware{

    constructor(){
        this.url = "http://localhost/casa_editrice_web_app/rest/middleware.php";
    }

    async SendRequest(method, body){
        let ris = await fetch(this.url, {method : method, body:body})
        return ris.json()
    }

    SendFormData(body){
        return this.SendRequest("POST", body)
    }
}
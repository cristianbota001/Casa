class Middleware{

    constructor(){
        this.url = "http://localhost/casa_editrice_web_app/rest/middleware.php";
    }

    async SendRequest(method, body, url){
        let ris = await fetch(url, {method : method, body:body})
        return ris.json()
    }

    SendFormData(body){
        return this.SendRequest("POST", body, this.url)
    }

    SendCheckUsername(input_data){
        let url = this.url + "/" + "?check_username=" + input_data
        return this.SendRequest("GET", null, url)
    }
}
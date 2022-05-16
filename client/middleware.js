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
        this.SendRequest("GET", null, this.url + "?get_books").then(json_data => {
            callback(json_data["response"]);
        })
    }

    GetAuthorsTable(callback){
        this.SendRequest("GET", null, this.url + "?get_authors").then(json_data => {
            callback(json_data["response"]);
        })
    }

    GetBooksWithFilter(parameters, callback){
        this.SendRequest("GET", null, this.url + "?get_books_filter=" + parameters).then(json_data => {
            callback(json_data["response"]);
        })
    }

    SaveNewBook(body, callback){
        this.SendFormData(body, callback)
    }

    SaveNewAuthor(body, callback){
        this.SendFormData(body, callback)
    }

    GetBookFromIDBook(id_book, callback){
        this.SendRequest("GET", null, this.url + "?get_book_from_id_book=" + id_book).then(json_data => {
            callback(json_data["response"]);
        })
    }

}
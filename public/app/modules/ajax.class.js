/**
 * Created by anderslutz on 2016-11-20.
 */
class Ajax {
    constructor() {
        this.httpRequest = new XMLHttpRequest();
    }

    makeRequest(url) {
        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        this.httpRequest.onreadystatechange = () => {
            if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (this.httpRequest.status === 200) {
                    var response = JSON.parse(this.httpRequest.responseText);
                    document.getElementById("content").innerHTML = response.content;
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        this.httpRequest.open('GET', url);
        this.httpRequest.send();
    }
}

export default Ajax;

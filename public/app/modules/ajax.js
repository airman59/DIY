/**
 * Created by anderslutz on 2016-11-16.
 */

let ajax = (function() {

    let httpRequest;

    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = JSON.parse(httpRequest.responseText);
                document.getElementById("content").innerHTML = response.content;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }

    return {
        makeRequest: makeRequest
    };
}());


// export {makeRequest};

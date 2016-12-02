/**
 * Created by anderslutz on 2016-11-30.
 */

luz.ajax ={};

(function() {

    let httpRequest;

    /**
     * Hopefully one function to handle all of the ajax-calls :-)
     * Still under development.
     *
     * @param url: the server-route to be called.
     * @param callback: function to handle the fetched JSON-object.
     * @returns {boolean}
     */
    function ajaxRequest(url, callback) {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let responseJSON = JSON.parse(httpRequest.responseText);
                    callback(responseJSON);
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    // Add to public API.
    luz.ajax.ajaxRequest = ajaxRequest;
}());

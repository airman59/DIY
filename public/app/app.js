/**
 * Created by anderslutz on 2016-11-15.
 */
//import {navbar} from "./views/navbar.js";

//document.getElementById("navbar").innerHTML = navbar;
document.getElementById("content").innerHTML = function() { makeRequest('content/home'); };


(function() {
    var httpRequest;
    document.getElementById("home").onclick = function() { makeRequest('content/home'); };
    document.getElementById("todo").onclick = function() { makeRequest('content/todo'); };
    document.getElementById("history").onclick = function() { makeRequest('content/history'); };
    document.getElementById("links").onclick = function() { makeRequest('content/links'); };
    document.getElementById("about").onclick = function() { makeRequest('content/about'); };
    makeRequest('content/home');

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
                //alert(response.message);
                //alert(response.content);
                document.getElementById("content").innerHTML = response.content;

            } else {
                alert('There was a problem with the request.');
            }
        }
    }
})();








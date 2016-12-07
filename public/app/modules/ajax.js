/**
 * Created by anderslutz on 2016-11-30.
 */

luz.ajax ={};

(function() {

    let httpRequest;

    /**
     * A function to handle the simple GET-requests.
     *
     * @param url: the server-route to be called.
     * @param callback: function to handle the fetched JSON-object.
     * @returns {boolean}
     */
    function ajaxGetRequest(url) {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let responseJSON = JSON.parse(httpRequest.responseText);
                    //callback(responseJSON);
                    //console.log(responseJSON);
                    document.getElementById("content").innerHTML = responseJSON.content;
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    /*function processResult(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let responseJSON = JSON.parse(httpRequest.responseText);
                //callback(responseJSON);
                console.log(responseJSON);
                document.getElementById("content").innerHTML = responseJSON.content;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }*/


    function ajaxLoginRequest(url, data) {
        console.log("In ajaxLoginRequest");
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let responseJSON = JSON.parse(httpRequest.responseText);
                    //callback(responseJSON);
                    // todo... some real functionality here...
                    localStorage.setItem('luztoken', responseJSON.token);
                    document.getElementById("login").classList.add('hidden');
                    document.getElementById("admin").classList.remove('hidden');
                    document.getElementById("logout").classList.remove('hidden');
                    //document.getElementById("admin").classList.add('active');
                    luz.router.getPage("admin", true);
                    luz.admin.addAdminStart("content");

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        httpRequest.open('POST', url);
        httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        httpRequest.send(JSON.stringify(data));
    }

    function ajaxSequreRequest(url, test) {
        console.log("In ajaxSequreRequest");
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let responseJSON = JSON.parse(httpRequest.responseText);
                    //callback(responseJSON);
                    console.log(httpRequest.responseText);
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        httpRequest.open('GET', url);
        httpRequest.setRequestHeader("x-access-token", localStorage.getItem('luztoken'));
        httpRequest.send();
    }




    // Add to public API.
    luz.ajax.ajaxGetRequest = ajaxGetRequest;
    luz.ajax.ajaxLoginRequest = ajaxLoginRequest;
    luz.ajax.ajaxSequreRequest = ajaxSequreRequest;
    //luz.ajax.processResult = processResult;
}());

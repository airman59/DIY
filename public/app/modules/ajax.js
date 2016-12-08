/**
 * Created by anderslutz on 2016-11-30.
 */

luz.ajax ={};

(function() {

    let httpRequest;

    function ajaxGetRequest(url, myEvent) {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let responseJSON = JSON.parse(httpRequest.responseText);
                    //console.log(responseJSON);
                    myEvent.detail.responseJSON = responseJSON;
                    document.body.dispatchEvent(myEvent);
                } else {
                    alert('There was a problem with the request in ajaxGetRequest().');
                }
            }
        };
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function ajaxLoginRequest(url, data, myEvent) {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let responseJSON = JSON.parse(httpRequest.responseText);
                    /*localStorage.setItem('luztoken', responseJSON.token);
                    document.getElementById("login").classList.add('hidden');
                    document.getElementById("admin").classList.remove('hidden');
                    document.getElementById("logout").classList.remove('hidden');
                    //document.getElementById("admin").classList.add('active');
                    luz.router.getPage("admin", true);
                    luz.admin.addAdminStart("content");*/
                    myEvent.detail.responseJSON = responseJSON;
                    console.log(responseJSON);
                    document.body.dispatchEvent(myEvent);
                } else {
                    alert('There was a problem with the request in ajaxLoginRequest().');
                }
            }
        };
        httpRequest.open('POST', url);
        httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        httpRequest.send(JSON.stringify(data));
    }

    function ajaxSecureRequest(url, test) {
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
                    alert('There was a problem with the request in ajaxSecureRequest.');
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
    luz.ajax.ajaxSecureRequest = ajaxSecureRequest;
}());

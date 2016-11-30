/**
 * Created by anderslutz on 2016-11-30.
 */

luz.router ={};

(function() {

    let stateObj = {};

    function getPage(page, addEntry) {
        if(event) {
            event.preventDefault();
        }
        luz.ajax.makeRequest('content/' + page);
        if (addEntry == true) {
            setHistory(page);
        }
        highLight(page);
    }

    function highLight(id) {
        let elements = document.querySelectorAll("nav a.active");
        if(elements[0]) {
            elements[0].classList.remove('active');
        }
        document.getElementById(id).classList.add("active");
        document.getElementById(id).blur();
    }

    function setHistory(page) {
        if (page === "home") {
            page = "/";
        }
        stateObj.page = page;
        history.pushState(stateObj, page, page);
    }

    function setGetPage(addEntry) {
        if (window.location.pathname === "/") {
            var page = "home";
            var id = "#home";
        } else {
            var page = window.location.pathname.substr(1);
            var id = "#" + window.location.pathname.substr(1);
        }
        getPage(page, addEntry);
    }

// Change page after a click on back or forward.
    window.onpopstate = function () {
        setGetPage(false);
    };

    luz.router.setGetPage = setGetPage;
    luz.router.getPage = getPage;
}());

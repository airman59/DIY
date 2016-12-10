/**
 * Created by anderslutz on 2016-11-30.
 */

luz.router ={};

(function() {

    let stateObj = {};
    let routeParts = [];
    const ajax = luz.ajax;
    const login = luz.login;
    const admin = luz.admin;

    function getPage(page, addEntry) {
        if(event) {
            event.preventDefault();
        }
        if(page === "login") {
            login.addLoginForm("content", admin);
        } else if(page ==="logout") {
            localStorage.removeItem("luztoken");
            ajax.ajaxGetRequest('content/home', luz.getFinished);
            addEntry = true;
            page = "home";
        } else if(page === "admin") {
            ajax.ajaxSecureRequest("admin");

        } else {
            ajax.ajaxGetRequest('content/' + page, luz.getFinished);
        }

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
        if(localStorage.getItem("luztoken")) {
            document.getElementById("login").classList.add('hidden');
            document.getElementById("admin").classList.remove('hidden');
            document.getElementById("logout").classList.remove('hidden');
        }
        else {
            document.getElementById("login").classList.remove('hidden');
            document.getElementById("admin").classList.add('hidden');
            document.getElementById("logout").classList.add('hidden');
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
        let route = window.location.pathname.substr(1);
        routeParts = route.split("/");
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

    function createEvents() {
        luz.getFinished = new CustomEvent("ajaxGetFinished",
            {
                'detail': {
                    responseJSON: null
                }
            });
        document.body.addEventListener("ajaxGetFinished", showPage, false);

        luz.loginFinished = new CustomEvent("ajaxLoginFinished",
            {
                'detail': {
                responseJSON: null
                }
            });
        document.body.addEventListener("ajaxLoginFinished", processLoginResult, false);

    }

    function showPage(e) {
        if (e.detail.responseJSON.page) {
            document.getElementById("content").innerHTML = e.detail.responseJSON.content;
        } else {
            document.getElementById("content").innerHTML = "<p>Page not found!</p>";
        }
    }

    function processLoginResult(e) {
        if(e.detail.responseJSON.success) {
            document.getElementById("content").innerHTML = e.detail.responseJSON.message;
            localStorage.setItem('luztoken', e.detail.responseJSON.token);
            document.getElementById("login").classList.add('hidden');
            document.getElementById("admin").classList.remove('hidden');
            document.getElementById("logout").classList.remove('hidden');
            stateObj.page = "admin";
            history.pushState(stateObj, "admin", "admin");
            highLight("admin");
            //document.getElementById("admin").classList.add('active');
        } else {
            document.getElementById("content").innerHTML = e.detail.responseJSON.message;
        }
    }

    // Add to public API.
    luz.router.setGetPage = setGetPage;
    luz.router.getPage = getPage;
    luz.router.createEvents = createEvents;
}());

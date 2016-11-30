/**
 * Created by anderslutz on 2016-11-15.
 */

function getPage(page, addEntry) {
    if(event) {
        event.preventDefault();
    }
    ajax.makeRequest('content/' + page);
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


let stateObj = {};

nav.addNavbar("navbar");
nav.addListeners();

// Initial routing to enable bookmarking of a specific page on the site...
setGetPage(true);
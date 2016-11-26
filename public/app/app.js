/**
 * Created by anderslutz on 2016-11-15.
 */
//import Navbar from "./modules/navbar.js";
import {makeRequest} from "./modules/ajax.js";
import {navhtml} from "./modules/testnav.js";


function getPage(page, addEntry) {
    event.preventDefault();
    makeRequest('content/' + page);
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

function addListeners() {
    document.getElementById("home").onclick = () => getPage('home', true);
    document.getElementById("notes").onclick = () => getPage('notes', true);
    document.getElementById("todo").onclick = () => getPage('todo', true);
    document.getElementById("history").onclick = () => getPage('history', true);
    document.getElementById("links").onclick = () => getPage('links', true);
    document.getElementById("about").onclick = () => getPage('about', true);
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


function ready(fn) {
    if(document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentloaded', fn);
    }
}

function runApplication() {
    document.getElementById("testnav").innerHTML = navhtml;
    addListeners();

    // Initial routing to enable bookmarking of a specific page on the site...
    setGetPage(true);
}
let stateObj = {};
ready(runApplication);


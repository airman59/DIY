/**
 * Created by anderslutz on 2016-11-15.
 */
//import Navbar from "./modules/navbar.js";
import {makeRequest} from "./modules/ajax.js";
import {navhtml} from "./modules/testnav.js";


// Set up the nabar.
//let navbar = new Navbar();
//document.getElementById("navbar").innerHTML = navbar.html;
//navbar.addListeners();

// Show default start-page
//navbar.showStartPage();

// New test-code.


function getPage(page) {
    event.preventDefault();
    makeRequest('content/' + page);
    highLight(page);
    setHistory(page);
}

function highLight(id) {
    document.getElementById(active).classList.remove('active');
    document.getElementById(id).classList.add('active');
    document.getElementById(id).blur();
    active = id;
}

function addListeners() {
    document.getElementById("home").onclick = () => getPage('home');
    document.getElementById("notes").onclick = () => getPage('notes');
    document.getElementById("todo").onclick = () => getPage('todo');
    document.getElementById("history").onclick = () => getPage('history');
    document.getElementById("links").onclick = () => getPage('links');
    document.getElementById("about").onclick = () => getPage('about');
}

function setHistory(page) {
    if (page === "home") {
        page = "/";
    }
    stateObj.page = page;
    console.log("stateObj.page: " + stateObj.page);
    history.pushState(stateObj, page, page);
}

function setGetPage() {
    let record;
    if (window.location.pathname === "/") {
        var page = "home";
        var id = "#home";
        record = "/";
    } else {
        var page = window.location.pathname.substr(1);
        var id = "#" + window.location.pathname.substr(1);
        record = window.location.pathname.substr(1);
    }
    getPage(page);
    return record;
}

// Change page after a click on back or forward.
window.onpopstate = function (event) {
    setGetPage();
};

// Add navbar and listeners.
document.getElementById("testnav").innerHTML = navhtml;
addListeners();

// Show startpage.
let active = "home";
let stateObj = {page: "/"};

makeRequest('content/home');
highLight("home");
setHistory("home");

// Initial routing to enable bookmarking of a specific page on the site...
/*console.log(window.location.pathname);
let record = setGetPage();
let active = record;
console.log("active: " + active);
setHistory(record);*/

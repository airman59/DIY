/**
 * Created by anderslutz on 2016-11-17.
 */
//import {makeRequest} from "./ajax.js";
import Ajax from "./ajax.class.js";

class Navbar {
    constructor() {
        this.html = `
            <div id="navbuttons">
                <button id="home">Home</button>
                <button id="notes">Notes</button>
                <button id="todo">Todo</button>
                <button id="history">History</button>
                <button id="links">Links</button>
                <button id="about">About</button>
            </div>
        `;
        this.active = "home";
        this.ajax = new Ajax();
        this.stateObj = {page: "/"};
    }
    addListeners() {
        document.getElementById("home").onclick = () => {this.getPage('home');};
        document.getElementById("notes").onclick = () => {this.getPage('notes');};
        document.getElementById("todo").onclick = () => {this.getPage('todo');};
        document.getElementById("history").onclick = () => {this.getPage('history');};
        document.getElementById("links").onclick = () => {this.getPage('links');};
        document.getElementById("about").onclick = () => {this.getPage('about');};
    }

    getPage(page) {
        this.ajax.makeRequest('content/' + page);
        this.highLight(page);
    }

    showStartPage() {
        this.ajax.makeRequest('content/home');
        this.highLight("home");
    }

    highLight(id){
        document.getElementById(this.active).classList.remove('active');
        document.getElementById(id).classList.add('active');
        document.getElementById(id).blur();
        this.active = id;
    }
}

export default Navbar;
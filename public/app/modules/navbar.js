/**
 * Created by anderslutz on 2016-11-17.
 */
import {makeRequest} from "./ajax.js";

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
    }
    addListeners() {
        document.getElementById("home").onclick = () => {
            makeRequest('content/home');
            this.highLight("home");
        };
        document.getElementById("notes").onclick = () => {
            makeRequest('content/notes');
            this.highLight("notes");
        };
        document.getElementById("todo").onclick = () => {
            makeRequest('content/todo');
            this.highLight("todo");
        };
        document.getElementById("history").onclick = () => {
            makeRequest('content/history');
            this.highLight("history");
        };
        document.getElementById("links").onclick = () => {
            makeRequest('content/links');
            this.highLight("links");
        };
        document.getElementById("about").onclick = () => {
            makeRequest('content/about');
            this.highLight("about");
        };
    }

    showStartPage() {
        makeRequest('content/home');
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
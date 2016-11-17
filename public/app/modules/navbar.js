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
    }
    addListeners() {
        document.getElementById("home").onclick = function() { makeRequest('content/home'); };
        document.getElementById("notes").onclick = function() { makeRequest('content/notes'); };
        document.getElementById("todo").onclick = function() { makeRequest('content/todo'); };
        document.getElementById("history").onclick = function() { makeRequest('content/history'); };
        document.getElementById("links").onclick = function() { makeRequest('content/links'); };
        document.getElementById("about").onclick = function() { makeRequest('content/about'); };
    }
}

export default Navbar;
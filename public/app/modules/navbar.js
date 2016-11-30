/**
 * Created by anderslutz on 2016-11-30.
 */

luz.navbar ={};

(function() {
    let navhtml = `
        <nav>
            <ul id="navbar">
              <li><a id="home" href="/">Home</a></li>
              <li><a id="notes" href="/notes">Notes</a></li>
              <li><a id="todo" href="/todo">ToDo</a></li>
              <li><a id="history" href="/history">History</a></li>
              <li><a id="links" href="/links">Links</a></li>
              <li><a id="about" href="/about">About</a></li>
            </ul>
        </nav>
    `;

    function addNavbar(id) {
        document.getElementById(id).innerHTML = navhtml;
    }

    function addListeners(fn) {
        document.getElementById("home").onclick = () => fn('home', true);
        document.getElementById("notes").onclick = () => fn('notes', true);
        document.getElementById("todo").onclick = () => fn('todo', true);
        document.getElementById("history").onclick = () => fn('history', true);
        document.getElementById("links").onclick = () => fn('links', true);
        document.getElementById("about").onclick = () => fn('about', true);
    }
    luz.navbar.addNavbar = addNavbar;
    luz.navbar.addListeners = addListeners;
}());

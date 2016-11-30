/**
 * Created by anderslutz on 2016-11-29.
 */

let nav = (function() {
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

    function addListeners() {
        document.getElementById("home").onclick = () => getPage('home', true);
        document.getElementById("notes").onclick = () => getPage('notes', true);
        document.getElementById("todo").onclick = () => getPage('todo', true);
        document.getElementById("history").onclick = () => getPage('history', true);
        document.getElementById("links").onclick = () => getPage('links', true);
        document.getElementById("about").onclick = () => getPage('about', true);
    }

    return {
        addNavbar: addNavbar,
        addListeners: addListeners
    };

}());

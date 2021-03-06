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
              <li class="right"><a id="login" href="/login">Login</a></li>
              <li class="right"><a id="logout" class="hidden" href="/logout">Logout</a></li>
              <li class="right"><a id="admin" class="hidden" href="/admin">Admin</a></li>                            
            </ul>
        </nav>
    `;

    function addNavbar(id) {
        document.getElementById(id).innerHTML = navhtml;
    }

    function addNavbarListeners(fn) {
        let allLinks = document.querySelectorAll("#navbar a");
        for(let i = 0; i < allLinks.length; i++) {
            document.getElementById(allLinks[i].id).addEventListener("click", () => fn(allLinks[i].id, true), false);
        }
    }

    // Add to public API.
    luz.navbar.addNavbar = addNavbar;
    luz.navbar.addNavbarListeners = addNavbarListeners;
}());

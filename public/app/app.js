/**
 * Created by anderslutz on 2016-11-15.
 */
import {testtext} from "./views/testview.js";
import {makeRequest} from "./modules/ajax.js";
import {navbar} from "./views/navbar.js";

document.getElementById("navbar").innerHTML = navbar;



document.getElementById("home").onclick = function() { makeRequest('content/home'); };
document.getElementById("notes").onclick = function() { makeRequest('content/notes'); };
document.getElementById("todo").onclick = function() { makeRequest('content/todo'); };
document.getElementById("history").onclick = function() { makeRequest('content/history'); };
document.getElementById("links").onclick = function() { makeRequest('content/links'); };
document.getElementById("about").onclick = function() { makeRequest('content/about'); };
makeRequest('content/home');




/*document.getElementById("test").innerHTML = testtext;

document.getElementById("testbutton").onclick = function() {
    alert("Funkar :-)");
};*/






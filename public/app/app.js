/**
 * Created by anderslutz on 2016-11-15.
 */
import {makeRequest} from "./modules/ajax.js";

import Navbar from "./modules/navbar.js";

// Set up the nabar.
let navbar = new Navbar();
document.getElementById("navbar").innerHTML = navbar.html;
navbar.addListeners();

// Show default start-page
makeRequest('content/home');






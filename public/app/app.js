/**
 * Created by anderslutz on 2016-11-30.
 */

// Wait until the DOM is loaded before starting the app.
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded - Starting the app!");

    // Just to get shorter function-calls.
    const ajax = luz.ajax;
    const nav = luz.navbar;
    const router = luz.router;

    // Add the navbar.
    nav.addNavbar("navbar");
    nav.addListeners(router.getPage);

    // Change page after a click on back or forward.
    window.onpopstate = function () {
        router.setGetPage(false);
    };

    // Initial routing...
    router.setGetPage(false);

}, false);

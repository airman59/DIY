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
    nav.addNavbarListeners(router.getPage);

    // Create my custom events.
    router.createEvents();

    // Initial routing...
    router.setGetPage(false);

}, false);

// Test-code...
/*let testStr = "/users/123456";
testStr = testStr.substr(1);
console.log(testStr);
let strs = testStr.split("/");
console.log(strs);
console.log(strs.length);*/





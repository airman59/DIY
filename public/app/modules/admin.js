/**
 * Created by anderslutz on 2016-12-06.
 */

luz.admin ={};

(function() {
    let adminStartHtml = `
        <h3>Admin</h3>
        <p>Wellcome to the admin startpage!</p>
    `;

    function addAdminStart(id) {
        console.log("In addAdminStart!");
        document.getElementById(id).innerHTML = adminStartHtml;
    }

    function addAdminListeners() {
        // todo...
    }

    // Add to public API.
    luz.admin.addAdminStart = addAdminStart;
}());

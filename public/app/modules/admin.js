/**
 * Created by anderslutz on 2016-12-06.
 */

luz.admin ={};

(function() {
    let adminStartHtml = `
        <h2>Admin</h2>
        <p>Wellcome to the admin startpage!</p>
        <div id="admincontent"></div>
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

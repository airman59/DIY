/**
 * Created by anderslutz on 2016-12-03.
 */

luz.login ={};

(function() {

    let loginForm = `
        <form id="loginform">
              Username:<br>
              <input type="text" name="username" value="">
              <br>
              Password:<br>
              <input type="password" name="password" value="">
              <br><br>
              <input id="doLogin" type="submit" value="Login">
        </form> 
    `;

    function addLoginForm(element) {
        document.getElementById(element).innerHTML = loginForm;
        addSubmitListener();
    }

    function addSubmitListener() {
        document.getElementById("loginform").addEventListener("submit", ()=> doLogin(event), false);
    }

    function doLogin(event, admin) {
        let data = {};
        event.preventDefault();
        data = {
            username: loginform.username.value,
            password: loginform.password.value
        }
        luz.ajax.ajaxLoginRequest("/admin/authenticate", data);
    }
    // Add to public API.
    luz.login.addLoginForm = addLoginForm;
}());

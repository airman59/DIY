/**
 * Created by anderslutz on 2016-12-03.
 */

luz.login ={};

(function() {

    let loginForm = `
        <div id="logindiv">
            <form id="loginform">
                  <label for="username">Username</label>
                  <input type="text" name="username" value="">
                  <br>
                  <label for="password">Password</label>
                  <input type="password" name="password" value="">
                  <br><br>
                  <input id="doLogin" type="submit" value="Login">
            </form> 
        </div>
    `;

    function addLoginForm(element) {
        document.getElementById(element).innerHTML = loginForm;
        addSubmitListener();
    }

    function addSubmitListener() {
        document.getElementById("loginform").addEventListener("submit", ()=> doLogin(event), false);
    }

    function doLogin(event) {
        let data = {};
        event.preventDefault();
        data = {
            username: loginform.username.value,
            password: loginform.password.value
        }
        luz.ajax.ajaxLoginRequest("/admin/authenticate", data, luz.loginFinished);
    }
    // Add to public API.
    luz.login.addLoginForm = addLoginForm;
}());

/**
 * Created by anderslutz on 2016-10-25.
 */

function ChangeUrl(title, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Title: title, Url: url };
        history.pushState(obj, obj.Title, obj.Url);
        //$('#ajax-content').html("Bye bye cruel world");
        $('#ajax-content').load('views/ajax-test.html');
    } else {
        alert("Browser does not support HTML5.");
    }
}

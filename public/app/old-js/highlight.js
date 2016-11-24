/**
 * Created by anderslutz on 2016-10-25.
 */
$(function() {
    var url = window.location.href;

    $("#myNavbar a").each(function() {
        if(url == (this.href)) {
            $(this).closest("li").addClass("active");
        }
    });
});

/**
 * Created by anderslutz on 14/10/16.
 */
$(document).ready(function() {
    var stateObj = {page: "/"};
    var converter = new showdown.Converter();
    var html;

    var getMdContent = function(element, page) {
        var file = "views/" + page + ".md";
        $.get(file, function(data) {
            html = converter.makeHtml(data);
            $('#content').html(html);
            $('#myNavbar li').removeClass('active');
            $(element).closest("li").addClass("active");
        });
    }

    var setHistory = function(page) {
        stateObj.page = page;
        console.log("stateObj.page: " + stateObj.page);
        history.pushState(stateObj, page, page);
    }

    var setGetPage = function() {
        var record;
        if(window.location.pathname === "/") {
            var page = "home";
            var id = "#home";
            record = "/";
        } else {
            var page = window.location.pathname.substr(1);
            var id = "#" + window.location.pathname.substr(1);
            record = window.location.pathname.substr(1);
        }
        getMdContent(id, page);
        return record;
    }

    // Initial routing to enable bookmarking of a specific page on the site...
    console.log(window.location.pathname);
    var record = setGetPage();
    setHistory(record);

    // Change page after a click on back or forward.
    window.onpopstate = function(event) {
        setGetPage();
    };


    // Initial super-simple routing and highlighting... just to get things going.
    // Quick and dirty ;-)
    // When everything is working as intended i will refactor the code...
    $('#brand').click(function(event) {
        event.preventDefault();
        getMdContent("#home", "home");
        setHistory("/");
    });
    $('#home').click(function(event) {
        event.preventDefault();
        getMdContent(this, "home");
        setHistory("/");
    });
    $('#todo').click(function(event) {
        event.preventDefault();
        getMdContent(this, "todo");
        setHistory("todo");
    });
    $('#history').click(function(event) {
        event.preventDefault();
        getMdContent(this, "history");
        setHistory("history");
    });
    $('#links').click(function(event) {
        event.preventDefault();
        getMdContent(this, "links");
        setHistory("links");
    });
    $('#contact').click(function(event) {
        event.preventDefault();
        getMdContent(this, "contact");
        setHistory("contact");
    });
    $('#about').click(function(event) {
        event.preventDefault();
        getMdContent(this, "about");
        setHistory("about");
    });
    $('#dbcontent').click(function(event) {
        event.preventDefault();

        var file = "views/dbcontent.md";
        $.get(file, function(data) {
            html = converter.makeHtml(data);
            $('#content').html(html);
            $('#myNavbar li').removeClass('active');
            $(element).closest("li").addClass("active");
        });
    });
    $('#create').click(function(event) {
        event.preventDefault();

        var file = "views/create.md";
        $.get(file, function(data) {
            html = converter.makeHtml(data);
            $('#content').html(html);
            $('#myNavbar li').removeClass('active');
            $(element).closest("li").addClass("active");
        });
    });
});

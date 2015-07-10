// JavaScript source code
var appletId;

if (navigator.userAgent.indexOf("Chrome") < 0 && navigator.userAgent.indexOf("Firefox") < 0) {
    alert("This website is optimized for Chrome and Firefox, some functionalities may not work in IE");
}
var hide = function () {
    document.getElementById('applet_container').removeChild(document.getElementById(appletId));
    document.getElementById('overlay').style.zIndex = -1;
    document.getElementById('overlay').style.visibility = "hidden";
}
var show = function (id,arcName,clsName,height,width) {
    document.getElementById('overlay').style.zIndex = 1;
    document.getElementById('overlay').style.visibility = "visible";
    var top = window.innerHeight / 2 - height / 2;
    var left = window.innerWidth / 2 - width / 2;
    document.getElementById('overlay_content').style.top = top + "px";
    document.getElementById('overlay_content').style.left = left + "px";
    var app = document.createElement('applet');
    app.archive = arcName;
    app.id = id;
    appletId = id;
    app.code = clsName;
    app.height = height;
    app.width = width;
    document.getElementById('applet_container').appendChild(app);
}
$(document).ready(function () {
    //highlight icon
    var dHeight = $(document).height();
    $('#overlay').css("height", dHeight + "px");
    $('.icon').mouseenter(function () {
        /*$(this).fadeTo("fast", 1);*/
        $(this).css("background-color", "white");
        $('a', this).css("color", "black");
    });
    $('.icon').mouseleave(function () {
        /*$(this).fadeTo("fast",0.7);*/
        $(this).css("background-color", "gray");
        $('a', this).css("color", "white");
    });
    //display menu
    $('#menu-icon').click(function () {
        $('body').animate({
            left: "400px"
        }, 200);
        $('.menu').animate({
            left: "0px"
        }, 200);
        //location.assign("index.html");
    });
    //close menu
    $('#close-image').click(function () {
        $('body').animate({
            left: "0px"
        }, 200);
        $('.menu').animate({
            left: "-400px"
        }, 200);
    });
    $('#accordion').accordion({ collapsible: true, active: false });
    //first item
    $('#ui-id-1').unbind("click");
    $('#ui-id-1').click(function () {
        location.assign("index.html");
    });
    //resume tab
    $('#resume').unbind("click");
    //contacts tab
    $('#contact').unbind("click");

    function moveToLeft(width) {
        $('#running').animate({
            right: "+="+width+"px"
        },4000,reset);
    }
    function reset() {
        $('#running').animate({
            right: "-200px"
        }, 0, moveToLeft($('body').width()));
    }
    moveToLeft($('body').width());
});


// JavaScript source code
var appletId;

if (navigator.userAgent.indexOf("Chrome") < 0 && navigator.userAgent.indexOf("Firefox") < 0) {
    alert("This website is optimized for Chrome and Firefox, some functionalities may not work in IE");
}
var hide = function () {
    document.getElementById('applet_container').removeChild(document.getElementById(appletId));
    var overlay = document.getElementById('overlay');
    overlay.style.zIndex = -1;
    overlay.style.visibility = "hidden";
}
var show = function (id, arcName, clsName, height, width) {
    var overlay = document.getElementById('overlay');
    overlay.style.zIndex = 1;
    overlay.style.visibility = "visible";
    var top = $(window).height() / 2 - height / 2 - $('#applet_close').height() + $(window).scrollTop();
    var left = window.innerWidth / 2 - width / 2;
    var top1 = $(window).scrollTop();
    //alert(window.innerHeight + " " + window.innerWidth + " jquery" + top1);
    var app = document.createElement('applet');
    app.archive = arcName;
    app.id = id;
    appletId = id;
    app.code = clsName;
    app.height = height;
    app.width = width;
    document.getElementById('applet_container').appendChild(app);
    appletCentre(top, left, height);
}
var appletCentre = function (top, left, height) {
    var appletClose = document.getElementById('applet_close');
    appletClose.style.top = top + "px";
    appletClose.style.left = left + "px";

    var appletContainer = document.getElementById('applet_container');
    appletContainer.style.top = top + "px";
    appletContainer.style.left = left + "px";
    var closeButtonHeight = $('#applet_close').height();
    document.getElementById('overlay_content').style.height = (top + height + closeButtonHeight) + "px";
    //document.getElementById('overlay_content').style.position = "fixed";

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
    
    $('#download_applet').click(function () {
        var name = appletId + ".jar";
        //alert(name);
        location.assign(name);
    });
    //$('body').effect('highlight', {},1000);
});


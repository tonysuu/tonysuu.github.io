// JavaScript source code
if (navigator.userAgent.indexOf("Chrome") < 0 && navigator.userAgent.indexOf("Firefox") < 0) {
    alert("This website is optimized for Chrome and Firefox, some functionalities may not work in IE");
}

$(document).ready(function () {
    //highlight icon
    $('.icon').mouseenter(function () {
        /*$(this).fadeTo("fast", 1);*/
        $(this).css("background-color","white");
        $('a',this).css("color","black");
    });
    $('.icon').mouseleave(function () {
        /*$(this).fadeTo("fast",0.7);*/
        $(this).css("background-color","gray");
        $('a',this).css("color","white");
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
        },200);
        $('.menu').animate({
            left: "-400px"
        },200);
    });
    $('#accordion').accordion({ collapsible: true, active: false});
    //first item
    $('#ui-id-1').unbind("click");
    $('#ui-id-1').click(function () {
        location.assign("index.html");
    });
    //resume tab
    $('#resume').unbind("click");
    //contacts tab
    $('#contact').unbind("click");

    /*$('#content').mouseenter(function () {

    });*/
});
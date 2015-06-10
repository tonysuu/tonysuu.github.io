// JavaScript source code
$(document).ready(function () {
    //highlight icon
    $('.icon').mouseenter(function () {
        $(this).fadeTo("fast", 1);
    });
    $('.icon').mouseleave(function () {
        $(this).fadeTo("fast",0.7);
    });
    //display menu
    $('#menu-icon').click(function () {
        $('body').animate({
            left: "400px"
        }, 200);
        $('.menu').animate({
            left: "0px"
        }, 200);
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
    $('#menu-list').accordion({ collapsible: true, active: false});
});
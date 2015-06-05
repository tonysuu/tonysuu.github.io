// JavaScript source code
$(document).ready(function () {
    $('.icon').mouseenter(function () {
        $(this).fadeTo("fast", 1);
    });
    $('.icon').mouseleave(function () {
        $(this).fadeTo("fast",0.7);
    });
});
$(document).ready(function () {
    /*var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";*/

    var board = document.createElement("table");
    board.setAttribute("id", "board");
    board.style.height = "400px";
    board.style.width = "400px";
    board.style.border = "1px solid black";
    document.body.appendChild(board);
});
    

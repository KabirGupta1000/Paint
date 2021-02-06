var canvas = document.getElementById("myPaintCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "Empty";
var last_position_of_x, last_position_of_y;
var colour = "Black";
var width_of_line = 1;
canvas.addEventListener("mousedown", My_mousedown); 
function My_mousedown(e){
    mouseEvent= "My_mousedown";
}
canvas.addEventListener("mouseup", My_mouseup);
function My_mouseup(e){
    mouseEvent="My_mouseup";
}
canvas.addEventListener("mouseleave", My_mouseleave);
function My_mouseleave(e){
    mouseEvent="My_mouseleave";
}
canvas.addEventListener("mousemove", My_mousemove);
function My_mousemove(e){
    var current_position_of_x= e.clientX- canvas.offsetLeft;
    var current_position_of_y= e.clientY - canvas.offsetTop;

    if (mouseEvent=="My_mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y= current_position_of_y;                          
}



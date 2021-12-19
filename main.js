var mouseevent="empty";
var lastposition_x, lastposition_y; 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
linewidth=1;

canvas.addEventListener("mouseUp", myMouseUp);

function myMouseUp(e)
{
    mouseevent="mouseUp";
    
}
canvas.addEventListener("mouseLeave", myMouseLeave);

function myMouseLeave(e)
{
    mouseevent="mouseLeave";
    
}
canvas.addEventListener("mouseDown", myMouseDown);

function myMouseDown(e)
{
    mouseevent="mouseDown";

}
canvas.addEventListener("mouseMove", myMouseMove);

function myMouseMove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;
     if(mouseevent=="mouseDown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=linewidth;

console.log("Last position of x and y coordinates = ");
 console.log("x = " + lastposition_x + "y = " + lastposition_y);
  ctx.moveTo(lastposition_x, lastposition_y);
  console.log("Current position of x and y coordinates = ");
   console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
     ctx.stroke();
}
lastposition_x = current_position_of_mouse_x;
 lastposition_y = current_position_of_mouse_y;
    
    
}
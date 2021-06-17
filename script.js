
var last_pos_x, last_pos_y;
var width=screen.width;
canvas=document.getElementById("canvas2");
ctx=canvas.getContext("2d");
color_input="black";
width_input=2;
new_width=screen.width-70;
new_height=screen.height-300;
if (width<992) {
    document.getElementById("canvas2").width=new_width;
    document.getElementById("canvas2").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e) {
    console.log("mytouchStart");
    color_input=document.getElementById("color_input").value;
    width_input=document.getElementById("width_input").value;
    last_pos_x=e.touches[0].clientX-canvas.offsetLeft;
    last_pos_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e) {
    console.log("mytouch move");
current_position_of_mouse_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color_input;
    ctx.lineWidth=width_input;
    console.log("last position of X and Y coordinates:");
    console.log("X="+last_pos_x+"Y="+last_pos_y);
    ctx.moveTo(last_pos_x, last_pos_y);
    console.log("Current position of X and Y coordinates:");
    console.log("X="+current_position_of_mouse_x+"Y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
   ctx.stroke();

last_pos_x=current_position_of_mouse_x;
last_pos_y=current_position_of_mouse_y;
}


function clearCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
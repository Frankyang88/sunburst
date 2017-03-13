

var draw= (function(){

var pub = {};
 
 var can;
 var ctx;
 
var center_x;
var center_y;
var inner_radius;

pub.setup =function(x,y,radius){
	
	center_x = x;
	center_y = y;
	inner_radius=radius;
	can = document.getElementById("emulator");
	ctx = can.getContext("2d");
	ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();

}£»

pub.drawfan=function(fan_width,Radius_in,start,end,color){
var x1,y1;
var x2,y2;
var x3,y3;
var x4,y4;

x1 = Center_x+Radius_in * Math.cos(start);
y1 = Center_y+Radius_in * Math.sin(start);
x2 = Center_x+(Radius_in +fan_width) * Math.cos(start);
y2 = Center_y+(Radius_in +fan_width) * Math.sin(start);
x3 = Center_x+Radius_in * Math.cos(end);
y3 = Center_y+Radius_in * Math.sin(end);
x4 = Center_x+(Radius_in+fan_width) * Math.cos(end);
y4 = Center_y+(Radius_in +fan_width) * Math.sin(end);
	
ctx.beginPath();     
ctx.moveTo(x1,y1);             //a horizontal line
ctx.arcTo(, 20, x3,y3, Radius_in); 
ctx.lineTo(x4,y4);
ctx.arcTo(120,50,x2,y2,Radius_in+fan_width);
ctx.lineTo(x1,y1);
ctx.closePath();
  
ctx.fillStyle = color;
ctx.fill();
ctx.stroke();
	
	
};


pub.fillTxt = function (str, x, y) {
        ctx.font = str.font;
        ctx.textBaseline = str.baseline;
        ctx.textAlign = str.position;
        ctx.fillStyle = str.style;
        ctx.fillText(str.data, x, y, str.maxwidth);
    };


return pub;
}());

$(document).ready(draw.setup);



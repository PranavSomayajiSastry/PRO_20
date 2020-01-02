
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis

  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
  r = map(mouseX,0,1200,0,99);
  g = map(mouseX,50,1200,45,254);
  b = map(mouseX,255,1200,150,255);
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
    background(r,g,b);
  // Create an ellipse that will move around with you mouse about the X axis.
  fill(184, 198, 221);
  ellipse(mouseX,200,60,60);
  // Remember to fill the canvas with white paint before creating the ellipse.
}
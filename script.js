// Global Variables
var p5Canvas;
var myName;

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Carlos");
}

var wSize = 10;
var hSize = 10;

draw = function()  {
    wSize = wSize + 1;
    hSize = hSize + 1;

    fill(mouseX,0, mouseY);
    ellipse(mouseX,mouseY,100,100);
    ellipse(mouseX,mouseY,100,100);
};


// create an animation function below, then call it in draw()
// see example.js if you need a place to start!
// when you're ready, be sure to change index.html to link to this script instead of example.js

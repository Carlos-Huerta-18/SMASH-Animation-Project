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

mouseClicked = function(){
  var x = 0;
  draw = function() {
       fill(mouseX, 0,mouseY);
       ellipse(x,0,0,50);
       x = x+100;
  };
};
mouseDragged = function(){
fill(mouseX, 0, mouseY);
rect(mouseX,mouseY,mouseX,mouseY);
ellipse(mouseX,mouseY,mouseY,mouseY);
quad(mouseX,mouseY,mouseX,mouseX,mouseX,mouseX,mouseY,mouseY);

};



// create an animation function below, then call it in draw()
// see example.js if you need a place to start!
// when you're ready, be sure to change index.html to link to this script instead of example.js

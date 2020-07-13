var speed = 250;
var diameter = 400;
var x;
var y;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-show');
  x = 200;
  y = 200;
  background(0);
  noStroke()
}

function draw() {
  x += random(-speed, speed);
  y += random(-speed, speed);
  x = constrain(x, 0, windowWidth);
  y = constrain(y, 0, windowHeight);
  fill(255);
  ellipse(x, y, diameter, diameter);
}
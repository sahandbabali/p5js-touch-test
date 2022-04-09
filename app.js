function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  clear();
  let display = touches.length + " touches";
  text(display, 5, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

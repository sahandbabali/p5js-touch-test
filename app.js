var fontsize = 300;
var fontcolor;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  // clear();
  let display = touches.length + " touches";

  if (touches.length > 0) {
    console.log(touches);
    for (let i = 0; i < touches.length; i++) {
      ellipse(touches[i].x, touches[i].y, 200, 200);
    }
  }

  if (touches.length == 2) {
    line(touches[0].x, touches[0].y, touches[1].x, touches[1].y);
  }
  textSize(16);
  textAlign(CENTER);

  text(display, windowWidth / 2, 20);

  drawtheletter();
}

function drawtheletter() {
  if (touches.length > 0) {
    fontsize = map(touches[0].y, windowHeight / 2, windowHeight, 100, 500);
  }

  textSize(fontsize);
  textAlign(CENTER);
  text("ق", windowWidth / 2, windowHeight / 3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

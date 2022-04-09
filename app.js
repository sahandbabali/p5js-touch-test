function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  // clear();
  let display = touches.length + " touches";
  if (touches.length > 0) {
    console.log(touches);
    for (let i = 0; i < touches.length - 1; i++) {
      ellipse(touches[i].x, touches[i].y, 100, 100);
    }
  }

  if (touches.length == 2) {
    line(touches[0].x, touches[0].y, touches[1].x, touches[1].y);
  }
  text(display, 5, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

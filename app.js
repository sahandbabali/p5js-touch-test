function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  // clear();
  let display = touches.length + " touches";
  if (touches.length > 0) {
    console.log(touches);
  }

  if (touches.length > 1) {
    for (let i = 0; i < touches.length - 1; i++) {
      line(touches[i].x, touches[i].y, touches[i + 1].x, touches[i + 1].x);
    }
  }
  text(display, 5, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (y = 0; y < 400; y = y + 50){
    for (x = 0; x < 400; x = x + 50){
  if (x % 100 == 0) {
        if (y % 100 == 0) {
          fill(255, 255, 255);
        }
        if (y % 100 == 50) {
          fill(0, 0, 0);
        }
      }
      if (x % 100 == 50) {
        if (y % 100 == 50) {
          fill(255, 255, 255);
        }
        if (y % 100 == 0) {
          fill(0, 0, 0);
        }
      }
      rect(x, y, 50, 50);
  }
   }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
background(255);
for (y = 400; y > 0; y = y - 16){
  if (y % 3 == 0){
    fill(0, 255, 0);
  }
  if (y % 3 == 1){
    fill(255, 0, 0);
  }
  if (y % 3 == 2){
    fill(0, 0, 255);
    }
      circle(200, 200, y);
} 
}

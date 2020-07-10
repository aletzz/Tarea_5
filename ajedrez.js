function setup() {
  createCanvas(400, 400);
}

function draw() {
  var hilera = 0;
  var x = color(0,0,0);
  var y = color(255,255,255);
  while(hilera < 8){
    if(hilera%2 == 0){
     x = color(0,0,0);
      y = color(255,255,255);
    }else{
      x = color(255,255,255);
      y = color(0,0,0);
    }
    var columna = 0;
    while(columna < 8){
      if(columna % 2 == 0){
        fill(y);
      }else{
        fill(x);
      }
      rect(columna*50, hilera*50, 50,50);
      columna = columna+1;
        }
    hilera = hilera +1;
        }
 
}

let dia = 40;


function setup() {
    createCanvas(400, 200);
    background(220);
    noLoop();
  }
  
  function draw() {
    fill(128, 128, 0);
    noStroke();
  
    circle(100, 100, dia);
    circle(200, 100, dia);
    circle(300, 100, dia);
  }
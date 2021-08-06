var blower, blowermouth, ball
var blowButton


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 100, 100);
  blower = new Blower(300,200,200,15)
  blowerMouth = new Blowermouth(500,350,100,100)
}

function draw() {
  background(255,255,255);  
  blower.show()
  blowerMouth.show()
  drawSprites();
}
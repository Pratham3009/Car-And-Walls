var wall,thickness;
var speed,bullet,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);

  bullet = createSprite(50,200,50,50);
  bullet.debug = true;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug = true;
  
  wall.velocityX = speed;



}

function draw() {
  background(255,255,255);  

  function hasCollided(bullet,wall){
    bulletRightEdge = lbullet.x+lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false
  }

  function hasCollided(bullet,wall){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness * thickness * thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}
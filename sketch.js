var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
bullet = createSprite(50,200,15,15);
bullet.velocityX = speed;
bullet.shapeColor = "white";
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = 80,80,80;

damage = 0.5*weight*speed*speed/(thickness *thickness*thickness);
}

function draw() {
  background(255,255,255);  

if (wall.x-bullet.x < (bullet.width+wall.width)/2 || 
wall.y-bullet.y < (bullet.width+wall.width)/2 || 
bullet.x-wall.x < (bullet.width+wall.width)/2 || 
bullet.y-wall.y < (bullet.width+wall.width)/2){
     bullet.velocityX = 0;
     
    if(damge=3.68){
      bullet.shapeColor = "green";
    } 
    if(damage=12.34){
      bullet.shapeColor = "red";
    }
  }  
  drawSprites();
}
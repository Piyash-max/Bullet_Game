var bullet1,bullet2,bullet3,bullet4;
var collum1,collum2,collum3,collum4;
var speed , weight ;
var thickness ;

function setup() {
  createCanvas(1600,400);
  bullet1=createSprite(50, 100, 50, 50);
  bullet1.shapeColor='white';
  bullet2=createSprite(50, 200, 50, 50);
  bullet2.shapeColor='red';
  bullet3=createSprite(50, 300, 50, 50);
  bullet3.shapeColor='blue';
  bullet4=createSprite(50, 400, 50, 50);
  bullet4.shapeColor='green';
  collum1=createSprite(1500, 100, 40,70);
  collum1.shapeColor='white';
  collum2=createSprite(1500, 200, 40, 70);
  collum2.shapeColor='white';
  collum3=createSprite(1500, 300, 40, 70);
  collum3.shapeColor='white';
  collum4=createSprite(1500, 400, 40, 70);
  collum4.shapeColor='white';
  speed=random(223,321);
  weight=random(30,52);
  bullet1.velocityX=speed;
  bullet2.velocityX=speed;
  bullet3.velocityX=speed;
  bullet4.velocityX=speed;
  thickness=random(22,83)
}

function draw() {
  background("black");  

if(collum1.x-bullet1.x < (bullet1.width + collum1.width)/2){
  bullet1.velocityX=0;
  var Damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  if(Damage>10){
    bullet1.shapeColor='green';
  }
  if(Damage<5){
    bullet1.shapeColor='red';
  }
  
}if(collum2.x-bullet2.x < (bullet2.width + collum2.width)/2){
  bullet2.velocityX=0;
  var Damage=0.5*weight*speed*speed/thickness*thickness*thickness; 

  if(Damage>10){
    bullet2.shapeColor='green';
  }
  if(Damage<5){
    bullet2.shapeColor='red';
  }

}
if(collum3.x-bullet3.x < (bullet3.width + collum3.width)/2){
  bullet3.velocityX=0;
  var Damage=0.5*weight*speed*speed/thickness*thickness*thickness;  

  if(Damage>10){
    bullet3.shapeColor='green';
  }
  if(Damage<5){
    bullet3.shapeColor='red';
  }
}
if(collum4.x-bullet4.x < (bullet4.width + collum4.width)/2){
  bullet4.velocityX=0;
  var Damage=0.5*weight*speed*speed/thickness*thickness*thickness;  

  if(Damage>10){
    bullet4.shapeColor='green';
  }
  if(Damage<5){
    bullet4.shapeColor='red';
  }
}


  drawSprites();
}
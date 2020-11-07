
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
monkey=createSprite(80,350,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.scale=1.5;
  console.log(ground.x);
}


function draw() {
background("lightblue");
  monkey.collide(ground);
  if(keyDown("space")&& monkey.y >= 250){
    monkey.velocityY=-15;
  }
  if (ground.x < 0){
    
    ground.x = ground.width/2;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
  spawnBananas();
  spawnObstacles();
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,400,50);
  drawSprites();
}
function spawnBananas(){
if(frameCount%80===0){
  banana=createSprite(600,random(120,200),10,10);
  banana.addImage(bananaImage);
  banana.velocityX=-3;
  banana.scale=0.1;
  banana.lifeTime=10;
}
}
function spawnObstacles(){
  if(frameCount%150===0){
    obstacle=createSprite(600,330,100,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1;
    obstacle.lifeTime=150;
  }
}





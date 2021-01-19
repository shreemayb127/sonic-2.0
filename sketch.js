var ground,invisibleground,groundimg;
var sonic,sonicimg;
var sonicfoodGroup;
var gamestate="play";
var Sound1;
var b1;
var b2;
var b3;
var b4;

function preload(){
groundimg=loadImage("background.jpg")
sonicimg=loadImage("sonic.png")
sonicfoodimg=loadImage("bijli.png")
}

function setup() {
  createCanvas(600,600)
  ground = createSprite(300,500,50,20);
  ground.addImage("ground",groundimg);
  ground.scale=2.99
  invisibleground = createSprite(300,220,600,20);
  invisibleground.visible = false;
  b1=createSprite(300,0,600,10)
  b1.shapeColor="blue"
  b2=createSprite(300,600,600,10)
  b2.shapeColor="blue"
  b3=createSprite(600,300,10,600)
  b3.shapeColor="red"
  b4=createSprite(0,300,10,600)
  b4.shapeColor="red"
  sonic = createSprite(300,60,400,20);
  sonic.addImage(sonicimg);
  sonic.scale=0.45
  
  sonicfoodGroup=new Group()
  
}

function draw() {
 spawnsonicfood()
  stroke("red")
  textSize(55)
  fill("blue")
  text("game over", 150,300);
  background(0);
  if(gamestate==="play"){
  ground.velocityY=-(9+3*frameCount/1000);
  drawSprites();
  if (ground.y < 0){
      ground.y = 300
    }

    
    
    if(keyWentDown("right")){
    
    sonic.velocityX=20
  }
  if(keyWentDown("left")){
    
    sonic.velocityX=-20
  }
  
  if(keyWentUp("right")||keyWentUp("left")){
    
    sonic.velocityX=0
  }
  
  if(sonic.isTouching(sonicfoodGroup)){
      
    sonicfoodGroup.destroyEach()
    
    }
  
  sonic.collide(invisibleground);
    
  if(sonicfoodGroup.isTouching(b1)){
    
    gamestate="end"
    
  }
    
  }
else if(gamestate==="end"){
  
  sonic.velocityX=0
  sonic.velocityY=0
  ground.velocityX=0
  ground.velocityY=0
  sonicfoodGroup.velocityX=0
  sonicfoodGroup.velocityY=0
  stroke("red")
  textSize(55)
  fill("blue")
  text("game over", 150,300);
  
}
}

function spawnsonicfood() {
  if (frameCount %300 === 0) {
    var sonicfood = createSprite(600,610,40,10);
    sonicfood.x = Math.round(random(100,500));
    sonicfood.addImage(sonicfoodimg);
    sonicfood.scale = 0.5
    sonicfood.velocityY =-(9+3*frameCount/1000);
    
    sonicfood.lifetime = 600;
    
    sonicfoodGroup.add(sonicfood);
  }
}






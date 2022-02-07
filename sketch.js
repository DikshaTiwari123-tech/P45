   var backgroundImage;
   var boy , zombie;
   var stone;
   

  function preload() {
    backgroundImage = loadImage("./assests/background.png");
    boyImage = loadImage("./assests/boy.png");
    zombieImage = loadImage("./assests/zombie.png");
    stoneImage = loadImage("./assests/stone.png");
  }
  function setup() {
    createCanvas(800,400);
    bg = createSprite(300,400);
    zombie = createSprite(750,500,200,50);
    boy = createSprite(-70,500,200,50);
    
    
    bg.addImage("bg1",backgroundImage);
    zombie.addImage("Z1",zombieImage);
    boy.addImage("B1",boyImage);
    

    bg.velocityX = 5;
    
    bg.scale = 3;
    boy.scale = 0.5;
    zombie.scale = 0.5;
    
    
      }

function draw() {
   
  background(0);
  if(bg.x>600){
    bg.x = 300
  }
  makeObstacle();
  
  drawSprites();
}

function makeObstacle(){
     
stone = createSprite(200,500,50,50);
stone.scale = 0.07;
stone.addImage("stoneImg",stoneImage);
  
}
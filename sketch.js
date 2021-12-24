var bird, birdImg;
var diamond,diamondGroup, diamondImg;
var ghost,ghostGroup, ghostImg;
var plane , playGroup , playImg;
var background,backgroundImg;
var gameState = "play";


function preload(){
birdImg = loadImage("bird.png");
diamondImg = loadImage("polished-diamond.png");
ghostImg = loadImage("ghost.png");
planeImg = loadImage("obstacle1.png");
backgroundImg = loadImage("background.png");
}

function setup() {
 createCanvas(600,600);

 background = createSprite(300,300);
  background.addImage("background",backgroundImg);
  background.velocityY = 1;
  
   bird=createSprite(200,200,50,50);
   bird.addImage("bird", birdImg);
   bird.scale =0.3;

   diamondGroup = new Group();
   ghostGroup = new Group();
   planeGroup = new Group();
}

function draw() {
 background(200);

 
     if(background.y > 400 ){
         tower.y = 300;
     }
 
     if(keyDown("SPACE")){
        bird.velocityY = -5;
      }
      bird.velocityY = ghost.velocityY +0.5;



      spawnplane();
}

function spawnplane (){
    if(frameCount % 240 === 0){
      plane = createSprite(200,-50);
      plane.addImage("door", doorImg);
      plane.velocityX = 1;
      plane.lifetime =800;
      planeGroup.add(door);
      plane.y = Math.round(random(120,400));
    }
}





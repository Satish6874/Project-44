var player,ball,edges;
var score = 0;
var gameState = "play";

function setup() {
  createCanvas(800,500);
 
 ball = createSprite(400,250,25,25);
 ball.shapeColor = "white";

 player = createSprite(400, 450, 200, 20);
 player.shapeColor = "white";

 
}

function draw() {
  background(0);
  edges = createEdgeSprites();
  player.bounceOff(edges);
  ball.bounceOff(edges);
  ball.bounceOff(player);

  if(gameState === "play"){
   if (keyDown(LEFT_ARROW)){
     player.velocityX = -8;
   }

   if (keyDown(RIGHT_ARROW)){
     player.velocityX = 8;
   }

     ball.velocityX = 7;
     ball.velocityY = 8;

     if (ball.bounceOff(player)){
       ball.velocityX = ball.velocityX*(-1);
       ball.velocityY = ball.velocityY*(-1);
       score = score+5;
     } 
  }
  
  if (gameState === "end"){
    player.velocityX = 0;
    ball.velocityX = 0;
    ball.velocityY = 0;
    
    fill(255);
    textSize(50);
    text("Game Over",400,250);
  }

   fill(255);
   textSize(30);
   text("Score: "+score,200,30);
  drawSprites();
}

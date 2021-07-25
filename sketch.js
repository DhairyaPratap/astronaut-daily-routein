var astronaut,brush,bath,drink,eat,gym,float1,sleep
var background2,backgroundImg
var leftWall,rightWall,bottomWall,upWall;

function preload(){
backgroundImg=loadImage("iss.png");
sleep=loadAnimation("sleep.png");
burshing=loadAnimation("brush.png")
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat=loadAnimation("eat1.png","eat2.png")
drink=loadAnimation("drink1.png","drink2.png")
float1=loadAnimation("move.png")
bath=loadAnimation("bath1.png","bath2.png")
}

function setup() {
  createCanvas(800,400);
  background2=createSprite(400,200);
  background2.addImage(backgroundImg)
  background2.scale=0.150
  astronaut=createSprite(400, 200, 50, 50);
 astronaut.scale=0.1
  astronaut.addAnimation("sleeping",sleep)
  leftWall=createSprite(50,200,30,400)
  leftWall.visible=false
  rightWall=createSprite(750,200,30,400)
  rightWall.visible=false
  upWall=createSprite(400,20,800,30)
  upWall.visible=false
  bottomWall=createSprite(400,380,800,30)
  bottomWall.visible=false
 
  float1.scale=2
}

function draw() {
  background(255,255,255);  


if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",burshing)
  astronaut.changeAnimation("brushing")
  astronaut.y=250
  astronaut.x=400
  astronaut.velocityX=0
  astronaut.velocityY=0
}

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y=300
    astronaut.x=380
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.x=250
    astronaut.y=250
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.x=400
    astronaut.y=200
    astronaut.velocityX=0
    astronaut.velocityY=0
  }    

  if(keyDown("m")){
astronaut.addAnimation("moving",float1)
astronaut.changeAnimation("moving")         
astronaut.velocityY=3
astronaut.velocityX=3

  }

  astronaut.bounceOff(leftWall)
  astronaut.bounceOff(rightWall)
  astronaut.bounceOff(bottomWall)
    astronaut.bounceOff(upWall)


    drawSprites();
    fill("yellow")
    text("INSTRUCTIONS:\n Up Arrow = brushing\n Down Arrow = gymming\n Left Arrow = Bathing\n Right Arrow = Eating\n m key = moving ",30,50)
}
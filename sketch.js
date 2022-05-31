let ground;
let ball;
let pin
var ball_img;
var bg_img;
var pin_img



function preload()
{
  ball_img = loadImage("Ball.png");
  bg_img = loadImage("bg.png");
  pin_img = loadImage("pins.png");
  pin_img1 = loadImage("pins.png");
  fall = loadImage("fall.png")
  fall1=loadImage('tilt.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  ball = createSprite(width/2,height-30,30,30);
  ball.addImage(ball_img);
  ball.scale=0.2
  ball.debug=true
  ball.setCollider('circle',0,0,250)
  
  pin1 = createSprite(width/2,90,50,30);
  pin1.addImage(pin_img);
  //pin1.addImage(fall)
  pin1.scale=0.2
  pin1.debug=true
  pin1.setCollider('rectangle',0,0,20,100)

  pin2 = createSprite(width/2-20,90,50,30);
  pin2.addImage(pin_img1);
  //pin2.addImage(fall)
  pin2.scale=0.2
  pin2.debug=true
  pin2.setCollider('rectangle',0,0,20,100)

  pin3 = createSprite(width/2+20,90,50,30);
  pin3.addImage(pin_img);
  pin3.addAnimation("falling",fall)
  pin3.scale=0.2

  pin4 = createSprite(width/2+20,90,50,30);
  pin4.addImage(pin_img);
  pin4.addAnimation("falling",fall)
  pin4.scale=0.2

  pin5 = createSprite(width/2-20,90,50,30);
  pin5.addImage(pin_img);
  pin5.addAnimation("falling",fall)
  pin5.scale=0.2

  pin6 = createSprite(width/2-20,90,50,30);
  pin6.addImage(pin_img);
  pin6.addAnimation("falling",fall)
  pin6.scale=0.2

  pin7 = createSprite(width/2+40,90,50,30);
  pin7.addImage(pin_img);
  pin7.addAnimation("falling",fall)
  pin7.scale=0.2

  pin8 = createSprite(width/2+50,90,50,30);
  pin8.addImage(pin_img);
  pin8.addAnimation("falling",fall)
  pin8.scale=0.2

  pin9 = createSprite(width/2-40,90,50,30);
  pin9.addImage(pin_img);
  pin9.addAnimation("falling",fall)
  pin9.scale=0.2

  pin10 = createSprite(width/2-50,90,50,30);
  pin10.addImage(pin_img);
  pin10.addAnimation("falling",fall)
  pin10.scale=0.2

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(0);
  image(bg_img,0,0,windowWidth,windowHeight);
 if (keyDown("UP_ARROW")){
ball.velocityY=-10
ball.scale=0.2
 }
 if(pin1.isTouching(ball)){
   pin1.addImage(fall)
   
 }
 if(pin2.isTouching(ball)){
  pin2.addImage(fall)
 
}
if(pin3.isTouching(ball)){
   pin3.addImage(fall)
   
 }
 if(pin4.isTouching(ball)){
  pin4.addImage(fall)
 
}
if(pin5.isTouching(ball)){
  pin5.addImage(fall)
  
}
if(pin6.isTouching(ball)){
 pin6.addImage(fall)

}
if(pin7.isTouching(ball)){
  pin7.addImage(fall)
  
}
if(pin8.isTouching(ball)){
 pin8.addImage(fall)

}
if(pin9.isTouching(ball)){
  pin9.addImage(fall)
  
}
if(pin10.isTouching(ball)){
 pin10.addImage(fall)

}
drawSprites();
if (keyDown ("space")){
  image(bg_img,0,0,windowWidth,windowHeight);
  ball.y=height-30
  reset()

}
  
}
function reset(){
  pin1 = createSprite(width/2,90,50,30);
  pin1.addImage(pin_img);
  //pin1.addImage(fall)
  pin1.scale=0.2
  pin1.debug=true
  pin1.setCollider('rectangle',0,0,20,100)

  pin2 = createSprite(width/2-20,90,50,30);
  pin2.addImage(pin_img1);
  //pin2.addImage(fall)
  pin2.scale=0.2
  pin2.debug=true
  pin2.setCollider('rectangle',0,0,20,100)

  pin3 = createSprite(width/2+20,90,50,30);
  pin3.addImage(pin_img);
  pin3.addAnimation("falling",fall)
  pin3.scale=0.2

  pin4 = createSprite(width/2+20,90,50,30);
  pin4.addImage(pin_img);
  pin4.addAnimation("falling",fall)
  pin4.scale=0.2

  pin5 = createSprite(width/2-20,90,50,30);
  pin5.addImage(pin_img);
  pin5.addAnimation("falling",fall)
  pin5.scale=0.2

  pin6 = createSprite(width/2-20,90,50,30);
  pin6.addImage(pin_img);
  pin6.addAnimation("falling",fall)
  pin6.scale=0.2

  pin7 = createSprite(width/2+40,90,50,30);
  pin7.addImage(pin_img);
  pin7.addAnimation("falling",fall)
  pin7.scale=0.2

  pin8 = createSprite(width/2+50,90,50,30);
  pin8.addImage(pin_img);
  pin8.addAnimation("falling",fall)
  pin8.scale=0.2

  pin9 = createSprite(width/2-40,90,50,30);
  pin9.addImage(pin_img);
  pin9.addAnimation("falling",fall)
  pin9.scale=0.2

  pin10 = createSprite(width/2-50,90,50,30);
  pin10.addImage(pin_img);
  pin10.addAnimation("falling",fall)
  pin10.scale=0.2
 
}


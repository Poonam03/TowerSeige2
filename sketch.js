const World =Matter.World;
const Bodies =Matter.Bodies;
const Engine =Matter.Engine;
var a;
var circles=[];
var gameState="onSling"

function preload()
{
  polyImg=loadImage("polygon.png");
}

function setup() {
  createCanvas(1000,500);
  engine=Engine.create();
  world=engine.world;
  polygon=Bodies.circle(100,250,20)
  World.add(world,polygon);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
  ground=new Ground(690,220,200,10);
  box1=new Box(630,200,30,40);
  box2=new Box(660,200,30,40);
  box3=new Box(690,200,30,40);
  box4=new Box(720,200,30,40);
  box5=new Box(750,200,30,40);

  box6=new Box(660,185,30,40);
  box7=new Box(690,185,30,40);
  box8=new Box(720,185,30,40);

  box9=new Box(690,145,30,40);

  ground2=new Ground(390,300,250,10);
  box10=new Box(300,280,30,40);
  box11=new Box(330,280,30,40);
  box12=new Box(360,280,30,40);
  box13=new Box(390,280,30,40);
  box14=new Box(420,280,30,40);
  box15=new Box(450,280,30,40);
 
  box16=new Box(480,280,30,40);

  box17=new Box(330,265,30,40);
  box18=new Box(360,265,30,40);
  box19=new Box(390,265,30,40);
  box20=new Box(420,265,30,40);
  box21=new Box(450,265,30,40);

  box22=new Box(360,225,30,40);
  box23=new Box(390,225,30,40);

  box24=new Box(420,225,30,40);

  box25=new Box(390,180,30,40);
 

  slingShot=new Slingshot(polygon,{x:100,y:250});
  
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine)
  imageMode(CENTER)
  image(polyImg,polygon.position.x,polygon.position.y,40,40);
  ground.display();
  stroke(10);
  fill("skyblue")
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ground2.display();
  fill("cyanblue");
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  fill("pink")
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  fill("yellow")
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  fill("red")
  box25.display();
 


  slingShot.display();



  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], 450,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
  if(keyCode===32)
  {
    slingShot.attach(polygon)
    Matter.Body.setPosition(polygon,{x:100,y:250})
    gameState-"onSling"
  }
} 
function mouseDragged()
{
  if(gameState !== "launched")
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  slingShot.fly();
  gameState="launched"
}
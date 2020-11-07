
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;

var ground,tree;
var stone;
var boyImage,boy;
var launcher;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
 boyImage=loadImage("sprites/boy.png");	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,height,1200,20);
    tree=new Tree(590,700);

	stone=new Stone(140,600,20,20);

	boy=createSprite(200,640,10,10);
	boy.addImage(boyImage);
	boy.scale=0.08;
	
	mango1=new Mango(450,350,20);
	mango2=new Mango(550,200,20);
	mango3=new Mango(650,330,20);
	mango4=new Mango(520,275,20);
	mango5=new Mango(500,400,20);
    mango6=new Mango(650,330,20);
	mango7=new Mango(750,275,20);
	mango8=new Mango(600,250,20);
    mango9=new Mango(660,180,20);
  
   launcher=new Launcher(stone.body,{x:160,y:600});

	Engine.run(engine);
  
	var render = Render.create({element:document.body,engine:engine,options:{width:1300,height:600,wireframes:false}})
}

function draw() {
  rectMode(CENTER);
  background("PINK");
  textSize(25)
  text("Press'Space'to get second chance",50,50)
  
 ground.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();

 launcher.display();
 stone.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
 detectCollision(stone,mango9);

 drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body);
	}
}

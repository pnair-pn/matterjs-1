const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, paperObject, paperBody,ground;

function preload()
{

}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(80 , 500 , 50 , {restitution:0.3, friction:0.5,density:1.2,isStatic:false});
	World.add(world, paperBody);

	dustbin1 = new Dustbin(500,510,20,100);
	dustbin2 = new Dustbin(650,510,20,100);
	dustbin3 = new Dustbin(575,550,130,20);
	paperObject = new Paper(80,500,50);
	ground = new Ground(width/2, 560, 800, 10);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.x = paperBody.x;
  paperObject.y = paperBody.y;

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  ground.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyDown("up")){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}
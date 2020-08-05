
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  img = loadImage("Sprites/TrashBin.png");
}

function setup() {
	createCanvas(1200, 600);

	var options_ground = {
		isStatic : true
  }

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,300,25);

	box1 = new Box(1000,560,160,20,color(255));
	box2 = new Box(930,480,20,160,color(255));
	box3 = new Box(1070,480,20,160,color(255));

	var ground = Bodies.rectangle(600,555,1200,20,options_ground);
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  fill("white");
  stroke("white");
  textSize(25);
  text("Press the Up Arrow Key!!!",275,200);

  fill("black"); 
  rect(600,580,1200,20);

  paperBall.display();
  
  box1.display();
  box2.display();
  box3.display();

  image(img,900,375,200,200);

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:10,y:-10});
	}
}
   




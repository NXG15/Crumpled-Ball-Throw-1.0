
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(60,635);
	can = new Dustbin(700,605,100);
	can2 = new Dustbin(520,605,100);
	can3 = new Bottom(610,658,180);
	ground = new Ground(400,675,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  

  ball.display();
  can.display();
  can2.display();
  can3.display();
  ground.display();
  //drawSprites();
 
  //keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:135,y:-135});
	}
}


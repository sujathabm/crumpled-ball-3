
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,
	}

	


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

paper1=new paper(200,100,35);
leftSide=new dustbin(270,600,20,100);
rightSide=new dustbin(520,600,20,100);
bottomSide=new dustbin(400,650,230,20);
dustImage=loadImage("dustbin.jpg")
	//Create the Bodies Here.
launcher1=new launcher(paper1.paperObject,{x:280,y:180});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper1.display();
  leftSide.display();
  rightSide.display();
  bottomSide.display();
  launcher1.display();
  rect(ground.position.x,ground.position.y,width,10);
  imageMode(CENTER);
        image(dustImage,350,600,150,180);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log("hello");
		Matter.Body.applyForce(paper1.paperObject,paper1.paperObject.position,{x:150,y:-150});

	}
}

function mouseDragged(){
	Matter.Body.setPosition(paper1.paperObject,{x:mouseX,y:mouseY});

}



function mouseReleased(){
launcher1.release();
}




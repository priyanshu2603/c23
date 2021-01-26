var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	pixel1Sprite = createSprite(400, 650, 200, 20);
	pixel1Sprite.shapeColor = color("red")

	pixel2Sprite = createSprite(490, 590, 20, 100);
	pixel2Sprite.shapeColor = color("red")

	pixel3Sprite = createSprite(310, 590, 20, 100);
	pixel3Sprite.shapeColor = color("red")
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	pixel1 = Bodies.rectangle(400, 645, 130, 20, { isStatic : true })
	World.add(world, pixel1);

	pixel2 = Bodies.rectangle(460, 590, 20, 130, { isStatic : true })
	World.add(world, pixel2);

	pixel3 = Bodies.rectangle(330, 590, 20, 130, { isStatic : true })
	World.add(world, pixel3);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody ,false);
    
  }
}





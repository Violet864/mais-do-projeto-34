
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(250,width,height,20)
  ball = new Ball(200,52,width / 2 + 80, height / 2 - 80)
  
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ground.show()
  ball.show()

  
}


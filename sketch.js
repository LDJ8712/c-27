const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundimg
var engine, world;
var box1, pig1;
var slingshot
function preload (){
backgroundimg= loadImage("sprites/bg.png")

}
function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70)
    box4 = new Box(920,240,70,70)
    box5 = new Box(810,160,70,70)
    pig1 = new Pig(810, 350);
    pig2 = new Pig(810,220)
    log1 = new log(810,260,300,PI/2)
    log2 = new log(810,180,300,PI/2)
    log3 = new log(760,120,150,PI/7)
    log4 = new log(870,120,150,PI/-7)
    extralog = new log(170,100,150,PI/-7)
    Bird1 = new Bird(100,100)
   
var options = {
    bodyA:Bird1.body,
    bodyB:extralog.body,
    length:10,
    stiffness:0.03

} 
    
   var sling1=Constraint.create(options)
  World.add(world,sling1);
   
    
}

function draw(){
    background(backgroundimg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    Bird1.display();
    box3.display();
    box4.display();
    log3.display();
    log4.display();
    box5.display();
    pig2.display();
    extralog.display();
    line(Bird1.body.position.x,Bird1.body.position.y,extralog.body.position.x,extralog.body.position.y)

}
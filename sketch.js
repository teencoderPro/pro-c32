const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15,box16

function preload(){
}

function setup(){
     var canvas=createCanvas(1200,400);
     engine = Engine.create();
     world = engine.world;

     ground=new Ground(400,500,100,10)
}

function draw () {
background(50);
Engine.update(engine);

ground.display();

}
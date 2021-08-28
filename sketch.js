const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17;
var box18,box19,box20,box21,box22,box23,box24,box25;

function preload(){
}

function setup(){
     var canvas=createCanvas(1200,400);
     engine = Engine.create();
     world = engine.world;

     ground1=new Ground(600,390,200,10);
     ground2=new Ground(1005,190,140,10)

     box1=new Box(525,370,25,30);
     box2=new Box(550,370,25,30);
     box3=new Box(575,370,25,30);
     box4=new Box(600,370,25,30);
     box5=new Box(625,370,25,30);
     box6=new Box(650,370,25,30); 
     box7=new Box(675,370,25,30);
     box8=new Box(650,340,25,30);
     box9=new Box(625,340,25,30);
     box10=new Box(600,340,25,30);
     box11=new Box(575,340,25,30);
     box12=new Box(550,340,25,30);
     box13=new Box(575,310,25,30);
     box14=new Box(600,310,25,30);
     box15=new Box(625,310,25,30);
     box16=new Box(600,280,25,30);
     box17=new Box(955,170,25,30);
     box18=new Box(980,170,25,30);
     box19=new Box(1005,170,25,30);
     box20=new Box(1030,170,25,30);
     box21=new Box(1055,170,25,30);
     box22=new Box(1030,140,25,30);
     box23=new Box(1005,140,25,30);
     box24=new Box(980,140,25,30);
     box25=new Box(1005,110,25,30)



}

function draw () {
background(50);
Engine.update(engine)

ground1.display();
ground2.display();


fill ("lightblue");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

fill ("pink");
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box22.display();
box23.display();
box24.display();


fill ("lightgreen");
box13.display();
box14.display();
box15.display();
box25.display();


fill ("grey")
box16.display();

}

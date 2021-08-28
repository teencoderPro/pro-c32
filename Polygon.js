class Polygon{
     constructor(x,y,radius){
          var options ={
               'restitution':0.8,
               'friction':1.0,
               'density':1.0
          }
          polygon = Bodies.circle(x,y,radius,options,6)
          polygon.radius=radius;
          World.add(world,polygon);

          }
          display(){
          var position=polygon.position
          imageMode(CENTER);
          image("polygon.png",polygon.position.x,polygon.position.y,40,40);
     }
}
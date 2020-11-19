var car, wall,car2
var speed, weight


function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);

 speed = random(55,90)
 speed2 = random(69,120)
 weight = random(400,1500)

 wall = createSprite(1500,200,60,200)

  car  = createSprite(50,110,50,20)

  car.velocityX = speed

  car2 = createSprite(50,190,50,20)
car2.velocityX = speed





}

 


function draw() {
  background(255,255,255); 
  
  if (wall.x-car.x < (wall.width/2+car.width/2))
{
  car.velocityX = 0
  var deformation = 0.5 * weight * speed * speed/22509
  if(deformation>180)
  {
    car.shapeColor = color(255,0,0)
  }
  if(deformation<180 && deformation>100)
  {
car.shapeColor = color(230,230,0)
  }
  if(deformation<100)
  {
    car.shapeColor = color(0,255,)
  }

  }

  if (wall.x-car2.x < (wall.width/2+car2.width/2))
  {
    car2.velocityX = 0
    var deformation = 0.5 * weight * speed2 * speed/22509
    if(deformation>180)
    {
      car2.shapeColor = color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
  car2.shapeColor = color(230,230,0)
    }
    if(deformation<100)
    {
      car2.shapeColor = color(0,255,)
    }
  
    }
  


  line (50,150,wall.x,150)
  line(50,240,wall.x,240)


  drawSprites();
}
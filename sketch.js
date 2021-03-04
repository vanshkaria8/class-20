var a,b;


function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
b= createSprite(200,200,50,50);
  
}

function draw() {
  background(255,255,255);
  
  b.x=World.mouseX;
  b.y=World.mouseY;


if(b.x-a.x<a.width/2+b.width/2&&a.x-b.x<b.width/2+a.width/2){

  b.shapeColor="red";
  a.shapeColor="red";
}

else{
  b.shapeColor="green";
  a.shapeColor="green";
}

  drawSprites();



}
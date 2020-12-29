var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background("grey");
  movingRect.x=World.mouseX;
  movingRect.y= World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  if((movingRect.x-fixedRect.x)<=(fixedRect.width/2+movingRect.width/2)&&(movingRect.x-fixedRect.x)>=-(fixedRect.width/2+movingRect.width/2))
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else if((movingRect.y-fixedRect.y)<=(fixedRect.height/2+movingRect.height/2)&&(movingRect.y-fixedRect.y)>=-(fixedRect.height/2+movingRect.height/2))
  {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else 
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}
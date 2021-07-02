var box
function setup() {
  createCanvas(1250,550);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyDown("right")){
    box.x = box.x - 2
  }
  if(keyDown("left")){
    box.x = box.x + 2
  }
  if(keyDown("down")){
    box.y = box.y - 2
  }
  if(keyDown("up")){
    box.y = box.y + 2
  }

  drawSprites(); 
}





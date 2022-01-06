var box1;


function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,269,100,70,1,-1);

}

function draw() 
{
  background(220);
  box1.show();
  box1.moveUp();
  box1.move();
}


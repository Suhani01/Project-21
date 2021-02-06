var canvas;
var music;
var box1,box2,box3,box4
var square
var edge1,edge2,edge3


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(100,600,200,50)
    box1.shapeColor = "blue"
    box2 = createSprite(300,600,200,50)
    box2.shapeColor = "green"
    box3 = createSprite(500,600,200,50)
    box3.shapeColor = "yellow"
    box4 = createSprite(700,600,200,50)
    box4.shapeColor = "purple"

    square = createSprite(random(10,10),500,30,30)
    square.shapeColor = "grey"
    square.velocityX=-3
    square.velocityY=5 
   

   


}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites()
    square.bounceOff(edges)
    
    if(box1.isTouching(square)&& square.bounceOff(box1)){
        square.shapeColor = "blue"
        music.play();

    }

    if(box2.isTouching(square)&& square.bounceOff(box2)){
        square.shapeColor = "green"


    }

    if(box3.isTouching(square)){
        square.velocityX=0
        square.velocityY=0
        music.stop();
        

    }
    if(box4.isTouching(square)&& square.bounceOff(box4)){
        square.shapeColor = "purple"

    }

    
    
    

    
drawSprites();
// bounceOff();
// isTouching();

}


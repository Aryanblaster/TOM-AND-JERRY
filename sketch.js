var tom,tomImage,tomRunning,tomSitting;
var jerry,jerryImage;
var garden,gardenImage;
function preload() {
 tomImage = loadImage("images/cat1.png");
 jerryImage = loadImage("images/mouse1.png");
 gardenImage = loadImage("images/garden.png");

    //load the images here
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
    tom = createSprite(600,200,20,40)
    tom.addImage(tomImage);
    tom.scale = 0.17
    tom.setCollider("rectangle",0,0,40,40);

    jerry = createSprite(100,200,5,10)
    jerry.addImage(jerryImage);
    jerry.scale = 0.20
    jerry.setCollider("rectangle",0,0,40,40);
}

function draw() {

    background("lightblue");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning", cat2);
        tom.changeAnimation("tomRuning")

    }


  //For moving and changing animation write code here


}

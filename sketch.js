var Play = 1;
var End = 0;
var gamestate = Play;



var player,player_image;
var rock1,rock2,rock1_image,rock2_image,turtle_image;
var bird,bird_image;
var ground,invisible_ground,groundImage;
var cloud,cloudImage;
var obstacle,obstacle_image;
var bg;
var fruits;

var obstacleGroup;



function preload() {
rock1_image = loadImage("rock1.jpg");
rock2_image = loadImage("rock2.jpg");
bird_image  = loadImage("bird.png")
ground_Image = loadImage("background.gif")
player_image = loadAnimation("running.jpg","running2.jpg","running3.jpg","running4.jpg","running5.jpg");
cloudImage   = loadImage("cloud.gif")
bg = loadImage("bg.jpg")
}
function setup() {
createCanvas(800,400);
ground = createSprite(400,385,800,20)
ground.addImage(ground_Image)

invisible_ground = createSprite(400,393,800,20)
invisible_ground.visible = false;
player = createSprite(90,393,20,50)
player.addAnimation("run",player_image);
player.scale=0.2;

obstacleGroup = new Group();


}

function draw() {
  background(255);  


ground.velocityX  = -5;
if(ground.x < 0) {
  ground.x = ground.width/2;
}
player.collide(invisible_ground);
//player.collide(ground);
spawnObstacles();
spawnClouds();
//console.log(player.y)
if (keyDown("Space" ) &&  player.y > 335) {
player.velocityY = -14;
}
player.velocityY = player.velocityY + 1;













  drawSprites();

}
function spawnClouds() {
if (frameCount  % 90 === 0){
  fill(" blue")
  cloud = createSprite(800,300,30,30)
  cloud.addImage("fly",cloudImage);
cloud.velocityX = -5;
cloud.y = random(50,200)
cloud.lifetime = 160;
}
}

function spawnObstacles() {
  if (frameCount %  60=== 0){
obstacle = createSprite(800,370,30,30)
obstacle.velocityX = -6;
obstacle.lifetime = 133;

}
}



















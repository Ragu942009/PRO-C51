var bird, birdImg
var rock, rockImg
var tree, treeImg
var balloon, balloonImg
var bg, bgImg
var birdGroup, treeGroup, rockGroup

function preload() {
  // birdImg= loadImage("images/bird.png")
  rockImg = loadImage("images/rock.png")
  balloonImg = loadImage("images/hotairballoon.png")
  //treeImg=loadImage("images/tree.png")
  bgImg = loadImage("images/land.jpeg")
}

function setup() {
  createCanvas(800, 400);

  //creating the background
  bg = createSprite(400, 200, 50, 50)
  bg.addImage(bgImg)
  bg.scale = 1.3
  // creating the balloon
  balloon = createSprite(150, 200, 50, 50)
  balloon.addImage(balloonImg)
  balloon.scale = 0.1
  // making the background move
  bg.velocityX = -10

}

function draw() {
  background(255, 255, 255);
  drawSprites();
  // making the hot air balloon jump
  if (keyDown("space")) {
    balloon.velocityY = -6;
  }

  // creating the rock
  rock= createSprite(500,360,350,160)
  rock.addImage(rockImg)
  rock.scale = 0.4



}







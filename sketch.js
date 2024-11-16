let player;
let platforms = [];
let platform;
let gameControl;
let playerJump = false;
let directionY = 1;
let jumpCounter = 0;
const constraints = {
   
    groundHeight: 375,
    skyHeight: 50
}

function setup() {
  createCanvas(800, 500);

  rectMode(CENTER);
  textAlign(CENTER);
  player = {
    x: 400,
    y: 375,
    width: 30,
    height: 70,
    velocity: 2,
    jumpPower: 15,
    fallingSpeed: 2,
    isOnGround:true,
    gravity:0.8
  };
  gameControl = {
    stage: 1,
  };

platform={
    x:200,
    y:300,
    width:200,
    height:40
}
}

function draw() {
  if (gameControl.stage == 1) {

    playLevel01()
  }
}

function playLevel01(){
    background(20, 30, 20);
    drawGround();
    drawPlatform();
    drawPlayer();
    handlePlayerMovement();
    gravity();
}

function drawGround(){
    noStroke();
    fill(100, 200, 75);
    rect(width / 2, 450, width, 100);

    noFill();
    stroke(0);
    strokeWeight(20);
    rect(width / 2, height / 2, width, height);
  
}


function drawPlatform(){
    stroke(0);
    strokeWeight(5);
    fill(255, 120, 0);
    rect(platform.x, platform.y, platform.width, platform.height);
}

function drawPlayer(){
    stroke(0);
    fill(100, 0, 255);
    rect(player.x, player.y, player.width, player.height);
}


function handlePlayerMovement(){
    if(keyIsDown(LEFT_ARROW)){
        player.x -= 5;
    }
    if(keyIsDown(RIGHT_ARROW)){
        player.x+=5
    }
    if(keyIsDown(UP_ARROW)){
        playerJump = true;
        player.isOnGround = false;
        jumpCounter = 0;
    }
    else{
        playerJump=false;
    }

    if(player.x >= platform.x-platform.width/2 && player.x <= platform.x + platform.width/2 && player.y >= platform.y - platform.height/2 && player.y  <= platform.y + platform.height/2 && playerJump==false)
        {
    
          player.y = player.y;
          player.velocity = 0;
          jumpCounter = 0;
        }
}




function gravity() {
    
  if (player.y >= constraints.groundHeight && !playerJump) {
    player.y = player.y;
  } else {
    player.y = player.y + directionY * player.velocity;
  }

  if (playerJump) {
    if (player.y <= constraints.skyHeight || jumpCounter >= player.jumpPower) {
        if(player.y >= constraints.groundHeight){
            player.y = constraints.groundHeight
        }
        else{
            player.velocity = player.fallingSpeed;
        }
      
    } else {
      player.velocity = -player.jumpPower;
      jumpCounter += 1;
    }
  } else {
    player.velocity = player.fallingSpeed;
  }
}

let player;
let platforms = [];
let gameControl;
let playerJump = false;


function setup(){
    createCanvas(800, 500);
    
    rectMode(CENTER);
    textAlign(CENTER)
    player = {
        x:400,
        y:375,
        width: 30,
        height:70
    }
    gameControl = {
        stage:1
    }

    platforms.push({x:200, y:300, width:200, height:40});
    
}

function draw(){
    if (gameControl.stage == 1){
        game();
        keyPressed();
    }
}

function game(){
    background(20, 30, 20);
    noStroke();
    fill(100, 200,75);
    rect(width/2, 450, width, 100);
    noFill();
    stroke(0)
    strokeWeight(20);
    rect(width/2, height/2, width, height);

    // platform
    stroke(0);
    strokeWeight(5);
    fill(255,120,0);
    rect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0].height);


    //player
    stroke(0);
    fill(100, 0, 255);
    rect(player.x, player.y, player.width, player.height);

}

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        player.x -=5;
    }
    if (keyCode === RIGHT_ARROW){
        player.x +=5;
    }

    if(keyCode === UP_ARROW){
        playerJump = true;
    }
    
    if(keyCode === DOWN_ARROW){
        playerJump = false;
    }
}
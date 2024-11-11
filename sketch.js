let player;
let platforms = [];
let gameControl;


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
    }
}

function game(){
    background(20, 30, 20);
    noStroke();
    fill(100, 200,75);
    rect(width/2, 450, width, 100);
}
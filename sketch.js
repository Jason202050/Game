var player1
var enemy1
var bg
var score = 0;


function setup(){

createCanvas(1100,500);

bg = new Bg()

player1 = new Player(580,460);

enemy1 = new Enemy(100,100);

                 
}

function draw(){

background("black");


player1.display();
enemy1.display();
bg.display();

for (var i = 0; i < enemy1.enemyGroup.length; i++) {
    
    if(enemy1.enemyGroup.get(i).isTouching(player1.bullet)){
    enemy1.enemyGroup.get(i).remove()
    score =score+1;

    }
}

drawSprites()
//fill ("white")
//textSize(25);
//text("score - " + score , 800,100)
}

function mouseReleased(){
    player1.shoot()
}
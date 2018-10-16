var bg;
//var c2 = new enemy(50,50,15,15, 2);

var _sprites = [];
var _player;
var rain1;
var _enemycount = 0;


function setup() {
    createCanvas(1420, 780);
    bg = color(0);
    _player = new Ship(695, 730, 645, 730, 670, 680, 1);
    _sprites.push(_player);
    //_sprites.push(c2);
    
    RespawnEnemies();

}

function draw() {
    background(bg);
    for(var i = 0; i < _sprites.length; i++) {
        _sprites[i].control();
        for(var j = 0; j < _sprites.length; j++){
            if(_sprites[i] && _sprites[j]){
                checkCollisions(_sprites[i], _sprites[j]);
            }
        }
    }


}

function checkCollisions(a,b){
    if(a.isColliding(b) && a.team !== b.team){
        a.handleCollision();
        b.handleCollision();
        
    }
} 

function RespawnEnemies(){
    _enemycount = 0;
    
    //Round 1
    _sprites.push(new RainDropEnemy(50, 0, 2));
    _sprites.push(new RainDropEnemy(150, -200, 2));
    _sprites.push(new RainDropEnemy(200, 0, 2));
    _sprites.push(new RainDropEnemy(300, -150, 2));
    _sprites.push(new RainDropEnemy(500, 0, 2));
    _sprites.push(new RainDropEnemy(600, -150, 2));
    _sprites.push(new RainDropEnemy(900, -250, 2));
    _sprites.push(new RainDropEnemy(1150, -125, 2));
    _sprites.push(new RainDropEnemy(1300, -285, 2));
    _sprites.push(new RainDropEnemy(750, -125, 2));
    _sprites.push(new RainDropEnemy(800, -150, 2));
    _sprites.push(new DeathBot(1350, -600, 2));
    _sprites.push(new DeathBot(100, -500, 2));
    _sprites.push(new DeathBot(700, -500, 2));
    _sprites.push(new DeathBot(1100, -600, 2));
    _sprites.push(new DeathBot(500, -450, 2));
    _sprites.push(new DeathBot(300, -650, 2));
    
    //Round 2
    _sprites.push(new BabyShooter(100, -1000, 2));
    _sprites.push(new BabyShooter(500, -1050, 2));
    _sprites.push(new BabyShooter(700, -1000, 2));
    _sprites.push(new BabyShooter(1300, -1050, 2));
    _sprites.push(new BabyShooter(300, -1100, 2));
    /*_sprites.push(new RainDropEnemy(150, -500, 2));
    _sprites.push(new RainDropEnemy(70, -550, 2));
    _sprites.push(new RainDropEnemy(250, -500, 2));
    _sprites.push(new RainDropEnemy(300, -500, 2));*/
    
    
    //Round 3
    _sprites.push(new RainDropShooter(200, -1400, 2));
    /*_sprites.push(new HomingDot(50, 0, 2));
    _sprites.push(new HomingDot(500, 0, 2));
    _sprites.push(new HomingDot(400, 0, 2));
    _sprites.push(new HomingDot(600, 0, 2));
    _sprites.push(new HomingDot(200, 0, 2));
    */
    _sprites.push(new RainDropShooter(450, -1455, 2));
    _sprites.push(new RainDropShooter(1300, -1370, 2));
    _sprites.push(new RainDropShooter(800, -1570, 2));
    _sprites.push(new BabyShooter(700, -1250, 2));
    _sprites.push(new BabyShooter(1300, -1300, 2));
    _sprites.push(new BabyShooter(500, -1450, 2));
    _sprites.push(new DeathBot(1150, -1500, 2));
    _sprites.push(new DeathBot(900, -1500, 2));

}
    

    //private stuff

    
    
        // we need to drag when mouse is down


    


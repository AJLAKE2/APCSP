//If JavaScript is a language, then variables are like nouns. They allow us to add value to things which we can then use wherever we want. 
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Lets add images!
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "Images/game-background.png";


var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
}
heroImage.src = "Images/hero.png";


var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
}
monsterImage.src = "Images/monster.png";

var hero = {
    speed: 256
};
var monster = {};

//Keep Score
var monstersCaught = 0;

//Handle Keyboard Controls
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode]
}, false);

var reload = function () {
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};

var set = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;
    reload();
};

//Move the Hero around the Screen
var update = function (modifier) {
    if (37 in keysDown && hero.x >=0) {
        hero.x -= hero.speed * modifier;
    }
    if (38 in keysDown && hero.y >=0) {
        hero.y -= hero.speed * modifier;
    }
    if (39 in keysDown && hero.x <=canvas.width-30) {
        hero.x += hero.speed * modifier;
    }
    if (40 in keysDown && hero.y <=canvas.height-35) {
        hero.y += hero.speed * modifier;
    }

    if (
        hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32) && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)
        ) {
        ++monstersCaught;
        reload();
    }
};

//Draw the background, hero, and monster
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    ctx.fillStyle = "rgb(250,250,250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Goblins Caught: " + monstersCaught, 32, 32);
};

var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;

    requestAnimationFrame(main);
}

var then = Date.now();
set();
main();
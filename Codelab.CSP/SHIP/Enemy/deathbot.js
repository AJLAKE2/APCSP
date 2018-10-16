function DeathBot(x, y, team){

    Sprite.call(this, x, y, team);
    this.speed = 1;
    this.canFire = true;
    
    this.dx = random(-1,1);
    this.amp = 2;
    _enemycount++;
    
}

DeathBot.prototype = Object.create(Sprite.prototype);  
DeathBot.prototype.constructor = DeathBot;
DeathBot.prototype.r = 9.5;


DeathBot.prototype.move = function(){
    this.dx += 0.05;
    this.x += sin(this.dx) * this.amp; 
    this.y += this.speed;
    if(this.y > height){
        this.x = random(0+this.r, width-this.r);
        this.y = random(-250, -50);
    }
    if(this.x > (width + this.r) || this.x < this.r){
        this.x = width - this.x;
    }
}



DeathBot.prototype.aim = function(){
    var target = _player;
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var vector = createVector(dx,dy);
    return vector.normalize();
}


DeathBot.prototype.fire = function(){
    var self = this;
    var vector = self.aim();
    if(self.canFire){
        self.canFire = false;
        console.log('efire');
        fill(255,255,255);
        _sprites.push(new Bullet(this.x, this.y, this.team, vector.mult(4)));
        self.canFire = false;
        setTimeout(function(){
            self.canFire = true;
            }, 1300);
    }
    
}

DeathBot.prototype.display = function(){
    fill(120,240,100);
    ellipse(this.x, this.y, 2*this.r, 2*this.r);
}

DeathBot.prototype.control = function() {
    this.move();
    this.display();
    this.aim();
    this.fire();
}
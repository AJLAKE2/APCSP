function RainDropShooter(x, y, team){

    Sprite.call(this, x, y, team);
    this.speed = .5;
    this.canFire = true;
    _enemycount++;
    
}

RainDropShooter.prototype = Object.create(Sprite.prototype);  
RainDropShooter.prototype.constructor = RainDropShooter;
RainDropShooter.prototype.r = 25;


RainDropShooter.prototype.move = function(){
    
    this.y += this.speed;
    if(this.y > height){
        this.x = random(0+this.r, width-this.r);
        this.y = random(-250, -50);
    }
}



RainDropShooter.prototype.aim = function(){
    var target = _player;
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var vector = createVector(dx,dy);
    return vector.normalize();
}


RainDropShooter.prototype.fire = function(){
    var self = this;
    var vector = self.aim();
    if(self.canFire){
        self.canFire = false;
        console.log('efire');
        fill(255,255,255);
        _sprites.push(new Bullet(this.x, this.y, this.team, vector.mult(7)));
        self.canFire = false;
        setTimeout(function(){
            self.canFire = true;
            }, 1300);
    }
    
}

RainDropShooter.prototype.display = function(){
    fill(255,75,0);
    ellipse(this.x, this.y, 2*this.r, 2*this.r);
}

RainDropShooter.prototype.control = function() {
    this.move();
    this.display();
    this.aim();
    this.fire();
}
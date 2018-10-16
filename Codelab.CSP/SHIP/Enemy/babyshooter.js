function BabyShooter(x, y, team){

    Sprite.call(this, x, y, team);
    this.speed = 1;
    this.canFire = true;
    _enemycount++;
    
}

BabyShooter.prototype = Object.create(Sprite.prototype);  
BabyShooter.prototype.constructor = BabyShooter;
BabyShooter.prototype.r = 15;


BabyShooter.prototype.move = function(){
    
    this.y += this.speed;
    if(this.y > height){
        this.x = random(0+this.r, width-this.r);
        this.y = random(-250, -50);
    }
}



BabyShooter.prototype.aim = function(){
    var target = _player;
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var vector = createVector(dx,dy);
    return vector.normalize();
}


BabyShooter.prototype.fire = function(){
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

BabyShooter.prototype.display = function(){
    fill(155,155,200);
    ellipse(this.x, this.y, 2*this.r, 2*this.r);
}

BabyShooter.prototype.control = function() {
    this.move();
    this.display();
    this.aim();
    this.fire();
}
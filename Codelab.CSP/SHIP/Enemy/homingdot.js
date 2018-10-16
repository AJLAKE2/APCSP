function HomingDot(x, y, team, speed){

    Sprite.call(this, x, y, team, speed);
    this.canFire = true;
    _enemycount++;
    
}

HomingDot.prototype = Object.create(Sprite.prototype);  
HomingDot.prototype.constructor = HomingDot;
HomingDot.prototype.r = 50;


HomingDot.prototype.move = function(){
    if(this.y > height){
        this.x = random(0+this.r, width-this.r);
        this.y = random(-250, -50);
    }
}



HomingDot.prototype.aim = function(){
    var target = _player;
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var vector = createVector(dx,dy);
    return vector.normalize();
}


HomingDot.prototype.fire = function(){
    var self = this;
    var vector = self.aim();
    if(self.canFire){
        self.canFire = false;
        console.log('efire');
        fill(255,255,255);
        _sprites.push(new Bullet(this.x, this.y, this.team, vector.mult(9)));
        self.canFire = false;
        setTimeout(function(){
            self.canFire = true;
            }, 1300);
    }
    
}

HomingDot.prototype.display = function(){
    fill(255,75,0);
    ellipse(this.x, this.y, 2*this.r, 2*this.r);
}

HomingDot.prototype.control = function() {
    this.move();
    this.display();
    this.aim();
    this.fire();
}
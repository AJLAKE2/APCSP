function Bullet(x, y, team, vector = 0) {

    Sprite.call(this, x, y, team); 
    this.vector = vector;
    
}

Bullet.prototype = Object.create(Sprite.prototype);  
Bullet.prototype.constructor = Bullet;
Bullet.prototype.r = 10;

Bullet.prototype.move = function(){
    if (this.vector != 0) {
        this.y += this.vector.y;
        this.x += this.vector.x;
    } else {
       this.y -= 10; 
    }
    }
    
Bullet.prototype.display = function(){
    if(this.y < 0 || this.y > height){
        var index = _sprites.indexOf(this);
        _sprites.splice(index, 1);
        console.log("dead bullet");
    }
        fill(255,0,0);
        ellipse(this.x, this.y, this.r, this.r);
}
    


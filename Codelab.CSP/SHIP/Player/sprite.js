function Sprite(x, y, team) {
    this.x = x;
    this.y = y;
    this.team = team;
}

Sprite.prototype.handleCollision = function () {
    var i = _sprites.indexOf(this);
    if (i !== -1) {
        if(_sprites[i].vector == null) {
            _enemycount--;
            if (_enemycount <= 0) {
                RespawnEnemies();
            }
        }
        _sprites.splice(i, 1);
    }
}

Sprite.prototype.isColliding = function (other) {
    var d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r ? true : false;
}

Sprite.prototype.control = function () {
    this.move();
    this.display();
}

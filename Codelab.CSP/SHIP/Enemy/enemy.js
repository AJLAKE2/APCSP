function enemy(x, y, team) { 
    var self = this;
    
    
    self.x1 = x;
    self.y1 = y;
    self.r = 15;
    self.team = team;
    //var x2 = 
    //var y2 = 

    var display = function () {
        fill(255,0,0);
        ellipse(self.x1, self.y1, self.r, self.r);
    }
    self.control = function (){
        display();
        
    }
    
}

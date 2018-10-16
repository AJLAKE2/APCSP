var bg;
var c1;
var c2;

function setup() {
    createCanvas(800, 600);
    bg = color(200);
    c1 = new dCircle(50, 50, 50);
    c2 = new dCircle(150,50,50);

}

function draw() {
    background(bg);
    c1.display();
    c2.display();

}

function dCircle(x, y, r) {

    //explicit reference to self
    var self = this;

    //public on the "class"
    self.x = x;
    self.y = y;
    self.r = r;

    //private stuff
    var dragging = false;


    self.display = function () {


        var d = dist(self.x, self.y, mouseX, mouseY);

        // we need to drag when mouse is down
        if (mouseIsPressed && d<r) {
            
            fill(0,0,0);
            dragging = true;
            
           
        } 
         if(dragging){
                self.x = mouseX;
                self.y = mouseY;
            }
        

        
        if(!mouseIsPressed){
            fill(0, 0, 255);
            dragging = false;
            self.x=self.x
            self.y=self.y
            
        }
        ellipse(self.x, self.y, self.r, self.r);
    }

    
}


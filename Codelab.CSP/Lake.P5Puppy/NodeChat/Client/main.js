
var eyeSize = 5;
function setup(){
    createCanvas(640,480);
    
    var socket = io.connect();
    socket.on('test', function (data) {
        console.log(data.dist);
        eyeSize  = parseInt(data.dist);
    });
    
}

function draw(){
    var x = width/2;
    var y = height/2;
    background('blue');
    //body
    noStroke();
    fill('black');
    triangle(x-100, y-40, x-32, 133, x-32, 272);
    fill('white');
    triangle(x-190, y-34, 237, 117, 238, 282);
    
    fill('grey');
    ellipse(x-164, y-44, 8, 8);
    arc(x-122, y-40, 45, 47, PI+HALF_PI+QUARTER_PI, QUARTER_PI);
    
    stroke(1);
    fill('lightblue')
    ellipse(x-190, y-96, 20,20);
    ellipse(x-178, y-147, 20,20);
    
    fill('white');
    ellipse(x-188, y-98, 6, 6);
    ellipse(x-180, y-149, 6, 6);
    ellipse(x-50, y-40, 20,20);
    
    fill('black');
   
    ellipse(x-164, y-44, eyeSize, eyeSize);
    
    rect(x-157.2, y-62, 73, 1);
    rect(x-143, y-2, 59, 1);
    rect(x-157.2, y-12, 73, 1);
    rect(x-143, y-74, 59, 1);
    ellipse(x-83, y-120, 10, 10);
    ellipse(x-83, y+40, 10, 10);
}
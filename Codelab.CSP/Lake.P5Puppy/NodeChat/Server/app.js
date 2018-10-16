// npm imports - sets up webserver 
var express = require('express');
var http = require('http');
var socketio = require('socket.io'); 
var bodyParser = require('body-parser');

//web server app
var app = express();
var server = http.createServer(app);
var io = socketio(server);

// web server meta - path from server to client
var webroot = __dirname + '/../client/';
var port = 3000; 

// static hosting - serve from the base domain name
app.use('/', express.static(webroot));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.post('/test', function(req, res) { 
    console.log('post data = '); 
    console.log(req.body);
    io.sockets.emit('test', req.body); 
    res.status(201).send('received');
});

server.listen(port, function() {
    console.log('listening 3000');
});





















// run the server - listens on port 3000 for any web requets
/*server.listen(port,function(){
    console.log('hosting from ' + webroot);
    console.log('ready to serve http://localhost:' + port + '/');

});

//user array
var users = [];

// for each connected web socket - injects HTML source code into the message
io.sockets.on('connection', function(socket){
    var message = { text : 'Hello!' };
    socket.emit('welcome', message);
    
    socket.on('user',function (name){
        users.push(name);
        console.log(name + ' connected\nusers: ' + users.length ); 
        socket.user = name;
        socket.broadcast.emit('otherUserConnect', name);
    });
    
    // updates users if they r disconnected 
    socket.on('disconnect', function() {
        if(!socket.user) 
            return;
        if(users.indexOf(socket.user) > -1){
            users.splice(users.indexOf(socket.user), 1); 
            socket.broadcast.emit('otherUserDisconnect', socket.user);
            console.log(socket.user + ' disconnect\nusers: ' + users.length);
        }
    });
    
    
    // relays messages from server to clients
    socket.on('message', function(data) {
        var message = {
            user : socket.user,
            message : data 
        };
        io.sockets.emit('message', message);
        console.log(socket.user + ': ' + data);
    });

});*/




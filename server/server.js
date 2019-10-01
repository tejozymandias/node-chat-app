const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');




const publicPath = path.join(__dirname,'../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket)=>{
    console.log('new user connected');
    socket.on('disconnect',()=>{
        console.log('user was Disconnected');
    });
    });
app.use(express.static(publicPath));

server.listen(process.env.PORT || 5000);
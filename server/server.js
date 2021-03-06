const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');



const publicPath = path.join(__dirname,'../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('new user connected');

    socket.on('createMessage',(message)=>{
        console.log('createMessage', message);
        io.emit('newMessage',{
           from: message.from,
           text: message.text,
           createdAt:new Date().getTime()        
        });
    });

    socket.on('disconnect',()=>{
        console.log('user was Disconnected');
    });
    });
    

server.listen(process.env.PORT || 5000);


   
        var socket = io();

        socket.on('connect',()=>{
            console.log('Connected to Server');
                  });

        socket.on('disconnect',()=>{
            console.log('Disconnected Server');
        });

        socket.on('newMessage',(message)=>{
            console.log('newMessage',message);
        });
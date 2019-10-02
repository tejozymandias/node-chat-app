

   
        var socket = io();

        socket.on('connect',()=>{
            console.log('Connected to Server');

            socket.emit('createEmail',{
                to:'jen@example.com',
                text:'hey'
            });
        });

        socket.on('disconnect',()=>{
            console.log('Disconnected Server');
        });

        socket.on('newEmail',(email)=>{
            console.log('New EMail',email);
        });
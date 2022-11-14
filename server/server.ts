require('dotenv').config();

const io = require("socket.io")(process.env.PORT, {
    cors: {
        origin: ['http://localhost:8080'],
    },
});


export const server = () => {
    io.on("connection", socket => {
        console.log(socket.id);


        socket.on('set-username', (username) => {
            //check socket api to set a custom property "username"
        });

        socket.on('send-message', (msg) => {
            socket.broadcast.emit("receive-message", msg, socket.id); // everyone gets it but the sender
        });

        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected: '+ socket.id);
        });

        socket.on('custom-event', (number, string, obj) => {
            console.log(number, string, obj);
        })
    });
}

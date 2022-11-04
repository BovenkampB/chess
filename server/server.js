// const express = require('express');
// const app = express();
// // const http = require('http');
// var path = require('path');
require('dotenv').config();
// const { Server } = require('socket.io');

// const server = http.createServer(app);
// const io = new Server(server);
const io = require("socket.io")(process.env.PORT, {
    cors: {
        origin: ['http://localhost:8080'],
    },
});

// app.use(express.static(path.join(__dirname, 'assets'))); //  "public" off of current is root

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

io.on("connection", socket => {
    console.log("user connected: " + socket.id);

    socket.emit("prompt-username", (response) => {
        console.log(response);
        socket.data.username = response;
    });

    // socket.on('rename', (name) => {
    //     socket.data.username = name;
    // })

    socket.on('send-message', (msg) => {
        console.log(socket.data.username + msg);
        socket.broadcast.emit("receive-message", socket.data.username, msg); // everyone gets it but the sender
    });

    socket.on('disconnect', () => {
        console.log(socket.data.username + ' disconnected');
        socket.broadcast.emit('receive-message', socket.data.username, " has left the chat.");
    });

    socket.on('custom-event', (number, string, obj) => {
        console.log(number, string, obj);
    })
});


// server.listen(process.env.PORT, process.env.HOSTNAME,() => {
//     console.log("server started on", process.env.HOSTNAME, process.env.PORT);
// });


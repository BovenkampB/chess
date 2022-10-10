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
    console.log(socket.id);

    socket.on('send-message', (msg) => {
        console.log("Message: " + msg);
        socket.broadcast.emit("receive-message", msg); // everyone gets it but the sender
    });

    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('custom-event', (number, string, obj) => {
        console.log(number, string, obj);
    })
});

// server.listen(process.env.PORT, process.env.HOSTNAME,() => {
//     console.log("server started on", process.env.HOSTNAME, process.env.PORT);
// });


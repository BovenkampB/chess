const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    socket.on('chat message', (msg) => {
       console.log("Message: " + msg);
    });

    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, hostname,() => {
    console.log("server started on", hostname, port);
});


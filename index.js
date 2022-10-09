const express = require('express');
const app = express();
const http = require('http');
var path = require('path');
require('dotenv').config();
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'assets'))); //  "public" off of current is root

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

server.listen(process.env.PORT, process.env.HOSTNAME,() => {
    console.log("server started on", process.env.HOSTNAME, process.env.PORT);
});


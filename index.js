const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // res.send('<h1>Chatten</h1>')
});

server.listen(3000, hostname,() => {
    console.log("server started on", hostname, port);
});

io.on('connection', (socket) => {
    console.log("Gebruiker is verbonden.");
});

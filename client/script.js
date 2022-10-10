import {io} from "socket.io-client";

const form = document.getElementById('form');
const messageInput = document.getElementById('input');
// const nameInput = document.getElementById('nameInput');
const messageBtn = document.getElementById('button');

// let displayName= '';

const socket = io("http://localhost:3000");

socket.on('connect', () => {
    displayMessage(`You connected with id: ${socket.id} `)
});

socket.on('receive-message', (msg) => {
    displayMessage(msg)
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let message = messageInput.value;

    if (message) {
        displayMessage(message);
        messageInput.value = '';
        socket.emit('send-message', message);
    }
});

function displayMessage(message) {
    const div = document.createElement('div');
    div.textContent = message;
    document.getElementById("message-container").append(div);
}
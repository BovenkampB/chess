import {io} from "socket.io-client";

const form = document.getElementById('form');
const messageInput = document.getElementById('input');

const socket = io("http://localhost:3000");

socket.on('connect', () => {
    displayMessage(`You connected with id: ${socket.id}`, "")
});

socket.on('receive-message', (msg, sender) => {
    displayMessage(msg, sender)
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let message = messageInput.value;

    if (message) {
        displayMessage(message, "you");
        messageInput.value = '';
        socket.emit('send-message', message);
    }
});

function displayMessage(message, sender) {
    const div = document.createElement('div');
    div.textContent = sender + " : " + message;
    document.getElementById("message-container").append(div);
}
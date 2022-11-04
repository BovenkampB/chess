import {io} from "socket.io-client";

const form = document.getElementById('form');
const messageInput = document.getElementById('input');
// const nameInput = document.getElementById('nameInput');
const messageBtn = document.getElementById('button');
const messageContainer = document.getElementById('message-container');
let username;

let msgCounter = 0;

// let displayName= '';

const socket = io("http://localhost:3000");

// socket.on('connect', () => {
//     promptUsername();
//     socket.emit('rename', this.username);
//     displayMessage(`Welcome ${this.username}`);
// });

socket.on('receive-message', (username, msg) => {
    displayMessage(username, msg)
})

socket.on('prompt-username', () => {
    promptUsername(socket);
    callback(username) ;
});

function promptUsername(socket){
    const modal = document.getElementById('prompt-username-modal');
    const doneBtn = document.getElementById("doneBtn");
    modal.style.display = 'block';
    modal.style.position = 'fixed';

    doneBtn.addEventListener("click", function () {

        const usernameInput = document.getElementById("usernameInput").value;
        username = usernameInput;
        let rng = Math.floor((Math.random() * 1337) + 1);
        if(username == null) username = `Username${rng}`;
    });

    modal.addEventListener('submit', function (e) {
        e.preventDefault();
        let message = messageInput.value;
        if (!message) return;
        displayMessage(message);
        socket.emit('send-message', message, this.username);
        messageInput.value = '';
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let message = messageInput.value;
    if (!message) return;
    displayMessage(message);
    socket.emit('send-message', message, this.username);
    messageInput.value = '';
});


function displayMessage(username, message) {
    const div = document.createElement('div');
    if (username === null) {
        div.textContent = message;
    }
    else {
        div.textContent = username + " : " + message;
    }
    messageContainer.append(div);
}
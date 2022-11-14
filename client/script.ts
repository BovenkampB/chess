import {io} from "socket.io-client";

const form = document.getElementById('form');
const messageInput = (<HTMLInputElement>document.getElementById('input'));


const socket = io("http://localhost:3000");


export const client = () => {

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

}


export type User = {
    name: string;
    age: number;
};

export function isAdult(user: User): boolean {
    return user.age >= 18;
}

export const justine: User = {
    name: 'Justine',
    age: 15,
};

export const isJustineAnAdult: boolean = isAdult(justine);



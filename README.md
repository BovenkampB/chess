# Chess app
## description
This project is intended as learning project to dive deeper into React JS and Express JS, to get familiarized with
setting up projects with Javascript on the backend (as well as the FE). It is to be decided which FE frameworks will be
included but probably will use React JS or Vue JS for this.

First iteration will only consist on a chat application where people can connect to and chat with each other.
But later on this will be a small part of the app namely the Chess app to play a digital game of Chess without needing to create accounts.
Just share a link to play with a friend and when both are connected you can start.

Also for learning purposes where possible we will make use of **design patterns**

Initial thought will be to use observer pattern to let everyone conenct to each other (chat as well as chess)
for the chess board we will make use of the factory pattern

but hopefully we can use another pattern somewhere else to be discovered.
## installation
Make sure to run Node JS 12.18.2 -> I would recommend to install nvm to manage multiple Node JS versions this way you can install the new Node JS version easily with: 

    $ nvm install 12.18.2 
    $ nvm use 12.18.2 

same goes for Java 11, I would recommend installing Jenv for Windows 
(or probably Jenv for Linux/MacOS but haven't used this.. "$ brew install jenv")

    $ jenv add jdk11 {pathToJava11}
    $ jenv change jdk11
    $ npm install
## starting
**Running with Express JS**

    $ node index.js

**Running with native Node JS**

    $ node app(NodeJS without ExpressJS).js

**frontend build tool - snowpack**

    $ npx snowpack init (once)
    $ npx run dev
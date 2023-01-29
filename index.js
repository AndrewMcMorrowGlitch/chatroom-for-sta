const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });
const uiFilesDir = '/front-end';
io.on("connection", (socket) => {
    
    console.log('user [uuidPlaceholder] has connected to the chat! (ip: [IP PLACEHOLDER])');
    socket.on('messageCreate',  (msg) => {
        io.emit('messageCreate', msg);
        console.log(msg);
        console.log('recieved');
        //storeMessage(msg); <-- will eventually store messages in a database, but that comes after the communication system is done
    })
  // ...
});
app.get('/', (req, res) => {
    res.sendFile( __dirname + uiFilesDir + '/index.html');
  });

httpServer.listen(3000);
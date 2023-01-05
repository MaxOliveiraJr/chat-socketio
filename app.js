const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const socketIO = require('socket.io');

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, () => {
    console.log('Runnig port 3000')
})


// const server = http.Server(app);

// server.listen(3000, () => {
//     console.log('Running port 3000')
// })

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log("New Connection")
})
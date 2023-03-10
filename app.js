const express = require('express');
const path = require('path');
const socketIO = require('socket.io');


const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, () => {
    console.log('Runnig port 3000')
})

const messages = [];


const io = socketIO(server);

io.on('connection', (socket) => {

    console.log('New Connection')

    socket.emit('update_messages', messages);
    socket.on('new_message', (data) => {
        messages.push(data);

        io.emit('update_messages', messages);
    })
})
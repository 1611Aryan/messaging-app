import express = require('express')
import cors = require('cors')
import http = require('http')
import { Server } from 'socket.io'

const PORT = process.env.PORT || 5000;

const app: express.Application = express();

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? 'https://message200.netlify.app/' : 'http://localhost:3000',
        methods: ['Get', 'POST']
    }
})


app.use(cors());

interface user {
    name: string; id: string
}
interface message {
    message: string;
    sender: {
        name: string;
        id: string
    };
}

const users: { name: string, id: string, socketId: string }[] = [];


io.on('connection', (socket) => {
    console.log('User Connected')

    socket.on('join', (user: user) => {

        users.push({ socketId: socket.id, name: user.name, id: user.id });

        socket.broadcast.emit('message', {
            message: `${user.name} joined`,
            sender: { id: 'admin', name: null },
        })

        io.emit('join', users)

    })

    let timeout: any;
    let typing = false
    socket.on('typing', (user: user) => {
        if (!typing) {
            socket.broadcast.emit('typing', user)
            typing = true
            console.log('Typing')
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            socket.broadcast.emit('stopped-typing', user)
            typing = false
        }, 1500)

    })

    socket.on('message', (msg: message) => {
        io.emit('message', msg)
    })

    socket.on('disconnect', () => {
        const index = users.findIndex((user) => user.socketId === socket.id)
        if (index >= 0) {
            socket.broadcast.emit('message', { message: `${users[index].name} left :/`, sender: { id: 'admin', name: null } })
            socket.broadcast.emit('left', users[index])
            users.splice(index, 1)
        }
        console.log('Disconnected')

    })
})




server.listen(PORT, () => console.log(`Server running at Port 5000`));

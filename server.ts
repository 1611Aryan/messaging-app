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
    name: string; id: string; room: string
}
interface message {
    message: string;
    sender: {
        name: string;
        id: string
    };
}

const users: { room: string; members: { name: string, id: string, socketId: string }[] }[] = [];


io.on('connection', (socket) => {

    console.log('Connected')
    let room: string;
    socket.on('join', (user: user) => {
        room = user.room
        socket.join(room)
        users.push({ room, members: [] })

        const index = users.findIndex((user) => user.room === room)
        if (index >= 0) {
            users[index].members.push({ socketId: socket.id, name: user.name, id: user.id });

            socket.broadcast.to(room).emit('message', {
                message: `${user.name} joined`,
                sender: { id: 'admin', name: null },
            })

            io.to(room).emit('join', users[index].members)
        }


    })

    let timeout: any;
    let typing = false
    socket.on('typing', (user: user) => {

        if (!typing) {
            socket.broadcast.to(room).emit('typing', user)
            typing = true

        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            socket.broadcast.to(room).emit('stopped-typing', user)
            typing = false
        }, 1500)

    })

    socket.on('message', (msg: message) => {
        io.to(room).emit('message', msg)
    })

    socket.on('disconnect', () => {
        const roomIndex = users.findIndex((user) => user.room === room)
        if (roomIndex >= 0) {
            const index = users[roomIndex].members.findIndex((user) => user.socketId === socket.id)
            if (index >= 0) {
                socket.broadcast.to(room).emit('message', { message: `${users[roomIndex].members[index].name} left :/`, sender: { id: 'admin', name: null } })
                socket.broadcast.to(room).emit('left', users[roomIndex].members[index])
                users.splice(index, 1)
            }
        }
        console.log('Disconnected')

    })
})




server.listen(PORT, () => console.log(`Server running at Port 5000`));

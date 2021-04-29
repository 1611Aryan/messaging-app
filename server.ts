import express = require('express')
import { Request, Response } from 'express-serve-static-core'
import cors = require('cors')
import path = require('path')
import http = require('http')
import { Server } from 'socket.io'


const app: express.Application = express();

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['Get', 'POST']
    }
})


app.use(cors());


io.on('connection', (socket) => {
    console.log('User Connected')
    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
})

//?Serving the static files
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));
    app.use(
        "/static",
        express.static(
            path.join(__dirname, "..", "..", "client", "build", "static")
        )
    );
    app.get("*", (req: Request, res: Response) => {
        res.sendFile("index.html", {
            root: path.join(__dirname, "..", "..", "client", "build"),
        });
    });
}

server.listen(5000, () => console.log(`Server running at Port 5000`));
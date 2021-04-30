"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const http = require("http");
const socket_io_1 = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? 'https://message200.netlify.app/' : 'http://localhost:3000',
        methods: ['Get', 'POST']
    }
});
app.use(cors());
io.on('connection', (socket) => {
    console.log('User Connected');
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
    socket.on('disconnect', () => {
        console.log('Disconnected');
    });
});
//?Serving the static files
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));
//     app.use(
//         "/static",
//         express.static(
//             path.join(__dirname, "..", "..", "client", "build", "static")
//         )
//     );
//     app.get("*", (req: Request, res: Response) => {
//         res.sendFile("index.html", {
//             root: path.join(__dirname, "..", "..", "client", "build"),
//         });
//     });
// }
server.listen(5000, () => console.log(`Server running at Port 5000`));
//# sourceMappingURL=server.js.map
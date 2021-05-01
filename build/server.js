"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var http = require("http");
var socket_io_1 = require("socket.io");
var PORT = process.env.PORT || 5000;
var app = express();
var server = http.createServer(app);
var io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? 'https://message200.netlify.app/' : 'http://localhost:3000',
        methods: ['Get', 'POST']
    }
});
app.use(cors());
var users = [];
io.on('connection', function (socket) {
    console.log('User Connected');
    socket.on('join', function (user) {
        socket.broadcast.emit('message', {
            message: user.name + " joined",
            sender: { id: 'admin' },
            name: user.name
        });
    });
    socket.on('message', function (msg) {
        io.emit('message', msg);
    });
    socket.on('disconnect', function () {
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
server.listen(PORT, function () { return console.log("Server running at Port 5000"); });
//# sourceMappingURL=server.js.map
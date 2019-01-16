const http = require("http");
const socketio = require("socket.io");
const server = http.createServer((req, res) => {
    res.end("hey");

});

server.listen(3000);

const io = socketio.listen(server);

io.sockets.on("connection", (socket) =>{
    console.log("Kullanıcı Bağlandı");
    
    setTimeout(() => {
        socket.emit("merhaba");
    });

    socket.on("selam ver", (data) => {
        console.log("selam");
    });

    socket.on("disconnect", () =>{
        console.log("Kullanıcı Ayrıldı");
    });

});


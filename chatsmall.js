// -*- coding: utf-8 -*-
// simple socket

var net = require('net');

var server = net.createServer(function (socket) {
    socket.write("hi\n");
    socket.end("you there\n");
});

server.listen(8000, '127.0.0.1');
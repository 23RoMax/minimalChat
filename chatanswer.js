// -*- coding: utf-8 -*-
// simple echo chat server

var net = require('net');

var server = net.createServer(function (xx) {

    // xx is a parameter. It's Node's event object

    xx.write("hi\n");
    xx.write("you there\n");

    xx.on("data", function (dd) {
        xx.write(dd);
    });

});

server.listen(8000, '127.0.0.1');
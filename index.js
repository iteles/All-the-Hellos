var Hapi = require('hapi');
var routes = require('/routes.js');

//create the server, bound to localhost for now, to be changed in deployment
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

server.route(routes);

server.start();

var Hapi = require('hapi');
var path = require('path');
var routes = require(__dirname + '/routes.js');

// var options = {
//        views: {
//          //path.join might be necessary for it to recognise that we are in the current directory (__dirname) +/templates
//            path: path.join(__dirname + './templates'),
//            engines: {
//                html: require('handlebars')
//            }
//        }
//    };

//create the server, bound to localhost for now, to be changed in deployment
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route(routes);

server.start();

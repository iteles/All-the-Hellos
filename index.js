var Hapi = require('hapi');
var path = require('path');
var routes = require(__dirname + '/routes.js');

var serverOptions = {
       views: {

           basePath: __dirname,
           path: './views', //this is the templates directory

           engines: {
               html: require('handlebars')
           },

           isCached: 'false' //ZZZZ | Change to true in Production
       }
   };

//create the server, bound to localhost for now, to be changed in deployment
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), serverOptions);

server.route(routes);

server.start();

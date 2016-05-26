//Modules
var Hapi = require('hapi');
var Path = require('path');
var query = require('pg-query');
var addCorsHeaders = require('hapi-cors-headers');


//Exports
var routes = require('./server/routes/router.js');

//query params
query.connectionParameters = 'postgres://localhost:5432/contentfu';

//create the server
var server = new Hapi.Server();

//Define the server
server.connection({
  port: 1337,
  host: 'localhost',
  labels: ['web']
});

//Include all of our routes
for (var route in routes) {
  server.route(routes[route]);
}

server.ext('onPreResponse', addCorsHeaders);

server.start(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Hapi Server is started on port: ', server.info.port);
  }
});

var handler = require('../handlers/addContent');

module.exports = [
  {
    //creating my index page
    method: 'GET',
    path: '/',
    handler: handler.index
  },
  {
    //just a vanilla get that inserts a record to test database
    method: 'GET',
    path: '/api',
    handler: handler.index
  },
  {
    //creating post data to insert a record endpoint
    method: 'POST',
    path: '/api/',
    handler: handler.index
  },
  {
    method: 'PUT',
    path: '/api/',
    handler: handler.index
  },
  {
    method: 'DELETE',
    path: '/api/{b}',
    handler: handler.index
  }
];

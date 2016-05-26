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
    method: 'POST',
    path: '/api',
    handler: handler.addContent
  },
  {
    method: 'PUT',
    path: '/api',
    handler: handler.updateContent
  },
  {
    method: 'DELETE',
    path: '/api/{key}',
    handler: handler.index
  }
];

var handler = require('../handlers/addContent');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handler.index
  },
  {
    // GET a list of the content
    method: 'GET',
    path: '/api',
    handler: handler.listContent
  },
  {
    // Add content to database
    method: 'POST',
    path: '/api/{key}/{desc}/{content}',
    handler: handler.addContent
  },
  {
    // Update the content of the database
    method: 'PUT',
    path: '/api/{id}/{description}/{content}',
    handler: handler.updateContent
  },
  {
    // Delete an item from the database
    method: 'DELETE',
    path: '/api/{key}',
    handler: handler.deleteContent
  }
];

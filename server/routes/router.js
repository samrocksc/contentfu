var addRecord = require('../handlers/addRecord');


module.exports = [
  {
    //creating my index page
    method: 'GET',
    path: '/',
    handler: addRecord()
  },
  {
    //just a vanilla get that inserts a record to test database
    method: 'GET',
    path: '/api',
    handler: addRecord()
  },
  {
    //creating post data to insert a record endpoint
    method: 'POST',
    path: '/api/',
    handler: addRecord()
  },
  {
    method: 'PUT',
    path: '/api/',
    handler: addRecord()
  },
  {
    method: 'DELETE',
    path: '/api/{b}',
    handler: addRecord()
  }
];

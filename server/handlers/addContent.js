var query = require('pg-query');
var config = require('../../config');
query.connectionParameters = config.pg.server;

module.exports = {
  index: function(request,reply) {
    console.log('index');
    query('select * from content', function(err, rows, results){
      if(err) {
        console.log('error>',err);
      }
      console.log(results.rows);
      reply('results'+results.rows[0]);
    })
  },
  addContent: function(request,reply) {
    console.log('addContent');
  },
  updateContent: function(request,reply) {
    console.log('updateContent');
  },
  listContent: function(request,reply) {
    console.log('listContent');
  },
  deleteContent: function(request,reply) {
    console.log('deleteContent');
  }
}

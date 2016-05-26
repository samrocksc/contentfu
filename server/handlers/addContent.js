var query = require('pg-query');
var config = require('../../config');
query.connectionParameters = config.pg.server;

module.exports = {
  index: function(request,reply) {
    console.log('index');
    query('select * from content', function(err, rows, results){
      var test = results;
      reply(test.rows);
    })
  },
  addContent: function(request,reply) {
    console.log('addContent');
    query("INSERT INTO content (key, description, content) VALUES ('keyname', 'test description', 'test content man.  this is some crazy stuff' )", function(err,rows,results){
      reply(results);
    })
  },
  updateContent: function(request,reply) {
    console.log('updateContent');
    query("UPDATE CONTENT SET description='updated', content='content updated' WHERE id=3", function(err,rows,results) {
      reply(results)
    })
  },
  listContent: function(request,reply) {
    console.log('listContent');
    query('select * from content', function(err, rows, results){
      var test = results;
      reply(test.rows);
    })
  },
  deleteContent: function(request,reply) {
    console.log('deleteContent');
    query('DELETE FROM content WHERE id='+encodeURIComponent(request.params.user)+'',function(err, rows, results) {
      reply(results);
    })
  }
}

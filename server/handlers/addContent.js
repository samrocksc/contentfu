var query = require('pg-query');
var config = require('../../config');
query.connectionParameters = config.pg.server;

module.exports = {
  index: function(request,reply) {
    reply('nothing here');
  },
  listContent: function(request,reply) {
    console.log('listContent');
    query('select * from content', function(err, rows, results){
      var test = results;
      reply(test.rows);
    })
  },
  addContent: function(request,reply) {
    console.log('addContent');
    var key = request.params.key;
    var description = request.params.desc;
    var content = request.params.content;
    query("INSERT INTO content (key, description, content) VALUES ('"+request.params.key+"', '"+request.params.description+"', '"+request.params.content+"' )", function(err,rows,results){
      reply(results);
    })
  },
  updateContent: function(request,reply) {
    console.log('updateContent');
    var id = request.params.id;
    var description = request.params.description;
    var content = request.params.content;
    query("UPDATE CONTENT SET description='"+description+"', content='"+content+"' WHERE id='"+id+"'", function(err,rows,results) {
      if(err) {
        console.log(err);
      } else {
        reply(results);
      }
    })
  },
  deleteContent: function(request,reply) {
    console.log('deleteContent');
    query('DELETE FROM content WHERE id='+request.params.user+'',function(err, rows, results) {
      reply(results);
    })
  }
}

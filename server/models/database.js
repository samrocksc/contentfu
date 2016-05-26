var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/contentfu';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, description TEXT, content TEXT, complete BOOLEAN)');
query.on('end', function() { client.end(); });

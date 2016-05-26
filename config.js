module.exports = {
  basic: {
    name: 'Snippet Helper',
    description: 'Just a simple snippet helper for a new developer.'
  },
  server: {
    host: 'localhost',
    port: '3000',
    email: ''
  },
   pg: {
     server: 'postgres://localhost:5432/contentfu',
    table: 'content'
   },
  files: {
    routes: '',
    build: '/build'
  }
};

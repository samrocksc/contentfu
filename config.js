module.exports = {
  basic: {
    name: 'ContentFu',
    description: 'Create content quickly when framing out a website'
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

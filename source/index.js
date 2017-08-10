const http = require('http');
const fetch = require('node-fetch');
const config = require('./config/config');
const app = require('./app');

const server = http.createServer((request, response) => {

  app.waitForSitefinityInit(response);

});

server.listen(config.port);  
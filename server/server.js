const express = require('express');
const path = require('path');
const server = express();
const { clientErr, serverErr } = require('./middleware/err/err');
const middleware = require('./middleware/serverMiddleware');
const api = require('./api/api.js');

middleware(server);

server.use('/api', api);
server.use(express.static(path.join(__dirname, '../dist')));
server.use(clientErr);
server.use(serverErr);

module.exports = server;

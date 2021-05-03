const http = require('http');
const routes = require('./routes');
const port = process.env.PORT || 5056;
const server = http.createServer(routers);
server.listen(port);
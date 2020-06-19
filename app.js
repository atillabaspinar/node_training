const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.header);
});

server.listen(9001);


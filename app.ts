const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.send('hello');
  // process.exit(); // exit the event loop
});

server.listen(9001);


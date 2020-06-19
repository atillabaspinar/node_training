const http = require('http');
import { routes } from './routes';

const server = http.createServer(routes);

server.listen(9001);


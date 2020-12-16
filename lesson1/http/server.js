/* eslint-disable no-console */
const http = require('http');

const port = 9898;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello from server!');
    res.end();
}).listen(port);
console.log('Server is running...');

server.on('request', () => {
    console.log('We have request!');
});

server.on('data', () => {
    console.log('We have data!');
});

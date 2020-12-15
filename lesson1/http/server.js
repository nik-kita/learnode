const http = require('http');
const port = 9898;

const server = http.createServer((req, res) => {
    
  
    res.write("I'm hear you! How are you?");
    res.end();
}).listen(port);


server.on('request', req => {
    console.log("request!");
});

server.on('data', data => {
    console.log("data!");
})



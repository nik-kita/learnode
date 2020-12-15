const http = require('http');
options = {
    port: 9898,
}

http.request(options, res => {
    dataBuffer = '';
    res.on('data', data => {
        console.log(data);
        dataBuffer += data;
    });
    res.on('end', () => console.log(dataBuffer))
}).end()
/* eslint-disable no-console */
const http = require('http');

const options = {
    port: 9898,
    hostname: 'localhost',
    method: 'GET',
};

http.request(options, (res) => {
    let dataBuffer = '';
    res.on('data', (data) => {
        console.log(data);
        dataBuffer += data;
    });
    res.on('end', () => console.log(dataBuffer));
}).end();

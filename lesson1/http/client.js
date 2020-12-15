const http = require('http');

const options = {
    port: 9898,
};

http.request("http://127.0.0.1:9898", res => {
    console.log(res);
}).end()
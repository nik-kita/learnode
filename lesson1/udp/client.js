/* eslint-disable no-console */
const dgram = require('dgram');

const PORT = 41234;
const HOST = '127.0.0.1';

// creating a udp server
const client = dgram.createSocket('udp4');
// buffer msg
const message = Buffer.from('My KungFu is Good!');
const offset = 0;

// sending msg
client.send(message, offset, message.length, PORT, HOST, (err) => {
    if (err) throw err;

    console.log(`UDP message sent to  ${HOST} : ${PORT}`);
    // close connection
    client.close();
});

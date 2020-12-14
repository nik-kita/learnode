    const http = require('http');
    const port = 9898;
    const server = http.createServer((req, res) => {
        if(res.toString().length == 0) {
            res.end('Good night!');
        }
        res.write(`It is so noisy around!... You say ${listenInNoise(res.toString())}? May be repeate please...`);
    }).listen(port, (err) => {
        if(err) {
            console.log('Ooops...');
        } else {
            console.log('Server is listening on port ' + port);
        }
    });




    function listenInNoise(words) {
        let noise = 's';
        return [...words].map((ch) => {
            if(Math.random() > 0.6) {
                ch += noise;
                noise += 's';
            }
        }).join('');
    }
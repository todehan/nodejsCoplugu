const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    //1 kere istekte bulunulmasına rağmen 2 istek gönderilmesinin sebebi tarayıcının kendisi favicon dosya isteği atmasındandır.
    console.log('bir istekte bulunuldu');

    response.writeHead(200, {'content-type': 'text.html; charset=uft-8'});
    fs.readFile('demo.html', (err, data) => {
        if(err)
            throw err;
        response.end(data);

    });

});

server.listen(3001);
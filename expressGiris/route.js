const http =require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text.html; charset=uft-8'});

    if(request.method === "GET"){
        if(request.url === '/')
            response.write("şu anki konum : index");
        else if(request.url ==="/iletisim")
            response.write("şu anki konum : iletişim");
        else
            response.write("404 sayfa bulunamadı");
    }

    response.end();

});

server.listen(3001);
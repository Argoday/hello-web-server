
var http = require('http');

var os = require('os');
var hostname = os.hostname();

var userCount = 0;
http.createServer(function (request, response) {
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello, world!\n\n');
    response.write('This process has responded: '+userCount+' times\n\n');
    response.write('Hostname: '+ hostname);
    response.end();
}).listen(8081);

console.log('Server started');



var http = require('http');

var os = require('os');
var hostname = os.hostname();

var stage = process.env.STAGE;

var userCount = 0;
http.createServer(function (request, response) {
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello, world!\n\n');
    response.write('This process has responded: '+userCount+' times\n\n');
    response.write('Hostname: ' + hostname + '\n');
    response.write('Stage: ' + stage);
    response.end();
}).listen(8081);

console.log('Server started');


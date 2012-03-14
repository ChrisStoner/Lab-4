var http = require('http');

http.createServer(function (req, res) {
    client.mget(['awesome', 'gnarly', 'rad', 'groovy', 'cool'], function(error, 	responses) {
    	res.writeHead(200, {'Content-Type': 'text/plain'});
    	res.end('Awesome: ' + responses[0] + '<br> Gnarly: ' + responses[1]+ '<br> Groovy: ' + responses[2]+ '<br> Rad: ' + responses[3] + '<br> Cool: ' + responses[4]);
    });
}).listen(3000);

console.log('Server running on port 3000');

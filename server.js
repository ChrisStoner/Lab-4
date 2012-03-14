var http = require('http');
var redis = require('redis');
var client = redis.createClient();

http.createServer(function (req, res) {
    client.mget(['awesome', 'gnarly', 'rad', 'groovy', 'cool'], function(error, 	responses) {
    	res.writeHead(200, {'Content-Type': 'text/plain'});
    	res.end('Awesome: ' + responses[0] + '\nGnarly: ' + responses[1]+ '\nGroovy: ' + responses[2] + '\nRad: ' + responses[3] + '\nCool: ' + responses[4]);
  });
}).listen(3000);

console.log('Server running on port 3000');

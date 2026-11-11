
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('Hello World! TOI LA VO THANH PHUC');
}).listen(3000);

console.log('Server dang chay tai http://localhost:3000');

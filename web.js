var http = require('http');
var url = require("url");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var url_parts = url.parse(req.url, true);
  var status = url_parts.pathname.replace(/^\/([^\/]*).*$/, '$1');
  res.end(http.STATUS_CODES[status] || "Undefined status : "+ status);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

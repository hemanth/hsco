var http = require('http');
var url = require("url");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var url_parts = url.parse(req.url, true);
  var status = url_parts.pathname.replace(/^\/([^\/]*).*$/, '$1');
  res.end(http.STATUS_CODES[status] || "Undefined status : "+ status);
}).listen(process.env.PORT || 5000);

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
app.use('/static', express.static('static'));

app.get('/', function(request, response) {
    index = fs.readFileSync('index.html');
    response.send(index.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});

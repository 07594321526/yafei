var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
var port = process.env.PORT || 8081;

app.listen(port);
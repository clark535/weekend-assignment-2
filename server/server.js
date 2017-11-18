var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var numberCruncher = require('./modules/numberCalc.js');
//var additionPost = require('../routes/selectionsRouter.js');
var port = 5000;

console.log('starting up the server');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calc', function(req, res){
    var response = numberCruncher(req.body.total_object);
    res.send(response.toString());
});

//this is where the objects will be sent to, calculated and sent back to client.js side.

app.listen(port, function(){
    console.log('listening on port', port);
});

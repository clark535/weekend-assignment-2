var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var selectionsRouter = require('./routes/selections-router.js');
var port = process.env.PORT || 5000;

console.log('starting up the server');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/calc', selectionsRouter);

//this is where the objects will be sent to, calculated and sent back to client.js side.

app.listen(port, function(){
    console.log('listening on port', port);
});

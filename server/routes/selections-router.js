var express = require('express');
var router = express.Router();
var numberCalc = require('../modules/numberCalc');



router.post('/', function(req, res){
    var response = numberCalc(req.body.total_object);
    res.send(response.toString());
});

module.exports = router;

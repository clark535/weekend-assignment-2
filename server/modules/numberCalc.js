//var express = require('express');
// var bodyParser = require('body-parser');
 //var app = express();
// var additionPost = require('./routes/selectionsRouter');


function numberCruncher(object) {
    if (object.type == "add") {
        return Number(object.x) + Number(object.y);
    } else if (object.type == "subtract") {
        return Number(object.x) - Number(object.y);
    } else if (object.type == "multiply") {
        return Number(object.x) * Number(object.y);
    } else if (object.type == "divide") {
        return Number(object.x) / Number(object.y);
    }
}

module.exports = numberCruncher;

// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var additionPost = require('./routes/selectionsRouter');


function numberCruncher(object) {
    if (object.inputObjects == "add") {
        return Number(object.x) + Number(object.y);
    } else if (object.inputObjects == "subtract") {
        return Number(object.x) - Number(object.y);
    } else if (object.inputObjects == "multiply") {
        return Number(object.x) * Number(object.x);
    } else if (object.inputObjects == "divide") {
        return Number(object.x) / Number(object.y);
    }
}

module.exports = numberCruncher;

var express = require('express');
var router = express.Router();
var numberCalc = require('../modules/numberCalc');



router.post('/', function(req, res){
    var response = numberCalc(req.body.total_object);
    res.send(response.toString());
});
// // // router.post('/calc', function(req, res){
// // //     var additionPost = additionCalculator.addition_object;
// // //     res.send(additionPost.req.body);
// // // })

// // router.post('/calc', function(req, res){
// //      console.log('Taco, Taco');
// //     // console.log('req.body in new quote post', req.body);
// //     additionPost.req.body
// //     res.sendStatus(200);
// // })

module.exports = router;

// // router.get('/all', function(req, res){
//     res.send(quotes_data);
// })
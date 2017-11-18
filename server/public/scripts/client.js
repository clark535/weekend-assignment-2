console.log('client.js has been loaded');

var inputObjects = {
    x: 0,
    y: 0,
    type: ""
}
//this file for listeners, button functions and AJAX

$(document).ready(function(){
    console.log('jQuery has been loaded');

$(document).on('click', '#additionButton', addFunc);
$(document).on('click', '#subtractionButton', subFunc);
$(document).on('click', '#multiplicationButton', multiFunc);
$(document).on('click', '#divisionButton', divisionFunc);
$(document).on('click', '#calculateButton', postIt);
$('#clearButton').on('click', clearFunc);

function postIt() {
    //inputNumbers();
   $.ajax({
       method: 'POST',
       url: '/calc',
       data: {total_object: inputObjects},
       success: function(response){
           console.log('Finally in the Post', inputObjects)
            $('#equalsBox').html('Equals: ' + inputObjects);
       }
   });
}

function inputNumbers() {
    inputObjects.x = $('#inputOne').val();
    inputObjects.y = $('#inputTwo').val();
    // postIt();
}

function addFunc() {
    console.log(inputObjects)
   inputObjects.type = "add";
   inputNumbers();
//    postIt();
   }
   
function subFunc() {
    console.log(inputObjects)
   inputObjects.type = "subtract";
   inputNumbers();
//    postIt();
   }
   

function multiFunc() {
    console.log(inputObjects)
   inputObjects.type = "multiply";
   inputNumbers();
//    postIt();
   }

function divisionFunc() {
    console.log(inputObjects)
   inputObjects.type = "divide";
   inputNumbers();
//    postIt();
   }

function clearFunc() {
    $('#inputOne').val('');
    $('#inputTwo').val('');
}


//AJAX post next.



//Next step, build the calculator function in the server





// $('#newQuoteButton').on('click', function(){
//     console.log('something!');
//     $.ajax({
//         method: 'POST',
//         url: '/quote/new',
//         data: {quote_to_add: $('#inputQuote').val()},
//         success: function(response) {
//             console.log('a new quote post response:', response);
//             //get request for all of the quotes
//             getAllQuotes();
//         }
//     });
    
// });

// function calculator({x:"", y:  }) {
//     if ({type: "Add"}) {
//         console.log({x: + y: });        
//     } else if ("type" == "Subtract") {
//         x - y;
//     } else if ("type" == "Multiply") {
//         x * y;
//     } else if ("type" == "Divide") {
//         x / y;
//     }
// }
















});
console.log('client.js has been loaded');

var inputObjects = {
    x: 0,
    y: 0,
    type: ""
}

var historyArray = [];
//this file for listeners, button functions and AJAX
$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery has been loaded');

$(document).on('click', '#additionButton', addFunc);
$(document).on('click', '#subtractionButton', subFunc);
$(document).on('click', '#multiplicationButton', multiFunc);
$(document).on('click', '#divisionButton', divisionFunc);
$(document).on('click', '#calculateButton', postIt);
$('#clearButton').on('click', clearFunc);


function inputNumbers() {
    inputObjects.x = $('#inputOne').val();
    inputObjects.y = $('#inputTwo').val();
    historyArray.push(inputObjects);
    // postIt();
}

function postIt() {
    //inputNumbers();
   $.ajax({
       method: 'POST',
       url: '/calc',
       data: {total_object: inputObjects},
       success: function(response){
           console.log('Finally in the Post', inputObjects)           
            $('#equalsBox').html('<p>' + 'Equals: ' + response + '</p>');
            for (var i = 0; i < response.historyArray.length; i++) {
            $('#history').append('<p>' + response.inputObjects[i].x + '' + response.inputObjects[i].y + '' + response.inputObjects[i].type + '=' + response.inputObjects[i].result + '</p>');
                
                
            }
       }
   });
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
    //readyNow();
    $('#inputOne').val('');
    $('#inputTwo').val('');
    $('#equalsBox').children().remove();
}
//AJAX post next.



//Next step, build the calculator function in the server

};
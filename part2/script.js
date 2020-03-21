console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  return "SOMETHING HAPPENED";
};

var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};
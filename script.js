console.log("hello script js");

/*
Choose Your Own Adventure

Ask player which House to be sorted into, after which player needs to find the House common room within Hogswarts Castle.




*/

//for easy update of display message
const input = document.getElementById("input");



var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "WOW SOMETHING HAPPENED";
  input.value = "clear";
  return output;
};
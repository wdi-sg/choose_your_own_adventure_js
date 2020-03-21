console.log("hello script js");

//reset Text Box's value after user input.
var inputReset = function() {
    document.getElementById("input").value = "";
}



var inputHappened = function(currentInput){
  console.log( currentInput );
  inputReset();
  return currentInput;
};
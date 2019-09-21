
console.log("hello script js");

const input = document.getElementById("input");
input.placeholder = "Welcome to InsureCo! What is your name?";
var inputValues = {
    name:"",
    door:"",
    issue:"",
    boolean:""
};
var inputCount = 0;

var inputHappened = function(currentInput){
  console.log( currentInput );

  // user inputs name

  if (inputCount === 0) {
    inputValues["name"] = input.value
    inputCount ++;
    input.placeholder = "Which insurance would you like to purchase today? H/F"
    return `Welcome to InsureCo, ${inputValues["name"]}!`

  }

};
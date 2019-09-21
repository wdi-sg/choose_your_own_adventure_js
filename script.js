
console.log("hello script js");

const input = document.getElementById("input");
input.placeholder = "Please type your name.";
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
    input.placeholder = "Please input H or F."
    document.getElementById("question").textContent = "Would you like to purchase Health insurance or Family insurance?"
    return `Welcome to InsureCo, ${inputValues["name"]}!`
  };

//user wants health insurance
  if (inputCount === 1 && input.value === "H") {
    inputValues["door"] = input.value
    inputCount ++;
    document.getElementById("question").textContent = "Would you like to tell me about your age, BMI or vices? "
    input.placeholder = "Please input A, B or V."
    return `Thank you for selecting Health insurance, ${inputValues["name"]}!`
  };

};
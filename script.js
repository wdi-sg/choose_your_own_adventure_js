
console.log("hello script js");


const input = document.getElementById("input");
input.placeholder = "Please type your name.";
var inputValues = {
    name:"",
    door:[
        healthInsurance:{
            age:{
                subTwenty:""
                subForty:""
                superForty:""
            },
            BMI:{
                under:"",
                average:"",
                over:""
            },

            hobby: {
                swimWithSharks:"",
                danceWithSnakes:"",
                baseJump:""
            }
        },
        familyInsurance:{
            married:"";
            kids: "";
            pets: {
                sloth:"",
                orca:"",
                alligator:""
            }
        }
    ],

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

//inputs for type of insurance
//user wants health insurance
  if (inputCount === 1 && input.value === "H") {
    inputValues["door"] = input.value
    inputCount ++;
    document.getElementById("question").textContent = "Would you like to tell me about your age, BMI or vices? "
    input.placeholder = "Please input A, B or V."
    return `Thank you for selecting Health insurance, ${inputValues["name"]}!`
  } else if (inputCount === 1 && input.value === "F") {
    inputValues["door"] = input.value
    inputCount ++;
    document.getElementById("question").textContent = "Would you like to tell me about your spouse, kids or pets? "
    input.placeholder = "Please input S, K or P."
    return `Thank you for selecting Family insurance, ${inputValues["name"]}!`
    } else {
        return `Please type either "H" or "F".`
    }

    if (inputCount === 2 && input.value === "A"){

    }











};
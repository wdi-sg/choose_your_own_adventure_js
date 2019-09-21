
console.log("hello script js");


const input = document.getElementById("input");
input.placeholder = "Please type your name.";
var inputValues = {
    name:"",
    door:[
        {healthInsurance:{
            age:{
                subTwenty:"",
                subForty:"",
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
            }
        },
        {familyInsurance:{
            married:"",
            kids: "",
            pets: {
                sloth:"",
                orca:"",
                alligator:""
            }
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
  if (inputCount === 1){
    if (input.value === "H") {
        console.log(inputCount);
        inputValues["door"] = input.value
        inputCount ++;
        document.getElementById("question").textContent = "Would you like to tell me about your age, BMI or hobby? "
        input.placeholder = "Please input A, B or H."
        return `Thank you for selecting Health insurance, ${inputValues["name"]}!`
    }
  }
    //user wants family insurance
    else if (input.value === "F") {
        console.log(inputCount);
        inputValues["door"] = input.value
        inputCount ++;
        document.getElementById("question").textContent = "Would you like to tell me about your spouse, kids or pets? "
        input.placeholder = "Please input S, K or P."
        return `Thank you for selecting Family insurance, ${inputValues["name"]}!`
    };

  if (inputCount === 2){
    if (input.value === "A"){
        console.log(inputCount);
        inputCount ++;
        document.getElementById("question").textContent = "Please tell me your age. ";
        input.placeholder = "Please type your age in numbers."
        return `Thank you for selecting "age", ${inputValues["name"]}!`
    } else if (input.value === "B"){
        console.log(inputCount);
        inputCount ++;
        document.getElementById("question").textContent = "Please tell me your BMI. ";
        input.placeholder = "Please type your BMI in numbers."
        return `Thank you for selecting "BMI", ${inputValues["name"]}!`
    } else if (input.value === "H"){
        console.log(inputCount);
        inputCount ++;
        document.getElementById("question").textContent = "Please tell me your hobby. ";
        input.placeholder = `Please input "S", "D" or "B".`
        return `Thank you for selecting "hobby", ${inputValues["name"]}!`
    }
  };



};
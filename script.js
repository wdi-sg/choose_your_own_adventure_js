
console.log("hello script js");


const input = document.getElementById("input");
input.placeholder = "Please type your name.";
var inputValues = {
    name:"",
    door:"",
    doorQuestions: "",
    doorAnswers: [
        {
            age:null,
            BMI:null,
            hobby:null,
        },
        {
            spouse:null,
            kids:null,
            pet:null,
        }
    ]
}

console.log(inputValues.doorAnswers[0]);


var inputCount = 0;

var inputHappened = function(currentInput){
  console.log( currentInput );

  // user inputs name

  if (inputCount === 0) {
    inputValues.name = input.value;
    inputCount ++;
    input.placeholder = "Please input H or F."
    document.getElementById("question").textContent = "Would you like to purchase Health insurance or Family insurance?"
    return `Welcome to InsureCo, ${inputValues["name"]}!`
  };

//inputs for type of insurance
//user wants health insurance
  if (inputCount === 1){
    if (input.value === "H") {
        inputValues.door = input.value;
        console.log(inputCount);
        inputCount ++;
        document.getElementById("question").textContent = "Would you like to tell me about your age, BMI or hobby? "
        input.placeholder = "Please input A, B or H."
        return `Thank you for selecting Health insurance, ${inputValues["name"]}!`
    }
    //user wants family insurance
    else if (input.value === "F") {
        inputValues.door = input.value;
        console.log(inputCount);
        inputCount ++;
        document.getElementById("question").textContent = "Would you like to tell me about your spouse, kids or pets? "
        input.placeholder = "Please input S, K or P."
        return `Thank you for selecting Family insurance, ${inputValues["name"]}!`
    }
  };

  if (inputCount === 2){
    // Three branches for Health Insurance
    if (input.value === "A"){
        console.log(inputCount);
        inputValues.doorQuestions = input.value;
        inputCount ++;
        document.getElementById("question").textContent = "Please tell me your age. ";
        input.placeholder = "Please type your age in numbers."
        return `Thank you for selecting "age", ${inputValues["name"]}!`
    } else if (input.value === "B"){
        console.log(inputCount);
        inputValues.doorQuestions = input.value;
        inputCount ++;
        document.getElementById("question").textContent = "Please tell me your BMI. ";
        input.placeholder = "Please type your BMI in numbers."
        return `Thank you for selecting "BMI", ${inputValues["name"]}!`
    } else if (input.value === "H"){
        console.log(inputCount);
        inputValues.doorQuestions = input.value;
        inputCount ++;
        document.getElementById("question").textContent = "Please tell me your hobby. ";
        input.placeholder = `Please input "S", "D" or "B".`
        return `Thank you for selecting "hobby", ${inputValues["name"]}!`
    }
    // Three branches for Family Insurance
     if (input.value === "S"){
            console.log(inputCount);
            inputValues.doorQuestions = input.value;
            inputCount ++;
            document.getElementById("question").textContent = "Are you married? ";
            input.placeholder = `Please type "Y" or "N".`
            return `Thank you for selecting "spouse", ${inputValues["name"]}!`
    } else if (input.value === "K"){
            console.log(inputCount);
            inputValues.doorQuestions = input.value;
            inputCount ++;
            document.getElementById("question").textContent = "Do you have kids? ";
            input.placeholder = `Please type "Y" or "N".`
            return `Thank you for selecting "kids", ${inputValues["name"]}!`
    } else if (input.value === "P"){
            console.log(inputCount);
            inputValues.doorQuestions = input.value;
            inputCount ++;
            document.getElementById("question").textContent = "What kind of pet do you have? ";
            input.placeholder = `Please input "C", "W" or "A".`
            return `Thank you for selecting "pet", ${inputValues["name"]}!`
    }
  };

    if (inputCount === 3){
    console.log(inputCount);
    //if user goes down Health Insurance path

    //if user has not answered all 3 Health Insurance questions
        if ( inputValues.door === "H" && (inputValues.doorAnswers[0]["age"] === null || inputValues.doorAnswers[0]["BMI"] === null|| inputValues.doorAnswers[0]["hobby"]=== null)){
            console.log(inputValues.doorAnswers[0]);
            //user inputs age
            if (inputValues.doorQuestions === "A"){
                document.getElementById("question").textContent = "Would you like to tell me about your BMI or hobby? "
                input.placeholder = "Please input B or H."
                inputCount --;
                    if (input.value > 60){
                    inputValues.doorAnswers[0]["age"] = input.value;
                    return `something about how old you are`
                    } else if (input.value <= 20){
                    inputValues.doorAnswers[0]["age"] = input.value;
                    return `something about how young you are`
                    } else {
                    inputValues.doorAnswers[0]["age"] = input.value;
                    return `something about how uninspiring you are`
                    }
                //user inputs BMI
                } else if (inputValues.doorQuestions === "B"){
                document.getElementById("question").textContent = "Would you like to tell me about your age or hobby? "
                input.placeholder = "Please input A or H."
                inputCount --;
                    if (input.value > 25){
                    inputValues.doorAnswers[0]["BMI"] = input.value;
                    return `ssomething about consider lowering BMI`
                    } else if (input.value <= 18){
                    inputValues.doorAnswers[0]["BMI"] = input.value;
                    return `something about consider raising BMI`
                    } else {
                    inputValues.doorAnswers[0]["BMI"] = input.value;
                    return `something about recognized as normal`
                    }
                //user inputs hobby
                } else if (inputValues.doorQuestions === "H"){
                document.getElementById("question").textContent = "Would you like to tell me about your age or BMI? "
                input.placeholder = "Please input A or B."
                inputCount --;
                    if (input.value === "S"){
                    inputValues.doorAnswers[0]["hobby"] = input.value;
                    return `I hope you use a dive cage.`
                    } else if (input.value === "D"){
                    inputValues.doorAnswers[0]["hobby"] = input.value;
                    return `bad snake pun`
                    } else if (input.value === "B"){
                    inputValues.doorAnswers[0]["hobby"] = input.value;
                    return `Parachutes are just a meaningless expenditure, really.`
                    }
                }
        }
            //if user goes down Family Insurance path
        else if ( inputValues.door = "F" && (inputValues.doorAnswers[1]["spouse"] === null || inputValues.doorAnswers[1]["kids"] === null|| inputValues.doorAnswers[1]["pet"]=== null)){
            console.log(inputValues.doorAnswers[0]);
            //user selected spouse
            if (inputValues.doorQuestions === "S"){
            document.getElementById("question").textContent = "Would you like to tell me about your kids or pet? "
            input.placeholder = "Please input K or P."
            inputCount --;
            //whether user has spouse
                if (input.value === "Y"){
                inputValues.doorAnswers[1]["spouse"] = input.value;
                return `L'chaim! Felicidades! Etc.`}
               else {
                inputValues.doorAnswers[1]["spouse"] = input.value;
                return `Live your best life!`
                }
            // user selected kids
            } else if (inputValues.doorQuestions === "K"){
            document.getElementById("question").textContent = "Would you like to tell me about your spouse or pet? "
            input.placeholder = "Please input S or P."
            inputCount --;
            // whether use has kids
                  if (input.value === "Y"){
                inputValues.doorAnswers[1]["kids"] = input.value;
                return `You must be very happy.`}
               else {
                inputValues.doorAnswers[1]["kids"] = input.value;
                return `You must be very happy.`
                }
            //user selected pet

            } else if (inputValues.doorQuestions === "P"){
            document.getElementById("question").textContent = "Would you like to tell me about your spouse or kids? "
            input.placeholder = "Please input S or K."
            inputCount --;
                if (input.value === "C"){
                inputValues.doorAnswers[1]["pet"] = input.value;
                return `
           .-._   _ _ _ _ _ _ _ _
                    .-''-.__.-'00  '-' ' ' ' ' ' ' ' '-.
                    '.___ '    .   .--_'-' '-' '-' _'-' '._
                     V: V 'vv-'   '_   '.       .'  _..' '.'.
                       '=.____.=_.--'   :_.__.__:_   '.   : :
                               (((____.-'        '-.  /   : :
                                                 (((-'\ .' /
                                               _____..'  .'
                                              '-._____.-'
                `
                } else if (input.value === "W"){
                inputValues.doorAnswers[1]["pet"] = input.value;
                return `I don't think you're supposed to keep whales in swimming pools. (can I link this to kids to make a statement about eating them?)


                                    ','. '. ; : ,','
                                      '..'.,',..'
                                         ';.'  ,'
                                          ;;
                                          ;'
                            :._   _.------------.___
                    __      :__:-'                  '--.
             __   ,' .'    .'             ______________'.
           /__ '.-  _\___.'          0  .' .'  .'  _.-_.'
              '._                     .-': .' _.' _.'_.'
                 '----'._____________.'_'._:_:_.-'--'

                `
                } else if (input.value === "A"){
                inputValues.doorAnswers[1]["pet"] = input.value;
                return `            __
                                      / _)
                             _.----._/ /
                            /         /
                         __/ (  | (  |
                        /__.-'|_|--|_|

                        `
                }

            }
        }

        else {
        input.placeholder = "Please input H or F.";
        document.getElementById("question").textContent = "Would you like to purchase additional Health or Family Insurance?";
        inputCount -=2;}
    };

}
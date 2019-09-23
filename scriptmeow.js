
console.log("hello script js");


const input = document.getElementById("input");
input.placeholder = "What is your name?";

    var inputValues = {
        name:"",
        meow:"",
        door:"",
        location:"",
        decision:""
    }



var inputCount = 0;

var inputHappened = function(currentInput){

console.log(inputCount)


  // user inputs name

  if (inputCount === 0) {
  inputValues.name = input.value;
    inputCount ++;
    input.placeholder = `Say "meow".`
    document.getElementById("question").textContent = "Meow."
    return `Hello, ${inputValues["name"]}! You are a cat. Meow!`
  };

if (inputCount === 1){
    inputValues.meow = input.value;
    if (inputValues.meow === "meow" || inputValues.meow === "Meow" ){
    inputCount ++;
    input.placeholder = `Please input G (for garden), B (for bedroom) or K (for kitchen).`
    document.getElementById("question").textContent = "Where would you like to explore today?"
    return `Meow to you too, ${inputValues["name"]}!`
    } else {
    return `I know you are a cat, but please follow instructions!`
    console.log(inputCount)
    }
}


  if (inputCount === 2) {
    inputValues.door = input.value;
    console.log(input.value)
    console.log(inputCount)


    if (inputValues.door === "G"||inputValues.door === "g") {
inputCount ++;
        input.placeholder = `Please input T (for tree), F (for flowers) or G (for grass).`
    document.getElementById("question").textContent = " Would you like to go up the tree, in the flowers, or in the grass?"
    return `You are in the garden, ${inputValues["name"]}!`
    }
    else if (inputValues.door === "B"||inputValues.door === "b") {
inputCount ++;
        input.placeholder = `Please input B (for bed), N (for nighstand) or C (for closet).`
    document.getElementById("question").textContent = " Would you like to go to the bed, the nightstand or the closet?"
    return `You are in the bedroom, ${inputValues["name"]}!`
    }
    else if (inputValues.door === "K" ||inputValues.door === "k") {
inputCount ++;
        input.placeholder = `Please input S (for sink), C (for cuttingboard) or O (for oven).`
    document.getElementById("question").textContent = " Would you like to go to the sink, the cuttingboard or the oven?"
    return `You are in the kitchen, ${inputValues["name"]}!`
    } else {
    return `I know you are a cat, but please follow instructions!`
    }
  };//end input count 2

  if (inputCount === 3) {
    inputValues.location = input.value;
    console.log(inputCount)

    if (inputValues.door === "G" ||inputValues.door === "g") {

      if (inputValues.location === "T" ||inputValues.location === "t") {
          inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = " Would you like to eat the squirrel?"
        return `You are up the tree, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "F" ||inputValues.location === "f") {
              inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = " Would you like to eat the butterfly?"
        return `You are in the flowers, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "G" ||inputValues.location === "g") {
              inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = " Would you like to eat the grass?"
        return `You are in the grass, ${inputValues["name"]}!`
        }
    } //end of garden
    else if (inputValues.door === "B" ||inputValues.door === "b") {

      if (inputValues.location === "B"||inputValues.location === "b") {
          inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = " You walk to the edge of the bed. Do you fall over the edge?"
        return `You are on the bed, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "N"||inputValues.location === "n") {
              inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "You see a glass of water. Would you like to push the glass?"
        return `You are on the night stand, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "C"||inputValues.location === "c") {
              inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "The closet door opens inwards. Do you accidentally shut yourself into the closet?"
        return `You are in the closet, ${inputValues["name"]}!`
        }
    } //end of bedroom
       else if (inputValues.door === "K" ||inputValues.door === "k") {

        if (inputValues.location === "S" ||inputValues.location === "s") {
              inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "You see a bowl full of water. Do you stick your face into it?"
        return `You are in the sink, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "C" ||inputValues.location === "c") {
              inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "You see the remains of a chili from the Human's dinner last night. Do you lick the chili?"
        return `You are on the cuttingboard, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "O" ||inputValues.location === "o") {
              inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "You are in the oven. Do you fall asleep in it?"
        return `You are in the oven, ${inputValues["name"]}!`
        }
    } else {
    return `I know you are a cat, but please follow instructions!`
    }//end of kitchen
  } // end of input count 3

 if (inputCount === 4) {
    inputValues.decision = input.value;
console.log(inputCount)
    if (inputValues.decision === "Y" ||inputValues.decision === "y"){
        input.placeholder = `Meow.`
        document.getElementById("question").textContent = "Please stop meowing."
        inputCount ++;
        return "Meow pitifully until Human comes home."
    }
    else if (inputValues.decision === "N" ||inputValues.decision === "n"){
        input.placeholder = `Say "meow".`
         document.getElementById("question").textContent = "Make better cat decisions tomorrow."
         inputCount -=3;
            return "Seems like a boring day for a cat. Maybe tomorrow will be more interesting..."
    }
  }//end of inputCount 4

 if (inputCount === 5) {
    console.log(inputCount)
    inputCount -=4;
    console.log(inputCount)
    input.placeholder = `Say "meow".`
        document.getElementById("question").textContent = "Please stop meowing."

        return "MEOWMEOWMEEOOOOOOOOOOOOOOOOOOOOOWWWWWWWWWWWW."
 }

} //end of entire inputHappened function

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

output.style.fontSize = "30px";

var inputCount = 0;
var img = document.querySelector("img");
var pics = document.getElementById("pics");
// function meowLots() {
//        var meow = document.createElement("img");
//         meow.src = "meow.gif";
//         pics.appendChild(meow);
// }

// function meowLess(){
//     pics.removeChild(meow)
// }

alert("Please view this in full screen.")

var inputHappened = function(currentInput){

console.log(inputCount)


  // user inputs name

  if (inputCount === 0) {
  inputValues.name = input.value;
    inputCount ++;
    input.placeholder = `Say "meow".`
    document.getElementById("question").textContent = "Meow."
    img.src = "hello.gif"
    return `Hello, ${inputValues["name"]}! You are a cat. Meow!`
  };

if (inputCount === 1){
    img.src = "";

    // var clearMeow = clearInterval(meowInterval);
    inputValues.meow = input.value;
     img.src = "meow.gif"
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
        input.placeholder = `Please input B (for bed), N (for nighstand) or C (for computer).`
    document.getElementById("question").textContent = " Would you like to go to the bed, the nightstand or the computer?"
    return `You are in the bedroom, ${inputValues["name"]}!`
    }
    else if (inputValues.door === "K" ||inputValues.door === "k") {
inputCount ++;
        input.placeholder = `Please input C (for cuttingboard), O (for oven) or S (for souffle).`
    document.getElementById("question").textContent = " Would you like to go to the cuttingboard, the oven or make a souffle?"
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
           img.src = "squirrel.gif"
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = " You see a squirrel. Would you like to eat the squirrel?"
        return `You are up the tree, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "F" ||inputValues.location === "f") {
              inputCount ++
               img.src = "butterfly.png"
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = " You see a butterfly. Would you like to eat the butterfly?"
        return `You are in the flowers, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "G" ||inputValues.location === "g") {
               img.src = "rain.jpg"
              inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = " It starts to rain. Do you stay out in the rain?"
        return `You are in the grass, ${inputValues["name"]}!`
        }
    } //end of garden
    else if (inputValues.door === "B" ||inputValues.door === "b") {

      if (inputValues.location === "B"||inputValues.location === "b") {
         img.src = "sleep.png"
          inputCount ++
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = " You walk to the edge of the bed. Do you take a nap and miss dinner time?"
        return `You are on the bed, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "N"||inputValues.location === "n") {
              inputCount ++
               img.src = "lamp.gif"
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "You see a lamp. Would you like to push it over and make the Human angry?"
        return `You are on the night stand, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "C"||inputValues.location === "c") {
              inputCount ++
              img.src = "computer.png"
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "The computer is on. Do you make the Human sad by sitting on the keyboard and ruining her homework?"
        return `You are at the computer, ${inputValues["name"]}!`
        }
    } //end of bedroom
       else if (inputValues.door === "K" ||inputValues.door === "k") {

        if (inputValues.location === "S" ||inputValues.location === "s") {
              inputCount ++
              img.src = "baking.jpeg"
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "You start to make a souffle. Do you ruin it completely?"
        return `You are going to make a souffle, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "C" ||inputValues.location === "c") {
              inputCount ++
              img.src = "pizza.gif"
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "You see the remains of a pizza from the Human's dinner last night. Do you eat the pizza?"
        return `You are on the cuttingboard, ${inputValues["name"]}!`
        }
        else if (inputValues.location === "O" ||inputValues.location === "o") {
              inputCount ++
              img.src = "cupcake.jpg"
        input.placeholder = `Please input Y (for yes) or N (for no).`
        document.getElementById("question").textContent = "You are in the oven. Do you turn into a cupcake?"
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
        img.src = "meow.gif"

//      var meowInterval = setInterval(meowLots, 300);
//      var clearMeow = clearInterval(meowInterval);
//      setTimeout(clearMeow, 10000);

      //this may be where it all goes wrong
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
    } else {
    return `I know you are a cat, but please follow instructions!`
    }
  }//end of inputCount 4

 if (inputCount === 5) {
    console.log(inputCount)


//      var meowInterval = setInterval(meowLots, 300);
//      var clearMeow = clearInterval(meowInterval);
//      setTimeout(clearMeow, 10000);
    inputCount -=4;
    console.log(inputCount)
    input.placeholder = `Say "meow".`
        document.getElementById("question").textContent = "Please stop meowing."

        return "MEOWMEOWMEEOOOOOOOOOOOOOOOOOOOOOWWWWWWWWWWWW."
 }

} //end of entire inputHappened function
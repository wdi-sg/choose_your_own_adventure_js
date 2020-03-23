console.log("hello script js");

  var getName = document.getElementById("input");
  getName.placeholder = "Enter your Name";
  console.log(getName.placeholder);

// var display = function( data ){
//         var output = document.querySelector('#output');
//         output.innerText = data;
//     };

  var lastinput;
  var lastOutput;
  var player;
  var house;

  var house = [
  {
    name: "Gryfindor",
    founder: "Godric",
    teacher: "Prof McGonagall"
  },
  {
    name: "Hufflepuff",
    founder: "Helga",
    teacher: "Prof Sprout"
  },
  {
    name: "Ravenclaw",
    founder: "Rowena",
    teacher: "Prof Filtwick"
  },
  {
    name: "Slytherin",
    founder: "Salazar",
    teacher: "Prof Snape"
  }
  ];


var inputHappened = function(currentInput){
  // console.log( currentInput );
  var playName = currentInput;
  console.log(playName);
  var result = "Hello " + playName + ", Which house are you in? (1)Gryffindor (2)Hufflepuff (3)Revenclaw (4)Slytherin";
  console.log (result);
  return (result);

//   if (currentInput === 1) {
//     display ("you chose Gryffindor, please look for prof Mcgonagall");



// }
};

  // return "SOMETHING HAPPENED";
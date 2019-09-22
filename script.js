console.log("hello script js");

/* ---- pink display box selector----*/
var display = function( data ){
var textOutput = document.querySelector('#output');
textOutput.innerText = data;
};


document.querySelector('#nameConfirm').addEventListener('click', function(event){
  //selected name input box value
  var nameInput = document.querySelector('#nameInput').value;
  console.log(nameInput);
  var intro = "Hello " + nameInput + "\n Welcome to Middle-earth" +"\n Where would u like to go?" + "\n 1.shire" + "\n 2. gondor" + "\n 3.rohan" ;
  display( intro );
});


var shire = {
  name: "shire",
  north: "tavern",
  south: "bilbo's home",
  east: "event yard",
  West: "Mirkwood"
};
var gondor = {
  name: "gondor",
  north: "Market place",
  south: "Narrow Alley Way",
  east: "you peer into the distance",
  west: " you are stopped by a guard"
};
var rohan = {
  name: "rohan",
  north: "you see the entrance to the castle",
  south: "there is nothing of interest",
  east: "you peer into the distance",
  west: " you are stopped by a guard"
};

var place = [shire,gondor, rohan];

// location access

document.querySelector('#input').addEventListener('change', function(event){
  var currentInput = event.target.value;
  var location = place[0].name;

  if( currentInput === "shire"){

    location = place[0].name;
    display( location + "\n" + "1." + place[0].north + "\n" + "2." + place[0].south
    + "\n" +"3." + place[0].east + "\n"+ "4." + place[0].west);
  }

  else if( currentInput === "gondor"){
    location = place[1].name;
    display( location + "\n" + "1." + place[1].north + "\n" + "2." + place[1].south
    + "\n" +"3." + place[1].east + "\n"+ "4." + place[1].west);
    }

  else if( currentInput === "rohan"){
      location = place[2].name;
      display( location + "\n" + "1." + place[2].north + "\n" + "2." + place[2].south
      + "\n" + "3." + place[2].east + "\n"+ "4." + place[2].west);
      }
});



// if (currentInput == "shire north") function shireGo(shire, direction){
//   var output =  shire.north;
//   return output;
// }

console.log("hello script js");

/* ---- pink display box selector----*/
var display = function( data ){
var displayElement = document.querySelector('#output');
displayElement.innerHTML = "";
output.innerText = data;
};

/* ---resets the box to beginning ----*/
document.querySelector('#reset').addEventListener('click',function(event){
  var startMap = document.getElementById('map-display');
  startMap.setAttribute('src', '../images/lotr-map.jpg');
  var intro = "\n Welcome to Middle-earth" +"\n Where would u like to go?" + "\n 1.theShire" + "\n 2. gondor" + "\n 3.rivendell" ;
  display( intro );
  console.log("why");
});
/*----- name input cofirmation button ----*/
// added images that will change with location using DOM
document.querySelector('#nameConfirm').addEventListener('click', function(event){
  //selected name input box value
  var nameInput = document.querySelector('#nameInput').value;
  console.log(nameInput);
  var map = document.createElement('IMG');
  map.setAttribute('src', '../images/lotr-map.jpg');
  map.setAttribute('id', 'map-display');
  document.body.appendChild(map);
  var intro = "Hello " + nameInput + "\n Welcome to Middle-earth" +"\n Where would u like to go?" + "\n 1.theShire" + "\n 2. gondor" + "\n 3.rivendell" ;
  display( intro );
});


var theShire = {
  name: "shire",
  north: "tavern",
  south: "bilbo's home",
  east: "event yard",
};
var gondor = {
  name: "gondor",
  north: "Market place",
  south: "Gates of Gondor",
  east: "Entrance to Helmsdeep",
  west: " you are stopped by a guard."
};
var rivendell = {
  name: "rivendell",
  north: "you see the entrance",
  south: "Dark looking woods",
  east: "you peer into the distance",
  west: " you are stopped by a guard"
};

var place = [theShire,gondor, rivendell];

// location access

var main = document.querySelector('#input').addEventListener('change', function(event){
  var currentInput = event.target.value;
  var location = place[0].name;

  if( currentInput === "theShire"){
    var shireMap = document.getElementById('map-display');
    shireMap.setAttribute('src', '../images/the-shire.jpg');
    location = place[0].name;
    display( location + "\n" + "1." + place[0].north + "\n" + "2." + place[0].south
    + "\n" +"3." + place[0].east);
  }

  else if( currentInput === "gondor"){
    var gondorMap = document.getElementById('map-display');
    gondorMap.setAttribute('src', '../images/gondor.jpg');
    location = place[1].name;
    display( location + "\n" + "1." + place[1].north + "\n" + "2." + place[1].south
    + "\n" +"3." + place[1].east + "\n"+ "4." + place[1].west);
    }

  else if( currentInput === "rivendell"){
      var rivMap = document.getElementById('map-display');
      rivMap.setAttribute('src', '../images/rivendell.png');
      location = place[2].name;
      display( location + "\n" + "1." + place[2].north + "\n" + "2." + place[2].south
      + "\n" + "3." + place[2].east + "\n"+ "4." + place[2].west);
      }

  else(display("that is not a valid input!"));
});

// tried to create img element in displaybox to store image. cant get it to work
// var mapGen = function(){
//   var cre8Map = document.createElement("img");
//   cre8Map.setAttribute('src', '../images/lotr-map.jpg');
//   cre8Map.setAttribute('id', 'map-display');
//   document.getElementById('output').appendChild("crea8Map");
// };

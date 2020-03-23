console.log("hello script js");


document.getElementById("input").placeholder = "Enter your name";

//an array of champions
var champions = [
    {
        team : "Mclaren",
        birthYear : 1947,
        yearWon : 1976,
        name : "James Hunt",
    },
    {
        team : "Ferrari",
        birthYear : 1949,
        yearWon : 1977,
        name : "Niki Lauda",
    },
    {
        team : "Mclaren",
        birthYear : 1960,
        yearWon : 1988,
        name : "Ayrton Senna",
    },
    {
        team : "Williams",
        birthYear : 1955,
        yearWon : 1993,
        name : "Alain Prost",
    },
    {
        team : "Benetton",
        birthYear : 1969,
        yearWon : 1994,
        name : "Michael Schumacher",
    },
    {
        team : "Renault",
        birthYear : 1981,
        yearWon : 2005,
        name : "Fernando Alonso",
    },
    {
        team : "Ferrari",
        birthYear : 1979,
        yearWon : 2007,
        name : "Kimi Raikkonen",
    },
    {
        team : "Mclaren",
        birthYear : 1985,
        yearWon : 2008,
        name : "Lewis Hamilton",
    },
]

var championsCompare = [ ]
console.log( championsCompare );

var question1 = function(a){
    var yearWin = (champions[Math.floor(Math.random() * 8)].yearWon);
    document.getElementById("input").value = "";
    return "Did you win the championship in the year " + parseInt(yearWin) + "?";
}

var question2 = function(b){
    var yearBorn = (champions[Math.floor(Math.random() * 8)].birthYear);
    document.getElementById("input").value = "";
    return "Were you born in the year " + parseInt(yearBorn) + "?";
}

var question3 = function(c){
    var raceTeam = (champions[Math.floor(Math.random() * 8)].team);
    document.getElementById("input").value = "";
    return "Was your constructor team " + (raceTeam) + "?";
}

var inputHappened = function(currentInput){
    currentInput = currentInput.toLowerCase();
    document.getElementById("input").placeholder = "";
    document.getElementById("input").value = "" ;

    if (  currentInput !== "y" && currentInput !== "n" &&
        currentInput != NaN && currentInput.length > 0 ){
        var output = "Hey " + currentInput + ", " + "Welcome to which F1 world champion are you? -- A memory game. First, you can choose your championship winning year. Then, you must answer the following questions correctly that are related to the F1 champion of the year you have chosen. If you get all your answers correctly in sequence, your F1 champion's name will be revealed in the end. Are your ready?  If yes, input 'Y' and enter, if 'No' input 'N' and enter. "
    }
    if( currentInput === "y" ) {
        var output = question1(currentInput) + " if 'Yes', press 'T', if your answer is 'No' press 'Y' and enter"
    }
    if (currentInput === "n") {
        var output = "It's alright! get back when you are ready!"
    }
    if (currentInput === "t"){
        championsCompare.push({ yearWon : currentInput});
        var output = question2(currentInput) + " if 'Yes', press 'S', if your answer is 'No'  press 'T' and enter ";
        console.log("it works!")
    }
    if (currentInput === "s") {
        var output = question3(currentInput) + " if 'Yes',  if your answer is 'No' press 's' and enter"
    }
    if (currentInput === "h") {
        var output = question3(currentInput) + " if 'Yes',  if your answer is 'No' press 's' and enter"
    }


return output;
}


  //return "You were born in the year '1977', press and enter 'Y' if yes, or press and enter 'N' if it's no" ;


/*var inputHappened = function(currentInput){
    if(currentInput === "A"){
        console.log( currentInput );
  document.getElementById("input").value = currentInput;
  return "SOMETHING HAPPENED";
    }else{
        return "NOTHING HAPPENED";
    }
}*/
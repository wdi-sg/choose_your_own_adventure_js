//This section displays the home menu
console.log("Welcome to Fantasy Online!");

var instructions = "This is a role playing game.\nPlayer will be presented with a number of choices.\nTo select the choices, player types in the choices given.";

console.log(instructions);


// User can choose where to start a new game or not

function logInScreen(){

var displayLogInOption = prompt("New Game\nContinue\nExit");

    if (displayLogInOption === "New Game" || displayLogInOption === "new game"){
        createAccount();

        if (playerData.gender === "male"){
            console.log("Welcome Mr " + playerName + "!\nYou will now begin your adventure of a lifetime!");
        }
        else if (playerData.gender === "female"){
            console.log("Welcome Ms " + playerName + "\nYou will now begin your adventure of a lifetime!");
        }
    }

    else if (displayLogInOption === "Continue" || displayLogInOption === "continue"){
        //retrieve data from array
        console.log("Please enter your user name");
    }

    else if (displayLogInOption === "Exit" || displayLogInOption === "exit"){
        console.log("You will now exit the game.");
    }

    else {
        console.log("Please choose and type in correctly")
        logInScreen();
    };
};




//This array stores player data by user, in the future link to some backend database.

var currentPlayerData;

var currentPlayerName = " ";
var currentPlayerStat = {
                        name: "Dsen",
                        gender: "m",
                        age: 27,
                        stat:{
                                Hp: 100 ,
                                Strength: 10 ,
                                Intelligence: 5}
                        };



function createAccount (){
        var playerData = {
                name: askName() ,
                gender: askGender() ,
                age: askAge() ,
                stat: {
                        Hp: 0 ,
                        Strength: 0 ,
                        Intelligence: 0 }

        };
        currentPlayerData.push(playerData);
        currentPlayerStat = playerData;
        currentPlayerName = playerData.name;
        console.log(currentPlayerData);
};


//This section asks the various questions to collet user data

//This function asks the user for their name
function askName(){
    var playerName = prompt("Please enter your name.");
    playerName = confirm();
        function confirm (){
            var confirmName = prompt("Is " + playerName + " your name?\nyes/no")
                if (confirmName === "yes"){
                    console.log("You will be now called " + playerName)
                }
                else if (confirmName === "no"){
                    console.log("Please re-enter your name")
                    askName();
                }
                else{
                    console.log("Please re-enter your name")
                    confirm();
                };
    };
    return playerName;
};


//This function asks the user for their gender
function askGender(){
    var gender = prompt("Please enter your gender\nmale/female")
        if (gender === "male" || gender === "Male"){
            return "male";
        }
        else if (gender === "female" || gender === "Female"){
            return "female";
        }

        else{
            console.log("please re-enter your age");
            askGender()
        }
};

//This functions asks the user for their ages
function askAge(){
    var age = prompt("Please enter your age e.g. 21");
    if (age < 18){
        console.log("You are too young to play the game\nGo play pokemon or somethin...")
    }
    else if (age >= 18 && age < 120){
        return age;
    }
    else{
        console.log("please re-enter your age");
        askAge()
    }
};


//This section will enable let the player choose their in game characters classes.
var strength;
var intelligence;
var dmg = strength + intelligence;

var knight = {
        Hp: 100,
        Strength: 10,
        Intelligence: 5
};

var wizard = {
        Hp: 50,
        Strength: 5,
        Intelligence: 10
};

var archer = {
        Hp: 60,
        Strength: 7,
        Intelligence: 7
};


//This section will monsters


var slime = {
    name: "Slime",
    description: "A goo-ey monster that every rpg will encounter.",
        stat: {
                Hp: 100,
                dmg: 1,
                experience: 10
                }
            };




//This section will create fighting mechanics



function randomEncounter(player, monster){

console.log("You encountered a " + monster + "!");
console.log(monster); //or any other monster

var fightOrRun = prompt("Choose your action\nfight or run")

            if (fightOrRun === "fight"){
                //enter batte
            }
            else if (fightOrRun === "run"){
                console.log("You fled from battle")
            };
};


var battle = function(player, monster){
        var statOfPlayerInBattle = player.stat;
        var statOfMonsterInBattle = monster.stat;

        function turn(){
            var attackOrRun = prompt("What would you like to do?\nattack or run")
            return attackOrRun
        }

        if (turn() === "attack"){
            var playerAttack = (statOfPlayerInBattle.Strength + statOfPlayerInBattle.Intelligence)


            //This will updated the variable statOfMonsterInBattle
            statOfMonsterInBattle.Hp = statOfMonsterInBattle.Hp - playerAttack

        }

        else if (turn() === "run"){
            console.log("You fled from battle")
        };
}

battle(currentPlayerStat, slime);













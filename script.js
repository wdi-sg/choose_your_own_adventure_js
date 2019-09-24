console.log("hello script js");

alert("Welcome Adventurer! \n\nPlease type in your name for your in game character in the input box given (e.g. White Wolf) \n\nYou cannot change your name later so please choose wisely");

// The step variable is to check the number of inputs so far. Name is to store the name the user have chosen. characterChosen is to store the character class chosen. PathTaken is to store the number of paths taken so far.
//All these variables outside of the function allows me to better control what i want the user to type and what i want to display, by using array length as a conditional and targeting array elements
var step = []
var name = "";
var characterChosen = "";
var characterHP = "";
var characterPower = "";
var characterSpeed = "";
var pathTaken = [];
var run = "";
var ranNum = "";
var ranNumDemon = "";
var GIFs;
var imageBox;


//Variables pertaining to the enemy which i want to track and edit accordingly

var enemy = "";
var enemyName = "";
var enemyDie = ""
var enemyHP = "";
var enemyPower = "";
var enemySpeed = "";

////////////////////////////////////////////////////////////////////////////////////

var inputHappened = function(currentInput){



//put everything that user type into the array called step.
step.push(currentInput);

//step 1 is just to get the name
if (step.length >= 0 && name === ""){
    name = currentInput;
    step[0] = name;
    result = "Good day " + name + "! Your adventure awaits you! \n\nPerilous paths will be taken, and only the strong, or the lucky, will survive. Will you be the one? \n\nGood luck " + name + ", may fortune and the force be with you \n\nPlease type in your Adventurer Class (Warrior / Mage / Ranger)";

        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://media1.giphy.com/media/OF0yOAufcWLfi/giphy.gif?cid=790b7611b74731e506d52166848f936f252df3ba357ea0f3&rid=giphy.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
}


//if there are more than 1 elements in the array, check if the SECOND element is the Character classes or not. If yes, proceed, if not, delete their entry and ask them to input correctly. Change second element to LOWERCASE
if (step.length === 2){
    //changing all inputs into lower case
    input = step[1].toLowerCase();
    if (input === "warrior"){
        characterChosen = "Warrior"
        characterHP = JSON.stringify(character.warrior.stats.hp);
        characterPower = JSON.stringify(character.warrior.stats.power);
        characterSpeed = JSON.stringify(character.warrior.stats.speed);
        result = "You have chosen to be a " + characterChosen + ", your stats are as follows: \n\n HP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nYou may now choose the path you would like to take \n\n(Fire Path / Water Path / Earth Path / Wind Path)";
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://media0.giphy.com/media/deMPDmQw59lJRu3A83/giphy.gif?cid=790b7611850cbdf14286c2b6a3b37cf5dbadf1edcabe4664&rid=giphy.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
    } else if (input === "mage"){
        characterChosen = "Mage"
        characterHP = JSON.stringify(character.mage.stats.hp);
        characterPower = JSON.stringify(character.mage.stats.power);
        characterSpeed = JSON.stringify(character.mage.stats.speed);
        result = "You have chosen to be a " + characterChosen + ", your stats are as follows: \n\n HP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path)";
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://media2.giphy.com/media/Av0zcKH3i2BkaY1GXW/giphy.gif?cid=790b7611983f1b44f80f9135ea483ee2d99e95bfd5eb212a&rid=giphy.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
    } else if (input === "ranger"){
        characterChosen = "Ranger"
        characterHP = JSON.stringify(character.ranger.stats.hp);
        characterPower = JSON.stringify(character.ranger.stats.power);
        characterSpeed = JSON.stringify(character.ranger.stats.speed);
        result = "You have chosen to be a " + characterChosen + ", your stats are as follows: \n\n HP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nYou may now choose the path you would like to take \n\n(Fire Path / Water Path / Earth Path / Wind Path)";
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://media0.giphy.com/media/psqqazmAKeeMU/giphy.gif?cid=790b76114701a4b45a1b9712e24bafd776e16c1b5deb097b&rid=giphy.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
    } else{
        step.pop();
        result = "Please choose the correct input! \n\n(Warrior / Mage / Ranger)";
    };
};


//if there are more than 2 elements in the array, check if the THIRD element is the paths to be taken, if is then proceed, if it's something else then delete their input and prompt them to input correctly. Change third element to LOWERCASE.
if (step.length === 3){
    //changing all inputs into lower case
    input = step[2].toLowerCase();
    if(input === "fire path"){
        pathTaken[0] = "Fire Path";
        result = "The Fire Path is one of searing heat and melting flesh, many demons exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward! \n\nPlease type 'CHIONG AH' to continue";
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://media0.giphy.com/media/fiyQQLci4d1w6Njojo/giphy.gif?cid=790b76113b80344dbfed7e18190093f5b05b47efc9ad0e85&rid=giphy.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
    } else if (input === "water path"){
        pathTaken[0] = "Water Path";
        result = "The Water Path is one of crashing waves and crushing depths, many demons exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward! \n\nPlease type 'CHIONG AH' to continue";
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://media0.giphy.com/media/ET5QsE8329VM4/giphy.gif?cid=790b76112f9043ad22a6fbeaee4dfd49422ac7008caabf23&rid=giphy.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
    } else if (input === "earth path"){
        pathTaken[0] = "Earth Path";
        result = "The Earth Path is one of meteoric avalanches and ambushing cliffs, many demons exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward! \n\nPlease type 'CHIONG AH' to continue";
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://i.makeagif.com/media/4-09-2015/BnO2P_.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
    } else if (input === "wind path"){
        pathTaken[0] = "Wind Path";
        result = "The Wind Path is one of tearing tornadoes and dizzying heights, many demons exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward! \n\nPlease type 'CHIONG AH' to continue";
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://media1.giphy.com/media/HhhajSmRfikXC/giphy.gif?cid=790b7611fd7e306928e31c6da18fca35e297ff0b086adb99&rid=giphy.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
    } else {
        step.pop();
        result = "Please choose the correct input! \n\n(Fire Path / Water Path/ Earth Path/ Wind Path)";
    };
};


//this step is to give some instructions and display the stats.
if(step.length === 4){
    //changing all inputs into lower case
    input = step[3].toLowerCase();
    if(input === "chiong ah"){
        result = name + " the " + characterChosen +"\nHP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nThe stats display above will be available from here on, they will help you keep track of your character status. \nYour HP stat is especially important as if it reaches 0, it is game over and you have to start over from the beginning. Additionally, things get tricky from now onwards, paths diverge and paths converge, you never know where you will end up next or what you will face. \n\nNow let us begin!!! The " + pathTaken + " waits for no one! \n\nPlease type 'Proceed' to, you know, proceed. "
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://media1.giphy.com/media/3oxHQpJKupQXsmU1JS/giphy.gif?cid=790b76113cf187ab53365789fe03c5237441c248b70f4d6a&rid=giphy.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
    } else {
        step.pop();
        result = "Yooooooo c'mon man you know what you need to do. \n\nType 'CHIONG AH' to continue";;
    }
};


//this is where user encounters the demons according to the path traveled.
if (step.length === 5){
    //changing all inputs into lower case
    input = step[4].toLowerCase();
    encounter();
};


//this is where the fight scene occurs
if (step.length === 6){
    //changing all inputs into lower case
    input = step[5].toLowerCase();
    fightScene();
};

//this is where user encounters the demons according to the path traveled.
if (step.length === 7){
    //changing all inputs into lower case
    input = step[6].toLowerCase();
    encounter();
};

//this is where the fight scene occurs
if (step.length === 8){
    //changing all inputs into lower case
    input = step[7].toLowerCase();
    fightScene();
};

//this is where user encounters the demons according to the path traveled.
if (step.length === 9){
    //changing all inputs into lower case
    input = step[8].toLowerCase();
    encounter();
};

//this is where the fight scene occurs
if (step.length === 10){
    //changing all inputs into lower case
    input = step[9].toLowerCase();
    fightScene();
};

//this is where user encounters the demons according to the path traveled.
if (step.length === 11){
    //changing all inputs into lower case
    input = step[10].toLowerCase();
    encounter();
};

//this is where the fight scene occurs
if (step.length === 12){
    //changing all inputs into lower case
    input = step[11].toLowerCase();
    fightScene();
};

//this is where user encounters the demons according to the path traveled.
if (step.length === 13){
    //changing all inputs into lower case
    input = step[12].toLowerCase();
    encounter();
};

//this is where the fight scene occurs
if (step.length === 14){
    //changing all inputs into lower case
    input = step[13].toLowerCase();
    fightScene();
};

//this is where user encounters the demons according to the path traveled.
if (step.length === 15){
    //changing all inputs into lower case
    input = step[14].toLowerCase();
    if(input === "proceed"){
        enemy = demon[3]["demon boss"];
        enemyName = "Demon Lord";
        enemyDie = "finish the game"
        enemyHP = enemy.stats.hp;
        enemyPower = enemy.stats.power;
        enemySpeed = enemy.stats.speed;
        result = name + " the " + characterChosen +"\nHP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nWatch out, " + name + "! You've just encountered a " + enemyName + "! \n\nIt's stats are displayed below: \n\nDemon HP: " + enemyHP + "\nDemon Power: " + enemyPower + "\nDemon Speed: " + enemySpeed + "\n\nIf you manage to defeat it, you will be able to " + enemyDie + ". \n\nPlease type 'FIGHT' to start fighting the " + enemyName + ".";
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://i.gifer.com/origin/78/78498ca21ddf76028c8a62c7e52c5af1_w200.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
    } else {
        step.pop();
        result = "Please type 'Proceed' to continue";
    }



};

//this is where the fight scene occurs
if (step.length === 16){
    //changing all inputs into lower case
    input = step[15].toLowerCase();
    fightScene();
};


if (enemyName === "Beast Demon" && enemyHP === 0){
    characterPower = parseInt(characterPower) + 100;
    enemyHP = 20;
}

if (enemyName === "Lesser Demon" && enemyHP === 0){
    characterHP = parseInt(characterHP) + 100;
    enemyHP = 20;
}

if (enemyName === "Elemental Demon" && enemyHP === 0){
    characterSpeed = parseInt(characterSpeed) + 100;
    enemyHP = 20;
}

if (enemyName === "Demon Lord" && enemyHP === 0){
    if (currentInput === "reload"){
        location.reload();
    };
    result = "Congratulations " + name + " the " + characterChosen + "!! You have defeated the Demon Lord!! \n\nYou are indeed the hero we all need but do not deserve. However, there are more perilous paths yet to be taken. \n\nWill you be the one to conquer them all " + name + " the " + characterChosen + "? Let us find out! \n\nPlease type in 'Reload' to play the game again."
        //Removing Dom manipulation from before
        imageBox.removeChild(GIFs);
        //Adding DOM manipulation
        GIFs = document.createElement("img");
        GIFs.setAttribute("src", "https://media2.giphy.com/media/YGJBp5EgyVP9K/giphy.gif?cid=790b7611224f0f55fce4fe90090dc1d4c58f82a82eb4b335&rid=giphy.gif")
        imageBox = document.querySelector("#gifs")
        imageBox.appendChild(GIFs);
        //////////////////////////
}




//track the current info of the User so far
console.log("--------------------------")
console.log("Character name chosen is:  " + name);
console.log("Character class chosen is: " + characterChosen);
console.log("Character HP so far is:    " + characterHP);
console.log("Character Power is:        " + characterPower);
console.log("Character Speed is:        " + characterSpeed);
console.log("No. of steps so far is:    " + step.length);
console.log("Steps so far are:          " + step);
console.log("Paths taken so far are:    " + pathTaken);
console.log("No. of paths taken so far  " + pathTaken.length);
console.log("Random number for path is  " + ranNum);
console.log("Random number for demons is" + ranNumDemon);
console.log("Current enemy is           " + enemyName);
console.log("Current enemy HP is        " + enemyHP);


return result;

}
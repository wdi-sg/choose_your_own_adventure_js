console.log("hello script js");

var playerName = "";
var state = "askName";
var invalidInputPrompt = "Input is invalid. Please try again.";
var locket = false;
var diadem = false;
var cup = false;
var score = 0;

function startGame() {
    state = "askBeMagician";
    locket = false;
    diadem = false;
    cup = false;
    score = 10;

    return "Boom! The door blew open and a hairy gorilla man asks if you would like to be a magician while pointing an umbrella at your face.\n\nA: Sure! I love magic tricks!\nB: Uhh no... i'm not going to trust a stranger that just blew open the door.";
}

function setInvalidInput() {
    document.querySelector('#input').placeholder = "Invalid input. Please try again.";
}

function askMagician(input) {
    if (input === "A") {
        state = "chooseHorcrux";
        score = score + 10;
        return "You spend your best years with your best friends Ron and Hermoine. You fought your teacher, tree, spider, snake, book, ghost, lizard, mermaid, noseless hobo, magicians and chased a magic ball.\n\nSomehow, you managed to pass every year due to a biased headmaster.\n\n5 years later...\n\nThe world is in danger! The noseless hobo, Voldemort, has taken over the Ministry of Magic and is killing innocents! Defeat him by finding all of his remaining 4 horcruxes and destroying them. You are on your own this time, Hermoine is busy studying for the finals and Ron is having his afternoon nap.\n\nYou have received clues for the location of 3 of the Horcruxes. Which would you like to pursue first?\n\nA: Salazar Slytherin's Locket\nB: Rowena Ravenclaw's Diadem\nC: Helga Hufflepuff's Cup";
    }

    if (input === "B") {
        state = "restart";
        score = score - 10;
        return "You live your life as a unpopular nerd that can somehow talk to snakes. You die at the age of 16 when a noseless bald hobo pointed a stick at you while you are unloading a large one in the toilet cubicle.\n\nGAME OVER. YOU DIED.\n\nEnter anything to restart so you can maybe suck less\n\nScore: " + score;
    }

    setInvalidInput();
    return document.querySelector('#output').innerText;
}

function chooseHorcrux(input) {
    if (input === "A" && locket === false) {
        state = "chooseLocket";
        score = score + 10;
        return "You arrive at the edge of the forest, the place not unfamiliar to you. This is where you defeated the Spider all the years ago. The Salazar Slytherin's Locket is somewhere here in the forest according to your leads. In front of you, you see a dark and humid path extending with no end in sight, a small hut hiding quietly in the shadows and a patch of woods looking suspiciously thin. Which path will you choose? \n\nA: Forest Path\nB: Investigate Hut\nC: Search the woods";
    }else if (input === "A" && locket === true){
        state = "destroyedItem";
        return "You have already destroyed the Locket.\n\n Enter anything to choose your next search location"
    }

    if (input === "B" && diadem === false) {
        state = "chooseDiadem"
        score = score + 10;
        return "In front of you lays the ruins of a destroyed ancient magic research laboratory. Upon passing through the doors you are greeted with a gust of chilling wind from the depths of the building. You see the entrance to the main research lab in front of you, a side door leading down another hallway and the entrance to the cafeteria. Which path will you choose? \n\nA: Investigate the research lab\nB: Explore the long hallway\nC: Look around the cafeteria"
    }else if (input === "A" && diadem === true){
        state = "destroyedItem";
        return "You have already destroyed the Locket.\n\n Enter anything to choose your next search location"
    }

    if (input === "C" && cup === false) {
        state = "chooseCup"
        score = score + 10;
        return "You heard rumors that the Helga Hufflepuff's lame Cup is hidden somewhere in the school. After all these years in the school you believe that the 3 most possible places that lame cup could be in is either the lair of the useless weaklings, the dead headmaster's office or somewhere in the unexplored top floor of the school. Where will you go to search for the cup? \n\nA: Hufflepuff common room\nB: Albus Dumbledore's office \nC: The school attic"
    }else if (input === "A" && cup === true){
        state = "destroyedItem";
        return "You have already destroyed the Locket.\n\n Enter anything to choose your next search location"
    }

    setInvalidInput();
    return document.querySelector('#output').innerText;
}

function chooseForestPath(input) {
    if (input === "A") {
        state = "restart";
        score = score - 10;
        return "After walking on the path for ages, you come across a familiar sight, The lair of the spiders, you never thought that you would return to this place again in this lifetime. Around you lies countless remains of unlucky explorers that stumbled into this part of the forest. Remembering what happened the last time, you tried to quickly retrace your steps but all your vision is darkened with hairy legs and poisonous fangs...\n\n YOU DIED GAME OVER\n\nEnter anything to restart\n\n Score: " + score;
    }

    if (input === "B") {
        state = "chooseHorcrux"
        score = score - 5;
        return "The doors creaked loudly as you tried to push it open. Upon entering the hut, you see an table with rotten mush on the plate and cutleries on the ground. The windows are smashed and you realized that there is an incomplete remains of a person laying on the ground under the windows. You quickly gave it a prayer and left the hut. Whatever got to him might still be around somewhere...\n\n Press A to get out of the house."

    }

    if (input === "C") {
        state = "destroyedItem"
        locket = true;
        score = score + 10;
        return "Slashing through the thin woods and tall grass you arrived at a forest clearing. At the center of the clearing there is a barren plot of land where no plants grew. Something sinister must have happened here. Upon closer inspection, you noticed that there is something that was buried in the ground. With your magic machete, you struck the ground until you hit something, it was a locket. The Horcrux is found! Placing it on a rock nearby, you stuck it with all your might using the machete and a wail of despair can be heard throughout the forest as the locket crumbles into ashes.\n\n Enter anything to choose your next search location"

    }

    setInvalidInput();
    return document.querySelector('#output').innerText;
}

function chooseDungeon(input) {
    if (input === "A") {
        state = "restart";
        score = score - 10;
        return "A set of heavy set of reinforced door stand menacingly in front of you, your senses tells you that danger looms ahead but you decided that the fate of the world is more important than whatever danger lies ahead. You push open the doors with great difficulty and all you see is a dark, spotlessly clean room. Stepping in, you noticed that the floors are made with a plastic like material and on a table at the far end of the room lies a set of research notes. Upon picking up the notes, it reads -ACID ANIMATION RESEARCH-  \n\n YOU DIED GAME OVER\n\nEnter anything to restart\n\n Score: " + score;
    }

    if (input === "B") {
        state = "chooseHorcrux"
        score = score - 5;
        return "Diadem C\n\n type B to Go back 1 step"
    }

    if (input === "C") {
        state = "destroyedItem"
        diadem = true;
        score = score + 10;
        return "Diadem B \n\n you destroyed diadem \n\n Enter anything to choose your next search location"
    }

    setInvalidInput();
    return document.querySelector('#output').innerText;
}

function chooseSchool(input) {
    if (input === "A") {
        state = "restart";
        score = score - 10;
        return "Cup A\n\n YOU DIED GAME OVER\n\nEnter anything to restart\n\n Score:" + score;
    }

    if (input === "B") {
        state = "chooseHorcrux"
        score = score - 5;
        return "Cup C\n\n Type C to go back 1 step"
    }

    if (input === "C") {
        state = "destroyedItem"
        cup = true;
        score = score + 10;
        return "Cup B \n\n you destroyed cup \n\n Enter anything to choose your next search location"
    }

    setInvalidInput();
    return document.querySelector('#output').innerText;
}

function afterDestroyedItem(input) {
    if(state === "destroyedItem") {
        state = "chooseHorcrux";

        return "You spend your best years with your best friends Ron and Hermoine. You fought your teacher, tree, spider, snake, book, ghost, lizard, mermaid, noseless hobo, magicians and chased a magic ball.\n\nSomehow, you managed to pass every year due to a bias headmaster.\n\n5 years later...\n\nThe world is in danger! The noseless hobo, Voldemort, has taken over the Ministry of Magic and is killing innocents! Defeat him by finding all of his remaining 4 horcruxes and destroying them. You are on your own this time, Hermoine is busy studying for the finals and Ron is having his afternoon nap.\n\nYou have received clues for the location of 3 of the Horcruxes. Which would you like to pursue first?\n\nA: Salazar Slytherin's Locket\nB: Rowena Ravenclaw's Diadem\nC: Helga Hufflepuff's Cup";
    }
}

function fightSnake(input) {
    if (state = "snake"){
    score = score + 10;
    return "You are fighting the snake horcrux. Choose something.\n\n A: Die \n\nB: Win \n\nC: Die";
    }

    setInvalidInput();
    return document.querySelector('#output').innerText;
}

function snakeFight(input) {
    if (input === "A") {
        state = "restart";
        score = score - 10;
        return "You died dummy. Press anything to restart and git gud.\n\n Score:" + score;
    }

    if (input === "B") {
        state = "fightVoldemort";
        score = score + 10;
        return "You killed snake. Now fight voldemort\n\n A: Die\n\n B: win\n\n C: win "
    }

    if (input === "C") {
        state = "restart"
        score = score - 10;
        return "you died dummy 2. Press anything to restart and use some brains next time -.-\n\nScore: " + score;
    }

    setInvalidInput();
    return document.querySelector('#output').innerText;
}

function voldemortFight(input) {
    if (input === "A") {
        state = "restart";
        score = score - 10;
        return "you die. Press Anything to restart.\n\n Score: " + score;
    }

    if (input === "B") {
        state = "youWin";
        score = score + 10;
        return "fighting... fighting... choose what to do \n\n A: kill voldemort\n\n B: win but voldemort runs away";
    };

    if (input === "C") {
        state = "lordWins";
        score = score - 10;
        return "talk... talk... talk... choose one option\n\n A: voldemort wins, you give up.\n\n B: voldemort wins, you join him"
    };

    setInvalidInput();
    return document.querySelector('#output').innerText;
};

function winVoldemort(input) {
    if (input === "A") {
        score = score + 10;
        return "Voldemort died\n\nScore: " + score;
    }

    if (input === "B") {
        score = score + 5;
        return "You win but allowed voldemort to escape\n\nScore: " + score;
    }

    setInvalidInput();
    return document.querySelector('#output').innerText;
}

function loseVoldemort(input) {
    if (input === "A") {
        score = score - 10;
        return "voldemort win, you give up on life\n\nScore: " + score;
    }

    if (input === "B") {
        return "voldemort win, you admire him now and join him in world conquest\n\n Score: " + score;
    }

    setInvalidInput();
    return document.querySelector('#output').innerText;
}

var inputHappened = function(currentInput) {
    console.log( currentInput );
    document.querySelector('#input').value = "";
    document.querySelector('#input').placeholder = "Enter your choice.";

    if (state === "askName") {
        playerName = currentInput;
        return startGame();
    }

    if (state === "askBeMagician") {
        return askMagician(currentInput);
    }

    if (state === "restart") {
        return startGame();
    }

    if (state === "chooseHorcrux") {
        return chooseHorcrux(currentInput);
    }

    if (state === "chooseLocket") {
    return chooseForestPath(currentInput);
    }

    if (state === "chooseDiadem") {
    return chooseDungeon(currentInput);
    }

    if (state === "chooseCup") {
    return chooseSchool(currentInput);
    }

    if (state === "destroyedItem") {
        if(locket === true && diadem === true && cup === true) {
            return fightSnake(currentInput);
        }
        return afterDestroyedItem(currentInput);
    }

    if (state === "snake") {
        return snakeFight(currentInput);
    }

    if (state === "fightVoldemort") {
        return voldemortFight(currentInput);
    };

    if (state === "youWin") {
        return winVoldemort(currentInput);
    }

if (state === "lordWins") {
        return loseVoldemort(currentInput);
    }

};
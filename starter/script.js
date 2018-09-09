// put code here!
var playerName = prompt("Welcome to the money heist game. What's your name?");
var dice = Math.floor(Math.random() * 7);
var counter = 100;


var restartGame = function(){
    var restart = prompt("Do you want to try again? \n [Y]\n[N]");
    if (restart.includes("Y")){
        gameStart();
    }
    else{
        alert("Thanks for playing!");
    }
}

var fight = function(){
    var weapons = [ "machine gun","hand gun","shot gun "];
    var enemy = weapons[(Math.floor(Math.random() * 4))];
    var player =weapons[(Math.floor(Math.random() * 4))];
    alert("You fire your " +player+ " at them.");

    if (player==="machine gun" && enemy==="hand gun"){
        counter -= 30;
        alert("You dodge some bullets and get shot in your arm. But you successfully gun them down.");
    }
    else if (player === "hand gun" && enemy==="shot gun"){
        counter -=30;
        alert("Shooting behind a pillar, you successfully come out of the crossfire unscathed.");
    }
    else if (player === "shot gun" && enemy==="machine gun"){
        counter -=20;
        alert("Your comrade is shot and you rush to their aid. Unfortunately, you suffer four shots to the chest and abdomen.");
    }
    else if (player === enemy){
        counter-=10;
        alert("You engage in the crossfire. Your aggressive shooting and remarkable aim leaves you and your team victorious.");
    }

}

var invalid = function(){
    alert("Invalid input.");
    restartGame();
}

var gameStart = function(){
var characterChoiceOne = prompt("Hi "+playerName+", you are in the middle of a bank heist. Please choose your character. \n[R]obber \n[H]ostage \n[P]olice");

// Robber
if (characterChoiceOne.includes("R")){
    storyline = alert("The police have surrounded you. You and your gang have 12 people as hostages. You need to decide how to escape");
    var characterChoiceTwo = prompt("[C]all the negiotiator to decide on your terms of escape. \n[L]oad up on your weapons and prepare for a shoot out. \n[S]urrender")

    // Robber - escape 1 - complete
    if (characterChoiceTwo.includes("C")){
        counter -=10;
        alert("You engage in negiotiation with the police.");
        characterChoiceThree = prompt("[E]xchange the hostages for a get away vehicle. \n[T]hreaten the deaths of the hostages unless the police clear the scene.");
        if (characterChoiceThree.includes("E")){
            counter-=10;
            alert("The police agree to your demands. Congratulations " +playerName+ ", you've successfully robbed the bank. Your score is: " +counter);
            restartGame();
        }
        else if (characterChoiceThree.includes("T")){
            counter -=20;
            alert("The police agree to your demands.");
            alert("As you make your escape, 2 of your partners are gunned down by snipers. You make a run for the get away vehicle.");
                if((dice%2)===0){
                alert("Congratulations " +playerName+ ", you've successfully robbed the bank. Your score is: " +counter);
                restartGame();
                }
                else{
                alert("Unfortunately, you were fatally shot. Your score is: " +counter);
                restartGame();
                }

        }
        else{
            invalid();
        }
    }

    // Robber - escape 2 - complete
    else if (characterChoiceTwo.includes("L")){
        counter-=30;
        fight();
        alert("Game over, your score is: "+counter);
    }

    // Robber - escape 3 - complete
    else if (characterChoiceTwo.includes("S")){
        counter -=10;
        alert("Desperate to escape, you try to convince your partners to follow suit. They disagree and draw their weapons.");
        var characterChoiceThree = prompt("[G]ive in to the rest of your team \n[D]raw your weapon.");
            if (characterChoiceThree.includes("G")){
                counter -= 20;
                alert("Your comrades decide they can't trust you and shoot. You die.");
                alert("Game over " +playerName+ "! Your score is: " +counter);
                restartGame();
            }
            else if (characterChoiceThree.includes("D")){
                counter-= 35;
                alert("In a heated argument, you both shoot. Roll the dice to see if you survived"); //add fight function
                    if((dice%2)===0){
                    alert("You get shot in the abdomen and collapse. Your team abandons you and follows through successfully with the heist.");
                    alert("Game over " +playerName+ ", you were arrested! Your score is: " +counter);
                    restartGame();
                    }
                    else{
                    alert("Unfortunately, you were fatally shot. Your score is: " +counter);
                    restartGame();
                    }
            }
            else{
                invalid();
            }
    }

}

// Hostage
else if (characterChoiceOne.includes("H")){
    alert("The robbers have you and the other hostages tied up and gagged. They are all wearing masks. Your realise your sweaty palms can help you escape your restraints.");
    var characterChoiceTwo = prompt("[T]his is your chance to escape! \n[M]aybe it would be better to comply with the robbers and not do anything rash.")

    // Hostage - escape 1 - complete
    if (characterChoiceTwo.includes("T")){
        counter-= 30;
        alert("You escape from your restraints and begin to help fellow hostages with theirs. You overhear the robbers having an argument.");
        var characterChoiceThree = prompt("[B]olt for the exits. \n[D]ial the police");
            if(characterChoiceThree.includes("B")){
                counter -= 20;
                alert("One of the robbers catch you bolting to the door and open fire at you. Roll the dice to see if you escaped safely");
                if((dice%2)===0){
                alert("You suffered two shots in your back, but you escaped! Good job for surving" +playerName +"! Your score is: " +counter);
                restartGame();
                }
                else{
                storyline = alert("Unfortunately, you were fatally shot. Your score is: " +counter);
                restartGame();
                }
            }
            else if(characterChoiceThree.includes("D")){
                counter -= 25;
                alert("You grab your phone and call the police. You get connected to the negiotiator. You provide key information to the police and safely escape the hostage situation. Good job for surving" +playerName +"! Your score is: " +counter);
                restartGame();
            }
            else{
                invalid();
            }
    }

    // Hostage - escape 2 - complete
    else if (characterChoiceTwo.includes("M")){
        counter -= 15;
        alert("You overhear the robbers threaten to kill off hostages. You believe staying calm and complying with the robbers is still a good idea.");
            counter -= 40;
            alert("The robbers argue with the police and the negiotiations fail. They shoot the woman beside you to make an example of what they are capable of.");
            alert("The police and the robbers have a shoot out. 3 police officers and 2 more hostages are shot. The robbers are gunned down.");
            alert("Congratulations on stay alive, " +playerName+ ". Unfortunately, you spend the rest of your life wondering if you could have done more to prevent the loss of innocent lives. Your score is: "+counter);
            restartGame();
    }
}

// Police
else if (characterChoiceOne.includes("P")){
    alert("There is an ongoing bank robbery. You are to do your best to ensure the safe return of all 12 hostages.");
    var characterChoiceTwo = prompt("You just talked to the robbers to negiotiate the release of the hostages. They want to exchange their escape for the safe return of the hostages.\n[P]repare get away car for the robbers \n[C]lear all police stationed outside the bank. Set up snipers. \n[N]otice another way to infiltrate the bank with the help of a floorplan.");

        // Police - method 1 - complete
        if (characterChoiceTwo.includes("P")){
            counter -= 20;
            alert("As you prepare to meet the robbers' terms, you hear gun shots from inside the bank.");
            var characterChoiceThree = prompt("[S]torm into the bank. \n[C]ontact robbers to access situation before next move.");
                if (characterChoiceThree.includes("S")){
                    counter-=30;
                    alert("You are caught in a crossfire with the robbers.");
                    fight();
                    alert("Your score is: "+counter);
                    restartGame();
                }
                else if (characterChoiceThree.includes("C")){
                    counter-=20;
                    alert("The robbers assures you that the gunshot did not injure any hostages. You go ahead with the terms of the negiotiation. \nAlthough the robbers get away, you manage to safeguard all of the hostages. Your score is: "+counter);
                    restartGame();
                }
                else{
                    invalid();
                }
        }

        // Police - method 2 - complete
        else if (characterChoiceTwo.includes("C")){
            counter -= 30;
            var characterChoiceThree = prompt("The robbers begin to exit the building. They rally the hostages as human shields. You \n[W]ait until the robbers enter their vehicles before opening fire at the robbers.\n[T]he snipers report a clean shot of the robbers and you give the order.\n[U]se tear gas to temporarily stun robbers.");
            if(characterChoiceThree.includes("W")){
                counter -= 10;
                alert("You manage to safeguard all the hostages. Unfortunately, the snipers only manage to wound 2 robbers and they get away. Your score is: "+counter);
                restartGame();
            }
            else if(characterChoiceThree.includes("T")){
                counter -=20;
                alert("The snipers successfully take down all the robbers. The hostages are all safe and unharmed. Your score is: "+counter);
                restartGame();
            }
            else if (characterChoiceThree.includes("U")){
                counter -=40;
                alert("Alarmed by the gas, the robbers shoot blindly. Even though you successfully took down all the robbers, it resulted in 7 hostage fatalities. Your score is: "+counter);
                restartGame();
            }
            else{
                invalid();
            }
        }

        // Police - method 2 - complete
        else if(characterChoiceTwo.includes("N")){
            counter -=30;
            var characterChoiceThree= prompt("Upon entering the bank, your squad finds yourself having to choose between 2 doors to break down.\nEnter a number between 1-2.");
            if (characterChoiceThree === "1"){
                alert("The team chose the wrong door! you end up face to face with the robbers. A crossfire ensues.");
                fight();
                alert("Your score is: " +counter);
                restartGame();
            }
            else if (characterChoiceThree==="2"){
                alert("The team located the hostages. You successfully remove the hostages and ambush the robbers. Your score is: "+counter);
                restartGame();
            }
            else{
                invalid();
            }
        }

}

else{
    invalid();
}
}

gameStart();







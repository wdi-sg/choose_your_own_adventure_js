var name = prompt("What is your name?");

    if (name == null || name == "") {
        name = "Stranger";
        alert("Welcome " + name + ". " + "You are a criminal attempting to escape from jail.")
    }
    else {
        alert("Welcome " + name + ". " + "You are a criminal attempting to escape from jail.")
    }

// var restart = function() {
//     var reset = prompt("Play again?")
//         if (reset.toLowerCase() == "Yes".toLowerCase()){
//             game();
//         }
//         else {
//             alert("Thanks for playing!")
//         }


// var game = function() {

var choosePartner = prompt("Choose your partner. Dave or Steve")

        //loop statement if choosePartner is wrong input

        while (choosePartner == 0 || choosePartner == undefined){
            alert("Error. Please choose a partner.")
            choosePartner = prompt("Please choose your partner. Dave or Steve");
        }

        if (choosePartner.toLowerCase() == "Dave".toLowerCase() ) {

            var escapeDave = prompt("Nice! Dave wants in. How are you advancing? Ask Dave to talk to the officer or fight in the cell?")

            while (escapeDave == 0){
                alert("Error. Please choose to ask Dave to talk to the officer or fight in the cell.")
                escapeDave = prompt("Nice! Dave wants in. How are you advancing? Ask Dave to talk to the officer or fight in the cell?");
            }

                if (escapeDave.toLowerCase() == "Ask Dave to talk to the officer".toLowerCase() || escapeDave.toLowerCase() == "Talk".toLowerCase()) {
                    alert("Oh no! It seems like the officer knows what you're up to! You lose!")

                    restart();
                }


                else if (escapeDave.toLowerCase() == "Fight in the cell".toLowerCase() || escapeDave.toLowerCase() == "Fight".toLowerCase()) {

                        var takeKeys = prompt("Nice! He seem to be distracted. You see his keys dangling while separating the fight. Do you take it, yes or no?")

                        while (takeKeys == 0){
                            alert("Error. Are you planning to take his keys? Yes or no?")
                            takeKeys = prompt("Nice! He seem to be distracted. You see his keys dangling while separating the fight. Do you take it, yes or no?");
                        }


                        if ( takeKeys.toLowerCase() == "Yes".toLowerCase() ) {
                            alert("Congratulations! He didn't notice and you have successfully escape the cell!")

                            var numberOfOfficers = prompt("Dave is still behind. Let's go get him. How many officers do you see? Please input numerical value.")

                            //loop error message if input non-numerical value

                            // while (numberOfOfficers = NaN) {
                            //     alert("Error. Please input valid numerical value.")
                            //     numberOfOfficers = prompt("Dave is still behind. Let's go get him. How many officers do you see? Please input numerical value.")
                            // }

                                if (numberOfOfficers <=3 ) {
                                    alert("Get Dave and leave! You win!")
                                    restart();
                                }

                                else {
                                    alert("There are too many officers surrounding you. You lose!")
                                    restart();
                                }

                        }
                        else if (takeKeys.toLowerCase() == "No".toLowerCase() ) {
                            alert("You coward! That was a great chance to escape. You lost your chance. You lose!")
                            restart();
                        }


                }
                // else {
                //     alert("Error")
                //     //loop escapeDave
                // }
        }

        else if (choosePartner.toLowerCase() == "Steve".toLowerCase()) {
            var escapeSteve = prompt("Cool! Seems like Steve is in it too! What's your next step? Have Steve keep a lookout while you look for another exit or hurt yourself to get out?")

            while (escapeSteve == 0){
                alert("Error. Please choose to have Steve keep a lookout while you look for another exit or hurt yourself to get out.")
                escapeSteve = prompt("Cool! Seems like Steve is in it too! What's your next step? Have Steve keep a lookout while you look for another exit or hurt yourself to get out?");
            }

                if (escapeSteve.toLowerCase() == "Have Steve keep a lookout while you look for another exit".toLowerCase() || escapeSteve.toLowerCase() == "Lookout".toLowerCase()) {

                    var proceed = prompt("Seems like everything is in the clear. Do you want to proceed to exit from the route you found with Steve? Yes or no?")

                        while (proceed == 0){
                            alert("Error. Are you proceeding? Yes or no?")
                            proceed = prompt("Seems like everything is in the clear. Do you want to proceed to exit from the route you found with Steve? Yes or no?");
                        }

                        if (proceed.toLowerCase() == "Yes".toLowerCase()) {
                            alert("Sorry, it seems like Steve betrayed you. You've been caught. You lose!")
                            restart();
                        }

                        else if ( proceed.toLowerCase() == "No".toLowerCase()) {

                            var noProceed = prompt("Smart move! The officers were right around the corner. Do you want to gain attention by fighting with an officer or wait for the right time to escape again?")

                            while (noProceed == 0){
                                alert("Error. Please choose to gain attention by fighting with an officer or to wait for the right time to escape again.")
                                noProceed = prompt("Smart move! The officers were right around the corner. Do you want to gain attention by fighting with an officer or wait for the right time to escape again?");
                            }

                                if (noProceed.toLowerCase() == "Gain attention by fighting with an officer".toLowerCase() || noProceed.toLowerCase() == "Fight".toLowerCase() ) {
                                    alert("Good job! You earned yourself a place in solitary confinement. You lose!")
                                    restart();
                                }

                                else if (noProceed.toLowerCase() == "Wait for the right time to escape again".toLowerCase() || noProceed.toLowerCase() == "Wait".toLowerCase()) {
                                    alert("You've got patience! Congratulations, you've escape. You won!")
                                    restart();
                                }
                        }

                        // else {
                        //     alert("Error")
                        //     //loop proceed
                        // }
                }
                else if (escapeSteve.toLowerCase() == "Hurt yourself to get out.".toLowerCase() || escapeSteve.toLowerCase() == "Hurt".toLowerCase()) {
                    alert("Oh no! You lose too much blood and died. You lose!")
                    restart();
                }

                // else {
                //     alert("Error")
                //     //loop escapeSteve
                // }

        }

        // else {
        //     //loop if input data is other characters besides Dave or Steve
        //     alert("Error. Please choose a partner. Dave or Steve")
        //     choosePartner = prompt("Please choose your partner. Dave or Steve");
        // }


// }
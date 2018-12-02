//request for user name
//prompt user gender
var userInputName = prompt("What is your name?")

for (i = 0; i < 5; i++) {
    var userInputGender = prompt("Hi " + userInputName + "! Are you a male or female?")
    var userGender = userInputGender.toLowerCase();
    if (userGender.startsWith("m")) {
        userGender = "m";
        i = 10;
    } else if (userGender.startsWith("f")) {
        userGender = "f";
        i = 10;
    }
}
//define starting score
var userScore = 0;
var userAllDecisions = [];

//if male: change name from Nancy Drew to Robin, boyfriend to girlfriend, Frank to Nancy.
//story: boyfriend kidnapped, demanded $1 mil, transact next day. if call police, will kill Frank.
if (userGender === "m") {
    var character = "Frank Hardy";
    var partner = "Nancy Drew";
    var partnerHimHer = "her";
    var partnerHeShe = "she";
    var partnerHisHer = "her";
    var relationship = "girlfriend"
} else {
    character = "Nancy Drew";
    partner = "Frank Hardy";
    partnerHimHer = "him";
    partnerHeShe = "he";
    partnerHisHer = "his";
    relationship = "boyfriend"
}

alert("Imagine you are " + character + " and your " + relationship + " is " + partner + "." );
alert("You won a $10 million lottery two years ago, and have since retired from being a detective.");
alert("One night at 10pm, you received an anonymous call.");
alert("'" + partner + " has been kidnapped by me. If you want to save " + partnerHimHer + ", bring $ 1 million dollars cash, and meet me at the Mandai open field at 4am today. If you call the police or try to be funny, I promise I will kill " + partner + ".'");
alert("Before you could respond, the line went dead.");
alert("You have 6 hours, and need to act fast.")


    //alert: call police?
        //yes or no
            //if yes, alert: Are you sure? Kidnapper may kill Frank if they found out!
            //if not, alert: Are you sure you can handle this alone?
            //confirm decision or loop back to options
                //yes: store decision, score +100, alert: police plan to set up ambush. provide fake money. store results
                //no : store decision, score +50,
                //don't know and seek advice from best friend : random() determination whether to call police, loop 10 times to 3 options (yes, no, seek advice).

getStoryAfterPoliceDecision = function(userCallPoliceDecision) {
switch (userCallPoliceDecision) {
    case "y":
    alert("The Special Forces police unit has been triggered to handle this case. The success rate of saving kidnapped victims is 80%.");
    alert("Score +100");
    alert("The Special Forces unit leader explained his plans to you.");
    alert("'We will be setting up an ambush to capture the kidnappers. We need you to bring this bag of money to transact with the kidnappers. Once the money has left your hands, run the opposite direction as far as you can. No matter what happens, do not engage in additional contact with the kidnappers. It is important that you do not deviate from our plan.");
    alert("You opened the bag and saw fake notes.");
    break;
    case "n":
    alert("Score +50")
    alert("Based on previous kidnapping crimes you had investigated, majority of the kidnappers took a gamble and did not verify the payment.");
    break;
}
alert("You recalled that you have $1 million cash in your safe.")
alert("Time is running out! You need to act fast!")
}

for (i = 0; i < 100; i++) {
    var userInputCallPolice = parseInt(prompt("Will you call the police for help? Input '1' for Yes, '2' for No or '3' if you wish to seek advice from a friend."))
    var userCallPoliceDecision;
    switch (userInputCallPolice) {

        case 1:
        if (confirm("Are you sure? Kidnapper may kill " + partner + " if they found out!")) {
            userScore += 100;
            i = 1000;
            userCallPoliceDecision = "y"
            getStoryAfterPoliceDecision(userCallPoliceDecision);
        };
        break;

        case 2:
        if (confirm("Are you sure you can handle this alone?")){
            userScore += 50;
            i = 1000;
            userCallPoliceDecision = "n"
            getStoryAfterPoliceDecision(userCallPoliceDecision);
        };
        break;

        case 3:
        var randomNumber = Math.random();
        if (randomNumber > 0.75) {
            alert("Friend " + (i+1) + ": You are " + character + "! You should be able to handle this yourself. Do not call the police!")
            if (confirm("Follow your Friend " + (i+1) + "'s advice?")) {
                userCallPoliceDecision = 2;
                userScore += 50;
                alert("Score +50")
                i = 1000;
                userCallPoliceDecision = "n"
                getStoryAfterPoliceDecision(userCallPoliceDecision);
            }
        } else if (randomNumber > 0.5) {
            alert("Friend " + (i+1) + ": I suggest you call the police!");
            if (confirm("Follow your Friend " + (i+1) + "'s advice?")) {
                userCallPoliceDecision = 1;
                userScore += 100;
                alert("Score +100")
                i = 1000;
                userCallPoliceDecision = "y"
                getStoryAfterPoliceDecision(userCallPoliceDecision);
            }
        } else if (randomNumber > 0.25) {
            alert("Friend " + (i+1) + ": What if the kidnapper found out that you called the police? If they could capture " + partner + ", they must have everything planned. Do not call the police!");
            if (confirm("Follow your Friend " + (i+1) + "'s advice?")) {
                userCallPoliceDecision = 2;
                userScore += 50;
                alert("Score +50")
                i = 1000;
                userCallPoliceDecision = "n"
                getStoryAfterPoliceDecision(userCallPoliceDecision);
            }
        } else {
            alert("Friend " + (i+1) + ": There is strength in numbers. Call the police!");
            if (confirm("Follow your Friend " + (i+1) + "'s advice?")) {
                userCallPoliceDecision = 1;
                userScore += 100;
                alert("Score +100")
                i = 1000;
                userCallPoliceDecision = "y"
                getStoryAfterPoliceDecision(userCallPoliceDecision);
        }
        }
        break;

        default:
        alert("You need to key in a valid number!")
    }
}
userAllDecisions.push(userCallPoliceDecision);






    //bring real money?
        //yes: store decision. score +100 alert: Better be safe than sorry.
        //no: store decision. score +50.
for (i = 0; i < 100; i++) {
    var userInputRealMoney = prompt("Will you bring real cash to transact with the kidnappers? Input yes or no.")
    var userRealMoneyDecision;
    if (userInputRealMoney.toLowerCase().includes("y")) {
        userRealMoneyDecision = "y";
        i = 1000;
        userScore += 100;
        alert("Better be safe than sorry!")
        alert("Score +100")
    } else if (userInputRealMoney.toLowerCase().includes("n")) {
        userRealMoneyDecision = "n";
        i = 1000;
        userScore += 50;
        alert("Wonder how " + partner + " will feel if " + partnerHeShe + " found out about this!")
        alert("Score +50")
    } else {
        alert("You need to key in a valid entry!")
    }
}
userAllDecisions.push(userRealMoneyDecision);

//Transaction day, close proximity
    //pull mask?
        //yes: store decision. score +50.
        //no: store decision. score + 100.
alert("You brought the bag of money and arrived at Mandai open field as planned. There were no street lamps, and it was pitch dark.")
alert("At 4am sharp, you heard a motorcycle sped towards you.")
alert("The masked kidnapper stopped his motorcycle right beside you, snatched the bag of money and opened it to verify the contents. Due to close proximity, you saw " + partner + " was behind him with " + partnerHisHer + " hands tied up.")
alert("You had a chance to pull off the kidnapper's mask to see his identity.")
for (i = 0; i < 100; i++) {
    var UserInputPullMask = prompt("Will you pull off his mask? Input yes or no.")
    var UserPullMaskDecision;
    if (UserInputPullMask.toLowerCase().includes("y")) {
        UserPullMaskDecision = "y";
        userScore += 50;
        i = 1000;
    } else if (UserInputPullMask.toLowerCase().includes("n")) {
        UserPullMaskDecision = "n";
        userScore += 100;
        i = 1000;
    } else {
        alert("You need to key in a valid entry!")
    }
}
userAllDecisions.push(UserPullMaskDecision);
console.log(userAllDecisions);





var msgYYY = "Because his identity was exposed, the kidnapper took out his gun and shot at " + character + ". The Special Forces responded and shot him dead in his head. " + partner + " was saved, but " + character + " was severely injured."
var msgYNY = "Because his identity was exposed and the money was fake, the kidnapper was mad. He pushed " + partner + " off the vehicle and shot both of them dead. The Special Forces responded and shot him dead into his head."
var msgYYN = "The kidnapper held on to his promise, and pushed " + partner + " off his vehicle. However, he accidentally dropped the bag of money, and stopped to pick it up. The Special Forces acted promptly and caught him alive. " + partner + " was saved, and " + character + " recovered his money. The kidnapper was sentenced to life imprisonment."
var msgYNN = "Knowing that the money was fake and he had been ambushed, the kidnapper attempted to escape and pushed " + partner + " off his moving vehicle to distract the police. The Special Forces eventually shot him dead. " + partner + " was saved but he was severely injured."
var msgNNN = "Knowing that the money was fake, the furious kidnapper pushed " + partner + " off his vehicle and shot both of them dead. He managed to escape and was never captured."
var msgNYN = "The kidnapper held on to his promise, and pushed " + partner + "off his vehicle. Although " + partner + " was saved, he was severely injured. The kidnapper managed to escape and was never captured. " + character + " lost the $ 1 million dollars."
var msgNNY = "Because his identity was exposed and the money was fake, the kidnapper was mad. He pushed " + partner + " off the vehicle towards" + character + ". He took out a gun and aimed at both of them. " + character + " shouted 'Police!' and shielded " + partner + " from the shots. " + character + " was shot dead and the kidnapper escaped."
var msgNYY = "Because his identity was exposed, the kidnapper pushed " + partner + " off his vehicle towards " + character + ". He took out a gun and killed both of them on the spot. The kidnapper managed to escaped with the money, and was never captured."
var AnswerBoard = { yyy: msgYYY, yny: msgYNY, yyn: msgYYN, ynn: msgYNN, nnn: msgNNN, nyn: msgNYN, nny: msgNNY, nyy: msgNYY }
var userAllDecisionsString = userAllDecisions.join("");

// console.log(userAllDecisionsString);

for (key in AnswerBoard) {
    if (key === userAllDecisionsString) {
        alert("Total Score : " + userScore + " / 300");
        console.log("Total Score:" + userScore);
        alert(AnswerBoard[key]);
        if (userScore !== 300) {
            alert("Mission unsuccessful!")
        } else {
            alert("Mission successful!")
        } alert("Thank you for playing this game. Please refresh this page to play this game again!")
    }
}



// Yes (1) Yes (1+1)   Yes (2+0.5) 2.5 ` injured. Kidnapper shot.
// Yes (1) No (1+0.5)  Yes (1.5+0.5)   2   Nancy and Frank got killed on the spot. Kidnapper shot.
// Yes (1) Yes (1+1)   No (2+1)    3   Dropped the money. U-turn, got caught.
// Yes (1) No (1+0.5)  No (1.5+1)  2.5 Frank injured. Kidnapper shot.

// No (0.5)    No (0.5+0.5)    No(1+1) 2   Frank got killed on the spot. Nancy murdered next day. Kidnapper ran away
// No (0.5)    Yes (0.5+1) No(1.5+1)   2.5 Frank injured. Kidnapper ran away
// No (0.5)    No (0.5+1)  Yes(2+0.5)  2.5 Nancy injured. Kidnapper ran away.
// No (0.5)    Yes (0.5+1) Yes(1.5+0.5)    2   Nancy and Frank got killed on the spot. Kidnapper ran away.



    //show result based on previous combination of decisions



console.log("hello script js");
var questionNumber = 1;
var inputHappened = function(currentInput){
    console.log(typeof parseInt(currentInput));

    var questionOne = "1. Freely / 2. Frivolously / 3. Wisely / 4. Carefully"
    var questionTwo  = "Very well then, what is the one thing you want in life? \n "+
    "1. Love \n 2. Wisdom \n 3. Luxury \n 4. Purpose \n 5. Happiness"
    var pressEnterStatement = "Press 'Enter' if you'd like me to grant your biggest wish."
        if (isNaN(currentInput)) {
            return questionOne + "\n Did you make a proper selection, my child?"
        }

        //Question one
        if (parseInt(currentInput) === 1 && questionNumber === 1) {
            questionNumber++;
            return "I see that you're a free spirit. \n" + questionTwo;
        }

        if (parseInt(currentInput) === 2 && questionNumber === 1) {
            questionNumber++;
            return "Very well there. I see that you're a frivolous asshole (I'm kidding~).\n" + questionTwo;
        }
        if (parseInt(currentInput) === 3 && questionNumber === 1) {
            questionNumber++;
            return "I see that you're a wise human bean!\n" + questionTwo;
        }
        if (parseInt(currentInput) === 4 && questionNumber === 1) {
            questionNumber++;
            return "I see that you're not a risk-taker (Haven't you heard of YOLO?).\n" + questionTwo;
        }

    // love: "What will you do with all the love in you?",
    // wisdom: "What will you do with all the wisdom in you?",
    // luxury: "What will you do with all the luxury in life?",
    // purpose: "What will you do when you've found your purpose?",
    // peace: "What will you do with all the peace in the world?",
    // happiness: "What will you do with all the happiness in you?"


    //Question two
        if (parseInt(currentInput) === 1 && questionNumber === 2) {
            questionNumber++;
            return "What will you do with all the love in you? \n 1. Keep it for myself, duh! " +
            " \n 2. Share with the ones I love \n 3. Share with ones I dislike";


        if (parseInt(currentInput) === 1 && questionNumber === 3) {
            questionNumber++;
            return "*Waves wand and turns you into a monkey* Oh no, if you want to be human again, \n " +
            " you got to win her in a game of Tic-Tac-Toe!";
            }


        if (parseInt(currentInput) === 2 && questionNumber === 3) {
            questionNumber++;
            return "That's nice, but, what about others apart from your loved ones? \n " +
            " 1. They're none of my biz \n 2. Oh, they've never crossed my mind? \n " +
            "3. On second thought, I think I'll share with them too."


                if (parseInt(currentInput) === 1) {
                    return "Hm. Nah, you ain't gonna get love, I ain't giving it to you. You Lost."
                    }

                if (parseInt(currentInput) === 2) {
                    return "Whattt... okay, I'm outta here. You Lost."
                    }

                if (parseInt(currentInput) === 3) {
                    return "That's more like it! *waves wand* There you go! You Win!"
                    }

        }

        if (parseInt(currentInput) === 3 && questionNumber == 3) {
            return "That's interesting... but why would you do that? \n " +
            " 1. So that they'll like me and vice versa \n 2. I don't know \n 3. It's generally fun teehee!"


                if (parseInt(currentInput) === 1) {
                    return "Hm. Does feel good to be liked... *waves wand* There you go, 50% of love in the world. It's a draw."
                }
                if (parseInt(currentInput) === 2) {
                    return "Come back again when you know, my dear. It's a draw."
                }
                if (parseInt(currentInput) === 3) {
                    return "Look at you, mischievous little one! I like you. *waves wand* There you go, wish granted! You Win!"
                }

        }

    };



        if (parseInt(currentInput) === 2 && questionNumber == 2) {
            questionNumber++;
            return "What will you do with all the wisdom in you? \n 1. Bring them to grave \n " +
            "2. Share with strangers \n 3. Share with unicorns only";






        }


}
//Later part
        // if (parseInt(currentInput) === 3 && questionNumber == 2) {
        //     questionNumber++;
        //     return "What will you do with all the luxury in life? \n 1. Show em' off, imo " +
        //     " \n 2. Shower myself with gifts everyday \n 3. Donate em' all cos I'm a saint";
        // }
        // if (parseInt(currentInput) === 4 && questionNumber == 2) {
        //     questionNumber++;
        //     return "What will you do when you've found your purpose? \n 1. Lead a quiet life \n " +
        //     " 2. Belittle those who haven't found theirs \n 3. Live my best life";
        // }

        // if (parseInt(currentInput) === 5 && questionNumber == 2) {
        //     questionNumber++;
        //     return "What will you do with all the happiness in you? \n " + " 1. Dance around all day \n " +
        //     " 2. Make others happy \n 3. Keep them in jars";
        // }


        // Question three
        // var poof === false;
        // if (parseInt(currentInput) === 1 && questionNumber == 3) {
        //     questionNumber++;
        //     return "*Waves wand and turns you into a monkey* Oh no, if you want to be human again, \n " +
        //     " you got to win her in a game of Tic-Tac-Toe!";
        //         if (parseInt(currentInput) === 1 && questionNumber == 3                                                                                                             ) {
        //             questionNumber++;
        //             return "*waves wand* You're back to human! But... no wish granted for now! You Lost."
        // }
        // }

        // if (parseInt(currentInput) === 2 && questionNumber == 3) {
        //     questionNumber++;
        //     return "That's nice, but, what about others apart from your loved ones? \n " +
        //     " 1. They're none of my biz \n 2. Oh, they've never crossed my mind? \n " +
        //     "3. On second thought, I think I'll share with them too."
        // }
        // if (parseInt(currentInput) === 3 && questionNumber == 3) {
        //     questionNumber++;
        //     return "That's interesting... but why would you do that? \n " +
        //     " 1. So that they'll like me and vice versa \n 2. I don't know \n 3. It's generally fun teehee!"
        // }


        // if (parseInt(currentInput) === 1 && questionNumber == 4) {
        //     questionNumber++;
        //     return "*waves wand* You're back to human! But... no wish granted for now! You Lost."
        // }

//         if (parseInt(currentInput) === 2 && questionNumber == 4) {
//             questionNumber++;
//             return "Hm. Nah, you ain't gonna get love, I ain't giving it to you. You Lost."
//         }

//         if (parseInt(currentInput) === 3 && questionNumber == 4) {
//             questionNumber++;
//             return "That's more like it! *waves wand* There you go! You Win!"
//         }

// };

// var loveEndGame01 = function(ticTacToeGameResult) {
//     if (ticTacToeGameResult === win) {
//         return "*waves wand* You're back to human! But... no wish granted for now! You Lost."
//     }
//     if (ticTacToeGameResult === lose) {
//         return "You Lost and... you're gonna stay a virtual monkey for a little while."
//     }
// }
// var loveEndGame02 = function(currentInput, love_optionTwo) {
//     if (currentInput === 1) {
//         return "Hm. Nah, you ain't gonna get love, I ain't giving it to you. You Lost."
//     }
//     if (currentInput === 2) {
//         return "Whattt... okay, I'm outta here. You Lost."
//     }
//     if (currentInput === 3) {
//         return "That's more like it! *waves wand* There you go! You Win!"
//     }
// }
// var loveEndGame03 = function(currentInput, love_optionTwo) {
//     if (currentInput === 1) {
//         return "Hm. Does feel good to be liked... *waves wand* There you go, 50% of love in the world. It's a draw."
//     }
//     if (currentInput === 2) {
//         return "Come back again when you know, my dear. It's a draw."
//     }
//     if (currentInput === 3) {
//         return "Look at you, mischievous little one! I like you. *waves wand* There you go, wish granted! You Win!"
//     }
// }


//Template
        // if (parseInt(currentInput) === 1 && questionNumber == 1) {
        //     questionNumber++;
        //     return
        // }

        // if (parseInt(currentInput) === 2 && questionNumber == 1) {
        //     questionNumber++;
        //     return
        // }
        // if (parseInt(currentInput) === 3 && questionNumber == 1) {
        //     questionNumber++;
        //     return
        // }
        // if (parseInt(currentInput) === 4 && questionNumber == 1) {
        //     questionNumber++;
        //     return
        // }




var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};




// //User inputs one of the options
//  Response to 5 options:
// 01. What will you do with all the love in you?
//     //Options: Keep it for myself, duh! / Share with the ones I love / Share with ones I dislike
// 02. What will you do with all the wisdom in you?
//     //Options: Bring them to my grave / Share with strangers / Share with unicorns only
// 03. What will you do with all the luxury in life?
//     //Options: Show em' off, imo / Shower myself with gifts / Donate em' all cos I'm a saint
// 04. What will you do when you've found your purpose?
//     //Options: Lead a quiet life / Belittle those who haven't found theirs / Live my best life

//  05. What will you do with all the peace in the world?
//     //Options: Spread it like a virus / Keep calm and peace out / Live with nature

//  06. What will you do with all the happiness in you?
//     //Options: Dance around all day / Make others happy / Keep them in jars


// var answersQuestionTwo = function(currentInput, questionTwoOptions) {
// var questionTwoOptions = {
//     one: "1. Love",
//     two: "2. Wisdom",
//     three: "3. Luxury",
//     four: "4. Purpose",
//     five: "5. Peace",
//     six: "6. Happiness"
// };


// var loveOptions = {
//     one: "1. Keep it for myself, duh!",
//     two: "2. Share with the ones I love",
//     three: "3. Share with ones I dislike"
// };

// var wisdomOptions = {
//     one: "1. Bring them to grave",
//     two: "2. Share with strangers",
//     three: "3. Share with unicorns only"
// };

// var luxuryOptions = {
//     one: "1. Show em' off, imo",
//     two: "2. Shower myself with gifts everyday",
//     three: "3. Donate em' all cos I'm a saint"
// };

// var purposeOptions = {
//     one: "1. Lead a quiet life",
//     two: "2. Belittle those who haven't found theirs",
//     three: "3. Live my best life"
// };

// var happinessOptions = {
//     one: "1. Dance around all day",
//     two: "2. Make others happy",
//     three: "3. Keep them in jars"
// };

// var guessFruit = "*Poof!* Fairy God Mother went for a fruit break. Guess what she's having and she'll be right back. Starts with letter 'a'."
//         if (currentInput === questionTwoOptions.one) {
//             return questionThree.love + loveOptions.one + loveOptions.two + loveOptions.three;
//                 if (currentInput === 1) {
//                     return guessFruit;
//             }
//         }
//         if (currentInput === questionTwoOptions.two) {
//             return questionThree.wisdom + wisdomOptions.one + wisdomOptions.two + wisdomOptions.three;
//                 if (currentInput === 2) {
//                     return guessFruit;
//             }
//         }
//         if (currentInput === questionTwoOptions.three) {
//             return questionThree.luxury + luxuryOptions.one + luxuryOptions.two + luxuryOptions.three;
//                 if (currentInput === 3) {
//                     return guessFruit;
//             }
//         }
//         if (currentInput === questionTwoOptions.four) {
//         return questionThree.purpose + purposeOptions.one + purposeOptions.two + purposeOptions.three;
//                 if (currentInput === 4) {
//                     return guessFruit;
//             }
//         }
//         if (currentInput === questionTwoOptions.five) {
//         return questionThree.peace + peaceOptions.one + peaceOptions.two + peaceOptions.three;
//                 if (currentInput === 5) {
//                     return guessFruit;
//             }
//         }
//         if (currentInput === questionTwoOptions.six) {
//         return questionThree.happiness + happinessOptions.one + happinessOptions.two + happinessOptions.three;
//                 if (currentInput === 6) {
//                     return guessFruit;
//             }
//         }
// }


// //user guessing fruit
// var inputFruitCorrectly = function(currentInput) {
//         if (currentInput === "apple") {
//         return "*Poof!* Hi there, I'm back!"
//             }
//         else {
//             return "Try again!"
//         }
// }


// //create tictactoe game using array***
//Final Round
// var reactToLoveOptions = function(currentInput, loveOptions) {
//     answersQuestionTwo();

//     if (currentInput === 1) {
//     return "*Waves wand and turns you into a monkey* Oh no, if you want to be human again, you got to win her in a game of Tic-Tac-Toe! Press 'Enter' if you'd like to take her on."
//         if (event.keyCode === 13) {
//             ticTacToeGame();
//         }
//     }
//     if (currentInput === 2) {
//     var love_optionTwo = {
//     one: "1. They're none of my biz",
//     two: "2. Oh, they've never crossed my mind?",
//     three: "3. On second thought, I think I'll share with them too."
// };
//     return "That's nice, but, what about others apart from your loved ones?" + love_optionTwo.one + love_optionTwo.two + love_optionTwo.three
//     }
//     if (currentInput === 3) {
//     var love_optionThree = {
//     one: "1. So that they'll like me and vice versa",
//     two: "2. I don't know",
//     three: "3. It's generally fun teehee!"
// };
//     return "That's interesting... but why would you do that?" + love_optionThree.one + love_optionThree.two + love_optionThree.three
//     }
// }
// var loveEndGame01 = function(ticTacToeGameResult) {
//     if (ticTacToeGameResult === win) {
//         return "*waves wand* You're back to human! But... no wish granted for now! You Lost."
//     }
//     if (ticTacToeGameResult === lose) {
//         return "You Lost and... you're gonna stay a virtual monkey for a little while."
//     }
// }
// var loveEndGame02 = function(currentInput, love_optionTwo) {
//     if (currentInput === 1) {
//         return "Hm. Nah, you ain't gonna get love, I ain't giving it to you. You Lost."
//     }
//     if (currentInput === 2) {
//         return "Whattt... okay, I'm outta here. You Lost."
//     }
//     if (currentInput === 3) {
//         return "That's more like it! *waves wand* There you go! You Win!"
//     }
// }
// var loveEndGame03 = function(currentInput, love_optionTwo) {
//     if (currentInput === 1) {
//         return "Hm. Does feel good to be liked... *waves wand* There you go, 50% of love in the world. It's a draw."
//     }
//     if (currentInput === 2) {
//         return "Come back again when you know, my dear. It's a draw."
//     }
//     if (currentInput === 3) {
//         return "Look at you, mischievous little one! I like you. *waves wand* There you go, wish granted! You Win!"
//     }
// }


// //Final Round
// var reactToWisdomOptions = function(currentInput, wisdomOptions) {
//     answersQuestionTwo();
//     if (currentInput === 1) {
//     return "*Waves wand and turns you into a donkey* Oh no, if you want to be human again, you got to win her in a game of Tic-Tac-Toe! Press 'Enter' if you'd like to take her on."
//         if (event.keyCode === 13) {
//             ticTacToeGame();
//         }
//     }
//     if (currentInput === 2) {
//     var wisdom_optionTwo = {
//     one: "1. It's generally fun teehee!",
//     two: "2. I don't know what to do with so much of it.",
//     three: "3. Cos good things happen to good people."
// };
//     return "That's nice, but, why would you share with strangers?" + wisdom_optionTwo.one + wisdom_optionTwo.two + wisdom_optionTwo.three;
//     }
//     if (currentInput === 3) {
//     return "*Waves magic wand and grants your wish* You won! Unicorns are my fave and now you can share with them all the wisdom you've got!"
//     }
// }
// var wisdomEndGame01 = function(ticTacToeGameResult) {
//     if (ticTacToeGameResult === win) {
//         return "*waves wand* You're back to human! But... no wish granted for now! You Lost."
//     }
//     if (ticTacToeGameResult === lose) {
//         return "You Lost and... you're gonna stay a virtual donkey for a little while."
//     }
// }
// var wisdomEndGame02 = function(currentInput, love_optionTwo) {
//     if (currentInput === 1) {
//         return "Look at you, mischievous little one! I like you. *waves wand* There you go, wish granted! You Win!."
//     }
//     if (currentInput === 2) {
//         return "Well, I'm sure they'll appreciate it then! *waves wand* Wish granted! You Win!"
//     }
//     if (currentInput === 3) {
//         return "Sometimes bad things happen to good people too. That said, *waves wand* Wish granted! You Win!"
//     }
// }


// //Final Round
// var reactToLuxuryOptions = function(currentInput, luxuryOptions) {
//     answersQuestionTwo();
//     if (currentInput === 1) {
//     return "*Waves wand and turns you into a peacock* Oh no, if you want to be human again, you got to win her in a game of Tic-Tac-Toe! Press 'Enter' if you'd like to take her on."
//         if (event.keyCode === 13) {
//             ticTacToeGame();
//         }
//     }
//     if (currentInput === 2) {
//     return "*Waves wand and turns you into a teapot* Oh no, if you want to be human again, you got to win her in a game of Tic-Tac-Toe! Press 'Enter' if you'd like to take her on."
//             if (event.keyCode === 13) {
//             ticTacToeGame();
//         }
//     }
//     if (currentInput === 3) {
//     return "Very well then, *waves wand* You Win! But beware... I'll be watching if you keep your word."
//     }
// }
// var luxuryEndGame01 = function(ticTacToeGameResult) {
//     if (ticTacToeGameResult === win) {
//         return "*waves wand* You're back to human! But... no wish granted for now! You Lost."
//     }
//     if (ticTacToeGameResult === lose) {
//         return "You Lost and... you're gonna stay a virtual peacock for a little while."
//     }
// }
// var luxuryEndGame02 = function(ticTacToeGameResult) {
//     if (ticTacToeGameResult === win) {
//         return "*waves wand* You're back to human! But... no wish granted for now! You Lost."
//     }
//     if (ticTacToeGameResult === lose) {
//         return "You Lost and... you're gonna stay a virtual teapot for a little while."
//     }
// }


// //Final Round
// var reactToPurposeOptions = function(currentInput, purposeOptions) {
//     answersQuestionTwo();
//     if (currentInput === 1) {
//     return "I like the way you think. You Win! *waves magic wand* Wish granted!"
//     }
//     if (currentInput === 2) {
//     return "*Waves wand and turns you into a kettle* Oh no, if you want to be human again, you got to win her in a game of Tic-Tac-Toe! Press 'Enter' if you'd like to take her on."
//             if (event.keyCode === 13) {
//             ticTacToeGame();
//         }
//     }
//     if (currentInput === 3) {
//     return "Yes, yes and yes. You live your best life. You Win!"
//     }
// }
// var purposeEndGame02 = function(ticTacToeGameResult) {
//     if (ticTacToeGameResult === win) {
//         return "*waves wand* You're back to human! But... no wish granted for now! You Lost."
//     }
//     if (ticTacToeGameResult === lose) {
//         return "You Lost and... you're gonna stay a virtual kettle for a little while."
//     }
// }


// //Final Round
// var reactToHappinessOptions = function(currentInput, happinessOptions) {
//     answersQuestionTwo();
//     if (currentInput === 1) {
//     return "Will you be willing to dance with me? Yes/No?"
//         if (currentInput === Yes) {
//             return "Ah, that'll be lovely! You Win!"
//                 if (currentInput === No) {
//                     return "Did you just say no? How dare you! *waves her wand and you vanished* You Lost."
//             }
//         }
//     }
//     if (currentInput === 2) {
//     return "You won! Just a word of advice, others should always be responsible of their own happiness, not you."
//     }
//     if (currentInput === 3) {
//     return "I'm unsure of why you're doing that. So... I shan't take the risk of granting you. You Lost."
//     }
// }


// var ticTacToeGame
// var board = [
// ['' , '' , ''],
// ['' , '' , ''],
// ['' , '' , ''],
// ];

// var playerOne = 'X';
// var playerTwo = 'Y';

// function setup() {
//     createCanvas(400, 400);
// }
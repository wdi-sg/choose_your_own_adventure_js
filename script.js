display("What is your name?");

var qna = {
    "option": ["[learn], Increases your MIND attribute \n" + "Learn new knowledge to improve task efficiency",
               "[rest], Increases your BODY attribute \n" + "Energy needed for daily tasks",
               "[play], Increases your SOUL attribute \n" + "Boost your happiness to resist stress",
               "[code], Work on your project to completion \n" + "progress is dependable on MIND index."],

    "response": ["I see, you chose learning \n",
                 "I see, you chose relax a bit \n",
                 "I see, you chose playing \n",
                 "I see, you want to code on your project \n"],

    "question": ["How would you like to learn?",
                 "How would you like to relax?",
                 "What would you like to play?",
                 "How long do you want to code?"],

    "option1": ["-10 BODY +10 MIND \n" + "[self] - learn/teach",                              //user chose learn
                "-20 BODY +20 MIND +10 SOUL \n" + "[github] to study classmate project work",
                "-30 BODY +30 MIND +20 SOUL \n" + " alongside [classmate]/s",

                "+10 BODY +10 MIND \n" + "take a small [break] by strolling outside",        //user chose rest
                "+30 BODY -10 SOUL \n" + "take a longer break by taking a [nap]",
                "Full refill BODY -30 SOUL \n" + "wash up and get some [sleep]",

                "-10 BODY +20 SOUL \n" + "take a shot at [mobile] legend's ranked game",     //user chose play
                "-30 BODY +40 SOUL \n" + "continue your MMORPG [online] game",
                "-40 BODY +60 SOUL \n" + "call out to your [beer] buddies out for one or two",

                "-20 BODY -30 SOUL \n" + "commit [2] hours to project work",                   //user chose code
                "-30 BODY -50 SOUL \n" + "commit [3] hours to project work",
                "-60 BODY -80 SOUL \n" + "commit [6] hours to project work"],

    "path": ["Googled, accessed notes and online tutorials \n" + "Used 10 body points & Gained 10 mind points",                          //user chose learn => self
             "Accessed github and studied classmates project work \n" + "Used 20 body points, Gained 20 mind & 10 soul points",     //user chose learn => project
             "Joined fellow classmates to worked on the project \n" + "Used 30 body points, Gained 30 mind & 20 soul points",            //user chose learn => classmates

             "took an hour break, snacking and strolling down the street \n" + "Gained 10 body and 10 mind points",                      //user chose rest => break
             "put laptop to sleep, wash up and took a 3 hours nap \n" + "Gained 30 body and reduced 10 soul points",                     //user chose rest => nap
             "shutdown laptop, wash up and ready for bed \n" + "Fully refilled body points and reduced 30 soul points",                  //user chose rest => sleep

             "played 3 ranked games, won 2 and loss 1 match \n" + "Used 10 body points, Gained 20 soul points",                          //user chose play => mobile
             "cleared personal and group quests \n" + "Used 30 body points, Gained 40 soul points",                                      //user chose play => online
             "met up and chilled with your groupie at local pub \n" + "Used 40 body points, and Gained 60 soul points",                  //user chose play => beer

             "after 2 hours, project is moving forward step by step \n" + "Used 20 body and 30 soul points",
             "after 3 hours, some project structure is taking shape \n" + "Used 30 body and 50 soul points",
             "after 6 hours, you progress much today\n" + "Used 60 body and 80 soul points",

             "Congrats you suvived after all that hours of hard work. \n" + "you finally manage achieve >75% completion! Good job!",
             "Congrats you suvived after all that hours of hard work, \n" + "you finally manage achieve >50% completion! Good job!",
             "Good job! You suvived after all that hours of hard work, \n" + "you manage achieve >25% completion!",
             "Good try! You burned out yourself too much. \n" + "Try to keep a well-balanced lifestyle next time. Type warrior to try again."]
};

//score(array), starting/current score(num), max score(num)
var score = {
    "mind": [10, 100],
    "body": [60, 80],
    "soul": [20, 50],
    "work": [0, 60]
    };

var page = 0;   //page number
var i = 0;
console.log(page);

    var inputHappened = function(currentInput){
        display("Hi " + currentInput + ", nice to meet you. \n" + "I'm mal, named after my creator");
        display1("Welcome to the game life of a VGA SEI19 student.\n" + "This is the context of project week.");
        display2("Pre-set at 12 hours per day, giving to standard rate of 60 coding hours for a week and max of 168 hours");
        display3("Aim of the game is to maintain balance while clearing as many project hours as possible.");
        display4("Game will end after 168 project hours reaches 0 or \n" + "you burned yourself out in any of the index scores.");
        display5("mind score: knowledge index, improve efficiency to complete task.");
        display6("body score: Energy index, every activties will consume energy");
        display7("soul score: Happiness index, work stress will bring it down.");
        display8("project hours remaining: Counting down hours based on the action taken");
        page ++;

        var userId = currentInput;
        console.log(page);

        if (currentInput === "warrior") {
            console.log(userId);
            score.mind[0] = 10;
            score.body[0] = 60;
            score.soul[0] = 20;
            score.work[0] = 60;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + score.work[0]);
            page = 1;
        }
        else if (page === 2) {
            display("what do you want to do?");
            display1(qna.option[0]);                      //Learn from option[0]
            display2(qna.option[1]);                      //Rest from option[1]
            display3(qna.option[2]);                      //Play from option[2]
            display4(qna.option[3]);                      //code from option[2]
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
        }
        else if (currentInput === "learn" && page === 3) {    //Learn from option[0]
            display(qna.response[0] + qna.question[0]);
            display1(qna.option1[0]);                     //self from option1[0]
            display2(qna.option1[1]);                     //github from option1[1]
            display3(qna.option1[2]);                     //classmate from option1[2]
            display4("");
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
        }
        else if (currentInput === "rest" && page === 3) {    //rest from options[1]
            display(qna.response[1] + qna.question[1]);
            display1(qna.option1[3]);                     //break from option1[3]
            display2(qna.option1[4]);                     //nap from option1[4]
            display3(qna.option1[5]);                     //sleep from option1[5]
            display4("");
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
        }
        else if (currentInput === "play" && page === 3) {    //Play options[2]
            display(qna.response[2] + qna.question[2]);
            display1(qna.option1[6]);                     // from option1[6]
            display2(qna.option1[7]);                     // from option1[7]
            display3(qna.option1[8]);
            display4("");
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
        }
        else if (currentInput === "code" && page === 3) {   //code from option[2]
            display(qna.response[3] + qna.question[3]);
            display1(qna.option1[9]);                       //2 from option1[6]
            display2(qna.option1[10]);                      //3 from option1[7]
            display3(qna.option1[11]);                      //6 from option1[8]
            display4("");
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
        }
        else if (currentInput === "self" && (i === 2 || page === 4)) {    //learn => self from option1[0]
            display(qna.path[0]);
            display1(qna.option1[0]);
            display2("");
            display3("");
            display4("");
            score.mind[0] = score.mind[0] + 10;
            score.body[0] = score.body[0] - 10;
            score.work[0] = score.work[0] - 10;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "github" && (i === 2 || page === 4)) {    //learn => github from option1[1]
            display(qna.path[1]);
            display1("");
            display2(qna.option1[1]);
            display3("");
            display4("");
            score.mind[0] = score.mind[0] + 20;
            score.body[0] = score.body[0] - 20;
            score.soul[0] = score.soul[0] + 10;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "classmate" && (i === 2 || page === 4)) {    //learn => classmate from option1[2]
            display(qna.path[2]);
            display1("");
            display2("");
            display3(qna.option1[2]);
            display4("");
            score.mind[0] = score.mind[0] + 30;
            score.body[0] = score.body[0] - 30;
            score.soul[0] = score.soul[0] + 20;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "break" && (i === 2 || page === 4)) {    //break from option1[3]
            display(qna.path[3]);
            display1(qna.option1[3]);
            display2("");
            display3("");
            display4("");
            score.mind[0] = score.mind[0] + 10;
            score.body[0] = score.body[0] + 10;
            score.soul[0] = score.soul[0];
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "nap" && (i === 2 || page === 4)) {    //nap from option1[4]
            display(qna.path[4]);
            display1("");
            display2(qna.option1[4]);
            display3("");
            display4("");
            score.mind[0] = score.mind[0];
            score.body[0] = score.body[0] + 30;
            score.soul[0] = score.soul[0] - 10;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "sleep" && (i === 2 || page === 4)) {    //sleep from option1[5]
            display(qna.path[5]);
            display1("");
            display2("");
            display3(qna.option1[5]);
            display4("");
            score.mind[0] = score.mind[0];
            score.body[0] = 100;
            score.soul[0] = score.soul[0] - 30;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "mobile" && (i === 2 || page === 4)) {    //mobile from option1[6]
            display(qna.path[6]);
            display1(qna.option1[6]);
            display2("");
            display3("");
            display4("");
            score.mind[0] = score.mind[0];
            score.body[0] = score.body[0] - 10;
            score.soul[0] = score.soul[0] + 20;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "online" && page === 4) {    //console from option1[7]
            display(qna.path[7]);
            display1("");
            display2(qna.option1[7]);
            display3("");
            display4("");
            score.mind[0] = score.mind[0];
            score.body[0] = score.body[0] - 30;
            score.soul[0] = score.soul[0] + 40;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "beer" && page === 4) {    //beer from option1[8]
            display(qna.path[8]);
            display1("");
            display2("");
            display3(qna.option1[8]);
            display4("");
            score.mind[0] = score.mind[0];
            score.body[0] = score.body[0] - 40;
            score.soul[0] = score.soul[0] + 60;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "2" && page === 4) {    //2 from option1[9]
            display(qna.path[9]);
            display1(qna.option1[9]);
            display2("");
            display3("");
            display4("");
            score.mind[0] = score.mind[0];
            score.body[0] = score.body[0] - 20;
            score.soul[0] = score.soul[0] + 30;
            score.work[0] = score.work[0] + 2;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "3" && page === 4) {    //3 from option1[10]
            display(qna.path[10]);
            display1("");
            display2(qna.option1[10]);
            display3("");
            display4("");
            score.mind[0] = score.mind[0];
            score.body[0] = score.body[0] - 30;
            score.soul[0] = score.soul[0] - 50;
            score.work[0] = score.work[0] + 3;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (currentInput === "6" && score.body[0] > 0 && score.soul[0] > 0 && page === 4) {    //6 from option1[11]
            console.log(currentInput + (score.body[0] > 0));
            display(qna.path[11]);
            display1("");
            display2("");
            display3(qna.option1[11]);
            display4("");
            score.mind[0] = score.mind[0];
            score.body[0] = score.body[0] - 60;
            score.soul[0] = score.soul[0] - 80;
            score.work[0] = score.work[0] + 6;
            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + (score.work[1] - score.work[0]));
            page = 1;
        }
        else if (score.body[0] <= 0 || score.soul[0] <= 0) {    //burn out
            display("");
            display1("");
            display2("");
            display3("");
            display4(qna.path[15]);

            display5("mind score: " + score.mind[0] + " / " + score.mind[1]);
            display6("body score: " + score.body[0] + " / " + score.body[1]);
            display7("soul score: " + score.soul[0] + " / " + score.soul[1]);
            display8("remaining hours: " + score.work[0]);
            page = 1;
        }
    };
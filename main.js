let generateDisplay = function(id){
let sentence = story[id];
let output = sentence.line + "\n\n";

    for (let i = 0; i < sentence.options.length; i++) {
        // if (i === 0)
            // output += "";
            output += sentence.options[i] + "\n"
    }
display(output);
}


let score = 0;
let updateScore = function(){
    displayScore("Score: " + score);
};


display("What is your name?");
let play = true;


//initialize
let inputHappened = function(input){
// while (play){

let playerName = input;
display(`Nice to meet you, ${playerName}. What year would you like to go to? (YYYY)`);
console.log(input);

let yearEntered = input;
console.log(yearEntered);

//yearEntered >= 2015 -----------------------------------------------------------------------------------------------------------------
if (yearEntered >= 2015){
   display("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)");
   return;
}
    let response_B_G = input;
       console.log(response_B_G);

    if (response_B_G == "b"){
            display("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)");
    }
            let response_S_R = input;
            if(response_S_R == "s") {
                    display("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
            //  updateScore();
            }   else if (response_S_R == "r") {
                    display("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
                }

    else if(response_B_G === "g"){
            display("Griff is asking you if you are in, or out. What do you say? (I/O)");
        }
            let response_I_O = input;

            if(response_I_O === "i") {
                display("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");
            }   else if(response_I_O === "o") {
                display("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
                score-= 200;
                updateScore();
                }

//yearEntered >= 2015 -----------------------------------------------------------------------------------------------------------------

//yearEntered 1985 < yearEntered < 2014 -----------------------------------------------------------------------------------------------
else if (1985 < yearEntered && yearEntered < 2014){
    display("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");
    playerName = input;
    display("Welcome to the future, " + playerName);
    return;
}
//yearEntered 1985 < yearEntered < 2014 -----------------------------------------------------------------------------------------------
//yearEntered 1955 < yearEntered < 1984 -----------------------------------------------------------------------------------------------
else if (1955 < yearEntered && yearEntered < 1984){
display("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)" + "\n" + "Y: Yes | " +  "N: No | " +  "S: Set her up with George");
    let response_Y_N_S = input;
    if (response_Y_N_S == "y"){
            display("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
    }
    else if (response_Y_N_S == "n"){
            display("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
    }
    else if (response_Y_N_S == "s"){
            display("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.");
    }
    return;
}

//yearEntered 1955 < yearEntered < 1984 -----------------------------------------------------------------------------------------------
//yearEntered < 1955 -----------------------------------------------------------------------------------------------------------------

else if (yearEntered < 1955){
    display(`I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)` + "\n" + "H: Horses | " +  "M: Moon | " + "\n" + "T: Train");
    let response_H_M_T = input;
    if (response_H_M_T  == "h"){
            display("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
    }else if (response_H_M_T == "m"){
            display("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.");
    }else if (response_H_M_T == "t"){
            display("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)");
    }
        if (response_T_L  == "t"){
            display("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.");
        } else if (response_T_L == "l"){
            display("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
        }
    return;
}
//yearEntered < 1955 -----------------------------------------------------------------------------------------------------------------








};


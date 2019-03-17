var userName;
var action;
var score = 0;
var sanity = parseInt(gameObject.charStats.san);
var drugTolerence = parseInt(gameObject.charStats.drugTol);
var intellect = parseInt(gameObject.charStats.int);

//init function. user enters NAME. Description of scenario. And starts part one. If user does not confirm, code ends.
var start = function() {

var y = confirm("Let us begin....");

    if(y== true) {
    userName = prompt(gameObject.start[0]);
    alert("You are "+ userName +". " + userName + gameObject.start[1] );
    confirm(gameObject.start[2]);
    action = prompt(gameObject.start[3] + "\n" + gameObject.inputTips);
    partOne();
    } else {
        console.log("Not started");
        alert("Thank you for your time");
    }

}

//begins part one of the storyline. conditional statements. Chains which reach storyprogone will call the second story line function. When user reaches "predetermined" end points, they will be asked if they want to restart
function partOne() {

        action = action.toLowerCase();

if(action == "talk" || action == "t" || action.search("talk") >=0 ) {
    action = prompt(gameObject.opening.talk[0]) ;
    score = score + 100;
    storyProgOne(action); // to next part of story?

} else if (action == "beat" || action == "b" || action.search("beat") >=0) {
    action = prompt(gameObject.opening.beat[0]);

    if (action == "stop" || action == "s" || action.search("stop") >=0) {
        alert(gameObject.opening.beat[1][0]); //end. need to refresh
        finalScore();
        restart();

    } else if(action == "continue" || action == "c" || action.search("cont") >=0) {
        action = prompt(gameObject.opening.beat[1][1][0]);

        if(action == "listen" || action == "l" || action.search("listen") >=0 || action.search("list") >=0) {
            alert(gameObject.opening.beat[1][1][1][1]);
            action = prompt(gameObject.opening.talk[0]);
            storyProgOne(action); // to next part of story?

        } else if (action == "continue" || action == "c" || action.search("cont") >=0) {
            alert(gameObject.opening.beat[1][1][1][0]); //end. need to refresh
            finalScore();
            restart();

        }
    }

} else if (action == "w" || action.search("away") >=0 || action.search("walk") >=0) {
    action = prompt(gameObject.opening.walk[0]);
    if(action == "brush him aside" || action == "b" || action == "brush") {
        alert(gameObject.opening.walk[1][0]);
        finalScore();
        restart();
         // end need to refresh.
    } else if (action == "s" || action.search("stay") >=0) {
        action = prompt(gameObject.opening.talk[0]);
        storyProgOne();
   }
}
}

//when users reach this function, they will proceed to next part of the adventure.
//will test on combat functions
function storyProgOne() {
if( action.search("accept") >=0 || action.search("ok") >=0) {
    action = prompt(gameObject.opening.talk[1][1]);
    testCombat();
    finalScore();
    workinProg();
} else if (input.search("decline") >= 0 || input.search("no") >=0) {
    alert(gameObject.opening.talk[1][0]);
    finalScore();
    restart();// end. need to refresh.
}

}

//restart function loop. when user reaches end points.
function restart() {
    var y = confirm("Do you wish to restart?")
    if ( y == true) {
        start();
    } else {
        console.log("Not started");
        alert("Thank you for you time");
    }
}

//disclaimer on unfinished paths

function workinProg() {

    alert(gameObject.inProgressDisclaimer);

}


// Suggested use to be searching for words during choice selection. (STILL FINDING A WAY TO MAKE THIS WORK, UNUSED!)
function promptsInput(input,keyWord) {

    action = input.toLowerCase();
    var correct = action.search(keyWord);
    if (correct >= 0) {
        console.log("option found");
    } else {
        alert("Invalid choice. Please enter again.");
    }

}

start();

//when certain actions are selected, will alert what happened. Base stats add or minus. (TOO LONG!)
function testCombat() {

    var impr = gameObject.thingsHappen.improve;
    var reduce = gameObject.thingsHappen.reduce;
    var wrdtlk = gameObject.actions.talk;
    var wrdbeat = gameObject.actions.beat;
    var wrdwalk = gameObject.actions.walk;
    var num = Math.floor(Math.random() * (wrdtlk[0].length));
    var gainSan = wrdtlk[0][num][1];
    var loseSan = wrdbeat[0][num][1];
    var loseDrug = wrdwalk[0][num][1];
    if(action == "talk" || action == "t" || action.search("talk") >=0 ) {
        alert("\"" +  wrdtlk[0][num][0] +"\""+ " " + wrdtlk[1][num] + " " + userName+".");
        alert(userName + " " + impr[num]);
        confirm("Sanity has improved by " + gainSan + " points.");
        sanity = sanity + gainSan;
        console.log(sanity);
    } else if (action == "beat" || action == "b" || action.search("beat") >=0) {
        alert("\"" +  wrdbeat[0][num][0] +"\""+ " " + wrdbeat[1][num] + " " + userName+".");
        alert(userName + " " + reduce[0]);
        confirm("Sanity has reduced by " + loseSan + " points.");
        sanity = sanity - loseSan;
        console.log(sanity);
    } else if (action == "w" || action.search("away") >=0 || action.search("walk") >=0) {
        alert("\"" +  wrdwalk[0][num][0] +"\""+ " " + wrdwalk[1][num] + " " + userName+".");
        alert(userName + " " + reduce[0]);
        confirm("Drug tolerance has reduced by " + loseDrug + " points.");
        drugTolerence = drugTolerence - loseDrug;
        console.log(drugTolerence);
    }
}

function finalScore() {

    alert("You have accumulated a score of " + score);
    alert("You ending stats: \n" + "Sanity - " + sanity +"\n" + "Drug Tolerance - " + drugTolerence + "\n" + "Intellect - " + intellect);
    var x = confirm("Thank you for trying. Would you like another into a false world?");
    if ( x == true){
        start();
    } else {
        alert("Thank you for your time.")
    }

}
/*
You start as a man who does not wear a much, other than pieces of rags around your body. No one really likes you nor do you have friends in this village. There is a village ritual happening. You proceed to check it out.
//You see a short and strangely clothed man. You approach him  He appears puzzled yet intrigued by your appearance. He starts talking to you in english, which you understand. What do you do? (Talk? Beat him up for looking like you? Walk away to disassociate yourself?)
*/
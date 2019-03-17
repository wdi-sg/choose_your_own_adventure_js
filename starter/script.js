var userName;
var action;


var start = function() {

var y = confirm("Let us begin....");

    if(y== true) {
    userName = prompt(gameObject.start[0]);
    alert(userName + gameObject.start[1] );
    confirm(gameObject.start[2]);
    action = prompt(gameObject.start[3]);
    partOne();
    } else {
        console.log("Not started");
        alert("Thank you for your time");
    }

}


start();

function partOne() {
if(action == "talk" || action == "t" ) {
    action = prompt(gameObject.opening.talk[0]);
    storyProgOne(action); // to next part of story?

} else if (action == "beat" || action == "b") {
    action = prompt(gameObject.opening.beat[0]);

    if (action == "stop" || action == "s") {
        alert(gameObject.opening.beat[1][0]); //end. need to refresh
        restart();

    } else if(action == "continue" || action == "c") {
        action = prompt(gameObject.opening.beat[1][1][0]);

        if(action == "listen" || action == "l") {
            alert(gameObject.opening.beat[1][1][1][1]);
            action = prompt(gameObject.opening.talk[0]);
            storyProgOne(action); // to next part of story?

        } else if (action == "continue" || action == "c") {
            alert(gameObject.opening.beat[1][1][1][0]); //end. need to refresh
            restart();

        }
    }

} else if (action == "walk") {
    action = prompt(gameObject.opening.walk[0]);
    if(action == "brush him aside" || action == "b") {
        alert(gameObject.opening.walk[1][0])
        restart();
         // end need to refresh.
    } else if (action == "stay" || action == "s") {
        action = prompt(gameObject.opening.talk[0]);
        storyProgOne(action);
    }
}

}


function storyProgOne(input) {
if(input == "accept") {
    action = prompt(gameObject.opening.talk[1][1]);
} else if (input == "decline") {
    alert(gameObject.opening.talk[1][0]); // end. need to refresh.
};
}

function restart() {
    var y = confirm("Do you wish to restart?")
    if ( y == true) {
        start();
    } else {
        console.log("Not started");
        alert("Thank you for you time");
    }
}


/*
You start as a man who does not wear a much, other than pieces of rags around your body. No one really likes you nor do you have friends in this village. There is a village ritual happening. You proceed to check it out.
//You see a short and strangely clothed man. You approach him  He appears puzzled yet intrigued by your appearance. He starts talking to you in english, which you understand. What do you do? (Talk? Beat him up for looking like you? Walk away to disassociate yourself?)
*/
console.log("hello script js");

// creating global variables

var name;
var nameStore = [];
var message;

var answers = [];
var answersLogged = answers.toString().toLowerCase();

var steps = 0;

var restartMessage = "press space + enter to restart the game";

var score = 0;

var bretmanHart = [
{
    main: {
        scene: [
        "attack with CONFIDENCE!",
        "immediately go into defensive stance",
        "run around in circles"],
    },
},
{
    attack: {
        results: "you've chosen to attack! pick your next move:<br><br>",
        moves: {
            moonsault: {
                name: "try to attempt a full moonsault",
                results: "you're a total noob and COMPLETELY butchered the move! you ended up knocking yourself out cold and got stretchered out of the ring. how embarassing!<br><br>your total score: "
            },
            chokeslam: {
                name: "engage in a chokeslam",
                results: "the move is a success!! you managed to slam bretman the hitman hart into immobility, next you try to: <br><br>",
                nextMoves: {
                    submission: {
                        name: "force him into submission by performing his finishing move, <strong>the sharpshooter</strong> on him",
                        results: "CRITICAL HIT! bretman the hitman hart is rendered completely useless and taps out. you won!<br><br>your total score: "
                    },
                    moonsault: {
                        name: "perform a moonsault",
                        results: "you're a total noob and COMPLETELY butchered the move! you ended up knocking yourself out cold and got stretchered out of the ring. how embarassing!<br><br>your total score: ",
                    }
                },
            },
            dropkick: {
                name: "dropkick",
                results: "move success!! you managed to kick bretman the hitman hart into semi confusion, next you try to: <br><br>",
                nextMoves: {
                    turnbuckles: {
                        name: "climb on to the top of the turnbuckles",
                        results: "CRITICAL HIT! you performed a perfect moonsault and bretman the hitman hart taps out! you win!<br><br>your total score: ",
                    },
                    ringropes: {
                        name: "immediately throw your body against the ring ropes",
                        results: "yikes! bretman the hitman hart was faking it all along and trips you up on your re-entry, he performs YOUR move with perfection and forces you into submission with his finishing move, <strong>the sharpshooter</strong>! you struggle in his arms and tap out. didn't see that coming!<br><br>your total score: ",
                    }
                },
            }
        },
    },
},
{
    defend: {
        results: "as you immediately go into a defensive stance, you choose to:<br><br>",
        moves: {
            eyepower: {
                name: "use your eyepower to glare with pulsating eyeballs in hopes of intimidating bretman the hitman hart",
                results: "wow it seemed to work!! it scared the crap out of bretman the hitman hart and as he starts to retreat backwards into the entrance, you: <br><br>",
                nextMoves: {
                    submission: {
                        name: "force him into submission by performing his finishing move, <strong>the sharpshooter</strong> on him",
                        results: "CRITICAL HIT! bretman the hitman hart is rendered completely useless and taps out. you won!<br><br>your total score: ",
                    },
                    moonsault: {
                        name: "perform a moonsault",
                        results: "you're a total noob and COMPLETELY butchered the move! you ended up knocking yourself out cold and got stretchered out of the ring. how embarassing!<br><br>your total score: ",
                    }
                },
            },
            fanscheer: {
                name: "get your fans (if you had any) to cheer for you, even if it means turning your back against bretman the hitman hart and risk losing the match",
                results: "you were received with massive BOOs, but you: <br><br>",
                nextMoves: {
                    persist: {
                        name: "NEVER GIVE UP!! you ignore the haters",
                        results: "CRITICAL HIT! bretman the hitman hart is rendered completely useless and taps out. you won!<br><br>your total score: ",
                    },
                    tapoutearly: {
                        name: "cut your losses and tap out",
                        results: "you lose!<br><br>your total score: ",
                    }
                },
            },
            tagteam: {
                name: "call for help!",
                results: "<strong>!!!1!!! STONE COLD STEVE AUSTIN</strong> rushes out from amidst the fog (must be the dry ice) and rushes to your help! as they engage in a professional WWF match, you: <br><br>",
                nextMoves: {
                    grabankles: {
                        name: "wait for the window of opportunity to assist stone cold steve austin by grabbing bretman the hitman hart by the ankles from the bottom of the ring",
                        results: "ASSIST +1! (too bad this is not the NBA) you managed to gain an assist and trip over bretman the hitman hart where stone cold steve austin performed the stone cold stunner and forced him into submission!<br><br>your total score: " + score,
                    },
                    flee: {
                        name: "immediately flee",
                        results: "the crowd started BOO-ing you as you flee-ed out of the ring in shame. how embarassing!<br><br>your total score: " + score,
                    }
                },
            }
        },
    },
},
{
    run: {
        results: "you run around in circles for the next 4 minutes, completely exhausting yourself:<br><br>",
        moves: {
            running: {
                name: "continue running",
                results: "interesting choice, seems like you've not learned your lesson. you collapse in exhaustion and mike chioda had no choice but to stretcher you out of the ring. how embarassing!<br><br>your total score: " + score
            },
            attack: {
                name: "attempt to attack",
                results: "after gathering yourself and calming down, you've decided to start planning your attack. <br><br> press <strong>a</strong> to continue<br><br>",
            }
        },
    },
}
];

var inputHappened = function(currentInput){
    name = currentInput.toLowerCase();
    nameStore.push(currentInput);
    if (steps === 0) {
        steps++;
        message = "welcome to the royal rumble, " + "<strong>" + nameStore[0] + "</strong>" + "!" + "<br>" + "you will be facing up with 5X WWE champion, bretman <strong>‘the hitman’</strong> hart enters the ring with charisma as he always do as mike choida sounds the bell and signals for start of the match, you:<br><br>" + "select <strong>a</strong> to " + bretmanHart[0].main.scene[0]  + "<br>select <strong>b</strong> to " + bretmanHart[0].main.scene[1] + "<br>or select <strong>c</strong> to " + bretmanHart[0].main.scene[2];
        document.querySelector("#input").value = "";
        return message;
    } else if (steps === 1) {
        // load scenario TWO
        // a = attack with confidence
        if (currentInput === "a") {
            console.log("selected a for ATTACK");
            steps++;
            // a is moonsault
            // b is chokeslam
            // c is dropkick
            message = bretmanHart[1].attack.results + "select <strong>a</strong> to " + bretmanHart[1].attack.moves.moonsault.name  + "<br>select <strong>b</strong> to " + bretmanHart[1].attack.moves.chokeslam.name + " <br>select <strong>c</strong> to " + bretmanHart[1].attack.moves.dropkick.name;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score + 20;
            document.querySelector("#input").value = "";
            console.log(score);
        // b = go into defensive mode,
        } else if (currentInput === "b") {
            steps++;
            // a is eyepower
            // b is fans cheer
            // c is tag team
            message = bretmanHart[2].defend.results + "select <strong>a</strong> to " + bretmanHart[2].defend.moves.eyepower.name  + "<br>select <strong>b</strong> to " + bretmanHart[2].defend.moves.fanscheer.name + "<br>or select <strong>c</strong> to " + bretmanHart[2].defend.moves.tagteam.name;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score + 1;
            console.log(score);
            document.querySelector("#input").value = "";
            // c = run away, give another 3 options
        } else if (currentInput === "c") {
            steps++;
            // a is run
            // b is (go back) to attack
            message = bretmanHart[3].run.results + "select <strong>a</strong> to " + bretmanHart[3].run.moves.running.name  + "<br>select <strong>b</strong> to " + bretmanHart[3].run.moves.attack.name;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score - 5;
            console.log(score);
            document.querySelector("#input").value = "";
        } else {
            message = "invalid choice";
        }
    // after selecting attack or defend or run
    } else if (steps === 2) {
        // if user chose attack + moonsault
        if (answers[0] === "a" && currentInput === "a") {
            console.log("attack and moonsault");
            message = bretmanHart[1].attack.moves.moonsault.results;
            answersLogged = answersLogged + answers.push(currentInput);
            steps++;
            score = score - 10;
            document.querySelector("#input").value = "";
        // if user chose attack + chokeslam
        } else if (answers[0] === "a" && currentInput === "b") {
            console.log("attack and chokeslam");
            message = bretmanHart[1].attack.moves.chokeslam.results + "select <strong>a</strong> to " + bretmanHart[1].attack.moves.chokeslam.nextMoves.submission.name  + "<br>select <strong>b</strong> to " + bretmanHart[1].attack.moves.chokeslam.nextMoves.moonsault.name;
            answersLogged = answersLogged + answers.push(currentInput);
            steps++;
            score = score + 25;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "a" && currentInput === "c") {
            console.log("attack and dropkick");
            message = bretmanHart[1].attack.moves.dropkick.results + "select <strong>a</strong> to " + bretmanHart[1].attack.moves.dropkick.nextMoves.turnbuckles.name  + "<br>select <strong>b</strong> to " + bretmanHart[1].attack.moves.dropkick.nextMoves.ringropes.name;
            answersLogged = answersLogged + answers.push(currentInput);
            steps++;
            score = score + 25;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "b" && currentInput === "a") {
            console.log("defend and eyepower");
            message = bretmanHart[2].defend.moves.eyepower.results + "select <strong>a</strong> to " + bretmanHart[2].defend.moves.eyepower.nextMoves.submission.name  + "<br>select <strong>b</strong> to " + bretmanHart[2].defend.moves.eyepower.nextMoves.moonsault.name;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score + 2;
            steps++;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "b" && currentInput === "b") {
            console.log("defend and fans cheer");
            message = bretmanHart[2].defend.moves.fanscheer.results + "select <strong>a</strong> to " + bretmanHart[2].defend.moves.fanscheer.nextMoves.persist.name  + "<br>select <strong>b</strong> to " + bretmanHart[2].defend.moves.fanscheer.nextMoves.tapoutearly.name;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score - 3;
            steps++;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "b" && currentInput === "c") {
            console.log("defend and tagteam");
            message = bretmanHart[2].defend.moves.tagteam.results + "select <strong>a</strong> to " + bretmanHart[2].defend.moves.tagteam.nextMoves.grabankles.name  + "<br>select <strong>b</strong> to " + bretmanHart[2].defend.moves.tagteam.nextMoves.flee.name;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score + 30;
            steps++;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "c" && currentInput === "a") {
            console.log("continue running");
            message = bretmanHart[3].run.moves.running.results;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score - 20;
            steps++;
            document.querySelector("#input").value = "";
        }  else if (answers[0] === "c" && currentInput === "b") {
            message = bretmanHart[3].run.moves.attack.results;
            answers[0] = "a";
            answersLogged = answersLogged + answers.push(currentInput);
            steps = 1;
            document.querySelector("#input").value = "";
            score = score + 4;
            console.log(score);
        }
    // after selecting options after attack or defend or run
        }else if (steps === 3) {
        if (answers[0] === "a" && answers[1] === "a") {
            answersLogged = answersLogged + answers.push(currentInput);
            document.querySelector("#input").value = "";
            console.log(score);
            return restartMessage;
        } else if (answers[0] === "a" && answers[1] === "b" && currentInput === "a") {
            console.log("attack and chokeslam + chokeslam result + nextmoves results");
            message = bretmanHart[1].attack.moves.chokeslam.nextMoves.submission.result + scores;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score + 35;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "a" && answers[1] === "b" && currentInput === "b") {
            console.log("attack and chokeslam + chokeslam result + nextmoves results");
            message = bretmanHart[1].attack.moves.chokeslam.nextMoves.moonsault.results + score;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score - 15;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "a" && answers[1] === "c" && currentInput === "a") {
            console.log("attack and dropkick + dropkick results + turnbuckle ");
            message = bretmanHart[1].attack.moves.dropkick.nextMoves.turnbuckles.results + score;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score + 35;
            steps++;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "a" && answers[1] === "c" && currentInput === "b") {
            console.log("attack and dropkick + dropkick results + ringropes");
            message = bretmanHart[1].attack.moves.dropkick.nextMoves.ringropes.results + score;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score - 25;
            steps++;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "b" && answers[1] === "a" && currentInput === "a") {
            console.log("defend and eyepower + eyepower results + nextmoves results");
            message = bretmanHart[2].defend.moves.eyepower.nextMoves.submission.results + score;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score + 20;
            steps++;
            document.querySelector("#input").value = " ";
        } else if (answers[0] === "b" && answers[1] === "a" && currentInput === "b") {
            console.log("defend and eyepower + eyepower results + nextmoves results");
            message = bretmanHart[2].defend.moves.eyepower.nextMoves.moonsault.results + score;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score - 15;
            steps++;
            document.querySelector("#input").value = " ";
        } else if (answers[0] === "b" && answers[1] === "b" && currentInput === "a") {
            console.log("defend and fans cheer + persist");
            message = bretmanHart[2].defend.moves.fanscheer.nextMoves.persist.results + score;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score - 5;
            steps++;
            document.querySelector("#input").value = " ";
        } else if (answers[0] === "b" && answers[1] === "b" && currentInput === "b") {
            console.log("defend and fans cheer + tap out early");
            message = bretmanHart[2].defend.moves.fanscheer.nextMoves.tapoutearly.results + score;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score - 10;
            steps++;
            document.querySelector("#input").value = " ";
        } else if (answers[0] === "b" && answers[1] === "c" && currentInput === "a") {
            console.log("defend and tagteam + grab ankles");
            score = score + 25;
            message = bretmanHart[2].defend.moves.tagteam.nextMoves.grabankles.results + score;
            answersLogged = answersLogged + answers.push(currentInput);
            steps++;
            document.querySelector("#input").value = " ";
        } else if (answers[0] === "b" && answers[1] === "c" && currentInput === "b") {
            console.log("defend and tagteam + flee");
            message = bretmanHart[2].defend.moves.tagteam.nextMoves.flee.results;
            answersLogged = answersLogged + answers.push(currentInput);
            score = score - 10;
            steps++;
            document.querySelector("#input").value = "";
        } else if (answers[0] === "c" && answers[1] === "a") {
            steps = 0;
            answers = [];
            document.querySelector("#input").value = " ";
            return restartMessage;
            return score;
        } else if (answers[0] === "c" && currentInput === "b") {
            console.log("go to attack");
            answers = [];
            message = "enter a to continue."
            steps = 1;
            document.querySelector("#input").value = "";
        }
    // after selecting options after attack or defend or run
        }  else if (steps === 4) {
            steps = 0;
            answers = [];
            message = "your score is: " + score + "<br>" + restartMessage;
            document.querySelector("#input").value = "";
        }
    return message;
    return restartGame;
    return nameStore;
};
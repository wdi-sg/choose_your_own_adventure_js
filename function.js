//This will store the functions needed for this assignment
function restartGame (){
    var restart = prompt("Ready to choose your own adventure again? (yes/no): ");
    var restartLowerCase = restart.toLowerCase();
    if (restartLowerCase === "yes"){
        startingPoint();
    }
    else if (restartLowerCase === "no"){
        alert("bye!");
    }
}
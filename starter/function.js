function youLose()  {
    var lose = prompt("Bad Decision! Bad choice! Please try again. \n Key in [y]es to play again or [n]o to quit.");

    if(lose === "y")    {
        alert("That's the spirit! Do not give up easily!")
        location.reload();
    } else
    {
        alert("Thank you for playing! :)");

    }

}




// var gameGlobe = {
    // "stage1": [
        // {
            // "question1": []
        // }
    // ]
// }
//
//
//
// {  "question1": [ {
            // question: "Where is the Grand Canyon located?",
            // option1: "[1] Arizona, USA",
            // option2: "[2] Utah, USA",
            // option3: "[3] Navada, USA",
            // option4: "[4] Colorado, USA"
        // } ]
    // }
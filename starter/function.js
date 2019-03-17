var reload = function(restart) {

    location.reload(restart)
    return reloadPage
}


var youLose = function()  {
        alert("bad choice, you lose!")
        reload()
        return youLose
}

function maxOutTry() {
    alert("You have maxed out your chance. Game Over! Suspect has escape!");
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
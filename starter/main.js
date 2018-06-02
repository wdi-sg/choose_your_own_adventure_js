var userScore;

do {
    var userName = prompt("Hey, what's your name?");
    if (!userName) {
        userName = "Alex Doe";
    }

    var possibleEras = [
        {id: "ren", name: "Renaissance"},
        {id: "belle", name: "Belle Epoque"},
        {id: "twen", name: "1920s"},
        {id: "fut", name: "Future"}
    ]

    var excludedEraIndex = Math.floor(Math.random() * 4);
    var userEras = [];

    // If excludedEraIndex is 1, userEras will be:
    // var userEras = [
    //     {id: "ren", name: "Renaissance"},
    //     {id: "twen", name: "1920s"},
    //     {id: "fut", name: "Future"}
    // ]

    var promptMsg = "Howdy " + userName + "!\nWhich 'golden age' do you think is the best? We'll have a look there!\n";

    for (i = 0; i < 4; i++) {
        if (i !== excludedEraIndex) {
            userEras.push(possibleEras[i]);
            promptMsg += possibleEras[i].name + " (" + userEras.length + ")\n";
        }
    }

    var eraChoice = parseInt(prompt(promptMsg));
    if ([1, 2, 3].indexOf(eraChoice) > -1 ) {
        userScore = runScene(userEras[eraChoice - 1].id);
    } else {
        alert("You probably have other ideas of 'the golden age', I'll leave you to it, then!");
        userScore = 0;
    }

    // code before refactoring into runScene();
    // if (chosenEra === 1) {
    //     userScore = renaissance();
    // } else if (chosenEra === 2) {
    //     userScore = belleEpoque();
    // } else if (chosenEra === 3) {
    //     userScore = twenties();
    // } else {
    //     alert("You probably have other ideas of 'the golden age', I'll leave you to it, then!");
    //     userScore = 0;
    // }

} while (confirm("Your final score is: " + userScore + "\nLet's try again?"));

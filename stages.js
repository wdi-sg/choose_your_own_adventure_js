var checkStage = function () {
    //Stage 1 - Leaving Bed
    if (answer === "zzz") {
        number = 2;
        stage = 1;
    } else if (answer === "leave") {
        number = 3;
        stage = 2;
    }

    //Stage 2 - Choosing your Pokemon
    //Charmander
    if (stage === 2 && answer === "c") {
        number = 4;
        stage = 2;
        // starter = charmander; for adding in objects later
    } else if (stage === 2 && answer === "b") {
        number = 5;
        stage = 2;
        // starter = bulbasaur; for adding in objects later
    } else if (stage === 2 && answer === "s") {
        number = 6;
        stage = 2;
        // starter = squirtle; for adding in objects later
    } else if (stage === 2 && answer === "enter") {
        number = 7;
        stage = 3;
    }












}
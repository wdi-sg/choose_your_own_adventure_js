var starter = {};
var rivalStarter = {};

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
        starter = {
            name: "Charmander",
            hp: 20,
            }
        rivalStarter = {
            name: "Squirtle",
            hp: 20,
             }
        // starter = Object.assign({}, charmander); IDK why this gets assigned but then the object values cant be accessed.
        // rivalStarter = Object.assign({}, squirtle);
    } else if (stage === 2 && answer === "b") {
        number = 5;
        stage = 2;
    } else if (stage === 2 && answer === "s") {
        number = 6;
        stage = 2;

    } else if (stage === 2 && answer === "enter") {
        number = 7;
        stage = 3;
    }

    //Stage 3: Rival Battle
    //Runaway
    if (stage === 3 && answer === "flee") {
        number = 8;
        stage = 3;
    }
    //Fight - uh does it matter which starter it is KIV
    else if (stage === 3 && answer === "fight") {
        number = 9;
        stage =3;
    }

};//end of checkStage() function
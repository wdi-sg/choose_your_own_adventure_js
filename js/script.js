Gameplay

type start to begin - pick your difficulty
easy m hard ------- are you excited?
yes or hell yeah    - story starts;
1. take the red door    2. take the blue door   3. dont take any door - randomly assigns either door
1. you are at x         2. you are at y
1. decision a/b        2. decision a,b,c
1. decision a1,a2,a3 / b1,b2    2. a1,a2 ,c1,c2

// DECLARE VARIABLES

let currentLayer = 0;
let scenario = A,B or C

let homePage = (input) => {
    if (input === start)  {
        startGame();
    }
    if (input === 1 ){
        scenario = 'A'
        checkLayers(input)
    } else if (input === 2){
        scenario = 'B'
        checkLayers(input);
    } else if (input === 3) {
        scenario = 'C'
        checkLayers(input)
    }
}

let startGame = () => {
    if currentlayer === 0 {
        run storyLayer0()
    }
}

let checkLayers = (input) {
    if currentLayer === 1 {
        if input === 1 {
            run storyLayer1A
        } else if input === 2 {
            run storyLayer1B
        }
    }
    if currentLayer === 2 {
        if scenario === A {
            if input === 1 {
                run storyLayer2A1
            } else if input === santouka {
                run storyLayer2B1
            }
        } else if scenario === B {
            if input === 1 {
                run storyLayer2A2
            } else if input === 2 {
                run storyLayer2B2
            }
        } else if scenario === C {
            if input === 1 {
                run storyLayer2A2
            } else if input === 2 {
                run storyLayer2B2
            }
        }
    }
}


let stories = {
    storyLayer0: {
        story () {
            display('1sushi or 1pizza?')
            reset()
        }
    }
    storyLayer1A: {
        story () {
            display('sushi express or santouka?')
            reset()
        }
    }
    storyLayer1B: {
        story () {
            display('pepperoni, hawaiian, or screw pizza!')
            reset()
        }
    }
    storyLayer2A1: {
        story () {
            display('10 plates or 20 plates?')
            reset()
        }
    }
    storyLayer2B1: {
        story () {
            display('lobster ramen it is!')
            lreset()
        }
    }
    storyLayer2A2: {
        story () {
            display('pepperoni with or without mushroom?')
            reset()
        }
    }
    storyLayer2B2: {
        story () {
            display('hawaiian out of stock, sorry!')
            reset()
        }
    }
    storyLayer2C2: {
        story () {
            display('you have decided to have dessert instead. bubble tea or waffles?')
            reset()
        }
    }
    storyLayer3A1: {
        story () {
            display('total for 10 plates')
            reset()
        }
    }
    storyLayer3A2: {
        story () {
            display('total for 20 plates')
            reset()
        }
    }
    storyLayer3C1: {
        story () {
            display('pepperoni with mushroom. yum!')
            reset()
        }
    }
    storyLayer3C2: {
        story () {
            display('pepperoni without mushroom. no vege is bad!!')
            reset()
        }
    }
    storyLayer3D1: {
        story () {
            display('all the bubble tea shops are closed!')
            reset()
        }
    }
    storyLayer3D2: {
        story () {
            display('waffles are cheap! only $1.70!')
            reset()
        }
    }

}

let reset = () => {
    layer +1;
    turn off scenario;
}



story object with all the stories (place in a js file);
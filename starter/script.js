// put code here!
// Using what you know about data types, variables, operators, conditional blocks, and accepting user input, create a text-based game that allows the user to arrive at different "destinations" based on the inputs they type.

// The game can be as simple or as complicated as you would like to make it.

// Below are some basic rules to get you started.


// Rules
// Any path the user goes down must ask them at least three questions.
// There must be a minimum of seven total destinations the user could arrive at based on their responses.
// For at least one of the questions asked, there must be more than two possible user responses.
// Your code must make use of both string and number user inputs.
// The game should work without the dev tools console open- no console.log!
// You can only use prompt, alert, and confir

alert(`a 36 year old working in the SPF. a guy who loves to fight and eat pizzas, he longs for an adventure to happen while hes on duty.`)

var userName = prompt(`What is your name?`)

alert(`userName is doing patrol when all of a sudden, a security guard comes running to me flustered looking for help.`)

case1()

function case1() {
    var options = prompt(`she exclaimed that she received a call that a bomb is going to go off in 15 mins. caller demanded 10 million cash to be put in bags, to wait for his call in 5 mins, any call for help will not be tolerated, evacuating the building is not an option as well.
        1)you ask him to call the police for help!
        2)ask him if theres any new objects being transfered today?
        3)ask him to prepare the cash now to prevent the worst from happenig and wait for his call!`)
    if (options === '1') {
       console.log("case6");
    } else if (options === '2') {
        case2()
    } else if (options === '3') {
        case8()
    } else {
        alert(`Please choose number 1-3`)
        case1()
    }
  }

function case2() {
    var options = prompt(`The security guard mentioned about a fridge that looks suspicious and is delievered near the rubbish chute!
        1)you ask him to call the police for the bomb experts to dismantle the bomb!
        2)you rush over to the rubbish chute to check out the fridge as time is of the essense! 4 minutes left!
        3)ahahha`)
    if (options === '1') {
        case3()
        } else if (options === '2') {
        case3()
        } else {
        alert(`Please choose number 1-3`)
        case2()
    }
  }

function case3() {
    var options = prompt(`upon reaching the fridge, u hear a faint ticking sound.
        1) You open the door of the fridge to try to figure out where is the ticking sound.
        2) You look around the fridge and notices a thin wire hanging on the top.
        `)
    if (options === '1') {
        case4()
    } else if (options === '2') {
        case6()
    } else {
        alert(`Please choose number 1-2`)
        case3()
    }
}

function case4() {
    var options = prompt(`the door opened and revealed a bomb with 2 colored wires exposed running to the clock that is ticking down
        1)you tried to be a hero and cut one of the colored wires!
        2)You looked around the fridge for more clues and noticed a thin wire hanging on the top.
        `)
    if (options === '1') {
        case6()
    } else if (options === '2') {
        case5()
    } else {
        alert(`Please choose number 1-2`)
        case4()
    }
}

function case5() {
    var options = prompt(`you noticed the wire leads to the rubbish chute and it is connected to a portable power supply!
        1)you noticed the wire leads to the rubbish chute and it is connected to a portable power supply!
        2)someone is behind the power supply and he bolted away! I have to give chase!
        `)
    if (options === '1') {
        case6()
    } else if (options === '2') {
        case7()
    } else {
        alert(`Please choose number 1-2`)
        case5()
    }
}

function case6() {
    var options = prompt(`The bomb detonates and everyone dies!!! Game Over!
        1)Do you want to replay the game? Y or N
        `)
    if (options === '1') {
        case1()
    }
}

function case7() {
    alert(`You gave chase and took him down. the guy turns out to be the mastermind and you manage to take his detonator and switch the bomb off. you saved the day and u get a kiss from the charming security guard.`)
    alert(`Game Over!`)
}

function case8() {
    alert(`The management prepared the ransom and dropped it off at the designated area.`)
    alert(`10 minutes after the ransom is dropped off, the bomb detonated and everyone dies. Game Over!`)
        var options = prompt(`Do you want to replay the game? 1 for yes, 2 for N`)
        if (options === 'Y') {
            case1()
        } else if (options === 'N') {
            options
        } else {
            options
        }
}
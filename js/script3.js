let player = {
    name: '';
    energy: '';
    hp: '';
    items: '';
    attack () {
        reduce enemycounter by 1
        remove energy by 1
    }
    ultimate () {
        kill any enemy
        remove all energy, min 4 energy
    }
}

enemy object low
    - contains method to attack
        - noraml attack 90%
        - special attack 10%

boss object
    - - contains method to attack
        - noraml attack 50%
        - special attack 50%

// -----------_RULES--------------------
    1. ask at least 3 questions [done]
    2. Minimum 7 endings
    3. For at least 1 question, have at least 3 user responses [done]

    4. get username
    5. get player score
    6. go back to the previous scenario, or restart game

    7. create enemies to fight (array of objects)
    8. random game and scenarios (take red/blue door/ randomly assigns door)
    9. use graphical characters

    Hint: You may need parseInt() and toString()
    Hint: Need a random number?
    \n for better formatting of text


    ADDITIONAL FEATURES TO INCLUDE

    1. put input a b c
    2. show your path of you got there - good ending or bad ending or normal ending (the last line will tell me which ending i got eg: there are 5 endings you got the 3rd one)
    3. hell yeah, yes, guess so
    4. difficulty level

    can maybe make all layerCounts be in an array. for every question,
    if i = layerCount, run that number function..
    story object with all the stories (place in a js file);
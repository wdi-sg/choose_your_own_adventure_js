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
8. random game and scenarios
9. use graphical characters

Hint: You may need parseInt() and toString()
Hint: Need a random number?
\n for better formatting of text
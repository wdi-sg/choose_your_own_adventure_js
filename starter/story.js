// PLEASE FORGIVE MY ENGLISH. THAT'S NOT THE POINT OF THIS ASSIGNMENT, RIGHT?


var askName = "You wake up to find yourself on the floor of a cold, musty room. You don't remember why or how you got here. \
In fact.. you can't remember anything except for your name. Your name is: "

//choiceOne
var doorWindowFloor = "You look around the room. It's empty, except for a door and a window. \
As you ease yourself up, the floor starts creaking. \
What do you want to inspect first? \n\n\
> Door\n\
> Window\n\
> Floor"



//choiceTwo(1/3) - DOOR
var forceOrPick = "The door is locked. Do you want to: \n\n\
> Force - Use your mighty strength to break the damn door. \n\
> Pick - Pick the lock. You know you've got this. "

//choiceThree(1/2) - Force
var punchOrKick = "Lucky for you, the wood seems to be made of rotting softwood. \
Are you going to: \n\n\
> Punch - Your arms are stronger than your legs.\n\
> Kick - Your legs are stronger than your arms."

//result - Punch
var resultPunch = "You gathered all your strength to give the door one good punch. \
But as you were about to lurch your arm forward, the door swings open, knocking you back into the wall. \
The impact was too strong. You hit your head."

//result - Kick
var resultKick = "You position yourself to give it a good front kick. But as you \
swung your leg upwards, you lost your balance. You fell down and hit your head."

//choiceThree(2/2) - Pick Lock
var searchOrForce = "It's a keyhole. You need something long and thin. Do you: \n\n\
> Search - Search the floor for something.\n\
> Force - You ain't got time for this."

//result - Search floor
var resultSearch = "You got on your hands and knees to look for something you could use to unlock the door. \
After combing the entire floor, you finally found a bobby pin! You got up excitedly, only to cause a sudden low blood \
flow to your brain. Feeling dizzy, you lost your balance, fell down and hit your head."



//choiceTwo (2/3) - WINDOW
var breakOrInspect = "The window is made of glass, looks like it has been painted black. What now? \n\n\
> Break - You're going to break it, it's just glass. \n\
> Inspect - You don't want to hurt yourself. Look for a safer way to open the window."

//choiceThree(1/2) - Break
var jumpOrShout = "You manage to break the glass. It's totally dark outside. \
All you can see is a faint green light, flickering in the darkness. The light seems to be beckoning you. What do you do? \n\n\
> Jump -  Jump out and go towards the light. \n\
> Shout - Shout for help. Someone has to be there."

//result - jump
var resultJump = "Ready. And Jump! Lucky for you, it's just water. But wait.. you don't know how to swim!"

//result - shout
var resultShout = "\"HELLO HELLO! HELP! HELP!\" You shouted as loud as your remaining energy allowed you to. But as you were \
shouting, a fly went into your mouth, causing you to choke."

//choiceThree(2/2) - Inspect window 2
var inspectMoreOrBreak = "You touch the window. It's warm. Opening the window might lead you outdoors. You are going to: \n\n\
> Break - Trust your instincts and break the window. \n\
> Inspect - Continue inspecting the window. It's good to be careful. "

//result - inspectmore
var resultInspect = "This time you check the frame of the window and found.. a button! Thinking that the button would open the window \
you pressed it. But instead it electrocuted you."



//choiceTwo(3/3) - FLOOR
var inspectOrJump = "The old creaky floor is made of wood. All of a sudden you hear two distinct knocks coming from below the floor. \
What are you going to do? \n\n\
> Inspect - Inspect the floor boards. \n\
> Jump - JUMP! The floor boards seems weak enough to break."

//choiceThree(1/2) - Inspect
var openTD = "You pushed away a pile of stray wood and discover what seems to be a trapdoor. \n\n\
> Open - The noise must have came from here. Open it."
// think of another word for stray wood.

//result - open
var resultOpen = "You opened the trapdoor, revealing... Let's just say, you don't want to know what's in the trapdoor. \
But it was definitely hungry. "

//choiceThree - Jump
var askJumpTimes = "How many times do you want to jump?"

//result - Jumped more than 5 times
var resultJumpMore = "It was one too many. The old wooden floor gave way and you fell to the basement. But the basement floor is made of... LAVA?! "

//result - Jumped less than 5 times
var resultJumpLess = "Nothing happened. But you were sure the noise came from below the floor. You go back to inspecting the floor."



// hahahaha! You can close your tab/brower instead :D
var overrideCancel = "You can't leave! Hello?! You're trapped in a room!"

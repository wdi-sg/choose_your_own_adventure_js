var askName = "You wake up to find yourself on the floor of a cold, musty room. You don't remember why or how you got here. \
In fact.. you can't remember anything except for your name. Your name is: "

//choiceOne
var doorWindowFloor = "You look around the room. It's empty, except for a door and a window. \
As you ease yourself up, the floor starts creaking. \
What do you want to inspect first? \n\
Door, Window, Floor"



//choiceTwo(1/3) - DOOR
var forceOrPick = "The door is locked. Do you want to: \n\
Force - Use your mighty strength to break the damn door. \n\
Pick - Pick the lock. You know you've got this. "

//choiceThree(1/2) - Force
var punchOrKick = "Lucky for you, the wood seems to be made of rotting softwood. \
Are you going to: \n\
Punch - Your arms are stronger than your legs.\n\
Kick - Your legs are stronger than your arms."

//result - Punch
var resultPunch = "Punched and died" //placeholder

//result - Kick
var resultKick = "Kicked and died" //placeholder

//choiceThree(2/2) - Pick Lock
var searchOrForce = "It's a keyhole. You need something long and thin. Do you: \n\
Search - Search the floor for something.\n\
Force - You ain't got time for this."

//result - Search floor
var resultSearch = "Searched and died" //placeholder



//choiceTwo (2/3) - WINDOW
var breakOrInspect = "The window is made of glass, looks like it has been painted black. What now? \n\
Break - You're going to break it, it's just glass. \n\
Inspect - You don't want to hurt yourself. Look for a safer way to open the window."

//choiceThree(1/2) - Break
var jumpOrShout = "You manage to break the glass. It's totally dark outside. \
All you can see is a faint green light, flickering in the darkness. The light seems to be beckoning you. What do you do? \n\
Jump -  Jump out and go towards the light. \n\
Shout - Shout for help. Someone has to be there."

//result - jump
var resultJump = "Jumped down and died" //placeholder

//result - shout
var resultShout = "Shouted and died" //placeholder

//choiceThree(2/2) - Inspect window 2
var inspectMoreOrBreak = "You touch the window. It's warm. You infer that opening the window might lead you outdoors. You are going to: \n\
Break - Trust your instincts and break the window. \n\
Inspect - Continue inspecting the window. It's good to be careful. "

//result - inspectmore
var resultInspect = "Inspected more and died"



//choiceTwo(3/3) - FLOOR
var inspectOrJump = "The old creaky floor is made of wood. All of a sudden you hear two distinct knocks coming from below the floor. \
What are you going to do? \n\
Inspect - Inspect the floor boards. \n\
Jump - JUMP! The floor boards seems weak enough to break."

//choiceThree(1/2) - Inspect
var openTD = "You pushed away a pile of stray wood and discovered what seems to be a trap door. \n\
Open - The noise must have came from here. Open it."
// think of another word for stray wood.

//result - open
var resultOpen = "Open trap door and died" //placeholder

//choiceThree - Jump
var askJumpTimes = "How many times do you want to jump?"

//result - Jumped more than 5 times
var resultJumpMore = "Jumped too many times, floor broke" //placeholder

//result - Jumped less than 5 times
var resultJumpLess = "Nothing happened. But you're sure the noise came from below the floor. You go back to inspecting the floor."




var overrideCancel = "You can't leave! Hello? You're trapped in a room!"

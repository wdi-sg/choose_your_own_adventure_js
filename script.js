var textElement = document.getElementById('text');
var optionButtonsElement = document.getElementById('option-buttons');


//Keep track of world state changes depending on player choices
var state = {}
var userWill = 10;
var monsterPower = 10;

//Get user's name
var person = prompt('Please enter your name');


function startGame() {
    state = {}
    showTextNode(1);
}




//Displays correct text according to index of text node array
function showTextNode (textNodeIndex) {
    var textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    //remove default buttons
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
      }
    //add buttons that can be displayed depending on world state
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', ()=> selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })

}

//display option if no required state needed / fulfilled required state
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

//Takes in option selected
function selectOption (option) {
    if ('stealthMode' in option){
        option.setNextText();
        var nextTextNodeId = option.nextText;
    } else {var nextTextNodeId = option.nextText}
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

//Willpower roll
function willpowerOutcome (){
    var willpowerVal = Math.floor(Math.random() * userWill)
    var monsterVal = Math.floor(Math.random() * monsterPower)
    if (monsterVal < willpowerVal) {
        return 'escape';
    }
    else {
        return 'die';
    }
}

//story & choices
const textNodes = [
    {
           id: 1,
           text: 'Your sister died in April, on a black Wednesday night. Even before then, it had been too quiet in the house. In the beginning there were five: you, sister, mother, father. And Mabel. Poor sweet Mabel, who had so much courage and so little sense. Your sister had hated her. But none of that matters, because it is just you now, here. Tonight is one of those nights, wet and howling, where the house groans on its joints. You are…',
           options: [
               {
                   text: 'Making dinner.',
                   nextText: 2,
               },
               {
                   text: 'Reaching for the telephone.',
                   nextText: 3,
               },
               {
                   text: 'Listening to the radio.',
                   nextText: 4,
               },
           ]

       },
       {
           id: 2,
           text:  'Your father believed in living off the land. It was he who showed you how to check a fruit for ripeness, how to tell bruising from the onset of rot. The kitchen had been his domain. On rare occasions his children would be granted the privilege of joining him as he prepared the family’s meals. You remember every lesson you learned, watching in his shadow.\n \n You decide on stew for dinner—your father’s recipe. As you wash the vegetables, you notice something strange. The knife you tend to use most—your father’s knife, the sharpest knife—is missing.' ,
           options: [
               {
                   text: 'Look for it.',
                   nextText: 5
               },
               {
                   text: 'Use another knife.',
                   nextText: 6
               },
               {
                   text: 'Back.',
                   nextText: 1
               },

           ]
       },
       {
           id: 3,
           text: 'A strange impulse rises in you. You pick up the telephone and hold it to your ear uncertainly. Dial tone. You put the phone down. You’re not sure what you expected. It was a silly whim, anyway. Who would you even call? In any case, you should get on with your night.',
           options: [
               {
                   text: 'Take a bath',
                   nextText: 7,
               },
               {
                   text: 'Get ready for bed.',
                   nextText: 8,
               },
               {
                   text: 'Back.',
                   nextText: 1,
               },
           ]

       },
       {
           id: 4,
           text: 'The song on the radio is familiar, something classical. Your mother played the piano beautifully, or so you’ve been told. She must have played when you were younger, but you can’t remember. The piano had been the first thing to go when your father lost his job at the butcher’s. Music was a luxury, like so many other pretty things. \n \n The radio crackles.',
           options: [
               {
                   text: 'Turn it off and make dinner',
                   nextText: 2,
               },
               {
                   text: 'Change the channel',
                   nextText: 9,
               },
               {
                   text: 'Back.',
                   nextText: 1,
               },
           ]
       },
       {
           id: 5,
           text: 'You find the knife in the lowest drawer. It has a fine blade indeed. You test its edge against your fingers and blood wells quickly. A chef is only as good as their blade. \n Then you hear it. A sound where sound should not be. The pitter-patter of footsteps, faint beneath the rasping of rain on the windows. Movement in the house.',
           options: [
               {
                   text: 'Take the knife with you.',
                   setState: {butcherKnife: true},
                   nextText: 10,
               },
               {
                   text: 'Investigate.',
                   nextText: 10,
               },
               {
                   text: 'Back.',
                   nextText: 1,
               },
           ]
       },
       {
           id: 6,
           text: 'You add the chopped vegetables into the pot and salt the stew. The smell of meat cooking is pleasing. Already, your mouth waters. You should set the table. \n But something gives you pause. A thin creak from somewhere in the house. Weight shifting on wood. ',
           options: [
               {
                   text: 'Take a knife with you.',
                   setState: {knife: true},
                   nextText: 10,
               },
               {
                   text: 'Take the tin of salt.',
                   nextText: 10,
                   requiredState: function(currentState) { return currentState.omen},
                   setState: {salt: true}
               },
               {
                   text: 'Back.',
                   nextText: 2,
               },
           ]
       },
       {
           id: 7,
           text: 'The water is warm when you sink into the bath. You have not used this bath since your sister’s passing. It had not felt right. This had been her nightly ritual, and it seemed vulgar to participate, after what happened. But it has been a long week, and you are tired. You ache. Sitting in the water, your lids begin to lower.',
           options: [
               {
                   text: '--Roll the dice-- Try to get up and go to bed.',
                   stealthMode: true,
                   nextText: 0,
                   setNextText: function (status) {
                       status = stealthOutcome();
                       if (status === 'escape'){
                           this.nextText = 8}
                           else if (status === 'die')
                           {this.nextText = 11}}
               },
           ]
       },
       {
           id: 8,
           text: 'You head into the bedroom. This was your mother’s study, once. Here she painted and drew, while you sat at her feet to play. You would like to think that you had a happy childhood, despite everything. Your mother made it so. She was the weaver of tales, the tamer of fears. Under her touch, the night lost its fangs and sheathed its claws. \n \n You settle back in bed and turn off the lights.Then an urgent feeling grips you: you must not look towards the doorway. You sense it standing at the threshold. A heaviness.',
           options: [
               {
                   text: 'Hide under the blankets.',
                   nextText: 12,
               },
               {
                   text: 'Hum to distract yourself.',
                   requiredState: function(currentState) { return currentState.motherSong},
                   nextText: 13,
               },
           ]
       },
       {
           id: 9,
           text: 'You change the channel. The static blurs, then clears. Someone is speaking on the radio in a low, droning voice.\n \n “—salt and steel. Earth. Rust. Butcher on the devil’s wheel. Salt for even keel.” \n \n You shiver, then turn the radio off. ',
           options: [
               {
                   text: 'Get started on dinner.',
                   setState: {omen: true},
                   nextText: 2,
               },
               {
                   text: 'Back.',
                   nextText: 1,
               },
           ]
       },
       {
           id: 10,
           text: 'You head to the hallway and stop. In the darkness that branches out before you, you see a sliver of light under two doors. Neither of those lights had been left on.',
           options: [
               {
                   text: 'Check the bathroom.',
                   nextText: 14,
               },
               {
                   text: 'Check the bedroom.',
                   nextText: 15,
               },
           ]
       },
       {
           id: 11,
           text: 'You fight to keep awake, but something is wrong. Your body has turned soft and pliant. You blink slowly. Your sister sits at the other end of the bath. There is a hole in her face where the blade first cleaved. She had not screamed. You remember feeling glad then, and sick for that gladness. You meet her eyes and she smiles. Bloody teeth. In her hand she holds your father’s knife. \n \n At last, once more, there were five in the house.',
           options: [
               {
                   text: 'End.',
                   ending: true,
                   nextText: 16,
               },
           ]
       },
       {
           id: 12,
           text: 'You pull the blankets over your head. You try to keep still and quiet. A moment later, the heaviness presses closer. You feel it as an awful pressure, like a stone on your chest. Your breath wheezes. You think of poor Mabel, crushed by a whim of violence.  And you think of her body, cold when you had heaved it into the soil. You can barely breathe now from the weight. You think of how your name had sounded like in her voice, pleading. And then you no longer think at all.',
           options: [
               {
                   text: 'End.',
                   ending: true,
                   nextText: 16,
               },
           ]
       },
       {
           id: 13,
           text: 'You begin to hum the song you had heard on the radio. You cast your mind to other things. Your mother’s smile. The smell of her perfume when she held you close. The moment you learned your father was dead, that feeling of rising wonder. The possibility that you need never be afraid again. It is only you in the house. There is no one left. \n \n When the darkness comes, there is no pain.',
           options: [
               {
                   text: 'End.',
                   ending: true,
                   nextText: 16,
               },
           ]
       },
       {
           id: 14,
           text: 'You open the door to the bathroom. The water in the bath is running, and about to overflow.',
           options: [
               {
                   text: 'Turn the water off.',
                   nextText: 17,
               },
               {
                   text: 'Check the bedroom.',
                   nextText: 15,
               },
           ]
       },
       {
           id: 15,
           text: 'You enter the bedroom and stop. A woman stands in the corner. She is facing the wall. She appears like a silhouette, or an imprint—something faint and smudged.',
           options: [
               {
                   text: 'Stab her with your sharpest knife.',
                   requiredState: function(currentState) { return currentState.butcherKnife},
                   nextText: 18,
               },
               {
                   text: 'Stab her with the knife.',
                   requiredState: function(currentState) { return currentState.knife},
                   nextText: 18,
               },
               {
                   text: 'Call out to her.',
                   nextText: 19,
               }
           ]
       },
       {
           id: 17,
           text: 'You reach over to twist the knob. From behind you, something seizes the back of your neck. Your face is plunged into the water. You twist and thrash desperately. The force around your throat is unrelenting; you cannot break its grasp. Eventually your body slackens as your lungs fill. Hours pass, and the body slumped on the tiles grows stiff and cold. Unheard by anything else, the house sighs.',
           options: [
               {
                   text: 'End.',
                   ending: true,
                   nextText: 16,
               },
           ]
       },
       {
           id: 18,
           text: 'The woman turns and catches your wrist in a languid motion. Worms squirm in the cavity of her eyes. She is streaked in mud and rain. You wonder if she had dug herself out from the pit in the garden. Your sister had hated her. Your sister had been cruel. But it occurs to you now that what you, too, had taken from Mabel. Poor little Mabel, with too little sense. She leans in and works her hollow throat, as if to speak. A rush of black fluid spills from her mouth.',
           options: [
               {
                   text: 'Stab her again with your father\'s knife.',
                   requiredState: function(currentState) { return currentState.butcherKnife},
                   nextText: 20,
               },
               {
                   text: 'Stab her again.',
                   requiredState: function(currentState) { return currentState.knife},
                   nextText: 21,
               },
               {
                   text: 'Run.',
                   nextText: 21,
               }
           ]
       },
       {
           id: 19,
           text: 'You call out to her, and she turns stiffly, like a marionette. You recognize her instantly. Mabel shuffles towards you at a halting pace. Her face is badly decayed; worm-ridden. A hoarse sound rattles from inside her chest.',
           options: [
               {
                   text: 'Run.',
                   nextText: 21,
               },
               {
                   text: 'Throw salt.',
                   requiredState: function(currentState) { return currentState.salt},
                   nextText: 22,
               },
           ]
       },
        {
           id: 20,
           text: 'You did what you should have done then, and jam the knife into her throat. You  twist. Her flesh, already badly deteriorated from her time underground, splits easily. You sever her head neatly and step away as the corpse crumples to the floor. Absently, you reflect that it is fortunate that you had your sharpest knife. The butcher’s child knows, after all, that you are only as good as your blade.',
           options: [
                {
                   text: 'End.',
                   ending: true,
                   nextText: 16,
               },
           ]
       },
       {
           id: 21,
           text: 'Your efforts are ineffectual. The thing that was Mabel puts its hands around your head and squeezes. Your skull splits cleanly. Outside, the rain stops.',
           options: [
                {
                   text: 'End.',
                   nextText: 16,
               },
           ]
       },
       {
           id: 22,
           text: 'You reach into the tin and toss a handful of salt at her. Mabel sways in place, and does not move closer. Again the lipless seam of her jaw opens and closes. Slowly, she lifts a hand and points at you. That skeletal finger trembles, even as she keeps it straightened. Poor, sweet Mabel, who had so much courage and too little sense. Who had smiled at your father when he asked for her name. Mabel, who had followed the devil straight into purgatory. Who had been afraid of everyone in the house, other than you, up until the end.',
           options: [
               {
                   text: 'Take her hand.',
                   nextText: 23,
               },
           ]
       },
       {
           id: 23,
           text: 'You take her hand as gently as you’re able. There are no words you can say. You remember the way she had called out for you, when the knife had not yet touched her throat. You remember yourself, hunched in and weeping by the side, too much her friend to close your eyes, and too much your father’s child to stop it. How your fear had curdled to anger, after. How you finally turned against your sister. You want to tell her this. You want to tell her that you remember. But instead you stand in your mother’s sanctuary and hold Mabel’s hand, and you look at each other in the silence of a dream. \n \n And then suddenly, from one breath to the next, she is gone. You sink to your knees. \n \nYou look to the window and see it is dawn.',
           options: [
                {
                   text: 'End.',
                   nextText: 16
               },
           ]
       },
       {
           id: 16,
           text: `Thank you playing, ${person}.`,
           options: [
                {
                   text: 'Try again.',
                   nextText: 1
               },
           ]
       }
   ]


//runs game when page loads
startGame()
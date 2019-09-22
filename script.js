console.log("hello script js");



/*var cabin = function(inputHappened){
   if (inputHappened === "cabinet"){
        var msg = "You open the cabinet and can make out a row of shoes inside but it's too dark to really see anything. You can hear the murderer's footsteps quickly gaining momentum. CONTINUE SEARCHING CABINET / HIDE INSIDE CABINET / TRY THE WINDOW.";
       return output = msg;
     }
};*/
var userMainLocation;
/*var mainPage = {
    location: ["CABIN", "RIVER"],
    locationMsg: []
}*/


var atRiver = {
    crossRiver: "You jump into the river and immediately get pulled downstream by the current. Your head bangs against the sharp rocks and you lose consciousness. You drown. END",
    getCanoe: "You untie the canoe and drag it to the edge of the river. The killer appears behind you. Quickly, you jump into the canoe and the current rush to bring you downstream. You manage to escape the killer. SAFE.",
    goBackToCabin: "BRING USER BACK TO CABIN"
};

var atCabin = {
    cabinet: "You open the cabinet and can make out a row of shoes inside but it's too dark to really see anything. You can hear the murderer's footsteps quickly gaining momentum. CONTINUE SEARCHING CABINET? / HIDE INSIDE CABINET / TRY THE WINDOW",
    window: "You push the window up but it doesn't budge. The murderer's footsteps sound closer now. With one final push, you manage to open the window wide enough for you to squeeze into the cabin. You shut the window close. Ask user to press 'ENTER' to ENTER CABIN"
};

var inputHappened = function(currentInput){
  console.log( currentInput );
  var mainLocation = ["CABIN", "RIVER"];
  var msg;
  if (currentInput === mainLocation[0]) {
    msg = "The door is locked. You see a storage cabinet by the door. Maybe the key is hidden inside? The window is slightly open but might not be wide enough for you to squeeze in. CABINET / WINDOW";
    output = msg;
    userMainLocation = atCabin;
  } else if (currentInput === mainLocation[1]) {
    msg = "The path is slippery and covered with thorny bushes. You cut yourself trying to get through it. Eventually you get to the river and can almost see the other side. To your left, you see a canoe tied to a tree. CROSS RIVER / GET CANOE / GO BACK TO CABIN";
    output = msg;
    userMainLocation = atRiver;
  }
  return output;
};



//When page first loads, display "You're in a dark forest. A mass murder is chasing you. Up ahead, you see a small cabin which looks empty and a narrow path that leads to the river. Where do you want to go?" CABIN / RIVER
//IF USER CHOOSE CABIN
//Display: "The door is locked. You see a storage cabinet by the door. Maybe the key is hidden inside? The window is slightly open but might not be wide enough for you to squeeze in." CABINET / WINDOW
    //IF USER CHOOSE CABINET
        //Display: "You open the cabinet and can make out a row of shoes inside but it's too dark to really see anything. You can hear the murderer's footsteps quickly gaining momentum." CONTINUE SEARCHING CABINET? / HIDE INSIDE CABINET / TRY THE WINDOW
            //IF USER CHOOSE CONTINUE SEARCHING CABINET
                //Display: "You find a wrench which looks heavy enough to break the window. You smash open the window and climb inside the cabin."
                //Ask user to press 'ENTER' to ENTER CABIN
            //IF USER CHOOSE HIDE INSIDE CABINET
                //Display: "You crouch inside and manage to close the door just as the murderer appears in front of the cabin. Silence...then. The cabinet door swings open and the murderer starts stabbing you. There's no escape. You die. END"
            //IF USER CHOOSE WINDOW
                //Go to WINDOW option

    //IF USER CHOOSE WINDOW
        //Display: "You push the window up but it doesn't budge. The murderer's footsteps sound closer now. With one final push, you manage to open the window wide enough for you to squeeze into the cabin. You shut the window close."
        //Ask user to press 'ENTER' to ENTER CABIN

//IF USER CHOOSE RIVER
//Display: "The path is slippery and covered with thorny bushes. You cut yourself trying to get through it. Eventually you get to the river and can almost see the other side. To your left, you see a canoe tied to a tree. CROSS RIVER / GET CANOE / GO BACK TO CABIN"
    //IF USER CROSS RIVER
        //Display: "You jump into the river and immediately get pulled downstream by the current. Your head bangs against the sharp rocks and you lose consciousness. You drown. END"
    //IF USER GET CANOE
        //Display: "You untie the canoe and drag it to the edge of the river. The killer appears behind you. Quickly, you jump into the canoe and the current rush to bring you downstream. You manage to escape the killer. SAFE."
    //IF USER GO BACK TO CABIN
        //Go to CABIN

//ENTER CABIN
//Display: "You spot a land-line phone at the back of the living room. Call police? YES / NO"
    //IF USER CHOOSE YES
        //Display: "As you were calling the police, the killer appears at the window."
        //IF EARLIER USER CHOSE CABINET > CONTINUE SEARCHING CABINET
            //Display: "Killer climb into the smashed window and stabs you. You die. END"
        //ELSE
            //Display: "You quickly end the call and go to hide. You see three doors in front of you. Go to which door? 1 / 2 / 3"
                //IF USER CHOOSE DOOR 1
                    //Go to DOOR 1
                //IF USER CHOOSE DOOR 2
                    //Go to DOOR 2
                //IF USER CHOOSE DOOR 3
                    //Go to DOOR 3
    //IF USER CHOOSE NO
        //Display: "You run to hide and see three doors in front of you. Go to which door? 1 / 2 / 3"
            //IF USER CHOOSE DOOR 1
                //Go to DOOR 1
            //IF USER CHOOSE DOOR 2
                //Go to DOOR 2
            //IF USER CHOOSE DOOR 3
                //Go to DOOR 3

//DOOR 1
    //Display: "The door leads to the back of the house. You exit and as you were turning a corner, you bump into the killer. The killer stabs you. You die. END."
//DOOR 2
    //Display: "The door leads to the bedroom. You lock the door and hide in a closet. Then you hear the killer breaks open the bedroom window. The killer finds you and stabs you. END."
//DOOR 3
    //Display: "The bathroom is tiny and there's only one small window. You lock the door and wait."
    //IF EARLIER USER CHOSE ENTER CABIN > CALL POLICE NO
        //Display: "The killer begins hacking on the bathroom door. There's no escape for you. He eventually manage to get inside the stabs you. You die. END."
    //ELSE
        //Display: "The killer starts hacking on the door. Then you hear the police siren from a distance. The killer stops. A few minutes later, the bathroom door opens. The police are here. You're safe! SAFE."
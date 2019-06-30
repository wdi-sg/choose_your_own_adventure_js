/* Goal
 *  Program should display text&paths and show next text & paths based on selected path.
 *
 * Approach
 *  Each story has 'id', 'text' 'paths'
 *  Each path has 'target' which should point to specific story id and 'text' as display value.
 */
console.log("hello script js");


var inputHappened = function(currentInput){

};


// START OF STORIES ARRAY//////////////////////
var stories = [
        {
          id: 0,
          text: "I see you're a fan of Back to the Future 2. You confronted with the dilemma",
          paths: [
            {target: 1, text: "Would you rather deal with Biff"},
            {target: 2, text: "Would you rather deal with Griff?"}
          ]
        },

        {
          id: 1,
          text: "Hmm, interesting. Biff is angry and has a cane.",
          paths: [
            {target: 3, text: "Do you stand and fight?"},
            {target: 4, text: "Or run away like a coward?"}
          ]
        },

        {
          id: 2,
          text: "Griff is asking you to join him for a secret party. What do you say?",
          paths: [
            {target: 3, text: "Are you in?"},
            {target: 4, text: "Or are your out"}
          ]
        },


]// END OF STORIESS ARRAY//////////////////////
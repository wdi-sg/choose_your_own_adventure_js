/* Goal
 *  Program should display text&paths and show next text & paths based on selected path.
 *
 * Approach
 *  Each story has 'id', 'text' 'paths'
 *  Each path has 'target' which should point to specific story id and 'text' as display value.
 */
console.log("Welcome to Back to the Future");


var inputHappened = function(currentInput){
    var parsedInput = parseInt(currentInput)
    playStory(stories, parsedInput);
};


// START OF STORIES ARRAY//////////////////////
var stories = [
        // PART 1 (2015) - STORIES & PATHS
        {
          id: 2015,
          text: "I see you're a fan of Back to the Future 2. You confronted with your nemesis",
          paths: [
            {target: 'b', text: "Would you rather deal with Biff"},
            {target: 'g', text: "Would you rather deal with Griff?"}
          ]
        },

        {
          id: 'b',
          text: "Hmm, interesting. Biff is angry and has a cane.",
          paths: [
            {target: 's', text: "Do you stand and fight?"},
            {target: 'r', text: "Or run away like a coward?"}
          ]
        },

        {
          id: 'g',
          text: "Griff is asking you to join him for a secret rendezvous. What do you say?",
          paths: [
            {target: 'i', text: "Are you in?"},
            {target: 'o', text: "Or are your out"}
          ]
        },

        {
          id: 'i',
          text: "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you. THE END.",
        },

        {
          id: 'o',
          text: "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.THE END.",
        },

]// END OF STORIESS ARRAY//////////////////////

// START OF DISPLAYING STORIES
 for (var i = 0; i < stories.length; i++) {
    if (stories[i].id == 2015) {
        //console.log (stories[i].paths); // text of path
    }
 }

 var playStory = function (stories, id) {
    var currentStory = [];
    for (var i = 0; i < stories.length; i++) {
        if (stories[i].id == 2015) {
            currentStory.push(stories[i].text);
            console.log(stories[i].text);
        }
     }
    display(currentStory); // text of path
 };
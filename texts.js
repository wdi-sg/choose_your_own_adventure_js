//This will be where long strings of text will be stored to reduce clutter elsewhere.


var startText = "Just a little random wild crazy imagined story of the life and times of a coder.\nAll characters are fictional and are figments of my imagination. Any resemblance to existing peoples are just coincidental.\nJust a for fun little project with my wild imagination.\nBeyond that, I hope you enjoy my little CYOA madness.\n^(;,;)^"

var introduction = "In this little game you get to pick between being more tenacious or being more intelligent.\nThe two traits gives a little different flavor during the course of this little CYOA.\nSo..... Pick wisely. *Just a little hint though. Not all is as it seems."

var perkInstruct = "Type '1' if you wish to be more Tenacious.\nType '2' if you wish to be more intelligent."

var perkIntro = "Tenacity\nYou are determined and even a little stubborn. This helps you be more resistant to giving up and lets you get through more situations through pure force of will.\nIntelligence\nYou are a little smarter than your average Joe (Sorry Joe). This helps you understand concepts faster and helps with making your actions a little more efficient."

var day1P1D101 = "The day begins as you stumble into your first coding class more than a little nervous. You check the time as you enter, 8:45am. Just 15mins before class is supposed to start. There seems to be a few other people seated already. Do you:\n1.Seat right at the front of class?\n2.Seat in the middle area?\n3.Seat at the back of the classroom?";

var day1P1D201 = "Type '1' to go to the front, '2' to the middle and '3' to go to the back.";


//First divergence

//Front Seat Fork in the Road====================================================================================================
var day1P1D1Front = "You head towards the front of class to take a seat.\nYou reason being at the front helps you see better and would better your focus. Class is about to begin. What actions would you like to take?\n1. Use your focus to pay better attention in class\n2. Just pay attention in class without too much focus\n3. Don't pay too much attention and rest a little";

//R ===> Result 1
var day1P1D1Front1R = "You decided that paying close attention was probably the best bet due to your inexperience and it being the first day and all. Sitting at the front helped out in getting rid of distractions. This improves the efficiency of your focus. Paying close attention does drain your overall focus though.";

//R Result 2
var day1P1D1Front2R = "Deciding that not being too gung-ho was probably not the best bet, you take your time and try to go about at your own pace. Being at the front did help with getting rid of some distractions so you get a little bonus to your results.";

//R - First Day Result of action 3
var day1P1D1Front3R = "Although this is your first day, you were a little worn out from being a little to anxious last night. That affected your sleep and so you decided to conserve your energy at this point.";


// Middle man Approach===============================================================================================================
var day1P1D1Middle = "You head towards the middle area and find a seat beside one of your classmates. This is your first time encountering this person. What actions would you like to take?\n1. Use your energy to be more friendly\n2. Play it cool and just go with the flow\n3. People are tiring and you just want to focus on your own stuff.";

//R ===> Result 1
var day1P1D1Middle1R = "Deciding that making a good first impression was a good idea. You attempt to put your best foot forward and give it your all to make good friends during this class. You stick your hand out and introduce yourself with gleeful enthusiasm. Your classmate meets your handshake warmly and you spend the 15 mins before class getting to know each other better. Your efforts seem to not go to waste and your classmate has a good impression of you.";

//R Result 2
var day1P1D1Middle2R = "You play it cool and approach your classmate smoothly. You two introduce yourselves and spend a little time getting to know each other better. Class soon starts and you two get back to trying to pay attention to class.\nYou aren't quite show what sort of impression you have made to your classmate but are hopeful for more opportunities to come to get to know each other better.";

//R Result 3
var day1P1D1Middle3R = "You set yourself down and just briefly introduce yourselves to each other. Class soon starts and you try your best to pay attention in class. Not spending too much energy on the social aspects of this adventure, you managed to get a little bonus to your focus and results.";


// Back area methods=================================================================================================================
var day1P1D1Back = "You head to the back as you feel most comfortable in that area. You find a empty area and decide to settle down. Class is about to begin. What actions would you like to take?\n1. Try your best to pay attention and focus in the lesson\n2. Go at your own pace and just do what you can\n3. Don't pay too much attention and rest a little.";

//R Result 1
var day1P1D1Back1R = "You try your best to focus on what is being taught but are slightly distracted due to where you are situated. Due to expending your focus you do better than not but are feel that it is just slightly lacking. However, due to being at the back, you use less focus attempting the actions.";

//R Result 2
var day1P1D1Back2R = "Despite being at the back with 'the most distance between you and the content', you are able to go your own pace and thus get a slight bonus to your results. Not trying too hard you managed to conserve your energy and get a little bonus to your next action.";

//R Result 3
var day1P1D1Back3R = "Last night you didn't get as good of a rest as you thought and so you decided that taking a little of a rest might be the best option you have right now. Not paying as much attention as you would like, your results suffer a little but you feel better prepared for the rest of the day.";
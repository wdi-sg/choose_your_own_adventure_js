console.log("hello script js");

var timeLineConfig = {
    future: {
        preQuestion: "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)",
        Biff: {
            preQuestion: "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? Stand, or Run(S/R)",
            Stand: "Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.",
            Run: "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."
        },
        Griff: {
            preQuestion: "Griff is asking you if you are in, or out. What do you say? (I/O)",
            In: "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you",
            Out: "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure."

        }
    },
    present: {
        preQuestion: "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?",
    },
    past: {
        preQuestion: "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? Yes, No, or Set her up(Y/N/S)",
        Yes: "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.",
        No: "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.",
        Set: "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.",
    },
    distantPast: {
        preQuestion: "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? Horse, Moonshine, or Train(H/M/T)",
        Horse: "Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.",
        Moonshine: "You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855",
        Train: {
            preQuestion: "Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? Take, or Leave(T/L)",
            Take: "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.",
            Leave: "Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed."
        }
    }

}

var questionCount = 0;
var retrieveQnsAccordingToYrs = function(year) {
    var selectedYear = parseInt(year)
    if (selectedYear >= 2015) {
        return timeLineConfig["future"]
    }
    if (selectedYear >= 1985 && selectedYear <= 2014) {
        return timeLineConfig["present"]
    }
    if (selectedYear >= 1955 && selectedYear <= 1984) {
        return timeLineConfig["past"]
    }
    if (selectedYear < 1955) {
        return timeLineConfig["distantPast"]
    }
}

var question;

var chosenYear;

var inputHappened = function(currentInput) {
    if (questionCount === 0) {
        questionCount += 1;
        return `Nice to meet you, ${currentInput}. What year would you like to go to? (YYYY)`
    }
    if (questionCount === 1) {
        questionCount += 1
        chosenYear = currentInput
        question = retrieveQnsAccordingToYrs(currentInput)
        return `${question.preQuestion}`
    }
    if (questionCount === 2) {
        questionCount += 1
        if (chosenYear >= 1985 && chosenYear <= 2014) {
            return `Welcome to the future, ${currentInput}!`
        } 
    }
}
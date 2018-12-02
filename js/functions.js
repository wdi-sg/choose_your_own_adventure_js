
//Functions dealing with numerals

function addTen (quantity) {
    quantity += 10;
    return quantity;
}

function minusTen (quantity) {
    quantity -= 10;
    return quantity;
}

function randGen (quantity) {
    quantity = Math.round(Math.random()*quantity);
    return quantity;
}

function addFifty (quantity) {
    quantity += 50;
    return quantity;
}

function addHundred (quantity) {
    quantity += 100;
    return quantity;
}

//function dealing with fighting

function hitChoice (choice) {
    if (choice=="p") {
        var toHit = 25;
        var success = hitSuccess(toHit);
    } else if (choice=="k") {
        var toHit = 50;
        var success = hitSuccess(toHit);
    } else if (choice=="b") {
        var toHit = 75;
        var success = hitSuccess(toHit);
    } else {
        var toHit = 25;
        var success = hitSuccess(toHit);
    } return success;
}

function hitSuccess (quantity) {
    var combatSuccess = "attack was successful.";
    var combatFailure = "attack missed";
    if (Math.round(Math.random()*100) >= quantity) {
        return combatSuccess;
    }   else {
        return combatFailure;
    }
}

function attackChoice(choice) {
    var userStrike;
    if (choice=="p") {
        userStrike = (randGen(stats.intelligence));
    } else if (choice=="k") {
        userStrike = 2*(randGen(stats.intelligence));
    } else if (choice=="b") {
        userStrike = 3*(randGen(stats.intelligence));
    } else {
        userStrike = (randGen(stats.intelligence));
    }
    return userStrike;
}

function userCalculator(userSuccess) {
    // var userDamage = randGen(stats.intelligence);
    var userResult;
    if (userSuccess.includes("success")) {
        userResult = userDamage;
    } else {
        userResult = 0*userDamage;
    }   return userResult
}


function opponentCalculator(opponentSuccess) {
    var opponentDamage = randGen(opponentIntelligence);
    var opponentResult;
    if (opponentSuccess.includes("success")) {
        opponentResult = opponentDamage;
    } else {
        opponentResult = 0*opponentDamage;
    }   return userResult
}


//functions dealing with strings

function capitalise (string) {
    string = string.charAt(0).toUpperCase();
    return string;
}

function restOfString (string) {
    string = string.slice(1).toLowerCase();
    return string;
}

//functions dealing with retrieving data

function getDate (today) {
    var today = new Date();
    dd = today.getDate();
    mm = today.getMonth()+1;
    yy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    };
    if (mm < 10) {
        mm = "1" + mm;
    };
    today = dd + '/' + mm + '/' + yy;
    return today;
}

// function showStats (stats) {
//     stats =JSON.stringify(stats, null, "\n");
//     return stats
// }

function logStats (stats) {
    for (var key in stats) {
        if (key==="userName") {
            resultStats.push("Name: " + stats.userName);
        } else if (key==="dob") {
            resultStats.push("Date of Birth: " + stats.dob);
        } else if (key==="health") {
            resultStats.push("Health: " + stats.health);
        } else if (key==="intelligence") {
            resultStats.push("Intelligence: " + stats.intelligence);
        } else if (key==="mentalWellBeing") {
            resultStats.push("Mental Wellbeing: " + stats.mentalWellBeing);
        } else if (key==="physicalWellBeing") {
            resultStats.push("Physical Wellbeing: " + stats.physicalWellBeing);
        }
    } return resultStats;
};

function showStats (Stats) {
    var stringStats = resultStats.join("\n");
    return stringStats;
}

//miscellaneous functions

function FatalError(){
    Error.apply(this, arguments);
    this.name = "FatalError";
}
FatalError.prototype = Object.create(Error.prototype);

function book(choice) {
    var bookTitle;
    var quantity = Math.floor(Math.random() * 10) + 1;
    switch (quantity) {
        case 1:
            bookTitle = "Harry Potter";
            break;
        case 2:
            bookTitle = "Lord of the Rings";
            break;
        case 3:
            bookTitle = "Spiderman";
            break;
        case 4:
            bookTitle = "Chemistry for Students";
            break;
        case 5:
            bookTitle = "Geography for Dummies";
            break;
        case 6:
            bookTitle = "Web Design Made Easy";
            break;
        case 7:
            bookTitle = "I am smart. So are you.";
            break;
        case 8:
            bookTitle = "Grandma's Recipes";
            break;
        case 9:
            bookTitle = "Religion in the Modern World";
            break;
        case 10:
            bookTitle = "Self-Defense for Everyone";
            break;
    } return bookTitle;
}

function encounter(choice) {
    var schoolOn = 0;
    schoolOn++;
    while (schoolOn === 1) {
        var schoolChoice = prompt("You can go to: \n (L)ibrary \n (C)lassroom \n (CA)nteen");
        if (schoolChoice == "l" ||schoolChoice == "c" || schoolChoice == "ca" || schoolChoice == "y") {
        var explore =    0;
        explore++;
            while (explore == 1) {
                if (schoolChoice = "l") {
                    var library = prompt("You are at the library. Would you like to read a book? (y/n)").toLowerCase();
                    var readBook;
                    if (library = "y") {
                        var reading = 0;
                        reading ++;
                        while (reading == 1) {
                            book();
                            readBook = book();
                            alert ("You read: " + readBook + ".");
                            var readOn = prompt("Would you like to read another book? (y/n)").toLowerCase();
                            if (readOn == "n") {
                                reading -=1;
                            }
                        }
                    }
                explore -= 1;
                } else if (schoolChoice = "c") {
                    var classroom = prompt("You are at the classroom.").toLowerCase();
                    explore -= 1;
                } else if (schoolChoice = "ca") {
                    var canteen = prompt("You are at the canteen.").toLowerCase();
                    explore -= 1;
                }
            }
        } else {
            school = prompt("Would you like to leave the school? (Y) leave \n (N) Go back to school").toLowerCase();
            if (school == "y") {
                alert ("You went home.");
                schoolOn -=1;
            }
        }
    }
}

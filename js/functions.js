
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

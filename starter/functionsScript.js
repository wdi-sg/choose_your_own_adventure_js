var numError = function() {
    return "Please enter a whole number!"
}

// prompt number and store in array
var promptNStore = function(type) {
    var array = []
    var numName;
    var i = 1;
    while (i <=3) {
        if (i === 1) {
            numName = "first";
        } else if (i === 2 ) {
            numName = "second";
        } else if (i === 3) {
            numName = "third"
        }

        var promptNum = parseInt(prompt(`Enter ${numName} ${type}: `));

        if (Number.isInteger(promptNum) === true || isNaN(promptNum) === false) {
            array.push(promptNum)

        } else {
            alert(numError());
            continue
        }
        i++;
    }
    return array;
}

//  shuffle the array
var shuffle = function(array) {
    var currentIndex = array.length, tempValue, randIndex;

    // while there are elements in the array
    while (currentIndex > 0) {
        //pick a random index
        randIndex = Math.floor(Math.random() * currentIndex);

        currentIndex--;   // decrease current index by 1

        // and swap the last element with it
        tempValue = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = tempValue;
    }
    return array;
}

//  insert element to array
var eleToArray = function(array, ele1, ele2, ele3){
    array.push(ele1);
    array.push(ele2);
    array.push(ele3);

    return array;
}

//  check if both array match and give points
var checkMatch = function(arrayOne, arrayTwo) {
    var score = 0;

    for (var i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] === arrayTwo[i]) {
            score += 1;
        } else {
            score += 0;
        }
    }
    return score;
}
////////////////////// LETTER GAME FUNCTION ////////////////////////
var letterError = function() {
    return "Please enter a letter!"
}

// prompt letter and store in array
var promptLStore = function(type) {
    var array = [];
    var numName;
    var i = 1;
    while (i <=3) {
        if (i === 1) {
            numName = "first";
        } else if (i === 2 ) {
            numName = "second";
        } else if (i === 3) {
            numName = "third";
        } // end of if statement

        var letter = prompt(`Enter ${numName} ${type}`);

 // If input cannot be converted to a number, parseInt() returns NaN
 // means if NaN is returned, it is a string
 // isNaN is to check if value is NaN
        if (letter.length === 1 && isNaN(parseInt(letter)) === true) {
            array.push(letter);

        } else {
            alert(letterError());
            continue;
        }
        i++;
    } // end of while loop
    return array;
} // end of the function

///////////////////////  DECIPHER GAME FUNCTION /////////////////////////

var encode = function(code) {
    var plain = "abcdefghijklmnopqrstuvwxyz";
    var cipher = "zyxwvutsrqponmlkjihgfedcba";

    var encodedCode = [];//
    for (var i = 0; i < code.length; i++) {
        var position = plain.indexOf(code[i]);
        for (var j = 0; j < cipher.length; j++) {
            if (position === j) {
                encodedCode.push(cipher[j]);
                //console.log(cipher[j]);
            }
        }
    }
    var joinedWord = encodedCode.join("");  // to print it as a word
    return joinedWord;
}
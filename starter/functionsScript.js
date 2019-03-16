var numError = function() {
    return "Please enter a whole number!"
}

// prompt element and store in array
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

        var promptNum = Number(prompt(`Enter ${type} ${i}`));

        if (Number.isInteger(promptNum) === false) {
            alert(numError());
            continue
        } else {
            array.push(promptNum)
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
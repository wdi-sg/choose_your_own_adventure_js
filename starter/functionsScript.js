var numError = function() {
    return "Please enter a whole number!"
}

//  function for numbers prompt
var askNumber = function(order, type) {
    var promptNum = Number(prompt(`Enter your ${order} ${type}: `));
    return promptNum;
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
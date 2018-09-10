/*
A list of all functions used for game
*/

// Function to capitalise first word to uppercase
var capFirst = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}
//function to reload page
var reloadPage = function(place){
    location.reload(place)
    return reloadPage
}

//function score
var userScore = function(score){
    alert(score)
    throw new Error(`Game Over`)
return userScore
}

//function when user freaks out
var youNoGuts = function(restart){
    alert(`${nameUser}, you a scaredy cat`)
    reloadPage()
    return youNoGuts
}

//function when User picks wrong outcome
var youDie = function(){
    alert(`${nameUser}, you made a wrong move , now you DEAD`)
    reloadPage()
    return youDie
}

// //function invalid entry
// var nothing = function(){
//     alert(`Don't be sly or slow , type the correct thing`)
//     alert(`Alright enough, we'll start again`)
//     return nothing
// }
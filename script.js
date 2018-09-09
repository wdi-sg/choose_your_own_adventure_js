/*
Name:Hakim
Date:080918
Purpose: Quest Game : Snatch Thieves of London
*/

// Introduction:Input User Details

var start = alert(` 🛵🛵🛵🛵🛵 Snatch Thieves of London 🛵🛵🛵🛵🛵`)

var inputName = prompt(`Enter you Name`)

    if(inputName === " " ){
        nothing()
    }
    else {
        var inputSex = prompt("Please enter [m]ale or [f]emale")
    }
    if ( inputSex === "m" ){
        var sex = "he"
    }
    else if (inputSex === "f") {
        var sex = "she"
    }
    else{
        var sex = "it"
    }

//Introduction:Story Context
var nameUser = capFirst(inputName)

alert(`${nameUser} had just finished visiting the Brixton town. ${capFirst(sex)} is on holiday in London Town.But it was time to go return to the hotel near Waterloo Station `)
alert(`As , you took a step out of the train at Waterloo Station ,all of a sudden a hooded person came over and snatched your bag that has 20k pounds in it`)
alert(` Chief ${nameUser} , What do you do?`)

var firstChoice = prompt(`give [c]hase or [g]ive up`)

if(firstChoice === `c`){
    alert(`${nameUser} , good job ,  you start giving chase , you are panting.Hes running up the stairs up to level 1`)
}
else {
    youNoGuts()
    userScore(`You dont deserve any score, Mr spineless`)
}

//Vehicle Scene
alert(`The snatch thief immediately jumped onto a moped.There was another man who was manning the getaway vehicle ` )
alert(`You see three types of vehicles in your immediate vicinity`)

var inputVehicle = prompt (`Choose [m]otorbike , [c]ar or [b]oat`)

        if(inputVehicle === `c`){
        alert(`How dumb can you be ${nameUser},traffic is terrible in london.Forget about your money`)
        youNoGuts()
        userScore(`Score : ${1}`)

        }
        else if(inputVehicle === 'b'){
        alert(`Captain ${nameUser}, you really have to grow a brain`)
        youNoGuts()
        userScore(`Score : ${1}`)
        }
        else{
        alert(`Ducati Hypermotard; not bad.You start riding off and chasing the snatch thieves`)
        alert(`Not too bad ${nameUser}.You're closing the gap between your motorbike and the theives`)
        }

//Bleeding man
alert(` ${nameUser} you're riding so fast that you ended up in Peckham.You see a man bleeding on the sidewalk from a stabbing`)
alert( `What do we do now Captain ${nameUser} ?`)
var secondChoice = prompt(`[h]elp the bleeding man or [f]ocus on task at hand and continue chasing`)


if (secondChoice === 'h'){
    alert(`You got down your motorbike,tried to help him`)
    alert(`The blood smells like ketchup.He stabs you.`)
    youDie()
    userScore(`Score : ${2}`)
}
else{
    alert(`Right on ${nameUser}`)
    alert(`The bleeding man got up as soon as your vehicle pass him.Luckily, you didnt fall for their tricks.It was a trap!You find yourself now behind the thieves`)
}


//Dodge scene
alert(`He takes out a gun`)
alert(`Shots Fired`)

var inputDodge =prompt(`[d]odge or [s]tay`)

if(inputDodge === `d`){
    alert(`Youre still alive`)
}
else{
    alert(`Argh! You turned headless`)
    youDie()
    userScore(`Score : ${3}`)
}

//Final scene
alert(`you have to go on the offensive`)
alert(`you move alongside the moped`)
alert(`Pick a move`)

var offensiveMove = prompt('[k]ick the moped , [j]ump on the moped , [p]unch the rider')

if(offensiveMove === `j`){
    alert(`The moped driver switches lane`)
    alert(`You missed`)
    youDie()
    userScore(`Score : ${4}`)
}
else if(offensiveMove === `j`){
    alert(`The pillion counters your punch`)
    alert(`You lose balance and crash`)
    youDie()
    userScore(`Score : ${4}`)
}
else{
    alert(`The moped crashes`)
    alert(`You stop alongside the moped`)
    alert(`You take their gun`)
    alert(`Hasta la vista boys`)
    alert('You got your money back and gained street cred')
    alert(`VICTORIOUS`)
    reloadPage()
}

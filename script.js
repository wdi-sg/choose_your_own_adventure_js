var getName= function(){
    player.name = prompt("Welcome to class! Please enter your name");
}
getName();




//------------------------------------CREATE TOWN-------------------------
var createTown = function(){
    resetPage();
    updateTime(0);
    updateDay(1);
    mainText = `You go home to sleep. I thought of adding more things to do, but I'm out of time. Sorry ${player.name}!`;
    secText = `Stats: Intelligence: ${player.intelligence}, Guts: ${player.guts}, Charm:${player.charm}`;
    choice0 = "Next day"
    pushMain();
    pushSec();
    pushBtn0(choice0, beforeSchool1);
}

beforeSchool1();
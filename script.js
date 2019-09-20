console.log('hello');
//Variables for assets
var bgm = document.getElementById("bgm");

//Functions for assets
function playSound(){
    bgm.muted = false;
    bgm.play();
}

function stopSound(){
    bgm.muted = true;
}

//Variable for game
var narration = null;

var player = {
    name: null,
    health: 10,
    rads: 0,
    item: [],
}

//Functions for game
function display(text){
    var outputText = document.getElementById("outputText");
    outputText.innerText = text;
}

    //0. Alert to give background
    alert("This game is best played with music on.\n\nThe following is a fictional story inspired by the following\n - International bestseller series: Metro 2033\n - Chernobyl Nuclear Accident")

    //1. Ask player for name
var playerName = prompt("What if your name player?");
player["name"] = playerName;
console.log(player["name"])

    //2. Begin narration
var narration = "The year is 1986. The Chernobyl Nuclear Plant has just exploded, leaking radiation as far out as Sweden. You are an employee of the Nuclear plant, and have just received a message from your superiors.\n\nAccording to the Soviet Union's team of best physicists, the molten residue is melting through the ground towards a pool of water coolant. If the lava touches the water, it would cause a steam eruption that could render half of Europe inhospitable for thousands of year.\n\nThere were many volunteers to stop this from happening, but no one else knows where the correct valves to drain the pool was. Should you choose to accept this mission, you will most likely die.\n\nAccept this mission?\n- yes\n- no"
document.querySelector("#input").placeholder = "Do you accept?"
display(narration);
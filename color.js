var body = document.getElementById("body");
var bgm = document.getElementById("bgm");

var vol = 0;

var batt = 100;
var blue = 150;
var green = 150;
var red = 150;

function decreaseLight(){
    batt -= 10;
    checkLight();
}

function increaseLight(){
    batt += 10;
    checkLight();
}

function checkLight(){
    var intensity = batt/10;
    red = 15 * intensity;
    blue = 15 * intensity;
    green = 15 * intensity;
    body.style.backgroundColor = `rgb(${red} , ${green} ,${blue})`
}

function increaseSound(){
    vol += 0.05
    bgm.muted = false;
    bgm.play()
    bgm.volume = vol;
}
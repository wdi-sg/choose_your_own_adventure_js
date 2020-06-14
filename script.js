console.log("hello script js");


var name = prompt("Please key in your name to start");

var careerScenario = "";

var clubsJourney {
    "Shanghai Shenhua" : {
        "Guangzhou Evergrande": {
            "Singapore FC", "Boca Junior", "Santos FC"
            },
            "Vissel Kobe" {
                "FC Barcelone", "Borussia Dortmund", "Copenhagen"
            },
            "Melbourne City Football"{
                "Manchester City", "Burnley", "Los Angeles Galaxy"}
            },

    "Olympique Lyonnais": {
        "Juventus"{
            "Stay at Juventus", "Real Madrid", "Bayer Munich"},
        "Tottenham"{
            "West Ham", "Ajax Amsterdam", "Atletico Madrid"},
        "Stay at Olympique Lyonnais"{
            "Stay at Olympique Lyonnais", "Real Madrid", "Liverpool"}
        },

    "Valencia CF": {
        "Red Bull Salzburg"{
            "RB Leipzig", "Monaco", "Fiorentina"},
        "PSV Eindhoven"{
            "AC Milan", "Ajax Amsterdam", "Everton"},
        "Eibar"{
            "Atletico Madrid", "Sevilla FC", "Newcastle"}}
};

//---------------- DOM ----------------

let input = document.getElementById('input').value;
let output = document.getElementById('outputs').value;

document.getElementById('begin').addEventListener('click', welcome);
document.getElementById('choice').addEventListener('click', runGame);

//---------------- FUNCTIONS ----------------


function welcome(){
        if(careerScenario === ""){
            careerScenario = "Welcome " + name + ". You're a promising offensive midfielder playing for Singapore FC and you've been scouted by some great clubs. A dream come true but you have to make a choice... Where do you want to go?<br><br>Shanghai Shenhua<br><br>Olympique Lyonnais<br><br>Valencia CF<br>";
            return document.getElementById("outputs").innerHTML = careerScenario;
        }
    }


function runGame(){

        if(input === "Shanghai Shenhua"  || input === "Olympique Lyonnais" || input === "Valencia CF"){

                    function firstChoice(){

                    if(input === "Shanghai Shenhua"){
                    careerScenario = "They clearly have offered you a big cheque for you to go there! After 3 years and a good season with the 1st team, you get offers from new clubs. Where next?<br><br>Guangzhou Evergrande<br><br>Vissel Kobe<br><br>Melbourne City Football<br>";
                    return document.getElementById("outputs").innerHTML = careerScenario;
                    }

                    else if(input === "Olympique Lyonnais"){
                    careerScenario = "You've chosen the perfect club to bring your career to the next level. After 3 years, and a 2nd spot in the league, you can either play UCL next year and stay in Lyon or join a new club. Where next?<br><br>Juventus<br><br>Tottenham<br><br>Stay at Olympique Lyonnais<br>";
                    return document.getElementById("outputs").innerHTML = careerScenario;
                    }

                    else if(input === "Valencia CF"){
                        careerScenario = "You've chosen the club of a fellow Singaporean, Peter Lim. However the managing skills he is showing in Football are catastrophic and the club changes coach 4 times in 3 years. As a result you barely play but some clubs are willing to offer you a second chance. Where next?<br><br>Red Bull Salzburg<br><br>PSV Eindhoven<br><br>Eibar<br>";
                        return document.getElementById("outputs").innerHTML = careerScenario;
                        }

                        }
                    }

                else{
                careerScenario = "Enter a valid choice or you'll stay at Singapore FC forever.";
                return document.getElementById("outputs").innerHTML = careerScenario;
                }
            }
// Start Game: Choosing your character

var begin = alert("WELCOME TO THE WIRE")

alert("For better or for worse you've made Baltimore your home.")
alert("The war on drugs is taking its toll no matter which side you are on. BUT Only one side wins!")

// console.log("The war on drugs is taking its toll no matter which side you are on. Only one side wins!")
// console.log("Which side you gonna be on when shit goes down?")

var yourRole = prompt("Would you like to be a cop or a dealer? Enter 'cop' or 'dealer'")

if (yourRole === "cop") {

    var role = "McNulty";


// Game Scenario 1: If player chooses to be cop


    alert("Congratulations officer " + role  +" on joining the new Anti-Drug Task Force. Let's bring some goddamn justice to this town!")
    alert("Alright we've got our first call from dispatch.")
    alert("Shots fired at 1066 Rochor road, white van was seen leaving the crime scene")
    alert("White van probably means it's Omar. How do you want to do it McNulty?")


        var copOptions = prompt ("Choose [A]smooth-talk or [B]bang-bang motherluva! --- Type A or B to enter your choice")

             if(copOptions === "A"){
             alert("Alright then McNulty, looks like it's a slow day for - smooth-talk it is. Just get a confession");
             smoothTalk()
             yourScore(`Score : ${5}`)

            }

            else if (copOptions === "B")

            alert("Tough luck for that bastard! Looks like it's shoot'em up Mondays. Don't worry Omar's name is on your first bullet");
            bangBang()
            yourScore(`Score : ${10}`)

            }


// Game Scenario 2: If player chooses to be a dealer

else if (yourRole === "dealer") {


        var role = "Omar";

        alert(role  +"! Damn sonnn! You might be a shit hot dealer today, but look out for the cops man! They be looking for a dope dealer to take out today")

        alert("Alright hotshot, let's get to business! You ready?")
        alert("So your enemies, the Barksdale crew is moving some dope into 1066 Rochor, you think we can do a quick hijack?")

        var dealerOptions = prompt ("Choose [A] Nah man! I ain't stupid enough to steal from Barksdale or [B]Hahaa! Revenge on the Barksdales is SWEET! Let's do it! --- Type A or B to enter your choice")

            if(dealerOptions === "A"){
                 alert("Why you being such a wuss man! You ain't ALL THAT afterall");
                 nahMan()
                 yourScore(`Score : ${5}`)

                }

            else if(dealerOptions === "B"){
            alert("Tough luck for that bastard! Looks like it's shoot'em up Mondays. Don't worry Omar's name is on your first bullet");
            sweetRevenge()
            yourScore(`Score : ${10}`)

            }

}








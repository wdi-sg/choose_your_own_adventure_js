// function playGame(){
    var rdrIntro = confirm("The year is 1899. You are a member of the infamous Van Der Linde Gang, one of the most notorious gangs that spanned the west. America is going through a massive transition and outlaws are slowly being phased out. The choice is yours to lead the gang and secure its future.");

    if(rdrIntro == true){
        var campLocationChoice =  prompt("Pinkertons have overrun BlackWater, your current home. The gang needs to find a new hideout to reside in. Where should we relocate to?                                               1.Shady Belle in Lemoyne                                                                  2.HorseShoe Overlook in New Hanover                                             3.Butchers Creek in Roanoke Ridge");

    if(campLocationChoice === '1'){
        alert("The Lemoyne Raiders are aggressive to those who challenge their territories. They have a Vickers gun outpost set up, spraying down a huge volume of fire. Its far too dangerous. We gotta find somewhere else.");
    }
    else if(campLocationChoice === '2'){
        alert("Agent Ross and Agent Milton have set up blockades and patrols around the area. They wont leave until every one of us is found and hung for our crimes. We best find somewhere else, away from any more of these goddamn Pinkertons.");
    }

    else if(campLocationChoice === '3'){
        alert("This seems far away enough that they wont find us here. Lets set up camp where those Mufree Brods live. We gotta flush those inbred hill billies out though.");

         var killMufreeChoice = prompt("They're living in a cave, where they bring back their stolen goods and torture innocent folk. Its your call. Do you wanna:                                                                      1.Go in there Guns Blazing from the main entrance                                                                      2.Flush them out with Dynamite                                                                      3.Use Miss O'shea as a distraction to lure them out and take them by surprise");

         if(killMufreeChoice === '1'){
            alert("You go in with your Spencer Carbine, theres clusters of them in different areas by campfires. You pick off a couple of them with headshots and the entire camp is alerted by your presence. You manage to sustain fire but they begin to flank you using cave tunnels.")
         }

         else if(killMufreeChoice === '2'){
            alert("You go around placing dynamite at each of the vulnerable spots in the cave. you then backtrack to a safe distance and light the fuse. BOOM! a huge explosion shutters the eerie silence of the forest. You return to the cave and notice that it has completely collapsed and is unusable.");
         }

         else if(killMufreeChoice === '3'){
            alert("Miss O'shea screams for help as if a Damsel in Distress. The Mufree Brods are confused that an innocent women would have been able to be in such close proximity of their encampment. They beckon to the others to come out in excitement. You and the boys have them surrounded and a clear shot. Repeater fire breaks out and they return fire but they are no match to the vantage points we have on them. They are done for.");

         }
    }
}


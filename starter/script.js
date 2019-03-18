// put code here!
var startTest = function () {
    qn1();
}

var moralScore = 50;

var updateScore = function () {
    if (document.getElementById('opt1').checked) {
        moralScore += 2;
    } else if (document.getElementById('opt2').checked) {
        moralScore += 1;
    } else if (document.getElementById('opt3').checked) {
        moralScore -= 1;
    } else if (document.getElementById('opt4').checked) {
        moralScore -= 2;
    }
}

var clearAnswer = function () {

    var ele = document.getElementsByName("answer");
  for(var i=0;i<ele.length;i++) {
    ele[i].checked = false;
   }

}

var calculateScore = function () {
    if (moralScore < 15) {
        document.getElementById("result").innerHTML = "You are CHAOTIC EVIL";
    } else if (moralScore < 25 && moralScore > 16 ) {
        document.getElementById("result").innerHTML = "You are NEUTRAL EVIL";
    }  else if (moralScore > 16 && moralScore < 35) {
        document.getElementById("result").innerHTML = "You are LAWFUL EVIL";
    }  else if (moralScore > 36 && moralScore < 45) {
        document.getElementById("result").innerHTML = "You are CHAOTIC NEUTRAL";
    }  else if (moralScore > 46 && moralScore < 55) {
        document.getElementById("result").innerHTML = "You are TRUE NEUTRAL";
    }  else if (moralScore > 56 && moralScore < 65) {
        document.getElementById("result").innerHTML = "You are LAWFUL NEUTRAL";
    }  else if (moralScore > 66 && moralScore < 75) {
        document.getElementById("result").innerHTML = "You are CHAOTIC GOOD";
    }  else if (moralScore > 76 && moralScore < 85) {
        document.getElementById("result").innerHTML = "You are NEUTRAL GOOD";
    }  else {
        document.getElementById("result").innerHTML = "You are LAWFUL GOOD";
    }
}

var nextQn = function () {
    switch (document.getElementById("qn-progression").innerHTML) {
        case "":
        qn1();
        break;
        case "1/36":
        qn2();
        break;
        case "2/36":
        qn3();
        break;
        case "3/36":
        qn4();
        break;
        case "4/36":
        qn5();
        break;
        case "5/36":
        qn6();
        break;
        case "6/36":
        qn7();
        break;
        case "7/36":
        qn8();
        break
        case "8/36":
        qn9();
        break;
        case "9/36":
        qn10();
        break;
        case "10/36":
        qn11();
        case "11/36":
        qn12();
        break;
        case "12/36":
        qn13();
        break;
        case "13/36":
        qn14();
        break;
        case "14/36":
        qn15();
        break;
        case "15/36":
        qn16();
        break;
        case "16/36":
        qn17();
        break;
        case "17/36":
        qn18();
        break;
        case "18/36":
        qn19();
        break;
        case "19/36":
        qn20();
        break;
        case "20/36":
        qn21();
        break;
        case "21/36":
        qn22();
        break;
        case "22/36":
        qn23();
        break;
        case "23/36":
        qn24();
        break;
        case "24/36":
        qn25();
        break;
        case "25/36":
        qn26();
        break;
        case "26/36":
        qn27();
        break;
        case "27/36":
        qn28();
        break;
        case "28/36":
        qn29();
        break;
        case "29/36":
        qn30();
        break;
        case "30/36":
        qn31();
        break;
        case "31/36":
        qn32();
        break;
        case "32/36":
        qn33();
        break;
        case "33/36":
        qn34();
        break;
        case "34/36":
        qn35();
        break;
        case "35/36":
        qn36();
        break;
        case "36/36":
        calculateScore();
        break;
    }

        updateScore();
}

var qn1 = function () {
    document.getElementById("answers").classList.remove("hide");
    document.getElementById("qn-progression").innerHTML = "1/36";
    document.getElementById("qn-asked").innerHTML = "1. Family elders are expressing disapproval of you to the rest of the family. Do you:";
    document.getElementById("answer1").innerHTML = "Accept the criticism and change your ways?";
    document.getElementById("answer2").innerHTML = "Seek a compromise with them?";
    document.getElementById("answer3").innerHTML = "Besmirch the reputation of those expressing disapproval as you ignore their scorn?";
    document.getElementById("answer4").innerHTML = "Silence them any way you can?";
}

var qn2 = function () {
    document.getElementById("qn-progression").innerHTML = "2/36";
    document.getElementById("qn-asked").innerHTML = "2. Would you give up a promising career to aid the family in time of need?";
    document.getElementById("answer1").innerHTML = "In a heartbeat.";
    document.getElementById("answer2").innerHTML = "Yes, with some reluctance.";
    document.getElementById("answer3").innerHTML = "Only if I was certain I'd be able to return to my career soon.";
    document.getElementById("answer4").innerHTML = "No.";
}

var qn3 = function () {
    document.getElementById("qn-progression").innerHTML = "3/36";
    document.getElementById("qn-asked").innerHTML = "3. Would you betray a family member to advance your own career?";
    document.getElementById("answer1").innerHTML = "Yes, without a twinge of guilt.";
    document.getElementById("answer2").innerHTML = "Yes, if I could do it secretly.";
    document.getElementById("answer3").innerHTML = "I'd resist the temptation.";
    document.getElementById("answer4").innerHTML = "I find the very idea abhorrent.";
}

var qn4 = function () {
    document.getElementById("qn-progression").innerHTML = "4/36";
    document.getElementById("qn-asked").innerHTML = "4. Do you respect the leaders of your family?";
    document.getElementById("answer1").innerHTML = "Their words guide my actions.";
    document.getElementById("answer2").innerHTML = "They're role models for me.";
    document.getElementById("answer3").innerHTML = "They're often out of touch with my life.";
    document.getElementById("answer4").innerHTML = "They're out of touch with reality.";
}

var qn5 = function () {
    document.getElementById("qn-progression").innerHTML = "5/36";
    document.getElementById("qn-asked").innerHTML = "5. If your family had arranged your marriage to someone loathsome, would you:";
    document.getElementById("answer1").innerHTML = "Go through with it, proud to serve your family?";
    document.getElementById("answer2").innerHTML = "Agree, hiding your reluctance?";
    document.getElementById("answer3").innerHTML = "Subtly work against the union?";
    document.getElementById("answer4").innerHTML = "Flee?";
}

var qn6 = function () {
    document.getElementById("qn-progression").innerHTML = "6/36";
    document.getElementById("qn-asked").innerHTML = "6. You're estranged from a family member. On his deathbed, he seeks reconciliation. Do you:";
    document.getElementById("answer1").innerHTML = "Speak to him, but hold your ground?";
    document.getElementById("answer2").innerHTML = "Refuse to speak to him?";
    document.getElementById("answer3").innerHTML = "Discuss your estrangement openly and without rancor?";
    document.getElementById("answer4").innerHTML = "Actively seek reconciliation, and heed his dying words?";
}

var qn7 = function () {
    document.getElementById("qn-progression").innerHTML = "7/36";
    document.getElementById("qn-asked").innerHTML = "7. A powerful but corrupt judge offers you wealth if you'll testify against your friend. Do you:";
    document.getElementById("answer1").innerHTML = "Condemn your friend and take the money?";
    document.getElementById("answer2").innerHTML = "Take the money and testify, but try to keep your testimony ineffective?";
    document.getElementById("answer3").innerHTML = "Refuse the offer and refuse to testify?";
    document.getElementById("answer4").innerHTML = "Testify on your friend's behalf, no matter the consequences?";
}

var qn8 = function () {
    document.getElementById("qn-progression").innerHTML = "8/36";
    document.getElementById("qn-asked").innerHTML = "8. Do you become close to friends, or hold most people at a safe distance?";
    document.getElementById("answer1").innerHTML = "I have an abundance of close friends.";
    document.getElementById("answer2").innerHTML = "I have some close friends.";
    document.getElementById("answer3").innerHTML = "I have few close friends.";
    document.getElementById("answer4").innerHTML = "I try to keep people at a distance.";
}

var qn9 = function () {
    document.getElementById("qn-progression").innerHTML = "9/36";
    document.getElementById("qn-asked").innerHTML = "9. Have you ever betrayed a friend?";
    document.getElementById("answer1").innerHTML = "I've done so more than once, and I sometimes get away with it.";
    document.getElementById("answer2").innerHTML = "I've done so once.";
    document.getElementById("answer3").innerHTML = "I've been tempted to do so, but I've never gone through with it.";
    document.getElementById("answer4").innerHTML = "I'd never contemplate such a thing.";
}

var qn10 = function () {
    document.getElementById("qn-progression").innerHTML = "10/36";
    document.getElementById("qn-asked").innerHTML = "10. How do you view lifelong commitment to a single romantic partner?";
    document.getElementById("answer1").innerHTML = "I have or want such a romance.";
    document.getElementById("answer2").innerHTML = "Such a romance would be ideal--if it's achievable.";
    document.getElementById("answer3").innerHTML = "I worry I'd miss out on what others have to offer.";
    document.getElementById("answer4").innerHTML = "Tie yourself to one person? Huge mistake.";
}

var qn11 = function () {
    document.getElementById("qn-progression").innerHTML = "11/36";
    document.getElementById("qn-asked").innerHTML = "11. Do you insist on repayment when lending money to friends?";
    document.getElementById("answer1").innerHTML = "Yes, and I write up a contract so there's no misunderstanding.";
    document.getElementById("answer2").innerHTML = "Yes, but I try to be flexible about the exact terms.";
    document.getElementById("answer3").innerHTML = "No, although it's sure nice to be repaid.";
    document.getElementById("answer4").innerHTML = "No, they just owe me a favor.";
}

var qn12 = function () {
    document.getElementById("qn-progression").innerHTML = "12/36";
    document.getElementById("qn-asked").innerHTML = "12. Are you still in touch with childhood friends?";
    document.getElementById("answer1").innerHTML = "Yes, we correspond regularly.";
    document.getElementById("answer2").innerHTML = "Yes, we try to keep in touch.";
    document.getElementById("answer3").innerHTML = "No, I move around too much.";
    document.getElementById("answer4").innerHTML = "No, I don't have anything in common with them anymore.";
}

var qn13 = function () {
    document.getElementById("qn-progression").innerHTML = "13/36";
    document.getElementById("qn-asked").innerHTML = "13. Do you donate time and money to improve the local community?";
    document.getElementById("answer1").innerHTML = "Yes, the needs of the community are my top priority.";
    document.getElementById("answer2").innerHTML = "Yes, I donate as much as I can once my own needs are met.";
    document.getElementById("answer3").innerHTML = "No, I don't have enough time or money to spare.";
    document.getElementById("answer4").innerHTML = "No, my local community would be a waste of time and money.";
}

var qn14 = function () {
    document.getElementById("qn-progression").innerHTML = "14/36";
    document.getElementById("qn-asked").innerHTML = "14. Your community is threatened with invasion. Do you:";
    document.getElementById("answer1").innerHTML = "Help defend it to your last breath?";
    document.getElementById("answer2").innerHTML = "Defend the area with the rest of your community?";
    document.getElementById("answer3").innerHTML = "Flee as soon as things look grim?";
    document.getElementById("answer4").innerHTML = "Cut a deal with the enemy to act as a spy?";
}

var qn15 = function () {
    document.getElementById("qn-progression").innerHTML = "15/36";
    document.getElementById("qn-asked").innerHTML = "15. If you were injured and required immediate assistance, would members of your home town agree to help?";
    document.getElementById("answer1").innerHTML = "Yes, because they know I'd do the same for them.";
    document.getElementById("answer2").innerHTML = "Yes, because I'm generally well liked in my home town.";
    document.getElementById("answer3").innerHTML = "Probably not, because I'm distrusted in my home town.";
    document.getElementById("answer4").innerHTML = "Definitely not, I've made some enemies in my home town.";
}

var qn16 = function () {
    document.getElementById("qn-progression").innerHTML = "16/36";
    document.getElementById("qn-asked").innerHTML = "16. Do you respect the laws and authorities of the community?";
    document.getElementById("answer1").innerHTML = "Yes, without question.";
    document.getElementById("answer2").innerHTML = "Yes, they're generally the best way to govern.";
    document.getElementById("answer3").innerHTML = "When it suits me--there are some laws I just don't agree with.";
    document.getElementById("answer4").innerHTML = "I don't pay attention to the authorities; they've got no hold on me.";
}

var qn17 = function () {
    document.getElementById("qn-progression").innerHTML = "17/36";
    document.getElementById("qn-asked").innerHTML = "17. Do members of your home town shun, avoid, or mock you?";
    document.getElementById("answer1").innerHTML = "Yes, their small minds can't handle anyone outside the norm.";
    document.getElementById("answer2").innerHTML = "Some do, because I don't always fit in.";
    document.getElementById("answer3").innerHTML = "No, I'm generally seen as normal.";
    document.getElementById("answer4").innerHTML = "No, I set the standard for what is normal in my community.";
}

var qn18 = function () {
    document.getElementById("qn-progression").innerHTML = "18/36";
    document.getElementById("qn-asked").innerHTML = "18. Would you stand for office or seek to represent the interests of the community in some public manner?";
    document.getElementById("answer1").innerHTML = "To do so would be an honor I'd joyously accept.";
    document.getElementById("answer2").innerHTML = "Of course. It's everyone's duty to do so.";
    document.getElementById("answer3").innerHTML = "Only if no one else could handle the job.";
    document.getElementById("answer4").innerHTML = "No, I don't want to be responsible for the community's welfare.";
}

var qn19 = function () {
    document.getElementById("qn-progression").innerHTML = "19/36";
    document.getElementById("qn-asked").innerHTML = "19. Your country is wracked with famine. Would you:";
    document.getElementById("answer1").innerHTML = "Share what food you had with others?";
    document.getElementById("answer2").innerHTML = "Eat as little as possible yourself, and share the rest?";
    document.getElementById("answer3").innerHTML = "Steal what food you needed to survive?";
    document.getElementById("answer4").innerHTML = "Steal as much food as possible, then sell it back to the community at a high price?";
}

var qn20 = function () {
    document.getElementById("qn-progression").innerHTML = "20/36";
    document.getElementById("qn-asked").innerHTML = "20. If offered enough money, would you slip a poison into your king's drink?";
    document.getElementById("answer1").innerHTML = "Yes, I've done similar things before.";
    document.getElementById("answer2").innerHTML = "Yes, if I thought I could get away with it.";
    document.getElementById("answer3").innerHTML = "No, although a vast sum of money would tempt me.";
    document.getElementById("answer4").innerHTML = "No, and I'd warn the king of the plot.";
}

var qn21 = function () {
    document.getElementById("qn-progression").innerHTML = "21/36";
    document.getElementById("qn-asked").innerHTML = "21. A plague is sweeping across your country. Would you:";
    document.getElementById("answer1").innerHTML = "Undertake a dangerous mission to find the cure?";
    document.getElementById("answer2").innerHTML = "Heal the sick as best you can?";
    document.getElementById("answer3").innerHTML = "Avoid contact with the sick?";
    document.getElementById("answer4").innerHTML = "Flee the country?";
}

var qn22 = function () {
    document.getElementById("qn-progression").innerHTML = "22/36";
    document.getElementById("qn-asked").innerHTML = "22. Do you respect the lawful authority of the rulers of the land?";
    document.getElementById("answer1").innerHTML = "Yes, Long live the queen!";
    document.getElementById("answer2").innerHTML = "Yes, our rulers are generally fair and just.";
    document.getElementById("answer3").innerHTML = "No, a ruler is no better than anyone else.";
    document.getElementById("answer4").innerHTML = "No, rulers are invariably corrupted by power.";
}

var qn23 = function () {
    document.getElementById("qn-progression").innerHTML = "23/36";
    document.getElementById("qn-asked").innerHTML = "23. If you were offered a reasonably lucrative deal, would you spy for a hostile foreign power?";
    document.getElementById("answer1").innerHTML = "Yes, because this nation could stand to be knocked down a peg.";
    document.getElementById("answer2").innerHTML = "Yes, because the nation's secrets mean little to me.";
    document.getElementById("answer3").innerHTML = "No, because I might get caught.";
    document.getElementById("answer4").innerHTML = "No, because I'd never violate the trust my nation puts in me.";
}

var qn24 = function () {
    document.getElementById("qn-progression").innerHTML = "24/36";
    document.getElementById("qn-asked").innerHTML = "24. Do you rely on the government to enforce contracts and property rights?";
    document.getElementById("answer1").innerHTML = "Yes, because maintaining the rule of law is more important than any individual dispute.";
    document.getElementById("answer2").innerHTML = "Yes, because the courts are best equipped to handle such disputes.";
    document.getElementById("answer3").innerHTML = "Are you kidding me? The government can't even pave roads.";
    document.getElementById("answer4").innerHTML = "Absolutely not. If I can't defend it myself, I don't deserve to have it.";
}

var qn25 = function () {
    document.getElementById("qn-progression").innerHTML = "25/36";
    document.getElementById("qn-asked").innerHTML = "25. If imprisoned, would you injure or kill others to escape?";
    document.getElementById("answer1").innerHTML = "Yes. Serves 'em right for locking me up.";
    document.getElementById("answer2").innerHTML = "Yes. They knew the risks when they took the job.";
    document.getElementById("answer3").innerHTML = "No, except for minor wounds that will heal easily.";
    document.getElementById("answer4").innerHTML = "No. Those guards are just doing their jobs.";
}

var qn26 = function () {
    document.getElementById("qn-progression").innerHTML = "26/36";
    document.getElementById("qn-asked").innerHTML = "26. Do you accept a noble's right to treat badly the serfs who work on his land?";
    document.getElementById("answer1").innerHTML = "Yes. They're lucky they're not slaves.";
    document.getElementById("answer2").innerHTML = "Yes, because sometimes only fear will motivate them.";
    document.getElementById("answer3").innerHTML = "No, nobles should rule as kindly as possible.";
    document.getElementById("answer4").innerHTML = "No one has any 'right' to treat another badly. Period.";
}

var qn27 = function () {
    document.getElementById("qn-progression").innerHTML = "27/36";
    document.getElementById("qn-asked").innerHTML = "27. You have accidentally committed a crime. Do you:";
    document.getElementById("answer1").innerHTML = "Turn yourself in, and attempt to make restitution to the victim?";
    document.getElementById("answer2").innerHTML = "Turn yourself in, throwing yourself on the mercy of the court?";
    document.getElementById("answer3").innerHTML = "Hide your involvement, lying if you have to?";
    document.getElementById("answer4").innerHTML = "Try to pin the crime on another?";
}

var qn28 = function () {
    document.getElementById("qn-progression").innerHTML = "28/36";
    document.getElementById("qn-asked").innerHTML = "28. If guilty, would you confess to a crime?";
    document.getElementById("answer1").innerHTML = "Yes, because it is my duty to do so.";
    document.getElementById("answer2").innerHTML = "Yes, because it might get me a lighter sentence.";
    document.getElementById("answer3").innerHTML = "No, I'd make the magistrates prove my guilt.";
    document.getElementById("answer4").innerHTML = "No, and I'd try to 'prove' my own innocence.";
}

var qn29 = function () {
    document.getElementById("qn-progression").innerHTML = "29/36";
    document.getElementById("qn-asked").innerHTML = "29. Would you express a revolutionary political opinion if threatened with punishment?";
    document.getElementById("answer1").innerHTML = "Yes, I'd rather be punished than remain silent.";
    document.getElementById("answer2").innerHTML = "Yes. Somebody's got to speak the truth.";
    document.getElementById("answer3").innerHTML = "No, although I might privately express my opinion to friends.";
    document.getElementById("answer4").innerHTML = "No, politics aren't worth getting worked up about.";
}

var qn30 = function () {
    document.getElementById("qn-progression").innerHTML = "30/36";
    document.getElementById("qn-asked").innerHTML = "30. While traveling, you witness an assault. You are ordered to testify, which will delay your travel significantly. Do you:";
    document.getElementById("answer1").innerHTML = "Slip out of town at night to avoid testifying.";
    document.getElementById("answer2").innerHTML = "Deny you saw anything.";
    document.getElementById("answer3").innerHTML = "Remain reluctantly, testify, and leave.";
    document.getElementById("answer4").innerHTML = "Remain until the trial's conclusion in case further testimony is needed.";
}

var qn31 = function () {
    document.getElementById("qn-progression").innerHTML = "31/36";
    document.getElementById("qn-asked").innerHTML = "31. What is the best use of wealth?";
    document.getElementById("answer1").innerHTML = "To help the destitute and less fortunate.";
    document.getElementById("answer2").innerHTML = "Provide for the needs of friends and family.";
    document.getElementById("answer3").innerHTML = "To stay on top of the heap yourself.";
    document.getElementById("answer4").innerHTML = "To not only stay on top, but keep others from climbing to your level.";
}

var qn32 = function () {
    document.getElementById("qn-progression").innerHTML = "32/36";
    document.getElementById("qn-asked").innerHTML = "32. When confronted by beggars, do you:";
    document.getElementById("answer1").innerHTML = "Give generously?";
    document.getElementById("answer2").innerHTML = "Give moderately?";
    document.getElementById("answer3").innerHTML = "Give only what you wouldn't miss anyway--a dollar or two at the most?";
    document.getElementById("answer4").innerHTML = "Ignore them as you walk by?";
}

var qn33 = function () {
    document.getElementById("qn-progression").innerHTML = "33/36";
    document.getElementById("qn-asked").innerHTML = "33. By using magic, you could fool village merchants into thinking your copper pieces were made of gold. Do you?";
    document.getElementById("answer1").innerHTML = "Yes, and I'll buy as much as I can.";
    document.getElementById("answer2").innerHTML = "Yes, but I'll only cheat the rich merchants.";
    document.getElementById("answer3").innerHTML = "No, it's too risky.";
    document.getElementById("answer4").innerHTML = "No, those merchants have families to feed.";
}

var qn34 = function () {
    document.getElementById("qn-progression").innerHTML = "34/36";
    document.getElementById("qn-asked").innerHTML = "34. You have two job offers. One pays more, but the other is secure and steady. Which do you choose?";
    document.getElementById("answer1").innerHTML = "Definitely the lucrative job; steady work sounds like drudgery.";
    document.getElementById("answer2").innerHTML = "Probably the lucrative job, although I'd look into the secure job.";
    document.getElementById("answer3").innerHTML = "The secure job, unless the other job was outrageously lucrative.";
    document.getElementById("answer4").innerHTML = "Definitely the secure job, because I plan for the long term.";
}

var qn35 = function () {
    document.getElementById("qn-progression").innerHTML = "35/36";
    document.getElementById("qn-asked").innerHTML = "35. What's the best path to wealth?";
    document.getElementById("answer1").innerHTML = "It's a matter of luck and being in the right place at the right time.";
    document.getElementById("answer2").innerHTML = "Staying flexible so you can take advantage of good opportunities.";
    document.getElementById("answer3").innerHTML = "Following a long-term plan that incorporates a comfortable level of risk.";
    document.getElementById("answer4").innerHTML = "Hard work and perseverance.";
}

var qn36 = function () {
    document.getElementById("qn-progression").innerHTML = "36/36";
    document.getElementById("qn-asked").innerHTML = "36. If you accepted a job or contract, would you try to finish the task even if it got much more dangerous?";
    document.getElementById("answer1").innerHTML = "Yes, my word is my bond.";
    document.getElementById("answer2").innerHTML = "Yes, because it's good to have a reputation for dependability.";
    document.getElementById("answer3").innerHTML = "You can bet I'd be renegotiating.";
    document.getElementById("answer4").innerHTML = "If it's no longer a good deal, then the deal is off.";
}
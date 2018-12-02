// put code here!
const userName = prompt("What's your name?", "Cady Heron");

let firstAns = prompt("Welcome to North Shore High School, " + userName + "! It's your first day at a traditional public high school after being homeschooled for your entire life. \n \nIn first period, you meet Janis and Damian. They educate you about the school's social circles, cliques and social norms. You can't help but think about how you'd like to tackle your first year in public school: \n \n- [L]ay low! I'm not the most outgoing person and these social rules sound confusing. I just want to survive! \n- [P]opular girl - I'm outgoing and fun! I hated homeschool because it meant I was always so isolated and didn't have many peers to socialise with. Where's the party at? \n- [A]cademic - If being homeschooled taught me anything it's that school is all about getting an education. I don't want to concern myself with these social rules. I'll keep to myself. \n \n(Please input the letter in the square brackets which corresponds to your choice.)");


//Regina invites you to lunch - user responses differ based on firstAns input.

//Academic path
if (firstAns.toLowerCase().includes('a')) {
    let lunchInvitation = prompt("At lunch, Regina George, leader of The Plastics, the most popular girls in school, beckons you over to her table. Do you join The Plastics?\n \n- [A]bsolutely not! I don't have the time for nor the interest in their catty politics.\n- [W]hy not? I'm starting to reconsider this whole 'sticking to myself' thing.. what harm could a few new friends be?");

    //In the event of ACADEMIC reconsidering her chosen pathway:
    if (lunchInvitation.toLowerCase().includes('w')) {
        let academicReconsideration = prompt("It seems you've chosen a different path for yourself, " + userName + "! You now decide that you want to:\n \n- [L]ay low and stick with Janis and Damian instead. I may not want to be the most popular girl in school but no man is an island. \n- [P]lay the popular girl instead! I want to make as many friends as possible.");
        if (academicReconsideration.toLowerCase().includes('l')) {
        let lunchInvitation = prompt("At lunch, Regina George, leader of The Plastics, the most popular girls in school, beckons you over to her table. Do you join The Plastics?\n \n- [Y]es. They actually seem pretty nice, and I want to be able to make my own judgments on them despite Janis and Damian's warnings!\n- [N]ah, Janis and Damian warned me against them and how nasty they can be. I trust their advice.");
    } else if (academicReconsideration.toLowerCase().includes('p')) {
    let lunchInvitation = prompt("At lunch, Regina George, leader of The Plastics, the most popular girls in school, beckons you over to her table. \n\nSince you've decided to try to be popular, you obviously join them, much to Janis and Damian's dismay.\n\nRegina, Karen and Gretchen decide while chatting to you that they'd like to invite you to have lunch with them every day for the rest of the week.");
    }
}
if (lunchInvitation.toLowerCase().includes('a')) {
    var academicPath = prompt("At lunch, Regina George, leader of The Plastics, the most popular girls in school, beckons you over to her table. \n\nSince you've now chosen to prioritise your studies, you simply ignore Regina and walk over to sit with Janis and Damian. You want to sign up for intellectual after-school clubs. Janis and Damian tell you that North Shore High School's Mathletes and Debate Team are looking for new members.\n\nWhich do you choose to join?\n\n- [M]athletes! I've always been good at math.\n- [D]ebate. I'd love to try out something new");

if (academicPath.toLowerCase().includes('m')) {
    var mathleteTest = function() {
     var takeTestOrNot = prompt("After school, you look for the Mathletes President, Kevin Gnapoor. You tell him you'd like to join the Mathletes and that Calculus is actually your favourite class. He warns you that the entrance test is challenging..\n\n- [U]h oh, I might need to revise a bit more.. just in case.\n- [I]'m ready for the test!")
     if (takeTestOrNot.toLowerCase().includes('i')) {
        var failureMessage = prompt("Oh no! You failed the entrance test! Looks like you're not as good at Calculus as you thought. You probably should [t]ry again after revising a little.");
            if (failureMessage.toLowerCase().includes('t')) {
                mathleteTest();

    } else if (takeTestOrNot.toLowerCase().includes('u')) {
        var competitionAnswer = prompt("You tell Kevin you'll take the test in a few days time.\n\nAll that revising paid off! You passed the test and are now an official member of the North Shore High Mathletes Team. You all start preparing for the Mathlete Championships, which are due to take place in a few weeks' time.\n\n...\n\nIt's the day of the competition. Your team has put up a strong fight and are in the finals! It all comes down to this last tiebreaker question..\n\n'Evaluate the limit as x approaches 0 of the function: [ln(1-x)-sinx]/1-(cos^2)x.\n\nHurry up, the clock's ticking!")
        if (competitionAnswer === "The limit does not exist") {
            alert("Congratulations! You've won the championship for the North Shore High Mathletes! You've accomplished your goal to prioritise academia and this win will look great on your transcript. Thanks for playing!")
        } else {
            alert("You've let your team down. Perhaps you should have chosen to be popular instead?")
        }
    }

mathleteTest();


} else if (academicPath.toLowerCase().includes('d')) {
    let rejection = prompt("After school, you look for the Debate Team President. You tell her you'd like to try out to join the Debate Team. She looks at you with disdain in her eyes and rejects you immediately. \n\n'But.. you didn't even give me a chance!', you argue.\n\n'My decision is final.', she huffs.\n\nDiscouraged, you lament to Janis and Damian about how unfair that was.\n\n 'Oh, that's just because she's one of Regina George's worshippers and probably doesn't want to invoke Regina's wrath. It's not personal, but you won't be able to get in since you snubbed Regina.', Janis explains.\n\nToo bad! Maybe try out for the [M]athletes instead?")
        if (rejection.toLowerCase().includes('m')) {
            let takeTestOrNot = prompt("After school, you look for the Mathletes President, Kevin Gnapoor. You tell him you'd like to join the Mathletes and that Calculus is actually your favourite class. He warns you that the entrance test is challenging..\n\n- [U]h oh, I might need to revise a bit more.. just in case.\n- [I] can do this, give me the test now!")
        }
    }
}
}
}
    //Popular girl path
    else if (firstAns.toLowerCase().includes('p')) {
    let lunchInvitation = prompt("At lunch, Regina George, leader of The Plastics, the most popular girls in school, beckons you over to her table. Do you join The Plastics?\n \n- [H]ell yes! Forget Janis and Damian, this is my ticket to popularity! Time to climb the social ladder.\n- [O]n second thought, I think I'd be better off taking Janis and Damian's advice and stay off of The Plastics' radar.");


    //In the event of POPULAR GIRL reconsidering her chosen pathway:
    if (lunchInvitation.toLowerCase().includes('o')) {
        let popularReconsideration = prompt("It seems you've chosen a different path for yourself, " + userName + "! You now decide that you want to:\n \n- [L]ay low and stick with Janis and Damian instead.\n- [A]ttempt to place the focus on your studies instead.");
        if (popularReconsideration.toLowerCase().includes('l')) {
        let lunchInvitation = prompt("At lunch, Regina George, leader of The Plastics, the most popular girls in school, beckons you over to her table. Do you join The Plastics?\n \n- [Y]es. They actually seem pretty nice, and I want to be able to make my own judgments on them despite Janis and Damian's warnings! \n- [N]ah, Janis and Damian warned me against them and how nasty they can be. I trust their advice.");
        } else if (popularReconsideration.toLowerCase().includes('a')) {
        let academicPath = prompt("At lunch, Regina George, leader of The Plastics, the most popular girls in school, beckons you over to her table. \n\nSince you've now chosen to prioritise your studies, you simply ignore Regina and walk over to sit with Janis and Damian. You want to sign up for intellectual after-school clubs. Janis and Damian tell you that North Shore High School's Mathletes and Debate Team are looking for new members.\n\nWhich do you choose to join?\n\n- [M]athletes! I've always been good at math.\n- [D]ebate. I'd love to try out something new");
        }

    }

//Lay low path
} else if (firstAns.toLowerCase().includes('l')) {
    let lunchInvitation = prompt("At lunch, Regina George, leader of The Plastics, the most popular girls in school, beckons you over to her table. Do you join The Plastics?\n \n- [Y]es. They actually seem pretty nice, and I want to be able to make my own judgments on them despite Janis and Damian's warnings!\n- [N]ah, Janis and Damian warned me against them and how nasty they can be. I trust their advice.");
} else {
    alert('Invalid input. Please try again!')
}
}





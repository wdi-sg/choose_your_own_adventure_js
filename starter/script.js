// put code here!
var userName = prompt("What is your name ? ");


var karma = 0;
var yearInput = 0;

var player = {
    karma: 0, //add 1 to karma after correct choice
    sins: 0, // add 1 to sin after wrong choice
    health: 100, // takes damage
    age: 26  // adds 10 to  age after wrong choice
};

console.log(player);

var playerCollection = ["Baseball bat","Toy gun","rock"];
timeMachine();


function timeMachine ()
{
    var yearPrompt = prompt("Which year to travel to:" + userName + "? (YYYY) or Walk out? ");

    while(yearPrompt !== " " && yearPrompt !== null)
    {
        if(yearPrompt >=2015)
        {
        var option = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G) \n . Biff \n . Giff");
        beyond2015(option);
        }
        if(yearPrompt >= 1985 && yearPrompt <= 2014 )
        {
            var newName = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");
            between1985And2014(newName);
        }
        if(yearPrompt >= 1955 && yearPrompt <= 1984)
        {
            var option = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S) \n . Yes \n . No \n . Set her up with George" );
            between1955And1984(option);

        }
        if(yearPrompt <= 1955 && yearPrompt > 0)
        {
            var option = prompt("I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T) \n . Horses. \n . Moonshine. \n . Train. ");
            lessThan1955(option);
        }

        if(yearPrompt.toLowerCase() === 'w')  // end game
        {
            playerSummary();
            exit();
        }
    }
}

function beyond2015 (option)
{
        if(option.toLowerCase() === 'b' )
        {
            var option2 = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R) \n .Stand and fight \n Run like a coward");

            if(option2.toLowerCase() === 's')
            {
                confirm("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
                player.karma +=20;
                //player["sins"] ++;
                confirm("Your Karma points: " + player.karma);
                //confirm("Your sins: " + player.sins);
                timeMachine();
            }
            if(option2.toLowerCase() === 'r')
            {
                confirm("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
                player.sins -= 10;
                player.health -= 20;
                //confirm("Your Karma points: " + player.karma );
                timeMachine();
            }

        }
        if(option.toLowerCase() === 'g')
        {
            var option2 = prompt("Griff is asking you if you are in, or out. What do you say? (I/O) \n In \n Out \n Activate time machine");
            if(option2.toLowerCase() === 'i')
            {
                confirm("Bad call. Griff and his cronies rob the Hill Valley bank and the cops shoot you for it.  No more time travel for you.");
                player.sins += 10;
                player.health -= 20;
                playerSummary();

            }
            if(option2.toLowerCase() === 'o')
            {
                confirm("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
                player.karma += 20;
                confirm("Your Karma points: " + player.karma);
                timeMachine();

            }
            if(option.toLowerCase() === 'a')
            {
                confirm("You managed to run away!");
                player.age += 10;
                player.sins += 5;
                timeMachine();
            }
        }
}

function between1985And2014 (newName)
{
    confirm("Welcome to the future " + newName);
    var option = prompt("A wild gang suddenly appears and wants to rob you. Fight or run for it? (F/R) \n Fight \n Run");
    if (option.toLowerCase() === 'f')
    {
        var result = Math.floor(Math.random() * 20);
        var pickedWeapon = playerCollection[(result%3)];
        confirm("You took out a " + pickedWeapon + " from your bag!");

        if(pickedWeapon === playerCollection[0] || pickedWeapon === playerCollection[1])
        {
            confirm("The gang flees away seeing you are ready to fight them. You found the Doc in the nearby garage and he has fixed up the DeLorean. ");
            player.karma += 20;
            timeMachine();
        }
        else
        {
            confirm("The gang beat you up and you are left in the trash. Luckily the Doc finds you and brings you back to the DeLorean ");
            player.age += 5;
            player.health -= 20;
            timeMachine();
        }

    }if (option.toLowerCase() === 'r')
    {
        confirm("The gang caught you and beat you up! The Docs collects your body and brings you to the DeLorean" );
        player.age += 5;
            player.health -= 50;
            timeMachine();
    }
}

function between1955And1984 (option) /// to include enemies to fight off
{
    if(option.toLowerCase() === 'y')
    {
        confirm("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
        player.karma --;
        player.age += 30;
        confirm("You decided to wait out till 1985");
        between1985And2014(userName);
    }
    if(option.toLowerCase() === 'n')
    {
        confirm("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
        player.karma --;
        player.age += 20;
        playerSummary();

    }
    if(option.toLowerCase() === "s")
    {
        confirm("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.");
        player.karma += 5;
        timeMachine();
    }
}

function lessThan1955 (option)
{
    if(option.toLowerCase() === "h")
    {
        confirm("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
        player.sins += 5;
        between1955And1984(option);
    }
    if(option.toLowerCase() === "m")
    {
        confirm("You'd be better off drinking the moonshine and wait out till 1955.");
        player.sins += 15;
        player.age += 10;

    }
    if(option.toLowerCase() === "t") // if option equals train
    {
       var option2 = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L) \n .Take her \n .Leave her");
       player.karma += 20;

        if( option2.toLowerCase() === "t")
        {
            confirm("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.");
            player.sins += 30;
            player.age += 20;
            timeMachine();
        }
        if(option2.toLowerCase() === "l")
        {
            confirm("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
            player.sins -= 50;
            player.karma +=40;
            timeMachine();
        }
    }
}


function playerSummary()
{
    var a = "   __                               ";
    var b = "  /__  _   _   _|   \    / _ . _ |  ";
    var c3 = " \_| (_) (_) (_|    \/\/ (_) |  |< ";
    var c4 = "                                   ";

    confirm(a + "\n" + b + "\n" + c3 + "\n" + "\n");

    confirm("Thanks for testing " + userName);

    confirm("Karma: " + player.karma + "\n Sins: " + player.sins + "\n Age: " + player.age + "\n Health: " + player.health);
}


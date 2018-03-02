# Number Fighter Adventure Game

## Context
You are a super smart mathemagician, finding the Giant Scroll of Knowledge. Fight smart monsters and see if you can reach your destination... or DIE!

## Adventure Flow
- Ask for name
- Ask for difficulty level (Normal; Normal+ enemies have more HP and less time for questions, but you retain stats from previous)
- Choose starting stats (HP and DEF first, select by typing string)

- Intro story:
    - [name], you are a super smart mathemagician who turns coins into bundles of cash, just using your mind! 
    - You have a very unique job: you create cash for your government! (where else does a country get money from?)
    - *Scary Noise* One Tuesday evening, while going back home from work, a mysterious black van stops next to you and abducts you. (The government should have put more protection planned for you right?)
    - "Don't worry [name], we aren't bad guys. In fact, we are fellow mathemagicians, but we can only create a few coins from loads of cash. Obviously our mathemagical powers are inferior to yours. Anyways, WE NEED YOU TO SAVE OUR WORLD!
    - The secret parallel world, StashOverflow, the place where our powers draw new money from, is under attack by strange smart monsters! Hundreds of us mathemagicians have fallen to these monsters. We now have found you, [name], the greatest of us all, to save us! Find the Giant Scroll of Knowledge, which we can use to get rid of all the monsters at once!
- [Enter Training Centre]
    - *Robotic Voice* Welcome [name], thank you for volunteering to be our sacrifice *ahem* I mean Hero. 
    - You will be moving around StashOverflow by choosing options listed to you. Occasionally you will meet smart monsters that stop your progress. You must get rid of them in order to move on.
    - In order to get to the Giant Scroll of Knowledge, you will need to know how to use your smartness to get rid of the smart monsters. In this training centre, you will learn the basics of fighting to ensure (yea right...) your success!
    - After this training, you will be teleported to the land of StashOverflow, where smart monsters and bosses lurk. We call smart monsters, Smonsters, because it is a smart thing to do.
    - While I can sense you are a physical weakling, your math skills is all you will need in StashOverflow. In StashOverflow, your mental energy can be channelled to damage Smonsters. The Smonsters can do the same to you though, and remember, the ARE smart. Try not to die.
    - For starters, this is the basic weapon, the "Lousy Number Wand", which helps to channel your mental energy. We will try this out on a bag of potatoes first.
    - When in battle, the world of StashOverflow randomly displays math questions and three options as answers. Choosing the right answer within the time limit channels your mental energy to your "Lousy Number Wand", which shoots a rainbow laser at the Smonster, damaging them. Weapons such as the "Lousy Number Wand" might also amplify the damage done to a Smonster.
    - If you select a wrong answer, or are too slow, the Smonster will attack you and you lose HP. We are not sure how damage is really calculated in StashOverflow, but we have a sense that it is related to the actual value of your answers. If you find out, we have bonus questions after you have retrieved the Giant Scroll of Knowledge, to test out your hypothesis (by which you would be super duper smarter right?). For starters, fight a bag of harmless potatoes. You won't get damaged in this fight. 
    - Trial fight with potatoes (no damage to hero)
    - Great job!
    - Trial fight with baby Smonsters
    - Teleport to StashOverflow
- [Appear in StashOverflow] (actual adventure starts here)
    - Level generation continues here
- [Super boss]
    - After defeating the super boss
    - Congrats, blah blah
    - Stats
    - Tryout questions to test if damage algorithm is correct
    - back to difficulty selection page, 

## Level Generation Rules
- random selection of levels (between 10 and 25, unreported to user)
- at least 1 Smonster in first 3 levels
- Item and Stats stores appear after 7 levels
- Each Mini boss must be preceded by at least 3 Smonsters
- Super boss appears at the end only
- random generation of levels based on above rules

### 7 Destinations
- Treasure room
- Smonster
- Mini boss
- Super boss
- Healing spring
- Item store
- Stats store
- Default Left/Right choice
- I smell something nice Left/Right choice for Treasure,Item,Stats,Healing Spring; else any other based on rules

## Battle System
- Arithmatic question appears
- Enemy HP and Hero HP appear
- Countdown timer starts
- 3 options (1 correct) appear
    - select options using 1,2,3
- if correct option selected within time, damage enemy * amplifier
    - else damage on self * DEF formula
- if enemy HP = 0
    - stop game
    - declare winner
    - distribute random slimes based on enemy HP
    - continue with next destination
- if hero HP = 0
    - stop game
    - END GAME page
    - Try again? 
    - bring to start of current adventure

## Question and Answer Generation and Score Calculation
- Questions
    - Random 1-2 digit number, Random operator (+,-,*,% only), Random 1-2 digit number
    - 1 correct answer, other 2 use random number 30% away from correct answer, rounded away from answer to avoid same answers
    - Score from 1-10. 
        - If negative, abs(ans) first
        - If abs(ans) > 10, divide the value by 10
        - If value is not integer, ceil to next int
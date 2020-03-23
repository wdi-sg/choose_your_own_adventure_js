const story = {
	intro : `You are a detective. One day, a successful businessman friend of yours invited you to his house party, located in a mansion at the top of a snowy mountain. On the day of the party, you drove your 1998 Corolla up the snowy mountain, passing by a winding road along the way. There is only one way up the mountain, and the mansion is hidden inside the deep snowy forests made up of countless trees. 

Upon reaching the entrance of the mansion, you met a Painter, Novelist, a Doctor and the Butler.

You decided to:

1) Leave the mansion, saying you have something to attend to.
2) Enter the mansion.`,


	endings : {
		one : `You decided to leave the party and turned out to be a tragedy. The businessman committed suicide during the party and regrettably you could never see him again. <END>.`,
		two : `You spent hours outside the mansion but you didn’t find anything relevant. You waited until the police is here before having them declare this case to be a suicide. <END>.`,
		three : `There is nothing suspicious about the body. The body fell from 10 meters from the ground and therefore has suffered impact significantly enough to alter bone shapes. The police soon came and you unwilling accepted the police’s conclusion of the businessman committing suicide. <END>.`,
		four : `That is incorrect. Your deduction and reasoning is wrong and you couldn’t solve the mystery before the police came to declare this a suicide. <END>.`,
		five : `You pretended to be asleep. When you wake up, you found the police here and the businessman dead. The police declared the whole incident a suicide. You left the mansion with great sadness. <END>.`
	},

	sleeping: `You entered the huge mansion, situated in the middle of the wilderness. You know that the businessman lives in this secluded place together with his wife, two year old kid, the butler and a female housekeeper. After dinner and many rounds of alcohol, the businessman invited everyone to stay the night since it is turning late, and there is no street lighting along the way road leading to the city. You accepted the request and soon fall asleep. In the middle of the night, you heard a knock. 

	You decided to:

	1) Pretend to be asleep.
	2) Open the door.`,

	bang : `You opened the door and standing right in front of you is the butler. “My lady requests everyone to gather. Please follow me”. You feel perplexed by what’s going on. As you walk downstairs, you meet the painter and wonder why he is rubbing his back. “I slipped and fell from the wet floors,” he explains. The businessman’s wife reveals a shocking news: her husband is missing. She said that she is awakened by the crying of her son, and she realize her husband is missing, and the bedroom door is open. Her son cries of a “monster” outside the door. She heads outside and sees nothing. Since she can’t find her husband anywhere, she gathers everyone in the main hall to ask of his whereabouts. 

		Suddenly, you hear a loud bang outside. 
		
		Everyone rushes outside to the courtyard and sees a motionless body lying in a pool of blood. It is the businessman. He appears dead. You instructs the butler to call the police, but he responds that someone has deliberately cut the phone lines. There is no cellphone reception in this secluded place. You then glanced upwards in the general direction from where he could possibly fell and notices a balcony. 

		You decided to:

		1) Head to the balcony.
		2) Investigate the body.`,

	balcony : `The butler brings you to the balcony where the business man fell from. This balcony is at the third storey of a 	small room. The glass sliding door leading to the balcony is locked from the inside. The balcony floor appears 	wet, and is approximately 10 meters from the ground. Falling from this height will definitely kill. 

	This room is at the very end of the hallway and is an empty room serving little purpose. Hence, the only times 	that someone will come here is when the housekeeper cleans it every week. She says that the last time she was 	here is indeed a week ago.

	1) Investigate the body.`,

	body : `You put on a pair of gloves that you always bring with you out of habit. You turned over the body and you noticed his broken skull; part of the brain’s white matter could be seen. You tried hard to control your nausea upon seeing such a gruesome scene. Interestingly, there are a pile of wooden planks lying next to the body. The butler explains that these planks are leftover from a recent renovation.

	1) Head back to the main hall.`,

	hall_choices : `After the initial investigation, you tell everyone that the businessman could have committed suicide. The businessman’s wife starts sobbing and says it’s impossible her husband would ever commit suicide. You believe so, but everyone has an alibi – all are present at the main hall as requested by the victim’s wife before the 	businessman fell to his death. Could there be somebody else that is not present? You decide to:

	1) Investigate the second storey.
	2) Investigate the basement.
	3) Interrogate everybody.
	4) Investigate outside the mansion.`,

	secondstorey : `The butler leads you to the second floor. There is a common corridor along which are the bedrooms of everyone as shown below:
		  [ Doctor ][ Businessman Family][ Painter ][ You ][ Butler ][ Housekeeper]
	------------------------------------- Corridor ----------------------------------------

	After inspecting the rooms, you found nothing suspicious. You then decided to:

	1) Investigate the basement.
	2) Interrogate everybody.
	3) Investigate outside the mansion.`,

	interrogate : `You ask everyone if they have noticed anything suspicious during the night. Everyone responds saying they have returned to their bedrooms after the party and have not seen anything weird. This means that even if the businessman is murdered, he was killed silently without any struggle.

	1) Investigate the second storey.
	2) Investigate the basement.
	3) Investigate outside the mansion.`,

	after_clues : `After securing these clues, you believe that the following areas require further investigation:

	1) Why is the balcony wet?
	2) Why is the body in a strange position?`,

	why_wet : `Indeed, the balcony being wet is kind of weird, since it’s summer and it hasn’t rained for weeks. The wet surface on the balcony must be someone’s doings. You then remember the ice blocks in the basement, and proceed there with the butler. You ask if there is anything wrong with the ice block, to which the butler replies, “There seem to be one missing ice block!”

	1) Go back to tell everyone.`,

	hall_explain : `Immediately, you rush back to the main hall where everybody is still awaiting your instruction. 

	“The businessman did not die of suicide, and I know who the murderer is,” you proclaim. Everyone gasped in awe as they listened attentively. 

	“And the murderer is among you!”

	“Let me first explain how the murder is done. The murderer used the following…”

	1) Knife and rope.
	2) Ice and Wooden planks.
	3) Wine and Food.`,

	murder_method : `“The murderer created a simple lever system using an ice block and wooden planks. The weight of the businessman is supported by the ice block on the wooden planks. After a while, the ice blocks will melt in from the summer heat, and the victim will fall to his death together with the wooden planks. This murder setup can give anyone an alibi defense as the murderer can watch the victim fall to his demise at the courtyard, together with the rest of us.”

	“Who is the murderer then?” Someone asked.

	“The murderer is…”

	1) The Painter
	2) The wife
	3) The Doctor
	4) The Butler`,

	doctor : `The doctor seems astonished, but hastily replied, “Just because you found the way the murder is committed; it doesn’t necessarily mean I am the murder. The businessman has been a long time friend of mine and you pointing fingers at me is extremely insulting!” To which you replied.

	“Although I cannot tell who the murderer is just from the way he killed the victim, there is one additional information that confirms my deduction…and that is:

	1) The "monster" mentioned by the child
	2) The missing ice cubes
	3) The broken wooden planks”`,

	reveal : `Yes, the monster is the proof of your alibi defense failure. Do you remember the kid crying of a monster in the middle of the night? Actually, it is the murderer passing by the victim’s bedroom, appearing to be a sinister monster when the lights after off. Recall the room positioning again: 

	       [ Doctor ][ Businessman Family ][ Painter ][ You ][ Butler ][ Housekeeper]
	------------------------------------- Corridor ----------------------------------------(Stairs)

	"The only way the kid could have seen the monster, is when you pass by the businessman's room in the middle of the night on the way to your room. No one else would need to walk pass the businessman's bedroom. Also, my deduction is that you have used you have probably injected the doctor with anesthetics during the murder; otherwise, the entire murder process wouldn't be so silent.

	The doctor look at you in disbelief, but finally succumbed to the fact that he is guilty, and possibly due to his conscience triggering him to say:

	"Yes, you're right. I killed him because he wanted me to kill off my pharmaceutical company. Just because he is the board director having the largest stake in the company, I have to do everything he says. I have had enough of this and he truly deserved to die.

	1) Next`,

	conclusion : 'The police eventually came. The doctor is apprehended, hand cuffed and escorted to the police headquarters. Congratulations! You have completed the game.'

}

current_step = ['intro']
previous_step = []


console.log("hello script js");

var inputHappened = function(currentInput){
	if (currentInput === 'back'){
		return previous_step;
	};

	switch (current_step){
		case 'intro':
			previous_step = story.intro;
			if (currentInput === '1'){
				return story.endings.one;
			} else {
				return story.sleeping;
			};

		case `sleeping`:
			previous_step = story.sleep;
			if (currentInput === '1'){
				return story.endings.five;
			} else {
				return story.bang;
			};
	}


//your girlfriend or boyfriend ask you for dinner plans:
var destination = ["wendys","astons","burgerup","pizzaexpress","macs","kfc","pizzahut","pezzos","mosburger","dominos","burgerjoint","canadianpizza"]


var name = prompt("whats your name?");
var str1 = prompt("what is your gender (F/M)");
var str2 = prompt("Are you skinny, skinny fat or fat (1/2/3)");
var str3 = prompt("do you like burger or pizza (1/2)");
var str4;
game();

function countScore(){
	var score = 0;
	if(str1=="F"){
		score--;
	}
	else if(str1=="M"){score++;}
	if(str2==1){
		score++;
	}
	else if(str2==3){score--;}
	if(str3==1){
		score++;
	}
	else if(str3==2){score--;}
	return score;
}

function restart(){
	if (str4 == "Y"){
		str3 = prompt("do you like burger or pizza (1/2)");
		game();
	}
	else if(str4 == "N"){
		alert("End game");
	}
}
function game(){
	if (str1=="F"&str2==1&str3==1){str4 =prompt("Score is "+countScore()+" and you should go "+destination[0]+". Do you want to change preference (Y/N)?");}
	if (str1=="F"&str2==2&str3==1){str4 =prompt("Score is "+countScore()+" and you should go "+destination[1]+". Do you want to change preference (Y/N)?");}
	if (str1=="F"&str2==3&str3==1){str4 =prompt("Score is "+countScore()+" and you should go "+destination[2]+". Do you want to change preference (Y/N)?");}
	if (str1=="F"&str2==1&str3==2){str4 =prompt("Score is "+countScore()+" and you should go "+destination[3]+". Do you want to change preference (Y/N)?");}
	if (str1=="F"&str2==2&str3==2){str4 =prompt("Score is "+countScore()+" and you should go "+destination[4]+". Do you want to change preference (Y/N)?");}
	if (str1=="F"&str2==3&str3==2){str4 =prompt("Score is "+countScore()+" and you should go "+destination[5]+". Do you want to change preference (Y/N)?");}
	if (str1=="M"&str2==1&str3==1){str4 =prompt("Score is "+countScore()+" and you should go "+destination[6]+". Do you want to change preference (Y/N)?");}
	if (str1=="M"&str2==2&str3==1){str4 =prompt("Score is "+countScore()+" and you should go "+destination[7]+". Do you want to change preference (Y/N)?");}
	if (str1=="M"&str2==3&str3==1){str4 =prompt("Score is "+countScore()+" and you should go "+destination[8]+". Do you want to change preference (Y/N)?");}
	if (str1=="M"&str2==1&str3==2){str4 =prompt("Score is "+countScore()+" and you should go "+destination[9]+". Do you want to change preference (Y/N)?");}
	if (str1=="M"&str2==2&str3==2){str4 =prompt("Score is "+countScore()+" and you should go "+destination[10]+". Do you want to change preference (Y/N)?");}
	if (str1=="M"&str2==3&str3==2){str4 =prompt("Score is "+countScore()+" and you should go "+destination[11]+". Do you want to change preference (Y/N)?");}
	restart();
}






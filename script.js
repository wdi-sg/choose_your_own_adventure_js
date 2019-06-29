// updateDay(0); (day to show)
// updateTime(9); (time to show)

// to put choice1 and function test(time) in button 1
// // pushBtn1(choice1 , test, time);

//template:
    // resetPage();
    // updateTime();
    // mainText =
    // secText =

    // choice1 =
    // pushMain();
    // pushSec();
    // pushBtn1();





//------------------------------------CREATE TOWN-------------------------
var createTown = function(){
    console.log("town placeholder");
}


//----------------------------------BEFORE SCHOOL EVENT----------------------
//----------------------------------INITIAL EVENT-----------------
var beforeSchool = function(){
    resetPage();
    updateDay(0); //initial value
    updateTime(9); //initial value
    mainText = `You stand in front of 79 Anson Road with a tough decision to make. You've had a rough night and ${properTime} is way too early for anything. You haven't had breakfast. You're terrible at coding and you know it. After a minute of indecision, you...`;
    choice1 = "Go to class.";
    choice2 = "Skip over to town"
    pushBtn1(choice1, pairWork);
    pushBtn2(choice2, createTown);
    pushMain();
}
//-------------------------------------END SCHOOL EVENT-------------

beforeSchool();
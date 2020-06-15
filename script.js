console.log("hello script js");

/*data types, variables, operators, conditional blocks, 
and accepting user input, create a text-based game 
that allows the user to arrive at
different "destinations" based on 
the inputs they type.
*/


//Ask 3 ques for each path

//7 total desti based on their response

//each ques should have 2 possible responses

let state = 0;
let prompter = document.querySelector("#prompter")
let boxInput = document.querySelector("#input");
let isAboveBud = false; 
let isAir = false;
let isLand = false;
let isOceania = false;
let isAsia =false;
let isSEA = false;
let isAus = false;
let isNZ = false;
let isSyd = false;
let isMelb = false;
let isAuck = false;
let isCCH = false;
let isCHN = false;
let isKOR = false;
let isMsia = false;
let isThai = false;
let isBei = false;
let isSHG = false;
let isSEO = false;
let isBUS = false;
let isKL = false;
let isPNG = false;
let isBKK = false;
let isPKT = false;
let name;





// const BTFInit = (currentInput) => {
//   if( state === 0) {
//     prompter.innerText = `Nice to meet you ${currentInput}. What year would you like to go to? (YYYY)`
//     // boxInput.value = "";
//     state++;
//   } else if(state === 1){
//         let numCurrentInput = parseInt(currentInput);
//         if(numCurrentInput >= 2015){
//           prompter.innerText = `I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)`
//         } 
//         else if(numCurrentInput >= 1985 && numCurrentInput <= 2014){
//           prompter.innerText =`Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?`
//         }
//         else if(numCurrentInput>=1955 && numCurrentInput <= 2014){
//           prompter.innerText =`I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)`
//         }
//         else if(numCurrentInput< 1955){
//           prompter.innerText =`I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)`
//         } else {
//           prompter.innerText = "YYYY out of range"
//         }
//         state++;
//    } else if(state === 2) {
//         if(currentInput === "B") {
//           prompter.innerText = `Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)
//           Stand and fight`
//         } else if(currentInput === "G") {
//           prompter.innerText = `Griff is asking you if you are in, or out. What do you say? (I/O)`
//         } else if(currentInput === "Y") {
//           prompter.innerText =`Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.`
//         } else if(currentInput === "N") {
//           prompter.innerText =`Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.`
//         } else if(currentInput === "S") {
//           prompter.innerText = `Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.`
//         } else if(currentInput === "H") {
//           prompter.innerText = `Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.`
//         } else if(currentInput === "M") {
//           prompter.innerText = `You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.`
//         } else if(currentInput === "T") {
//           prompter.innerText = `Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)`
//         } else {
//           prompter.innerText = `Welcome to the future, ${currentInput}`
//         }
//         state++;
//    } else if (state === 3){
//         if (currentInput === "S"){
//           prompter.innerText = `Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.`
//         } else if(currentInput === "R") {
//           prompter.innerText = `You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.`
//         } else if(currentInput === "I") {
//           prompter.innerText = `Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.`
//         } else if(currentInput === "O") {
//           prompter.innerText = `Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.`
//         } else if(currentInput === "T") {
//           prompter.innerText = `Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.`
//         } else if(currentInput === "L") {
//           prompter.innerText = `Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.`
//         } else {
//           prompter.innerText = "no options found"
//         } 
//         state++;
//    } else {
//      prompter.innerText = "End of Game"
//    }
// }

var inputHappened = function(currentInput){
  console.log( currentInput );
  travelInit(currentInput);
  boxInput.value = "";
  var output = "WOW SOMETHING HAPPENED";
  return output;
};


// const oceania = {
//   aus: {
//       SYD: "sydney",
//       MEL: "melbourne",
//   },
//   nz: {
//       AUC: "auckland",
//       CCH: "christchurch"
//   }
// }

// const asia = {
//   china:{
//       BEI: "beijing",
//       SHG: "shanghai"
//   },
//   korea:{
//       SEO: "seoul",
//       BUS: "busan"
//   }
// }

// const sea = {
//   msia:{
//       KUL: "kl",
//       PNG: "penang"
//   },
//   thai:{
//       BKK: "bangkok",
//       PKT: "phuket"
//   }
// }


const travelInit = (currentInput) =>{
    if( state === 0) {
      name = currentInput;
      prompter.innerText = `Welcome ${name}. Do you want to travel? (Y/N)`
      state++;
      } else if(state === 1){
        if(currentInput === "Y"){
          prompter.innerText = `You have selected Yes. Please advise your budget. Amount:`
          state++
        } else {
          prompter.innerText = `Maybe next time!`
          state = 0;
        } 
    }else if(state === 2){
          let numCurrentInput = parseInt(currentInput);
          if(numCurrentInput >= 5000){
            isAboveBud=true;
            prompter.innerText = `Do you want to travel by Air or Land? (Air / Land) >>ST2`
            state++;
          } else if(numCurrentInput <= 5000){
            prompter.innerText =`Do you want to travel by Air or Land? (Air / Land) >>ST2`
            state++;
          } else {
            prompter.innerText = `Kindly provide a number`
            state=2;
          }
     } else if(state === 3) {
          if(currentInput === "Air" && isAboveBud) {
            isAir=true;
            prompter.innerText = `Which region do you prefer? --> (O)ceania, (A)sia, (S)EA >>ST3.A`
            state++
          } else if(currentInput === "Land" && isAboveBud) {
            isLand=true;
            prompter.innerText = `Which region do you prefer? --> (A)sia, (S)EA >>ST3.L`
            state++
          } else if((currentInput === "Land" || currentInput==="Air") && isAboveBud === false){
            prompter.innerText = `Is SEA fine for you?(Y/N) >>ST3.REGARDLESS BELOW BUDGET`
            state++
          } else {
            prompter.innerText = `Kindly select Air or Land >>ST3`
            state=3;
          }
     } else if (state === 4){
          if (currentInput === "O" && isAir && isAboveBud){
            isOceania=true;
            prompter.innerText = `Which country do you prefer? (AUS/NZ) >>ST4`
            state++
          } else if(currentInput === "A" && isAboveBud) {
            isAsia = true;
            prompter.innerText = `Which country do you prefer? (CHINA/KOREA) >>ST4`
            state++
          } else if(currentInput === "S" || currentInput === "Y") {
            isSEA=true;
            prompter.innerText = `Which country do you prefer? (MSIA/THAI) >>ST4`
            state++
          } else {
                if(isAboveBud === false){
                    prompter.innerText = `Kindly update Budget (Above or Below 5K)`
                    state=2;
                } else if(isAir === false) {
                  prompter.innerText = `Which region do you prefer? --> (A)sia, (S)EA >>ST4.L`
                  state=4;
                }
          } 
        } else if (state === 5){
          if (currentInput === "AUS" && isOceania){
            isAus=true;
            prompter.innerText = `Which state do you prefer? (SYD/MELB) >>ST5`
            state++
          } else if(currentInput === "NZ" && isOceania) {
            isNZ=true;
            prompter.innerText = `Which state do you prefer? (AUCK/CCH) >>ST5`
            state++
          } else if(currentInput === "CHINA" && isAsia) {
            isCHN=true;
            prompter.innerText = `Which state do you prefer? (BEI/SHG) >>ST5`
            state++
          } else if(currentInput === "KOREA" && isAsia) {
            isKOR=true;
            prompter.innerText = `Which state do you prefer? (SEO/BUS) >>ST5`
            state++
          } else if(currentInput === "MSIA" && isSEA) {
            isMsia=true;
            prompter.innerText = `Which state do you prefer? (KL/PNG) >>ST5`
            state++
          } else if(currentInput === "THAI" && isSEA) {
            isThai=true;
            prompter.innerText = `Which state do you prefer? (BKK/PKT) >>ST5`
            state++
          } else {
            prompter.innerText = `Kindly select a country in that region >>ST5`
            state=5;
          } 
        } else if (state === 6){
          if (currentInput === "SYD" || currentInput === "MELB" || currentInput === "AUCK" || currentInput === "CCH" || currentInput === "BEI" || currentInput === "SHG" || currentInput === "SEO" || currentInput === "BUS" || currentInput === "KL" ||currentInput === "PNG"||currentInput === "BKK"||currentInput === "PKT"){          
            prompter.innerText = `Do you prefer Hotel or AirBNB? (H/A)`
            state++
          } else {
            prompter.innerText = `Kindly select a state`
            state=5;
          } 
        } else if ( state=== 7){
          if(currentInput === "H" || currentInput === "A"){
            if(isAus){
                if(isSyd) {
                    prompter.innerText = `Thanks! Checking ${currentInput} in Sydney `
                    state++
                } else if(isMelb) {
                  prompter.innerText = `Thanks! Checking ${currentInput} in Melbourne `
                  state++
              }
            } else if(isNZ) {
                if(isAuck) {
                    prompter.innerText = `Thanks! Checking ${currentInput} in Auckland `
                    state++
                } else if(isCCH) {
                    prompter.innerText = `Thanks! Checking ${currentInput} in Christchurch `
                    state++
                }
            } else if(isCHN) {
                if(isBei) {
                    prompter.innerText = `Thanks! Checking ${currentInput} in Beijing`
                    state++
                } else if(isSHG) {
                    prompter.innerText = `Thanks! Checking ${currentInput} in Shanghai `
                    state++
                }
            } else if(isKOR) {
                if(isSEO) {
                    prompter.innerText = `Thanks! Checking ${currentInput} in Seoul`
                    state++
                } else if(isBUS) {
                    prompter.innerText = `Thanks! Checking ${currentInput} in Busan`
                    state++
                }
            } else if(isMsia) {
                if(isKL) {
                    prompter.innerText = `Thanks! Checking ${currentInput} in KL`
                    state++
                } else if(isPNG) {
                    prompter.innerText = `Thanks! Checking ${currentInput} in PNG `
                    state++
                }
            } else if(isThai) {
                if(isBKK) {
                  prompter.innerText = `Thanks! Checking ${currentInput} in Bangkok`
                  state++
              } else if(isPKT) {
                  prompter.innerText = `Thanks! Checking ${currentInput} in Phuket `
                  state++
              } 
            } 
          } else {
              prompter.innerText = `Sorry, there's only Hotel & Airbnb options. (H/A)`
              state=7;
          }
        } else if(state=== 8) {
          prompter.innerText = `Here are the results, ${name}`
        }
  }



//TRAVEL OR NO?
//--CHECK BUDGET
      //MORE THAN 5000
          //--TRAVEL BY AIR OR LAND
              //AIR
                  //OCEANIA
                          //AUS 
                              //SYD
                                    //HOTEL
                                    //AIRBNB
                              //MELB
                          //NZ
                              //AUCKLAND
                              //CHRISTCHURCH
                  //ASIA
                          //CHINA
                              //BJ
                              //SH
                          //KOREA
                              //SEOUL
                              //BUSAN
                  //SEA
                          //MSIA
                              //KL
                              //PENANG
                          //THAI
                              //BKK
                              //PHUKET
              //LAND 
                  //ASIA
                          //CHINA
                              //BJ
                              //SH
                          //KOREA
                              //SEOUL
                              //BUSAN
                  //SEA
                          //MSIA
                              //KL
                              //PENANG
                          //THAI
                              //BKK
                              //PHUKET
      //LESS THAN 5000
          //TRAVEL BY AIR OR LAND
              //AIR
                  //ASIA
                          //CHINA
                              //BJ
                              //SH
                          //KOREA
                              //SEOUL
                              //BUSAN
                  //SEA
                          //MSIA
                              //KL
                              //PENANG
                          //THAI
                              //BKK
                              //PHUKET
              //LAND 
                  //ASIA
                          //CHINA
                              //BJ
                              //SH
                          //KOREA
                              //SEOUL
                              //BUSAN
                  //SEA
                          //MSIA
                              //KL
                              //PENANG
                          //THAI
                              //BKK
                              //PHUKET











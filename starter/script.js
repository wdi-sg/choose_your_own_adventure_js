// put code here

// Ask user for name
var name = prompt("Enter your name: ");
console.log("Name is = " + name);

// Ask user which country he wish to visit
var country = prompt("Enter the country you wish to visit from the list: Korea/America");
console.log("Country chosen = " + country);

// Switch case based on the country user input
console.log("Entering switch block");
switch (country)
{
  // Country 1
  case "Korea":
    console.log("Entered Korea case");
    var area_of_visit = prompt("Which part of Korea do you intend to visit? NORTH/SOUTH");
    if (area_of_visit === "NORTH"){
      var stay = prompt("How long is your trip? ");
      if (stay <= 10) {
        alert(name + ", I think tt is best to go on a group tour as you can get the most out of it and view the awesome places in North Korea");
      }
      else{
        alert(name + ", I think you will require a VISA becuase you are staying in a foreign country for too long");
      }
    }
    else if (area_of_visit === "SOUTH"){
      var purpose = prompt("Type of trip?  LEISURE/SERIOUS");
      if (purpose === "LEISURE") {
        alert(name + ", I think you should only plan to visit 3 tourist destinations daily");
      }
      else if (purpose === "SERIOUS") {
        alert(name + ", I think you should plan to visit all possible tourist destinations from the east to the west in a circular manner");
      }
    }
  break;

  // Country 2
  case "America":
    console.log("Entered America case");
    var area_of_visit = prompt("Which part of America do you intend to visit? NORTH/SOUTH");
    if (area_of_visit === "NORTH"){
      var have_friends = prompt("Do you have friends over there? YES/NO");
      if (have_friends === "YES"){
        alert(name + ", I think you should ask your friend to give you a tour around North America");
      }
      else if (have_friends === "NO") {
        alert(name + ", I think you should hire a personal tour guide to bring you around North America");
      }
    }
    else if (area_of_visit === "SOUTH"){
      var feeling_lucky = prompt("Are you feeling very lucky now? YES/NO");
      if (feeling_lucky === "YES"){
        alert(name + ", I think you should head down to a casino and gamble to test how good your luck is");
      }
      else if (feeling_lucky === "NO") {
        alert(name + ", I think you should just stick to whatever you have planned for this trip");
      }
    }
    break;

  default:
    alert("Sorry, country does not exist");
}
console.log("Exiting switch block");

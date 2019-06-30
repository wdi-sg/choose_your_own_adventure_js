var startingLocation = places[0].name;
var currentLocation = startingLocation;
displayLocation(currentLocation);
displayRoutes(currentLocation);

console.log(currentLocation);

var locationTravel = function (location){
    currentLocation = location;
    displayLocation(currentLocation);
    displayRoutes(currentLocation);
}
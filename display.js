var displayLocation = function (location) {
    console.log(location);
    document.getElementById('current-location').innerText=`Current Location: ${location}`;
}

var displayRoutes = function(location){
    var locationButtons = document.getElementsByClassName('location-buttons');
    console.log(locationButtons.length);
    for (var i=0;i<locationButtons.length; i++)
    {
        locationButtons[i].style.visibility = 'hidden';
    }
    for (var j=0; j<places.length; j++){
        if (location === places[j].name){
            for (var k=0; k<places[j].adjacentSite.length;k++){
                document.getElementById(places[j].adjacentSite[k]).style.visibility = 'visible';
            }
            break;
        }
    }
}
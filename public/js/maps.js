var google=google
var map
var loadMap = function() {
    console.log("LOAD MAP")
    var myOptions = {
        zoom: 0,
        center: new google.maps.LatLng(0, 0),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"),
    myOptions);

    console.log("START GEO")

    // Check if the browser supports geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(currentPositionCallback);
    }
    else {
        alert('The browser does not support geolocation');
    }
};

function currentPositionCallback(position) {
    console.log("CENTERING MAP")

    // Create a new latlng based on the latitude and longitude from the user's position
    var user_lat_long = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    console.log(user_lat_long);
    
    // Set the center of the map to the user's position and zomm into a more detailed level
    map.setCenter(user_lat_long);
    map.setZoom(15);

}

var addPlace = function() {
    window.alert("Add Place");
};
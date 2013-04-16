var google = google;
var map = null;
var markers = [];

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

    initSearchBox();


};

function initSearchBox() {
    var input = document.getElementById('searchbox');
    var searchBox = new google.maps.places.SearchBox(input, {
        bounds: map.getBounds(),
        autocomplete: true
    });
    searchBox.bindTo('bounds', map);

    // Bind to the search events so that selecting a suggestions does something
    google.maps.event.addListener(searchBox, 'places_changed', function() {
        var places = searchBox.getPlaces();
        
        // Clear all other markers
        // for (var i = 0, marker; marker = markers[i]; i++) {
        //     marker.setMap(null);
        // }

        markers = [];
        var bounds = map.getBounds();
        for (var i = 0, place; place = places[i]; i++) {
            var image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            var marker = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: place.geometry.location
            });

            markers.push(marker);

            // Should resize to inclue all markers
            bounds.extend(place.geometry.location);
        }

        map.fitBounds(bounds);
    });
}

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
document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map
    var map = L.map('map').setView([-36.72478, 174.69387], 13);

    // Define the base map layer
    var baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Define a placeholder variable for the trail
    var trail;

    // Fetch trail coordinates from the server based on the trail name
    var trailName = document.getElementById('map').getAttribute('data-trail');
    fetch('/trail_coordinates/' + trailName)
        .then(function (response) {
            return response.json();
        })
        .then(function (geoJSONData) {
            // Create a GeoJSON layer for the trail and add it to the map
            trail = L.geoJSON(geoJSONData, {
                style: { color: 'red' }, // Customize the trail styling as needed
            }).addTo(map);

            trail.bindPopup('This is the trail.');

            // Create an object to store overlay layers
            var overlayLayers = {
                'Trail': trail, // Add the trail layer
            };

            // Create a layer control and add it to the map
            L.control.layers(null, overlayLayers).addTo(map);
        })
        .catch(function (error) {
            console.error('Error:', error);
            // Handle errors here, e.g., display an error message to the user
        });

    // Create an object to store overlay layers
    var overlayLayers = {
        'Trail': trail, // Add the trail layer (you can hide/show it)
    };

    // Create a layer control and add it to the map
    L.control.layers(null, overlayLayers).addTo(map);

    // Create a marker for the start point
    var marker = L.marker([-36.724962, 174.694168]).addTo(map);
    marker.bindPopup('Start Point/End Point');

    // Add a search control
    var searchControl = L.Control.geocoder({
        position: 'topright',
        defaultMarkGeocode: false,
    }).addTo(map);

    searchControl.on('markgeocode', function (e) {
        var latlng = e.geocode.center;
        map.setView(latlng, 15);
    });

    // Add scale control
    L.control.scale().addTo(map);

    // Customize the map further if needed
    console.log('Map has been initialized.');
    // You can add more layers, controls, and functionality here.
});

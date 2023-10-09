// Define the trail coordinates
var trailCoordinates = [
    [-36.724965, 174.694171], // Start Point
    [-36.725132, 174.693974], 
    [-36.725239, 174.693958], 
    [-36.725313, 174.693770], 
    [-36.725285, 174.693726], 
    [-36.725146, 174.693446], 
    [-36.725290, 174.693347], 
    [-36.725610, 174.693662], 
    [-36.725716, 174.693677], 
    [-36.725909, 174.693548], 
    [-36.727070, 174.693667], 
    [-36.728560, 174.693204], 
    [-36.72891, 174.69131], 
    [-36.72804, 174.69065], 
    [-36.72810, 174.69034], 
    [-36.72875, 174.69033], 
    [-36.72938, 174.68990], 
    [-36.72991, 174.68985], 
    [-36.73018, 174.68950], 
    [-36.73055, 174.68927], 
    [-36.73103, 174.68926], 
    [-36.73175, 174.68876], 
    [-36.73225, 174.68882], 
    [-36.73298, 174.68870], 
    [-36.73388, 174.69168],
    [-36.73295, 174.69246], 
    [-36.73190, 174.69421], 
    [-36.73086, 174.69397], 
    [-36.73060, 174.69354], 
    [-36.72855, 174.69320], 
];

document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map
    var map = L.map('map').setView([-36.72478, 174.69387], 13);

    // Define the base map layer
    var baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Define the trail polyline
    var trail = L.polyline(trailCoordinates, { color: 'red' }).addTo(map);
    trail.bindPopup('This is the trail.');

    // Create an object to store overlay layers
    var overlayLayers = {
        'Trail': trail, // Add the trail layer
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

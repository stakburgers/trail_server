document.addEventListener("DOMContentLoaded", function () {
    // Function to set up a trail with given coordinates
    function setupTrail(map, trailCoordinates) {
        // Define the trail polyline
        var trail = L.polyline(trailCoordinates, { color: 'red' }).addTo(map);
        trail.bindPopup('This is the trail.');

        // Create a marker for the start point
        var marker = L.marker(trailCoordinates[0]).addTo(map);
        marker.bindPopup('Start Point/End Point');
    }

    // Initialize the map for Albany Trail
    var albanyMap = L.map('albany-map').setView([-36.72478, 174.69387], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(albanyMap);

    // Specify trail coordinates for Albany Trail
    var albanyTrailCoordinates = [
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

    // Create an object to store overlay layers for Albany Trail
    var albanyOverlayLayers = {
        'Albany Trail': L.layerGroup([setupTrail(albanyMap, albanyTrailCoordinates)]),
    };

    // Create a layer control for Albany Trail and add it to the Albany map
    L.control.layers(null, albanyOverlayLayers).addTo(albanyMap);

    // Add a search control to the Albany map
    var searchControl = L.Control.geocoder({
        position: 'topright',
        defaultMarkGeocode: false,
    }).addTo(albanyMap);

    // Add scale controls to the Albany map
    L.control.scale().addTo(albanyMap);

    // Initialize the map for Ambury Trail
    var amburyMap = L.map('ambury-map').setView([-36.94585, 174.76089], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(amburyMap);

    // Specify trail coordinates for Ambury Trail
    var amburyTrailCoordinates = [
        [-36.94585, 174.76089], // Start Point
        [-36.94549, 174.75976],
        [-36.94582, 174.75964],
        [-36.94649, 174.76087],
        [-36.94620, 174.76108],
        [-36.94599, 174.76081],
        [-36.94585, 174.76089],
    ];

    // Create an object to store overlay layers for Ambury Trail
    var amburyOverlayLayers = {
        'Ambury Trail': L.layerGroup([setupTrail(amburyMap, amburyTrailCoordinates)]),
    };

    // Create a layer control for Ambury Trail and add it to the Ambury map
    L.control.layers(null, amburyOverlayLayers).addTo(amburyMap);

    // Add a search control to the Ambury map
    var searchControlAmbury = L.Control.geocoder({
        position: 'topright',
        defaultMarkGeocode: false,
    }).addTo(amburyMap);

    // Add scale controls to the Ambury map
    L.control.scale().addTo(amburyMap);

    // Customize the maps further if needed
    console.log('Maps have been initialized.');
    // You can add more layers, controls, and functionality here.
});

   
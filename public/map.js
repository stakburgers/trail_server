// map.js

// Create a map and set its view to specific coordinates and zoom level
var map = L.map('map').setView([-36.72478, 174.69387], 13);

// Add a tile layer (OpenStreetMap in this case)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


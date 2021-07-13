// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([39.0997, -94.5786], 4.4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Coordinates for each point to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];


// // Create a polyline using the line coordinates and make the line black.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

//Skill Drill:
let line = [
  [37.7749, -122.4194],
  [30.2672, -97.7431],
  [43.6532, -79.3832],
  [40.6413, -73.7781]
  
];

L.polyline(line, {
  color: "blue",
  dashArray: '7, 7',
  weight: '4',
  opacity: '0.5'
}).addTo(map);
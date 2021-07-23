// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.0997, -94.5786], 3);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//Replace Marker with circle:
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

 //Skill Drill: Using the Leaflet documentation, create a light-yellow 
 //circle with black lines indicating a 300-meter radius of
 // Central Los Angeles on a dark map.
//  L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'yellow',
//     radius: 300
//  }).addTo(map);

//Add circle using city marker:
//  L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     radius: 300
//  }).addTo(map);

 //Replace marker variable with an array of locations:
 // An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
  },
  {
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  }
  ];

//Loop through the cities array:
cities.forEach(function(element) {
    console.log(element),
    L.circleMarker(element.location, {
        radius: element.population/150000})
    .bindPopup("<h2>" + element.city + ", " + element.state + "</h2> <hr> <h3>Population " + element.population.toLocaleString() + "</h3>")
    .addTo(map);
});

//Skill Drill:
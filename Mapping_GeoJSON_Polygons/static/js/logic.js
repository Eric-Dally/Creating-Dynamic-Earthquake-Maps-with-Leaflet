// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>")
//   }

// }).addTo(map);


//Skill Drill:
// L.geoJson(sanFranAirport, {
  
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
//   }

// }).addTo(map);

//Edit GeoJSON using the onEachFeature Function: Plus Skill Drill for Pop-up
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2> Airport code: " + feature.properties.faa + 
//     "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
//   }

// }).addTo(map);

//import raw JSON Data from your github:
// Accessing the airport GeoJSON URL
let torontoNeighborhoods = "https://raw.githubusercontent.com/Eric-Dally/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// // Skill Drill: Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {

// //Skill Drill: Trying the onEachFeature function to creat popup markers:
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2> Airport code: " + feature.properties.faa +
//     "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
//     }
//   }).addTo(map);
// })


// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets,
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: satelliteStreets
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//Adding a style parameter:
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}


// //Orginal code:
// Grabbing our GeoJSON data.
d3.json(torontoNeighborhoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3> Airline: " + feature.properties.airline +
      "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3>");
          }
  
  }
    
    ).addTo(map);
  });

//Skill Drill: Edit Edit your L.geoJson() layer to add a popup marker
// that displays all airports' codes and names for both the Street and Dark layers.

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     onEachFeature: function(feature, layer) {
//           console.log(layer);
//           layer.bindPopup("<h2> Airport code: " + feature.properties.faa +
//           "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
//           }
//         }).addTo(map);
//       });

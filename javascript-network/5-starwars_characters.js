#!/usr/bin/node

const request = require('request');

// Check if the correct number of command-line arguments are provided
if (process.argv.length !== 3) {
  console.error('Usage: node 5-starwars_characters.js <Movie ID>');
  process.exit(1);
}

// Get the Movie ID from the command-line argument
const movieId = process.argv[2];

// Define the URL for the Star Wars API
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Function to fetch and print characters for a given movie
function fetchAndPrintCharacters(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('An error occurred:', error);
    } else {
      const data = JSON.parse(body);
      console.log(`Characters in ${data.title}:`);

      // Loop through characters and print their names
      data.characters.forEach((characterUrl) => {
        request(characterUrl, (charError, charResponse, charBody) => {
          if (charError) {
            console.error('An error occurred:', charError);
          } else {
            const characterData = JSON.parse(charBody);
            console.log(characterData.name);
          }
        });
      });
    }
  });
}

// Fetch and print characters for the specified movie
fetchAndPrintCharacters(apiUrl);


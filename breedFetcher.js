// breedFetcher.js
const needle = require("needle");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error, null); // Pass error to callback
      return;
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Breed not found", null);
    }
  });
};

module.exports = { fetchBreedDescription };

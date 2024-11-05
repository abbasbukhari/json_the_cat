const needle = require("needle");

const fetchBreedDescription = (breedName) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (error, response) => {
    if (error) {
      console.error("Error fetching breed data:", error);
      return;
    }

    const data = response.body;
    if (data.length === 0) {
      console.log(`Breed '${breedName}' not found.`);
    } else {
      console.log("Description:", data[0].description);
    }
  });
};

const breedName = process.argv[2];
fetchBreedDescription(breedName);

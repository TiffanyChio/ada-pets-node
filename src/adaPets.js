// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError("Request failed.");
  });
}

const showDetails = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }

  // Fill out as part of Wave 2.
  axios.get(BASE_URL + selectedPet)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`Request failed. Details: ${selectedPet} did not match pet IDs on record.`);
  });
}

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }

  // Fill out as part of Wave 3.
  axios.delete(BASE_URL + selectedPet)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`Failed. Could not remove ${selectedPet} from record. ID did not match pet IDs on record.`);
  });
}

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  axios.post(BASE_URL, petInfo)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`Failed. Could not add pet.`);
  });
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}

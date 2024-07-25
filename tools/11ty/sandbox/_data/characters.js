const axios = require('axios');

module.exports = async () => {
  const result = await axios.get("https://rickandmortyapi.com/api/character");
  const characters = result.data.results;
  return characters;
}
const apiUrl = 'https://api.api-ninjas.com/v1/hobbies?category=';

const axios = require('axios');
const getHobby = async (category) => {
  let url = apiUrl;
  if (category) {
    url = apiUrl + category;
  } else {
    url = apiUrl + 'general';
  }
  const hobbies = await axios.get(url, {
    headers: {
      'X-Api-Key': process.env.APIKEY,
    },
  });
  const h = hobbies.data.hobby;
  return h;
};

module.exports.getHobby = getHobby;

import axios from 'axios';

const API_KEY = 'f4eb1085b70f3edd0b49c42a550cf22b';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = async (query) => {
  const { data } = await axios.get(API_URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });
  return data;
};

export default fetchWeather;

import axios from 'axios';

import { API_KEY_WEATHER } from '../api/keys';
const ROOT_URL_WEATHER = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY_WEATHER}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL_WEATHER}&q=${city},br`;
  // Axios request - Get
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

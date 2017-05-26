import axios from 'axios';

export const FETCH_LOCATION = 'FETCH_LOCATION';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const HISTORY_SELECTED = 'HISTORY_SELECTED';
const API_KEY_GOOGLE = 'AIzaSyDNMmI2f7qIcBnKgV1dYXmi995BY_8zoJM';
const API_KEY_WUNDERGROUND = 'cd8c7ea98a37877f';

export function fetchLocation(city) {
  const urlGoogle = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY_GOOGLE}`;
  const request = axios.get(urlGoogle);
  return {
    type: FETCH_LOCATION,
    payload: request
  };
}

export function fetchWeather(lat, lng) {
  const urlWunder = `https://api.wunderground.com/api/${API_KEY_WUNDERGROUND}/forecast10day/q/${lat},${lng}.json`;
  const request2 = axios.get(urlWunder);
  return {
    type: FETCH_WEATHER,
    payload: request2
  };
}

export function selectHistory(historyEntry) {
  return {
    type: HISTORY_SELECTED,
    payload: historyEntry
  };
}

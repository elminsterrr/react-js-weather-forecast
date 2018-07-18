import axios from 'axios';
import { API_KEY_GOOGLE, API_KEY_WUNDERGROUND } from './secret';

export const FETCH_LOCATION = 'FETCH_LOCATION';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const HISTORY_SELECTED = 'HISTORY_SELECTED';
export const SHOW_INFO = 'SHOW_INFO';

export function fetchLocation(city) {
  const urlGoogle = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY_GOOGLE}`;
  const request = axios.get(urlGoogle);
  return (dispatch) => {
    request.then(({ data: data1 }) => {
      dispatch({ type: FETCH_LOCATION, payload: data1 });
      const lat = data1.results['0'].geometry.location.lat;
      const lng = data1.results['0'].geometry.location.lng;
      const urlWunder = `https://api.wunderground.com/api/${API_KEY_WUNDERGROUND}/forecast10day/q/${lat},${lng}.json`;
      const request2 = axios.get(urlWunder);
      request2.then(({ data: data2 }) => {
        dispatch({ type: FETCH_WEATHER, payload: data2 });
      });
    });
  };
}

export function selectHistory(historyEntry) {
  return {
    type: HISTORY_SELECTED,
    payload: historyEntry,
  };
}

export function showInfo(info) {
  return {
    type: SHOW_INFO,
    payload: info,
  };
}

import { combineReducers } from 'redux';
import LocationReducer from './reducer_location';
import WeatherReducer from './reducer_weather';
import LocationReducerLastSearch from './reducer_location_last_search';
import WeatherReducerLastSearch from './reducer_weather_last_search';
import HistoryReducer from './reducer_history';

const rootReducer = combineReducers({
  location: LocationReducer,
  weather: WeatherReducer,
  locationLastSearch: LocationReducerLastSearch,
  weatherLastSearch: WeatherReducerLastSearch,
  history: HistoryReducer
});

export default rootReducer;

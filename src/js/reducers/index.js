import { combineReducers } from 'redux';
import LocationReducer from './reducer_location';
import WeatherReducer from './reducer_weather';
import LocationReducerLastSearch from './reducer_location_last_search';
import WeatherReducerLastSearch from './reducer_weather_last_search';
import HistoryReducer from './reducer_history';
import ShowInfo from './reducer_show_info';

const rootReducer = combineReducers({
  location: LocationReducer,
  weather: WeatherReducer,
  locationLastSearch: LocationReducerLastSearch,
  weatherLastSearch: WeatherReducerLastSearch,
  history: HistoryReducer,
  showInfo: ShowInfo,
});

export default rootReducer;

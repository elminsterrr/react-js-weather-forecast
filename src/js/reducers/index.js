import { combineReducers } from 'redux';
import LocationReducer from './reducer_location';
import WeatherReducer from './reducer_weather';
import HistoryReducer from './reducer_history';
import ShowInfo from './reducer_show_info';

const rootReducer = combineReducers({
  location: LocationReducer,
  weather: WeatherReducer,
  history: HistoryReducer,
  showInfo: ShowInfo,
});

export default rootReducer;

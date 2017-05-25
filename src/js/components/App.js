import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import Location from '../containers/Location';
import WeatherForecast from '../containers/WeatherForecast';
import HistoryName from '../containers/HistoryName';
import HistoryList from '../containers/HistoryList';
import WeatherForecastName from '../containers/WeatherForecastName';
import WeatherForecastFromHistory from '../containers/WeatherForecastFromHistory';

const App = (props) => {
  return (
    <div>
      <SearchBar />
      <Location />
      <WeatherForecast />
      <HistoryName />
      <HistoryList />
      <WeatherForecastName />
      <WeatherForecastFromHistory />
    </div>
  );
};

export default App;

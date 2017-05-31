import React from 'react';
import SearchBar from '../containers/SearchBar';
import Location from '../containers/Location';
import WeatherForecast from '../containers/WeatherForecast';
import HistoryName from '../containers/HistoryName';
import HistoryList from '../containers/HistoryList';

function Home() {
  return (
    <div>
      <SearchBar />
      <Location />
      <WeatherForecast />
      <HistoryName />
      <HistoryList />
    </div>
  );
}

export default Home;

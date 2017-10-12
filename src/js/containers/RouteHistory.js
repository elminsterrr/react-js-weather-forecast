import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WeatherForecastName from './WeatherForecastName';
import WeatherForecastFromHistory from './WeatherForecastFromHistory';
import HistoryName from '../containers/HistoryName';
import HistoryList from '../containers/HistoryList';

class RouteHistory extends Component {
  render() {
    if (this.props.historyFromStore === null) {
      return (
        <div>
          Please return to <Link to="/" >Home page</Link> to load data!
        </div>
      );
    }
    return (
      <div>
        <h1 className="history-heading">HISTORY: </h1>
        <hr />
        <div className="back-button">
          <Link to="/" className="btn btn-info btn-lg back-home">Back To Home</Link>
        </div>
        <WeatherForecastName />
        <WeatherForecastFromHistory />
        <HistoryName />
        <HistoryList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    historyFromStore: state.history,
    locationFromStore: state.location,
  };
}

export default connect(mapStateToProps)(RouteHistory);

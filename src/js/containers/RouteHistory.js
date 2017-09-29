import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WeatherForecastName from './WeatherForecastName';
import WeatherForecastFromHistory from './WeatherForecastFromHistory';
import HistoryName from '../containers/HistoryName';
import HistoryList from '../containers/HistoryList';

class RouteHistory extends Component {
  componentDidMount() {
    if (this.props.historyFromStore !== null) {
      new google.maps.Map(this.refs.map, {
        zoom: 11,
        center: {
          lat: this.props.locationFromStore[this.props.historyFromStore].results['0'].geometry.location.lat,
          lng: this.props.locationFromStore[this.props.historyFromStore].results['0'].geometry.location.lng,
        },
      });
    }
  }

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
        <div className="google-map" ref="map" />
        <hr />
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WeatherForecastName from './WeatherForecastName';
import WeatherForecastFromHistory from './WeatherForecastFromHistory';

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
        <hr />
        <Link to="/" className="btn btn-info btn-lg btn-block back-home">Back To Home</Link><br />
        <WeatherForecastName />
        <div className="google-map" ref="map" />
        <hr />
        <WeatherForecastFromHistory />
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

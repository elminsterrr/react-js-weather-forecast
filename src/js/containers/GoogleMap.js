import React, { Component } from 'react';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 11,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
    this.props.fetchWeather(this.props.lat, this.props.lng);
  }

  render() {
    return (
      <div>
        <hr />
        <div className="google-map" ref="map" />
        <hr />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(GoogleMap);

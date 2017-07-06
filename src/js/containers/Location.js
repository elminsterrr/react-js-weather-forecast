import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './GoogleMap';

class Location extends Component {
  renderLocation() {
    if ((this.props.location.length === 0) || (!this.props.location)) {
      return (
        <div className="welcome">
          <h1>Get a 10-day weather forecast in your favorite cities!</h1>
          <p>Protip: You can enter just city name or city name and country.</p>
        </div>
      );
    }
    const data = _.last(this.props.location);
    const lat = data.results[0].geometry.location.lat;
    const lng = data.results[0].geometry.location.lng;
    const reactUniqueKey = Date.now();
    return (
      <GoogleMap key={reactUniqueKey} lat={lat} lng={lng} />
    );
  }

  render() {
    return (
      <div>
        {this.renderLocation()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { location: state.location };
}

export default connect(mapStateToProps)(Location);

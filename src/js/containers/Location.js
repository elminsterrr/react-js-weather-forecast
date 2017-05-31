import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './GoogleMap';

class Location extends Component {
  renderLocation() {
    const data = this.props.locationLastSearchFromStore;
    if ((data.length === 0) || (!data)) {
      return (
        <div className="welcome">
          <h1>Get a 10-day weather forecast in your favorite cities!</h1>
          <p>Protip: Submit without input to reset application.</p>
        </div>
      );
    }
    const lat = data[0].results[0].geometry.location.lat;
    const lng = data[0].results[0].geometry.location.lng;
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
  return { locationLastSearchFromStore: state.locationLastSearch };
}

export default connect(mapStateToProps)(Location);

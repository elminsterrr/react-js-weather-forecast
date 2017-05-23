import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './GoogleMap';

class Location extends Component {
  renderLocation(data) {
    if ((data.length === 0) || (!data)) {
      return (
        <div className="welcome">
          Get a 10-day weather forecast in your favorite cities!
          <br />
          Tip: Submit without input to reset application.
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
        {this.renderLocation(this.props.locationLastSearchFromStore)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { locationLastSearchFromStore: state.locationLastSearch };
}

export default connect(mapStateToProps)(Location);

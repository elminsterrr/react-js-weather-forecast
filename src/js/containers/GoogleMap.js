import React, { Component } from 'react';
import { connect } from 'react-redux';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 11,
      center: {
        lat: this.props.lat,
        lng: this.props.lng,
      },
    });
  }

  render() {
    const last = this.props.lastSearchFromStore['0'].results['0'].formatted_address;
    return (
      <div>
        <p className="last-search-title">Last searched city:</p>
        <p className="last-search-name">{last}</p>
        <hr />
        <div className="google-map" ref="map" />
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { lastSearchFromStore: state.locationLastSearch };
}

export default connect(mapStateToProps)(GoogleMap);

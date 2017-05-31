import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherForecastName extends Component {
  renderLocationFromHistory(stateArrayPosition) {
    if (stateArrayPosition === null) {
      return (
        <div />
      );
    }
    const name = this
      .props
      .locationFromStore[stateArrayPosition]
      .results[0]
      .formatted_address;
    return (
      <div>
        <hr />
        <h2>{name}</h2>
        <hr />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderLocationFromHistory(this.props.historyFromStore)}
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

export default connect(mapStateToProps)(WeatherForecastName);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartWeather from '../components/ChartWeather'

class HistoryName extends Component {
  renderHistoryName(stateArrayPosition) {
    if (stateArrayPosition.length === 0) {
      return (
        <div></div>
      );
    }
    return (
      <div>
        <hr />
        <p>Choose one city from search history to recall its forecast:</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHistoryName(this.props.weatherFromStore)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherFromStore: state.weather
   };
}

export default connect(mapStateToProps)(HistoryName);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class HistoryName extends Component {
  renderHistoryName() {
    const stateArrayPosition = this.props.weatherFromStore;
    if (stateArrayPosition.length === 0) {
      return (
        <div />
      );
    }
    return (
      <div className="description">
        <hr />
        <p>Choose a city from search history to recall its forecast from local state:</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHistoryName()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weatherFromStore: state.weather };
}

export default connect(mapStateToProps)(HistoryName);

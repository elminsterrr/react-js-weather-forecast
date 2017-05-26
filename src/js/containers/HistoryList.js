import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartHistoryItem from './ChartHistoryItem';

class HistoryList extends Component {
  render() {
    return (
      <ul className="history">
        {this.props.locationFromStore.map((data, index) => {
          if ((data.length === 0) || (!data)) {
            return (
              <ul className="history" />
            );
          }
          const formattedAddress = data.results[0].formatted_address;
          return (
            <ChartHistoryItem
              key={index}
              keyToProps={index}
              formattedAddress={formattedAddress}
            />
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { locationFromStore: state.location };
}

export default connect(mapStateToProps)(HistoryList);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectHistory } from '../actions/index';

class ChartHistoryItem extends Component {
  render() {
    return (
      <li
        className="submit"
        onClick={() => this.props.selectHistoryFromStore(this.props.keyToProps)}
      >
        {this.props.formattedAddress}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHistoryFromStore: selectHistory }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChartHistoryItem);

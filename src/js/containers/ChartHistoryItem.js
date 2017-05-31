import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectHistory } from '../actions/index';

class ChartHistoryItem extends Component {
  render() {
    return (
      <li
        className="submit"
        onClick={() => this.props.selectHistoryFromStore(this.props.keyToProps)}
      >
        <Link to={'/history'}>
          {this.props.formattedAddress}
        </Link>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHistoryFromStore: selectHistory }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChartHistoryItem);

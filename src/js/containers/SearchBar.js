import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocation } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      appStarted: false
     };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    if ((this.state.term === '' ) && (!this.state.appStarted)) {
      return;
    } else if ((this.state.term === '' ) && (this.state.appStarted)) {
      alert('Form was submitted without input! Application will now reset!');
      return;
    } else {
      event.preventDefault();
      this.props.fetchLocation(this.state.term);
      this.setState({ appStarted: true });
      this.setState({ term: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="Enter city name to see weather forecast"
          value={this.state.term}
          onChange={this.handleInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary submit">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLocation }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

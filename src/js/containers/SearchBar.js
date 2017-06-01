import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocation, showInfo } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.term === '') {
      event.preventDefault();
      this.props.showInfo('This field cannot be blank. Please enter a valid city name.');
    } else {
      event.preventDefault();
      this.props.fetchLocation(this.state.term);
      this.props.showInfo('');
      this.setState({ term: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          className="form-control"
          placeholder={this.props.showInfoFromStore}
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

function mapStateToProps(state) {
  return { showInfoFromStore: state.showInfo };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLocation, showInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

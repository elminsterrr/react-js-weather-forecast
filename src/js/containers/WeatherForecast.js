import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartWeather from '../containers/ChartWeather';

class WeatherForecast extends Component {
  renderWeather() {
    if ((this.props.weather.length === 0) || (!this.props.weather)) {
      return (
        <tr className="col-lg-12">
          <th />
        </tr>
      );
    }
    const data = _.last(this.props.weather);
    const tenDaysArray = data.forecast.simpleforecast.forecastday;
    return (
      <ChartWeather tenDaysArray={tenDaysArray} />
    );
  }

  render() {
    return (
      <table className="table-weather">
        <tbody>
          {this.renderWeather()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherForecast);

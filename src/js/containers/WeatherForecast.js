import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartWeather from '../components/ChartWeather';

class WeatherForecast extends Component {
  renderWeather(data) {
    if ((data.length === 0) || (!data)) {
      return (
        <tr className="col-lg-12">
          <th />
        </tr>
      );
    }
    const tenDaysArray = data[0].forecast.simpleforecast.forecastday;
    return (
      <ChartWeather tenDaysArray={tenDaysArray} />
    );
  }

  render() {
    return (
        <table className="table-weather">
          <tbody>
            {this.renderWeather(this.props.weatherLastSearchFromStore)}
          </tbody>
        </table>
    );
  }
}

function mapStateToProps(state) {
  return { weatherLastSearchFromStore: state.weatherLastSearch };
}

export default connect(mapStateToProps)(WeatherForecast);

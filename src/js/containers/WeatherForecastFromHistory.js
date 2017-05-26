import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartWeather from '../components/ChartWeather';

class WeatherForecastFromHistory extends Component {
  renderWeatherFromHistory(storeArrayPosition) {
    if (storeArrayPosition === null) {
      return (
        <tr className="col-lg-12">
          <th />
        </tr>
      );
    }
    const tenDaysArray = this
      .props
      .weatherFromStore[storeArrayPosition]
      .forecast
      .simpleforecast
      .forecastday;
    return (
      <ChartWeather tenDaysArray={tenDaysArray} />
    );
  }

  render() {
    return (
      <table className="table-weather-history">
        <tbody>
          {this.renderWeatherFromHistory(this.props.historyFromStore)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    historyFromStore: state.history,
    weatherFromStore: state.weather
   };
}

export default connect(mapStateToProps)(WeatherForecastFromHistory);

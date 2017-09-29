import React, { Component } from 'react';
import ChartWeatherItem from '../components/ChartWeatherItem';

class ChartWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  buttonsView() {
    return (
      <div>
        <div className="buttons">
          <button className="btn btn-secondary prevB" onClick={this.handlePrev}>Prev 3-days</button>
          <button className="btn btn-secondary nextB" onClick={this.handleNext}>Next 3-days</button>
        </div>
      </div>
    );
  }

  handlePrev() {
    let newPage = this.state.page - 1;
    if (newPage <= 0) {
      newPage = 1;
    }
    this.setState({ page: newPage });
  }

  handleNext() {
    let newPage = this.state.page + 1;
    if (newPage >= 3) {
      newPage = 3;
    }
    this.setState({ page: newPage });
  }


  render() {
    let renderThatData = '';
    const firstThreeDays = this.props.tenDaysArray.slice(0, 3);
    const nextThreeDays = this.props.tenDaysArray.slice(3, 6);
    const lastThreeDays = this.props.tenDaysArray.slice(6, 9);
    if (this.state.page === 1) {
      renderThatData = firstThreeDays;
    }
    if (this.state.page === 2) {
      renderThatData = nextThreeDays;
    }
    if (this.state.page === 3) {
      renderThatData = lastThreeDays;
    }
    const dataForThreeDays = renderThatData.map((oneObject) => {
      const iconUrl = oneObject.icon_url;
      const iconUrlHttps = iconUrl.replace('http://', 'https://');
      return (
        <ChartWeatherItem
          key={oneObject.date.epoch}
          iconLink={iconUrlHttps}
          date={oneObject.date}
          high={oneObject.high.celsius}
          low={oneObject.low.celsius}
          rain={oneObject.qpf_allday.mm}
        />
      );
    });

    return (
      <div>
        {this.buttonsView()}
        <tr className="col-lg-12">
          {dataForThreeDays}
        </tr>
      </div>
    );
  }
}

export default ChartWeather;

import React from 'react';
import ChartWeatherItem from './ChartWeatherItem';

const ChartWeather = (props) => {
  const dataFor10Days = props.tenDaysArray.map((oneElObj) => {
    return (
      <ChartWeatherItem
        key={oneElObj.date.epoch}
        iconLink={oneElObj.icon_url}
        date={oneElObj.date}
        high={oneElObj.high.celsius}
        low={oneElObj.low.celsius}
        rain={oneElObj.qpf_allday.mm}
      />
    );
  });
  return (
    <tr className="col-lg-12">
      {dataFor10Days}
    </tr>
  );
};

export default ChartWeather;

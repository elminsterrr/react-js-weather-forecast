import React from 'react';
import ChartWeatherItem from './ChartWeatherItem';

const ChartWeather = (props) => {
  const dataFor10Days = props.tenDaysArray.map((oneElObj) => {
    const iconUrl = oneElObj.icon_url;
    const iconUrlHttps = iconUrl.replace('http://', 'https://');
    return (
      <ChartWeatherItem
        key={oneElObj.date.epoch}
        iconLink={iconUrlHttps}
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
